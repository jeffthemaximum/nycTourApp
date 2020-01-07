# nycTourApp

![nycTourApp](https://nyc-tour-app.s3.us-east-2.amazonaws.com/pigeon.gif)

## First time local setup
- Install node `12.10.0` on your pooter.
  - Other versions will likely work, but we've only tested with `12.10.0` to date.
  - We recommend using [nvm](https://github.com/nvm-sh/nvm) to install and manage node versions.
- Install [expo](https://expo.io/)
  - In terminal, run:
  ```
  npm install expo-cli --global
  ```
- Install [yarn](https://yarnpkg.com/en/docs/install#mac-stable)
  - In terminal, run:
  ```
  brew install yarn
  ```
- Install tslint
  - There may be a smarter way to do this, but
  - Right now, we recommended installing this globally, with:
  ```
  npm install -g tslint
  ```
- Install dependencies
  - In root of project, run:
  ```
  yarn install
  ```
- Get `config.local.js` file.
  - Ask [Jeff](https://keybase.io/jeffmaxim) for this.
  - Add it to the root of the project.
- Optional: install and setup backend.
  - See [here](https://github.com/jeffthemaximum/nyc_tour_backend).

## To run
- In root of repo, run:
```
expo start
```
- See [here](https://docs.expo.io/versions/latest/workflow/expo-cli/) for additional expo commands and functionality.
