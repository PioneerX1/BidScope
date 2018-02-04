# Empty_React_Project
initial folder and package setup for React web apps, including npm, react, eslint, and webpack libraries and dependencies

To get started building your React app, components, etc., simply change the name "REACT-TEMPLATE" in both files below to match your project name:
1. package.json
2. package-lock.json

To Start your project:
- Make sure all global React packages are loaded (see below)
- install the webpack package: ***npm install webpack@3.4.0 --save-dev***
- npm run start (see other shortcut commands in the package.json file under scripts)
- view in http://localhost:8080

Make sure these commands are used:
1. Project-Level ***These should hopefully not be necessary now as the files already exist in the project***
- npm init
- npm install react@15.5.4 react-dom@15.5.4 —save
- npm install webpack@3.4.0 —save-dev
- npm install babel-core@6.24.1 babel-loader@7.0.0 babel-preset-es2015@6.24.1 babel-preset-react@6.24.1 —save-dev
- npm install prop-types@15.5.10 —save
- npm install webpack-dev-server@2.5.0 --save-dev
- npm install react-hot-loader@3.0.0-beta.7 --save-dev
- npm install html-webpack-plugin@2.29.0 --save-dev
- eslint --init
- npm install eslint-loader --save-
- npm install react-router-dom@4.0.0 --save
- npm install url-loader@0.6.2 --sav-dev
- npm install file-loader@1.1.6 --sav-dev


2. Global
- apm install react (***for Atom IDE only***)
  - If you get a TokenizedBuffer exception everytime you type, uninstall the package and specifically install this version:       ***apm install react@0.16.2***
- npm install webpack@3.4.0 -g
- npm install webpack-dev-server@2.5.0 -g
- npm install eslint -g
- npm install eslint-plugin-react -g
