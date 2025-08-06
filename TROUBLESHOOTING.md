# Instagram Extension Troubleshooting Guide

## Issues Fixed

### 1. Background Script Message Mismatch
**Problem**: Background script was sending `togglePanel` but content script expected `showPanel`
**Fix**: Updated background.js to send `showPanel` message

### 2. Missing Scripting Permission
**Problem**: Background script needed `scripting` permission for fallback injection
**Fix**: Added `scripting` permission to manifest.json

### 3. Panel Toggle Logic
**Problem**: Panel wasn't toggling properly (show/hide)
**Fix**: Updated content script to properly toggle panel visibility

## How to Test the Extension

### Step 1: Load the Extension
1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode" (top right)
3. Click "Load unpacked" and select your extension folder
4. Make sure the extension shows as "Enabled"

### Step 2: Test on Instagram
1. Go to `https://www.instagram.com`
2. Open browser console (F12 → Console tab)
3. Look for these messages:
   - `📱 Instagram Message Assistant loaded!`
   - `✅ Closing Coach loaded on Instagram`
   - `💡 Click the extension icon to show/hide the AI panel`

### Step 3: Test Extension Icon
1. Click the extension icon in the toolbar
2. The AI panel should appear on the right side
3. Click the icon again to hide the panel

## Common Issues and Solutions

### Issue: Extension icon doesn't respond
**Solution**: 
- Check if you're on Instagram (`www.instagram.com`)
- Open browser console and look for error messages
- Try refreshing the Instagram page

### Issue: Panel doesn't appear
**Solution**:
- Check browser console for JavaScript errors
- Make sure all files are loaded (guide.js, content.js, etc.)
- Try clicking the extension icon multiple times

### Issue: Extension shows as "Error" in chrome://extensions/
**Solution**:
- Check manifest.json syntax
- Make sure all referenced files exist
- Look for specific error messages in the extension details

### Issue: Content script not loading
**Solution**:
- Check that `manifest.json` has correct `matches` pattern
- Verify all JS files exist and are readable
- Try reloading the extension

## Debug Steps

1. **Check Extension Status**:
   - Go to `chrome://extensions/`
   - Find your extension
   - Click "Details" to see any errors

2. **Check Console Logs**:
   - Open Instagram
   - Press F12 → Console
   - Look for extension messages

3. **Test on Different Pages**:
   - Try on Instagram home page
   - Try on Instagram direct messages
   - Try on Instagram profile pages

4. **Reload Extension**:
   - Go to `chrome://extensions/`
   - Click the refresh icon on your extension
   - Refresh the Instagram page

## File Structure Check
Make sure you have all these files:
```
ig-closing-coach/
├── manifest.json
├── background.js
├── content.js
├── guide.js
├── guide2.js
├── guide3.js
└── icons/
    ├── icon16.png
    ├── icon32.png
    ├── icon48.png
    └── icon128.png
```

## Version History
- v0.1.0: Fixed message handling and permissions
- Added proper toggle functionality
- Added fallback script injection
- Added debugging logs 