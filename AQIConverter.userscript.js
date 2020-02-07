// ==UserScript==
// @name		AQI to μg/m3 Converter on aqicn.org
// @namespace	AQIConverter-dayvan
// @version		03-02-2020
// @description	Converts the AQI value to μg/m3 for PM2.5 on the aqicn.org website.
// @author		Dayvan
// @match		http://aqicn.org/city/*
// @match		https://aqicn.org/city/*
// @grant		none
// ==/UserScript==

//Set the value on initial script run
setValue();

//Add an interval timer to do the conversion
setInterval(setValue, 60000); //Run every minute (60000 milliseconds)

//Add a click listener on the left hand side panel (the one that contains the AQI Value and graphs). This is in case the above setInterval hasn't yet run after the AQI value has been updated
document.getElementsByClassName("row-fluid")[0].addEventListener("click", function(){
	setValue();
});

function setValue(){
	var aqiValElement = document.getElementById("aqiwgtvalue");
	if(aqiValElement.innerHTML.search("μg") == -1){
		var pm25MicroGramValue = getPM25MicroGramValue(aqiValElement.innerHTML);
		var htmlToAdd = '<span style="font-size:30px">' + aqiValElement.innerHTML + '</span>';
		htmlToAdd += '<br /><span style="font-size:20px">' + pm25MicroGramValue + " μg/m<sup>3</sup></span>";
		htmlToAdd += '<br /><span style="font-size:20px">' + Math.round((pm25MicroGramValue / 25 * 100 )) + " %</span>";
		aqiValElement.innerHTML = htmlToAdd;
	}
}

function getPM25MicroGramValue(aqiValue){
	var I_high;
	var I_low;
	var C_high;
	var C_low;
	var calculatedValue;
	if(aqiValue < 51){
		I_high = 50;
		I_low = 0;
		C_high = 12;
		C_low = 0;
	}
	else if(aqiValue < 101){
		I_high = 100;
		I_low = 51;
		C_high = 35.4;
		C_low = 12.1;
	}
	else if(aqiValue < 151){
		I_high = 150;
		I_low = 101;
		C_high = 55.4;
		C_low = 35.5;
	}
	else if(aqiValue < 201){
		I_high = 200;
		I_low = 151;
		C_high = 150.4;
		C_low = 55.5;
	}
	else if(aqiValue < 301){
		I_high = 300;
		I_low = 201;
		C_high = 250.4;
		C_low = 150.5;
	}
	else if(aqiValue < 401){
		I_high = 400;
		I_low = 301;
		C_high = 350.4;
		C_low = 250.5;
	}
	else if(aqiValue < 501){
		I_high = 500;
		I_low = 401;
		C_high = 500.4;
		C_low = 350.5;
	}
	else{
		return;
	}
	calculatedValue = (aqiValue - I_low + (C_low * (I_high - I_low) / (C_high - C_low))) * (C_high - C_low) / (I_high - I_low);
	return Math.round(calculatedValue * 100) / 100;
}
