# Instagram Message Assistant

A Chrome extension that extracts messages from Instagram Direct conversations. This is a minimal version focused on fetching Instagram messages without any LLM integration.

## Features

- 🔍 **Message Extraction**: Automatically detects and extracts messages from Instagram Direct conversations
- 📱 **Instagram-Specific**: Designed specifically for Instagram's DOM structure
- 🎯 **Real-time Updates**: Watches for new messages and updates automatically
- 📊 **Message Display**: Shows extracted messages in a clean, organized interface
- 🔄 **Auto-detection**: Automatically detects when you're on Instagram messages page

## Installation

### 1. Download the Extension Files

Make sure you have all the required files in your project directory:
- `manifest.json`
- `content.js`
- `background.js`
- `icons/` folder with icon files

### 2. Load the Extension in Chrome

1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode" (toggle in the top right)
3. Click "Load unpacked"
4. Select the folder containing your extension files
5. The extension should now appear in your extensions list

### 3. Verify Installation

- You should see "Instagram Message Assistant" in your extensions list
- The extension icon should appear in your Chrome toolbar

## Usage

### Basic Usage

1. **Navigate to Instagram**: Go to `https://www.instagram.com/direct/inbox/`
2. **Open a Conversation**: Click on any conversation to open it
3. **Activate the Extension**: Click the extension icon in your Chrome toolbar
4. **Extract Messages**: Click "Extract Messages" in the panel that appears
5. **View Results**: The extracted messages will be displayed in the panel

### Features

- **Message Analysis**: See total message count, your messages vs. others
- **Message Details**: View sender, timestamp, and message content
- **Draggable Panel**: Move the panel around the screen as needed
- **Clean Interface**: Instagram-themed colors and modern design

## How It Works

The extension works by:

1. **Detecting Instagram Pages**: Automatically loads on Instagram domains
2. **Finding Message Elements**: Uses Instagram-specific DOM selectors to locate messages
3. **Extracting Content**: Pulls message text, sender info, and timestamps
4. **Normalizing Data**: Converts Instagram's format into a consistent structure
5. **Displaying Results**: Shows messages in an organized, readable format

## Message Extraction Logic

The extension looks for:
- Message containers with IDs starting with `mid.`
- Sender information in `h6` elements
- Message text in elements with `dir="auto"`
- Timestamps in `h5 span` elements

## Troubleshooting

### Extension Not Working?

1. **Check Console**: Open Developer Tools (F12) and look for error messages
2. **Verify URL**: Make sure you're on `instagram.com`
3. **Refresh Page**: Try refreshing the Instagram page
4. **Reload Extension**: Go to `chrome://extensions/` and click the refresh icon

### No Messages Found?

1. **Wait for Loading**: Make sure the conversation has fully loaded
2. **Scroll Up**: Try scrolling up in the conversation to load more messages
3. **Check Conversation**: Ensure you're in an actual conversation, not the inbox list

### Panel Not Appearing?

1. **Click Extension Icon**: Make sure you clicked the extension icon in the toolbar
2. **Check Permissions**: Verify the extension has permission to run on Instagram
3. **Refresh Page**: Try refreshing the Instagram page

## Development

### File Structure

```
instagram-message-assistant/
├── manifest.json          # Extension configuration
├── content.js            # Main extension logic
├── background.js         # Background script
├── README.md            # This file
└── icons/               # Extension icons
    ├── icon16.png
    ├── icon32.png
    ├── icon48.png
    └── icon128.png
```

### Key Functions

- `scrapeMessagesWithContext()`: Main message extraction function
- `createSidePanel()`: Creates the UI panel
- `extractMessages()`: Handles the extraction process
- `displayMessages()`: Shows extracted messages

### Customization

You can modify the extension by:
- Changing colors in the CSS styles
- Adjusting message selectors in `scrapeMessagesWithContext()`
- Modifying the panel layout in `createSidePanel()`

## Technical Details

### Permissions

- `activeTab`: Required to interact with Instagram pages
- `https://*.instagram.com/*`: Host permission for Instagram

### Content Script

The content script runs on Instagram pages and:
- Detects when you're on Instagram
- Creates a draggable panel
- Extracts messages using Instagram-specific selectors
- Displays results in a clean interface

### Background Script

The background script handles:
- Extension icon clicks
- Communication with content scripts
- Tab management

## Support

If you encounter issues:
1. Check the browser console for error messages
2. Verify you're on the correct Instagram page
3. Try refreshing the page and extension
4. Ensure all files are properly loaded

## License

This extension is provided as-is for educational and personal use. # AIA-closingbot-ig
