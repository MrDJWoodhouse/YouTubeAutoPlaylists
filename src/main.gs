/*
 * main.gs - Entry point for the script
 */
function updatePlaylistWithNewVideos() {
  Logger.log("Starting playlist update process...");
  
  const sheet = getSheet("Channels");
  const videoSheet = getSheet("Videos");
  const channels = sheet.getDataRange().getValues();
  
  for (let i = 1; i < channels.length; i++) {
    const [channelId, description, playlist] = channels[i];
    if (!channelId || !playlist) {
      Logger.log(`Skipping channel (No ID or Playlist): ${description}`);
      continue;
    }
    
    Logger.log(`Processing channel: ${description} (${channelId})`);
    const recentVideos = getRecentVideos(channelId, 2);
    const existingVideos = getExistingVideos(videoSheet);
    const newVideos = recentVideos.filter(video => !existingVideos.includes(video.id));
    
    if (newVideos.length === 0) {
      Logger.log(`No new videos for channel: ${description}`);
      continue;
    }
    
    const playlistId = getOrCreatePlaylist(playlist);
    addVideosToPlaylist(playlistId, newVideos);
    appendVideosToSheet(videoSheet, newVideos);
  }
  
  Logger.log("Playlist update process completed!");
}
