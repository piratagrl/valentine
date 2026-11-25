function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Nocturne Files: The Crimson Parlor')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
