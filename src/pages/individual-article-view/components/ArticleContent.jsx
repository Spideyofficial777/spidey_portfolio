import React, { useState } from 'react';

import Button from '../../../components/ui/Button';

const ArticleContent = ({ content }) => {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopyCode = async (code, index) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(index);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  const renderContent = (text) => {
    // Split content by code blocks
    const parts = text.split(/```(\w+)?\n([\s\S]*?)```/g);
    const elements = [];

    for (let i = 0; i < parts.length; i++) {
      if (i % 3 === 0) {
        // Regular text content
        if (parts[i].trim()) {
          const paragraphs = parts[i].split('\n\n').filter(p => p.trim());
          paragraphs.forEach((paragraph, pIndex) => {
            elements.push(
              <p key={`p-${i}-${pIndex}`} className="text-foreground leading-relaxed mb-4">
                {paragraph.trim()}
              </p>
            );
          });
        }
      } else if (i % 3 === 2) {
        // Code block
        const language = parts[i - 1] || 'javascript';
        const code = parts[i];
        const codeIndex = Math.floor(i / 3);
        
        elements.push(
          <div key={`code-${i}`} className="relative mb-6">
            <div className="flex items-center justify-between bg-muted/50 px-4 py-2 rounded-t-lg border border-border">
              <span className="text-xs font-medium text-muted-foreground uppercase">
                {language}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleCopyCode(code, codeIndex)}
                iconName={copiedCode === codeIndex ? 'Check' : 'Copy'}
                iconPosition="left"
                iconSize={14}
                className="text-xs"
              >
                {copiedCode === codeIndex ? 'Copied!' : 'Copy'}
              </Button>
            </div>
            <pre className="bg-card border border-t-0 border-border rounded-b-lg p-4 overflow-x-auto">
              <code className="text-sm font-mono text-card-foreground whitespace-pre">
                {code}
              </code>
            </pre>
          </div>
        );
      }
    }

    return elements;
  };

  return (
    <div className="prose prose-lg max-w-none">
      <div className="space-y-4">
        {renderContent(content)}
      </div>
    </div>
  );
};

export default ArticleContent;