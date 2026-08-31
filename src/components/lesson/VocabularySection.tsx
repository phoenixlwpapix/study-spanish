import React from 'react';
import type { VocabularyItem } from '../../types/curriculum';
import { AudioButton } from '../common/AudioButton';
import { Badge } from '../common/Badge';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { useProgress } from '../../context/useProgress';

interface VocabularySectionProps {
  vocabulary: VocabularyItem[];
}

export const VocabularySection: React.FC<VocabularySectionProps> = ({ vocabulary }) => {
  const { isVocabBookmarked, toggleVocabBookmark } = useProgress();

  if (!vocabulary || vocabulary.length === 0) {
    return (
      <div className="p-8 text-center bg-white rounded-3xl border border-slate-200 text-slate-400 font-medium">
        No specific vocabulary list for this lesson.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between px-1">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Lesson Vocabulary ({vocabulary.length} words)
        </span>
        <span className="text-xs text-slate-400">
          Click speaker to listen or bookmark to save
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {vocabulary.map((item) => {
          const bookmarked = isVocabBookmarked(item.id);

          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:shadow-sm transition-shadow flex flex-col justify-between gap-4"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-extrabold text-slate-900">
                      {item.spanish}
                    </h4>
                    {item.gender && (
                      <Badge
                        variant={item.gender === 'masculine' ? 'masculine' : 'feminine'}
                        size="sm"
                      >
                        {item.gender === 'masculine' ? 'Masc' : 'Fem'}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center gap-1">
                    <AudioButton text={item.spanish} size="sm" variant="subtle" />
                    <button
                      type="button"
                      onClick={() => toggleVocabBookmark(item.id)}
                      className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                        bookmarked
                          ? 'text-amber-500 bg-amber-50 hover:bg-amber-100'
                          : 'text-slate-300 hover:text-slate-500 hover:bg-slate-100'
                      }`}
                      title={bookmarked ? 'Remove bookmark' : 'Bookmark word'}
                      aria-label={bookmarked ? `Remove bookmark for ${item.spanish}` : `Bookmark ${item.spanish}`}
                      aria-pressed={bookmarked}
                    >
                      {bookmarked ? (
                        <BookmarkCheck className="w-4 h-4" aria-hidden="true" />
                      ) : (
                        <Bookmark className="w-4 h-4" aria-hidden="true" />
                      )}
                    </button>
                  </div>
                </div>

                <p className="text-sm font-semibold text-indigo-700 mt-1">
                  {item.english}
                </p>

                {item.notes && (
                  <p className="text-xs text-amber-700 bg-amber-50/80 px-2.5 py-1 rounded-lg mt-2 inline-block border border-amber-200/50">
                    ℹ️ {item.notes}
                  </p>
                )}
              </div>

              {item.exampleSentence && (
                <div className="pt-3 border-t border-slate-100 text-xs space-y-1">
                  <div className="flex items-center justify-between text-slate-800 font-semibold">
                    <span>"{item.exampleSentence.spanish}"</span>
                    <AudioButton text={item.exampleSentence.spanish} size="sm" />
                  </div>
                  <div className="text-slate-500">
                    "{item.exampleSentence.english}"
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
