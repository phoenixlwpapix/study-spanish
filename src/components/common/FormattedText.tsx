import React from 'react';

interface FormattedTextProps {
  text: string;
  className?: string;
}

/**
 * Lightweight and safe inline markdown parser for bold (**text**), italic (*text*), and code (`text`)
 */
export const FormattedText: React.FC<FormattedTextProps> = ({ text, className = '' }) => {
  if (!text) return null;

  // Regex to match **bold**, *italic*, and `code`
  const regex = /(\*\*.*?\*\*|\*.*?\*|`.*?`)/g;
  const parts = text.split(regex);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (!part) return null;

        // Bold: **text**
        if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
          const content = part.slice(2, -2);
          return (
            <strong key={index} className="font-bold text-slate-900">
              {content}
            </strong>
          );
        }

        // Code / Keyword: `text`
        if (part.startsWith('`') && part.endsWith('`') && part.length >= 2) {
          const content = part.slice(1, -1);
          return (
            <code key={index} className="font-mono bg-indigo-50 text-indigo-800 border border-indigo-200/60 px-1.5 py-0.5 rounded-md font-semibold text-xs mx-0.5">
              {content}
            </code>
          );
        }

        // Italic: *text*
        if (part.startsWith('*') && part.endsWith('*') && part.length >= 2) {
          const content = part.slice(1, -1);
          return (
            <em key={index} className="italic font-medium text-indigo-800">
              {content}
            </em>
          );
        }

        // Regular plain text
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </span>
  );
};
