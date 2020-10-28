const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            //This is where we override LESS global variables
            modifyVars: { 
              '@font-family': "'IBM Plex Sans', sans-serif",
              //'@primary-color': '#2D870D',
              '@layout-body-background': '#fff',
              //'@highlight-color': '#1890ff',
              //'@text-selection-bg': '#1890ff',
              //'@input-number-handler-hover-bg': '#1890ff',
              //'@input-hover-border-color': '#1890ff',
              //'@radio-button-bg': '#CE4A00',
              '@btn-primary-bg': '#2D870D',
              //'@btn-default-bg': '#CE4A00' 
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};