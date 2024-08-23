// content.js
(() => {
    const turndownService = new TurndownService();

    function downloadMarkdown(content, filename) {
        const blob = new Blob([content], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    function extractChatContent() {
        let content = '';
        const chatElements = document.querySelectorAll("div.font-claude-message, div.font-user-message");
        chatElements.forEach(element => {
            if (element.classList.contains("font-claude-message")) {
                content += "🤖 Claude:\n\n";
                content += turndownService.turndown(element.innerHTML) + '\n\n';
            } else if (element.classList.contains("font-user-message")) {
                content += '<div style="background-color: #333; color: #fff; padding: 10px; border-radius: 10px;">\n';
                content += "🤓 User:\n\n";
                element.childNodes.forEach(child => {
                    if (child.nodeType === Node.ELEMENT_NODE) {
                        if (child.tagName === "P") {
                            content += `${child.textContent.trim()}\n\n`;
                        } else if (child.tagName === "OL") {
                            child.querySelectorAll("li").forEach((li, index) => {
                                content += `${index + 1}. ${li.textContent.trim()}\n`;
                            });
                            content += '\n';
                        } else if (child.tagName === "UL") {
                            child.querySelectorAll("li").forEach(li => {
                                content += `- ${li.textContent.trim()}\n`;
                            });
                            content += '\n';
                        } else if (child.tagName === "PRE") {
                            const codeContent = child.textContent.trim();
                            content += `\`\`\`\n${codeContent}\n\`\`\`\n\n`;
                        }
                    }
                });
                content += '</div>\n<div>&nbsp;</div>\n\n';
            }
        });
        return content;
    }

    function exportChatToMarkdown() {
        const content = extractChatContent();
        const filename = 'chat_conversation.md';
        downloadMarkdown(content, filename);
    }

    exportChatToMarkdown();
})();