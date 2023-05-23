window.addEventListener("message", function (msg) {
  if ((msg.data.command = "docData")) {
    docx.renderAsync(msg.data.data, document.getElementById("container"), null, msg.data.config).then((x) => console.log("docx: finished"));
  }
});
