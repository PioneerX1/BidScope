#!/bin/bash
echo "__________________________"
echo "**** npm init ****"
echo "__________________________"
npm init
echo "__________________________"
echo "**** installing dependencies ****"
echo "__________________________"
npm install react@15.5.4 react-dom@15.5.4 —-save
npm install webpack@3.4.0 —-save-dev
npm install babel-core@6.24.1 babel-loader@7.0.0 babel-preset-es2015@6.24.1 babel-preset-react@6.24.1 -—save-dev
npm install prop-types@15.5.10 —-save
npm install webpack-dev-server@2.5.0 --save-dev
npm install react-hot-loader@3.0.0-beta.7 --save-dev
npm install html-webpack-plugin@2.29.0 --save-dev
eslint --init
npm install eslint-loader --save
npm install react-router-dom@4.0.0 --save
npm install url-loader@0.6.2 --save-dev
npm install file-loader@1.1.6 --save-dev
npm install uuid@3.2.1
echo "__________________________"
echo "**** React setup complete ****"
echo "__________________________"

#command line type $: bash kickstart-react.sh
