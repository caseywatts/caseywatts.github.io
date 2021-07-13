function tableObjectFromGoogleSheets(sheetID, sheetPageNumber) {
  // var urlForSheetJSON = `https://spreadsheets.google.com/feeds/cells/${sheetID}/${sheetPageNumber}/public/full?alt=json`;
  var urlForSheetJSON2 = `https://spreadsheets.google.com/feeds/list/${sheetID}/${sheetPageNumber}/public/values?alt=json`;

  return fetch(urlForSheetJSON2)
    .then((response) => response.json())
    .then((googleSheetsJSON) => {
      return {
        table: parseData(googleSheetsJSON),
        spreadsheetLoadedTime: spreadsheetLastLoadedTime(googleSheetsJSON),
        validColumns: validColumns(googleSheetsJSON)
      }
    });

  // parsing function from https://benborgers.com/posts/google-sheets-json
  function parseData(json) {
    const data = []; /* this array will eventually be populated with the contents of the spreadsheet's rows */

    const rows = json.feed.entry;

    for (const row of rows) {
      const formattedRow = {};

      for (const key in row) {
        if (key.startsWith("gsx$")) {
          /* The actual row names from your spreadsheet
           * are formatted like "gsx$title".
           * Therefore, we need to find keys in this object
           * that start with "gsx$", and then strip that
           * out to get the actual row name
           */

          formattedRow[key.replace("gsx$", "")] = row[key].$t;
        }
      }
      data.push(formattedRow);
    }
    return data;
  }
}


function validColumns(rawData) {
  var removeList = `
id
updated
category
title
content
link
`.split("\n");

  return Object.keys(rawData.feed.entry[0]).filter((entry) => {
    return !removeList.includes(entry);
  }).map((entry) => {
    return entry.replace("gsx$", "");
  })
}

function spreadsheetLastLoadedTime(rawData) {
  var spreadsheetLastLoadedTimeRaw = Date.parse(rawData.feed.updated.$t);
  spreadsheetLastLoadedTime = new Date(spreadsheetLastLoadedTimeRaw).toLocaleString("en-US", { timeZone: "America/New_York" });
  return spreadsheetLastLoadedTime;
}