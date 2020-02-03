# AQIConverter description
A javascript (for Tampermonkey) that converts the AQI value to μg/m<sup>3</sup> for PM2.5 on the aqicn.org website.
## Source of the AQI Converter formula
https://en.wikipedia.org/wiki/Air_quality_index#Computing_the_AQI
# Instalation
## Prerequisites
* Tampermonkey compatible browser: Firefox, Chrome (also any Chromium project), Opera Next and Safari.
* Tampermonkey extension installed on the browser
## Steps
1. Open Tampermonkey Dashboard on the browser.
2. Click the [+] button (top right) to create a new script
3. Copy / paste the contents of the AQIConverter.userscript.js file to the new script window.
4. Save name as AQI Converts
# Usage
1. Go to the http://aqicn.org
2. Click on a monitoring station
3. The μg/m<sup>3</sup> value should be displayed under the AQI Value when the page loads

*Note: The AQI value is periodically updated by the website, but the script runs every minute to do the convertion. 
However, if the μg/m<sup>3</sup> value isn't visible under the AQI value, you can click anywhere on the left hand side panel (the one that contains the AQI Value and graphs) to do the converstion and show the μg/m<sup>3</sup> value.*
