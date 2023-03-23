const vscode = require("vscode");

export default class DocxDoc {
  constructor(uri) {
    this._uri = uri;
  }

  async dispose() {}

  get uri() {
    return this._uri;
  }

  async getFileData() {
    var uri = this.uri;
    return new Promise(function (resolve, reject) {
      vscode.workspace.fs.readFile(uri).then(
        function (ui8a) {
          resolve(ui8a);
        },
        function (err) {
          reject(err);
        }
      );
    });
  }
}
