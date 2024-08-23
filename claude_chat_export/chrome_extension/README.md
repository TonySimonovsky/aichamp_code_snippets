# Claude.ai Chat Exporter Chrome Extension

## Description

The Claude.ai Chat Exporter is a Chrome extension that allows you to easily export your conversations with Claude.ai to a Markdown file. This tool is perfect for saving and sharing your AI interactions in a readable format.

## Features

- One-click export of Claude.ai conversations
- Exports chat in Markdown format
- Preserves conversation structure (user messages and Claude's responses)
- Maintains code blocks and list formatting

## Installation

1. Download or clone this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.

## Usage

1. Navigate to a Claude.ai conversation page.
2. Click on the Claude.ai Chat Exporter extension icon in your Chrome toolbar.
3. In the popup, click the "Export Chat" button.
4. The conversation will be downloaded as a Markdown file named `chat_conversation.md`.

## Files in this Extension

- `manifest.json`: Configuration file for the Chrome extension
- `popup.html`: HTML file for the extension's popup interface
- `popup.js`: JavaScript file handling the popup's functionality
- `content.js`: Script that extracts and formats the chat content
- `turndown.min.js`: Turndown library for converting HTML to Markdown
- `icon48.png` and `icon128.png`: Extension icons

## Development

To modify or enhance this extension:

1. Make changes to the relevant files.
2. If you update `manifest.json`, you may need to reload the extension in Chrome.
3. For any other file changes, just refresh the Claude.ai page to see the updates.

## Troubleshooting

If you encounter any issues:

- Ensure you're on a valid Claude.ai conversation page.
- Check the console for any error messages.
- Make sure all files are present in the extension directory.

## Contributing

Contributions to improve the Claude.ai Chat Exporter are welcome. Please feel free to submit pull requests or open issues to suggest improvements or report bugs.

## License

[MIT License](https://opensource.org/licenses/MIT)

## Disclaimer

This extension is not officially associated with Anthropic or Claude.ai. Use it at your own discretion and always respect the terms of service of Claude.ai.