## RVNBOX Scaffold WebSockets

Used for events, meetups etc to display RVN addresses and notify when donations are received.

## Setup

1. [Install `rvnbox-sdk`](https://www.npmjs.com/package/rvnbox-sdk) globally
    * `npm install rvnbox-sdk --global`
2. Scaffold an WebSockets app w/ RVNBOX web bindings
    * `rvnbox new myApp --scaffold websockets`
3. `cd` in to the newly created app
    * `cd myApp`
4. Install dependencies
    * `npm install`
5. Edit the `src/donations.js` file with images, names and addresses
6. Start the app
    * `npm start`
7. Open a browser to `http://localhost:3000/`
8. Win
