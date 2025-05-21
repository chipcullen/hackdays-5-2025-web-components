# Hackdays May 2025: Web Components

Making a hack day project with web components

## Things I've learned

- Using direct `import` statements in JS works as long as you're using a server
- Cloudfront (in front of CS) messes with CORS if you're not on the right port
- How to use VS Code Live Server with a cert / https
- Web Components
  - Are good for leaf nodes - small bits of the front end.
  - Are totally front end so no back end processing
  - Are `class` based - which, yeah, not my fav
  - Not a good replacement for Player and it's `iframe` because it needs some server power
  - Updating a component both by direct manipulation of an attribute, or through a `CustomEvent`
  - Must be defined with at least one hyphen - `<is-valid>` / `<isnotvalid>`
- Styleable `<select>` elements!

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
