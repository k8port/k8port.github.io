'use client';

import { useEffect } from 'react';

export default function MermaidRenderer() {
    useEffect(() => {
        import('mermaid').then(({ default: mermaid }) => {
            mermaid.initialize({ startOnLoad: false, theme: 'default' });

            const codeBlocks = document.querySelectorAll('pre code.language-mermaid');

            codeBlocks.forEach(block => {
                const pre = block.closest('pre');
                const wrapper = pre?.parentElement;
                const target = wrapper?.classList.contains('content') ? wrapper.parentElement : pre;
                if (!target) return;

                const container = document.createElement('div');
                container.className = 'mermaid';
                // Use textContent to decode HTML entities like &gt; back to >
                container.textContent = block.textContent ?? '';
                target.replaceWith(container);
            });

            mermaid.run({ querySelector: '.mermaid' });
        });
    }, []);

    return null;
}
