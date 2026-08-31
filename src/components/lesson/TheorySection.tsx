import React from 'react';
import type { TheorySection as TheorySectionType } from '../../types/curriculum';
import { AudioButton } from '../common/AudioButton';
import { FormattedText } from '../common/FormattedText';
import { Lightbulb, AlertOctagon, Sparkles } from 'lucide-react';

interface TheorySectionProps {
  sections: TheorySectionType[];
  onStartPractice: () => void;
}

export const TheorySection: React.FC<TheorySectionProps> = ({ sections, onStartPractice }) => {
  return (
    <div className="space-y-8">
      {sections.map((section, idx) => (
        <article 
          key={section.id} 
          className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6"
        >
          {/* Header */}
          <div className="border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Concept {idx + 1}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              {section.title}
            </h2>
            <p className="text-sm text-slate-600 mt-1 font-medium">
              <FormattedText text={section.summary} />
            </p>
          </div>

          {/* Grammar Rule Highlights */}
          {section.ruleHighlights && section.ruleHighlights.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {section.ruleHighlights.map((rule, rIdx) => (
                <div 
                  key={rIdx}
                  className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 shrink-0" />
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-indigo-900 block">
                      {rule.label}
                    </span>
                    <p className="text-xs text-slate-700 mt-0.5 leading-relaxed font-medium">
                      <FormattedText text={rule.description} />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Detailed Paragraph Content */}
          {section.content && section.content.length > 0 && (
            <div className="space-y-3 text-slate-700 text-sm sm:text-base leading-relaxed">
              {section.content.map((p, pIdx) => (
                <p key={pIdx}>
                  <FormattedText text={p} />
                </p>
              ))}
            </div>
          )}

          {/* Formula Callout Banner */}
          {section.formula && (
            <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-2 shadow-inner">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                📐 Grammar Blueprint Formula:
              </span>
              <div className="font-mono text-sm sm:text-base text-slate-100 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
                {section.formula.pattern}
              </div>
              <div className="text-xs text-slate-300">
                <span className="font-bold text-slate-400">Example:</span> {section.formula.example}
              </div>
            </div>
          )}

          {/* Comparison / Reference Table */}
          {section.table && (
            <div className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-100/80 border-b border-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider">
                  <tr>
                    {section.table.headers.map((h, hIdx) => (
                      <th key={hIdx} className="px-4 py-3">
                        <FormattedText text={h} />
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {section.table.rows.map((row, rowIdx) => (
                    <tr key={rowIdx} className="hover:bg-slate-50/60 transition-colors">
                      {row.map((cell, cellIdx) => (
                        <td key={cellIdx} className="px-4 py-3 font-medium text-slate-800">
                          <FormattedText text={cell} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Interactive Audio Examples */}
          {section.examples && section.examples.length > 0 && (
            <div className="space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Pronunciation & Examples:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {section.examples.map((eg, egIdx) => (
                  <div 
                    key={egIdx}
                    className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-3 hover:bg-slate-100/70 transition-colors"
                  >
                    <div>
                      <div className="font-bold text-base text-indigo-950">
                        {eg.spanish}
                      </div>
                      <div className="text-xs font-medium text-slate-600 mt-0.5">
                        {eg.english}
                      </div>
                      {eg.breakdown && (
                        <div className="text-[11px] text-slate-400 mt-0.5">
                          <FormattedText text={eg.breakdown} />
                        </div>
                      )}
                    </div>
                    <AudioButton text={eg.audio || eg.spanish} size="md" variant="primary" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pro Tip Callout */}
          {section.proTip && (
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/70 flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                <strong className="font-bold block text-amber-950 mb-0.5">💡 Pro Tip</strong>
                <FormattedText text={section.proTip} />
              </div>
            </div>
          )}

          {/* Watch Out Callout */}
          {section.watchOut && (
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200/70 flex items-start gap-3">
              <AlertOctagon className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-rose-900 leading-relaxed">
                <strong className="font-bold block text-rose-950 mb-0.5">⚠️ Common Mistake</strong>
                <FormattedText text={section.watchOut} />
              </div>
            </div>
          )}
        </article>
      ))}

      {/* Bottom CTA to test knowledge */}
      <div className="p-8 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-3xl text-white text-center shadow-lg shadow-indigo-600/20 space-y-4">
        <h2 className="text-2xl font-extrabold">Ready to Practice?</h2>
        <p className="text-indigo-100 text-sm max-w-md mx-auto">
          Put what you just learned into practice with interactive challenges, instant feedback, and XP rewards!
        </p>
        <button
          onClick={onStartPractice}
          className="px-8 py-3.5 rounded-2xl bg-white text-indigo-700 font-extrabold text-base hover:bg-indigo-50 shadow-md transition-[color,background-color,transform] active:scale-95 cursor-pointer"
        >
          Start Practice Quiz
        </button>
      </div>
    </div>
  );
};
