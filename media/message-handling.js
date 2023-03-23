window.addEventListener("message", function (msg) {
  if ((msg.data.command = "docData")) {
    docx.renderAsync(msg.data.data, document.getElementById("container")).then((x) => console.log("docx: finished"));
  }
});
