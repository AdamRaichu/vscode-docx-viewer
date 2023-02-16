# Web Extension Template

Use this repo as a template for creating VS Code extensions which are compatible with vscode.dev.

## Setup Instructions

1. Click the green **Use this template** button and select "Create a new repository".
I suggest using `vscode-<extension-identifier>`.
2. Go to the actions tab and select **Initiate Repository**.
3. Fill in the inputs, then run the workflow. This should fill in your package.json.
4. Go to settings/secrets. Set the `AZURE_PAT` secret to an access token with access to *Marketplace (Publish)*. (See [here](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#get-a-personal-access-token) for information on generating an appropriate PAT.) This will allow the workflow publish.yml to automatically publish an updated version of your extension to the marketplace.

Your extension should now be set up!

This repository is set up to use webpack to bundle the code before publishing, so you can import classes and such to make reading files easier and bypass the one file limit for web extension.
(See [here](https://github.com/AdamRaichu/vscode-zip-viewer) for an example of how webpack works.)
