/*
 * spreadsheetHelper.gs - Spreadsheet helper functions
 */
function getSheet(sheetName) {
  Logger.log(`Getting sheet: ${sheetName}`);
  return SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
}

function getExistingVideos(sheet) {
  Logger.log("Fetching existing videos from sheet");
  return sheet.getDataRange().getValues().map(row => row[0]);
}

function appendVideosToSheet(sheet, videos) {
  Logger.log(`Appending ${videos.length} new videos to sheet`);
  const data = videos.map(video => [video.id, video.title]);
  sheet.getRange(sheet.getLastRow() + 1, 1, data.length, data[0].length).setValues(data);
}
