# YouTube Playlist Manager
This Google Apps Script automatically updates YouTube playlists based on new videos from a list of channels.

## Features
- Fetches the latest videos from channels listed in a Google Sheet.
- Compares with existing videos to find new ones.
- Adds new videos to a playlist (specified in the sheet).
- Updates a separate sheet with newly added videos.

## Setup
1. Open Google Sheets and create two sheets:
   - **Channels** (Columns: Channel ID, Description, Playlist Name)
   - **Videos** (Columns: Video ID, Video Title)
2. Copy and paste the script into Google Apps Script.
3. Run `updatePlaylistWithNewVideos` manually or set a time-based trigger.

## Files
- `main.gs`: Entry point for the script.
- `youtubeHelper.gs`: Handles YouTube API interactions.
- `spreadsheetHelper.gs`: Manages spreadsheet operations.

## Notes
- Requires YouTube Data API v3.
- Ensure proper API permissions are granted.
