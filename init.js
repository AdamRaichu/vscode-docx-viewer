const fs = require("fs");
const argv = require("minimist-lite")(process.argv.slice(2));
console.log(argv);

fs.readFile("./package.json", "utf8", (err, package) => {
  if (err) {
    console.error(err);
  }

  // Replace the package.json fields based on input
  const newPackage = package
    .replace("$extension_name", argv.n)
    .replace("$publisher_id", argv.p)
    .replace("$repo", argv.r)
    .replace("$display_name", argv.t)
    .replace("$author_name", argv.a)
    .replace("$description", argv.d);
  fs.writeFileSync("./package.json", newPackage, "utf8");
  fs.unlinkSync("./.github/workflows/init.yml");
  fs.unlinkSync("./README.md");
  fs.unlinkSync("./init.js");
});
