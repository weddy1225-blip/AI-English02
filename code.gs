function doGet() {
  // 讀取名為 'Index' 的 HTML 檔案並顯示成網頁
  return HtmlService.createHtmlOutputFromFile('Index')
      .setTitle('語音出發挑戰')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1'); // 確保手機版面正常縮放
}