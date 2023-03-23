import DocxDoc from "./DocxDoc.js";
const vscode = require("vscode");

export default class DocxEdit {
  static register() {
    return vscode.window.registerCustomEditorProvider(DocxEdit.viewType, new DocxEdit());
  }

  static viewType = "docxViewer.DocxEdit";

  constructor() {}

  async resolveCustomEditor(document, panel, _token) {
    var extUri = vscode.extensions.getExtension("adamraichu.docx-viewer").extensionUri;

    panel.webview.options = {
      enableScripts: true,
    };

    panel.webview.html = `<!DOCTYPE html>
<html>
<head>
  <!--lib uses jszip-->
  <script src="${panel.webview.asWebviewUri(vscode.Uri.joinPath(extUri, "media", "jszip.min.js"))}"></script>
  <script src="${panel.webview.asWebviewUri(vscode.Uri.joinPath(extUri, "media", "docx-preview.min.js"))}"></script>
</head>
<body>
    <div id="container"></div>
</body>
</html>
`;

    document.getFileData().then(function (ui8a) {
      panel.webview.postMessage({ command: "docData", data: ui8a });
    });
  }
}
