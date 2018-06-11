# Workshop Butler Themes

Five default themes from [Workshop Butler](https://workshopbutler.com), used on built-in
workshop pages and by website integrations.

The included themes are:

* Alfred
* Dacota
* Hayes
* Britton
* Gatsby

You can use this repo as a template to create custom themes for your website integrations with Workshop Butler.

## How it works
The build produces two files: `template.[version].js` and `styles.[version].min.css]`. The former one includes a layout for the themes. The latter one, obviously, contains the styles.   

Such division gives you two options for implementing custom themes, based on the default ones:

1. Alter the styles

1. Change both the styles and the layout of the pages


## Set up
1. Clone or fork this repo
2. Login to [Workshop Butler](https://workshopbutler.com), open *Account Settings* -> *API*, activate it and 
copy an API key for your account
3. Retrieve all dependences via `npm i`  

## Launch and Build
`API_KEY=[your API key] npm run watch`

This command launches a webserver on `http://localhost:8080`. 

* Open `http://localhost:8080/schedule.html` for the list of all events
* Open `http://localhost:8080/trainer-list.html` for the list of all trainers

To compile a theme, use `npm run build`. The compiled files are in `dist/` directory.       

## Configuration
`package.json -> version`

Contains a version number, used in `template.[version].js` and `styles.[version].min.css]`

`config.js -> options -> theme`

Name of an active theme. The theme is passed as a configuration parameter to Workshop Butler JS widgets. For default
themes, use these values: `alfred`, `dacota`, `britton`, `gatsby`, `hayes`.

`config.js -> options -> widgetVersion`

Version number of Workshop Butler JS widgets. Based on this parameters, a particular version of the widgets is added
to the HTML pages (for example, `event-list.html`).

## Compatibility

Themes | Workshop Butler JS widgets
-------------- | --------------------------
0.5.1 | 0.5.0 
0.5.0 | 0.5.0 
0.4.0 | 0.3.2 
0.3.2 | 0.3.2
0.3.1 | 0.3.0
0.3.0 | 0.3.0
