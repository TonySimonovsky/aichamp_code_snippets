# Chat Exporter Script

This script extracts chat messages from the Claude.ai interface, formats them in markdown, and downloads the content as a `.md` file. The script distinguishes between user messages and Claude's messages, applying specific styles and emojis to each.

## Why?

As of 2024.08.23, Claude.ai does not offer a built-in feature to share chat conversations, unlike ChatGPT. This script addresses that gap by allowing users to easily extract and share their chat conversations in a well-formatted markdown file.

## Features

- Extracts chat messages from elements with specific classes on the Claude.ai interface.
- Converts HTML content within Claude's messages to markdown.
- Styles user messages inside dark gray rectangles with rounded corners.
- Adds emojis to distinguish between user and Claude's messages.
- Ensures proper formatting with empty lines and additional HTML elements for spacing.

## Usage

1. Open the Claude.ai interface containing the chat messages.
2. Open the browser's developer tools (usually by pressing `F12` or `Ctrl+Shift+I`).
3. Go to the "Console" tab.
4. Copy and paste the script from [claude_chat_export_md.js](https://github.com/TonySimonovsky/aichamp_code_snippets/blob/main/claude_chat_export/claude_chat_export_example.md) into the console and press `Enter`.

5. The script will automatically download a file named `chat_conversation.md` containing the extracted and formatted chat messages.

## Example Output

Here is an example of what the output might look like: [claude_chat_export_example.md](https://github.com/TonySimonovsky/aichamp_code_snippets/blob/main/claude_chat_export/laude_chat_export_md.js)

## License

This script is provided as-is without any warranty. Use it at your own risk.