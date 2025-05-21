# Hackdays May 2025: Web Components

Making a hack day project with web components

## Prerequisites

- `openssl` - `brew install openssl`
- [VS Code "Live Server" extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- CS headers for front end calls (I have saved this as a note)

## Setup

- Follow [these directions](https://graceydev.hashnode.dev/enabling-https-for-live-server-visual-studio-code-extension) for setting up HTTPS for the VS Code Live Server extension
- Create a directory & file like so `.vscode/settings.json`:

```json
{
  "liveServer.settings.root": "/",
  "liveServer.settings.port": 7000,
  "liveServer.settings.https": {
    "enable": true,
    "cert": "/path/to/pem/file",
    "key": "/path/to/key/file",
    "passphrase": "passwordyoumadeup"
  }
}
```

- Make sure `/etc/hosts` has `dev.pbs.org` set
- Create a `cs-headers.js` file at the root of this directory with these contents:

```javascript
const csRequestHeaders = {
  "Content-Type": "application/json",
  Authorization: "*****",
  "X-PBS-PlatformVersion": "*****",
};

export default csRequestHeaders;
```

- enable the Live Server extension, and load <https://dev.pbs.org:7000>
