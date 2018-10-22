'use strict'
//global//
var equirino1;
var jplaurel1;
var mcarthur1;
var ecowestdr1;
var matinaaplaya1;
var ecoland1;
var tulipdr1;
var quimpoblvd1;
var sandawa1;
var quezonblvd1;
var mlquezon1;
var cabaguio1;
var dacudao1;
var pichonst1;
var sanpedro1;
var bonifaciost1;
var ftorrest1;
var mroxas1;

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const https = require('https');
const axios = require('axios');
//var express = require('express')

const app = express()

app.set('port', (process.env.PORT || 5000))

// Allows us to process the data
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// ROUTES

app.get('/', function(req, res) {
	res.send("Hi I am a chatbot")
})

let token = "EAAH6qqxBed4BAAGZBslC99M93kAGvvUIfZBvYsaLtGNvMktOGWm1MnINMjXsAg5IBZAKrEZABa5bk2vHPernY0XcTyUZAi1v2mW9VIflWwA23XJTsdTnWZCb8S2onebEVfRSXJO6uQ8wQPUOy8VZAmUz6Tlrp5gGXpruTCBt5vdogZDZD"

// Facebook 

app.get('/webhook/', function(req, res) {
	if (req.query['hub.verify_token'] === "Henlo") {
		res.send(req.query['hub.challenge'])
	}
	res.send("Wrong token")
})
app.get('/equirino',function(_req, _res){
	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }  	
		//equirino south

		//equirino south intersections	 	
		equirino1 = body.RWS[0].RW[0].DE;
	  	const intc1 = body.RWS[0].RW[0].FIS[0].FI[0].TMC.DE;
	  	const jf1 = body.RWS[0].RW[0].FIS[0].FI[0].CF[0].JF;  	
	  	const intc2 = body.RWS[0].RW[0].FIS[0].FI[1].TMC.DE;
	  	const jf2 = body.RWS[0].RW[0].FIS[0].FI[1].CF[0].JF;
	  	const intc3 = body.RWS[0].RW[0].FIS[0].FI[2].TMC.DE;
	  	const jf3 = body.RWS[0].RW[0].FIS[0].FI[2].CF[0].JF;
	  	const intc4 = body.RWS[0].RW[0].FIS[0].FI[3].TMC.DE;
	  	const jf4 = body.RWS[0].RW[0].FIS[0].FI[3].CF[0].JF;
	  	const intc5 = body.RWS[0].RW[0].FIS[0].FI[4].TMC.DE;
	  	const jf5 = body.RWS[0].RW[0].FIS[0].FI[4].CF[0].JF;
	  	var p = ' ';
 
	  	let analysis1 = "";
	  	if(jf1 == 0 || jf1 < 4){
	  		analysis1 = "For"+p+intc1+p+ "South bound Free flow of traffic";
	  	}else if(jf1 == 4 || jf1 < 8){
	  		analysis1 = "For"+p+intc1+p+ "South bound Sluggish flow of traffic";
	  	}else if(jf1 == 8 || jf1 < 10){
	  		analysis1 = "For"+p+intc1+p+ "South bound Slow flow of traffic";
	  	}else if(jf1 == 10){
	  		analysis1 = "For"+p+intc1+p+ "South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis1 = "Cannot compute"
	  	}

	  	let analysis2 = "";
	  	if(jf2 == 0 || jf2 < 4){
	  		analysis2 = "For"+p+intc2+p+ "South bound Free flow of traffic";
	  	}else if(jf2 == 4 || jf2 < 8){
	  		analysis2 = "For"+p+intc2+p+ "South bound Sluggish flow of traffic";
	  	}else if(jf2 == 8 || jf2 < 10){
	  		analysis2 = "For"+p+intc2+p+ "South bound Slow flow of traffic";
	  	}else if(jf2 == 10){
	  		analysis2 = "For"+p+intc2+p+ "South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis2 = "Cannot compute"
	  	}

	  	let analysis3 = "";
	  	if(jf3 == 0 || jf3 < 4){
	  		analysis3 = "For"+p+intc3+p+ "South bound Free flow of traffic";
	  	}else if(jf3 == 4 || jf3 < 8){
	  		analysis3 = "For"+p+intc3+p+ "South bound Sluggish flow of traffic";
	  	}else if(jf3 == 8 || jf3 < 10){
	  		analysis3 = "For"+p+intc3+p+ "South bound Slow flow of traffic";
	  	}else if(jf3 == 10){
	  		analysis3 = "For"+p+intc3+p+ "South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis3 = "Cannot compute"
	  	}

	  	let analysis4 = "";
	  	if(jf4 == 0 || jf4 < 4){
	  		analysis4 = "For"+p+intc4+p+ "South bound Free flow of traffic";
	  	}else if(jf4 == 4 || jf4 < 8){
	  		analysis4 = "For"+p+intc4+p+ "South bound Sluggish flow of traffic";
	  	}else if(jf4 == 8 || jf4 < 10){
	  		analysis4 = "For"+p+intc4+p+ "South bound Slow flow of traffic";
	  	}else if(jf4 == 10){
	  		analysis4 = "For"+p+intc4+p+ "South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis4 = "Cannot compute"
	  	}

	  	let analysis5 = "";
	  	if(jf5 == 0 || jf5 < 4){
	  		analysis5 = "For"+p+intc5+p+ "South bound Free flow of traffic";
	  	}else if(jf5 == 4 || jf5 < 8){
	  		analysis5 = "For"+p+intc5+p+ "South bound Sluggish flow of traffic";
	  	}else if(jf5 == 8 || jf5 < 10){
	  		analysis5 = "For"+p+intc5+p+ "South bound Slow flow of traffic";
	  	}else if(jf5 == 10){
	  		analysis5 = "For"+p+intc5+p+ "South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis5 = "Cannot compute"
	 	}
		//equirino north

	  	//equirino north intersection
	  	const equirinoo1 = body.RWS[0].RW[1].DE;
	  	const intc6 = body.RWS[0].RW[1].FIS[0].FI[0].TMC.DE;
	  	const jf6 = body.RWS[0].RW[1].FIS[0].FI[0].CF[0].JF;
	  	const intc7 = body.RWS[0].RW[1].FIS[0].FI[1].TMC.DE;
	  	const jf7 = body.RWS[0].RW[1].FIS[0].FI[1].CF[0].JF;
	  	const intc8 = body.RWS[0].RW[1].FIS[0].FI[2].TMC.DE;
	  	const jf8 = body.RWS[0].RW[1].FIS[0].FI[2].CF[0].JF;
	  	const intc9 = body.RWS[0].RW[1].FIS[0].FI[3].TMC.DE;
	  	const jf9 = body.RWS[0].RW[1].FIS[0].FI[3].CF[0].JF;
	  	const intc10 = body.RWS[0].RW[1].FIS[0].FI[4].TMC.DE;
	  	const jf10 = body.RWS[0].RW[1].FIS[0].FI[4].CF[0].JF;
	  	var va  = ' ';
	  	let analysis6 = "";
	  	if(jf6 == 0 || jf6 < 4){
	  		analysis6 = "For"+va+intc6+va+ "North bound lane Free flow of traffic";
	  	}else if(jf6 == 4 || jf6 < 8){
	  		analysis6 = "For"+va+intc6+va+ "North bound lane Sluggish flow of traffic";
	  	}else if(jf6 == 8 || jf6 < 10){
	  		analysis6 = "For"+va+intc6+va+ "North bound lane Slow flow of traffic";
	  	}else if(jf6 == 10){
	  		analysis6 = "For"+va+intc6+va+ "North bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis6 = "Cannot compute"
	  	}
	  	let analysis7 = "";
	  	if(jf7 == 0 || jf7 < 4){
	  		analysis7 = "For"+va+intc7+va+ "North bound lane Free flow of traffic";
	  	}else if(jf7 == 4 || jf7 < 8){
	  		analysis7 = "For"+va+intc7+va+ "North bound lane Sluggish flow of traffic";
	  	}else if(jf7 == 8 || jf7 < 10){
	  		analysis7 = "For"+va+intc7+va+ "North bound lane Slow flow of traffic";
	  	}else if(jf7 == 10){
	  		analysis7 = "For"+va+intc7+va+ "North bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis7 = "Cannot compute"
	  	}
	  	let analysis8 = "";
	  	if(jf8 == 0 || jf8 < 4){
	  		analysis8 = "For"+va+intc8+va+ "North bound lane Free flow of traffic";
	  	}else if(jf8 == 4 || jf8 < 8){
	  		analysis8 = "For"+va+intc8+va+ "North bound lane Sluggish flow of traffic";
	  	}else if(jf8 == 8 || jf8 < 10){
	  		analysis8 = "For"+va+intc8+va+ "North bound lane Slow flow of traffic";
	  	}else if(jf8 == 10){
	  		analysis8 = "For"+va+intc8+va+ "North bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis8 = "Cannot compute"
	  	}
	  	let analysis9 = "";
	  	if(jf9 == 0 || jf9 < 4){
	  		analysis9 = "For"+va+intc9+va+ "North bound lane Free flow of traffic";
	  	}else if(jf9 == 4 || jf9 < 8){
	  		analysis9 = "For"+va+intc9+va+ "North bound lane Sluggish flow of traffic";
	  	}else if(jf9 == 8 || jf9 < 10){
	  		analysis9 = "For"+va+intc9+va+ "North bound lane Slow flow of traffic";
	  	}else if(jf9 == 10){
	  		analysis9 = "For"+va+intc9+va+ "North bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis9 = "Cannot compute"
	  	}
	  	let analysis10 = "";
	  	if(jf10 == 0 || jf10 < 4){
	  		analysis10 = "For"+va+intc10+va+ "North bound lane Free flow of traffic";
	  	}else if(jf10 == 4 || jf10 < 8){
	  		analysis10 = "For"+va+intc10+va+ "North bound lane Sluggish flow of traffic";
	  	}else if(jf10 == 8 || jf10 < 10){
	  		analysis10 = "For"+va+intc10+va+ "North bound lane Slow flow of traffic";
	  	}else if(jf10 == 10){
	  		analysis10 = "For"+va+intc10+va+ "North bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis10 = "Cannot compute"
	  	}
	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({ equirino1: equirino1, intc1: intc1, jf1: jf1,  intc2: intc2, jf2: jf2,  intc3: intc3, jf3: jf3, 
    		intc4: intc4, jf4: jf4,  intc5: intc5, jf5: jf5, analysis1: analysis1, analysis2: analysis2, analysis3:analysis3, analysis4:analysis4, 
    		analysis5:analysis5,equirinoo1: equirinoo1, intc6: intc6, jf6: jf6,  intc7: intc7, jf7: jf7,  intc8: intc8, jf8: jf8, 
    		intc9: intc9, jf9: jf9,  intc10: intc10, jf10: jf10, analysis6: analysis6, analysis7: analysis7, analysis8:analysis8, analysis9:analysis9, 
    		analysis10:analysis10}));	  
	});
});
app.get('/jplaurel',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }
	  	//jp south

	  	//jp south intersections  	
	  	jplaurel1 = body.RWS[0].RW[2].DE;
	  	const intc11 = body.RWS[0].RW[2].FIS[0].FI[0].TMC.DE;
	  	const jf11 = body.RWS[0].RW[2].FIS[0].FI[0].CF[0].JF;	
	  	const intc12 = body.RWS[0].RW[2].FIS[0].FI[1].TMC.DE;
	  	const jf12 = body.RWS[0].RW[2].FIS[0].FI[1].CF[0].JF;
	 	const intc13 = body.RWS[0].RW[2].FIS[0].FI[2].TMC.DE;
	  	const jf13 = body.RWS[0].RW[2].FIS[0].FI[2].CF[0].JF;
	  	const intc14 = body.RWS[0].RW[2].FIS[0].FI[3].TMC.DE;
	  	const jf14 = body.RWS[0].RW[2].FIS[0].FI[3].CF[0].JF;
	  	const intc15 = body.RWS[0].RW[2].FIS[0].FI[4].TMC.DE;
	  	const jf15 = body.RWS[0].RW[2].FIS[0].FI[4].CF[0].JF;
		const intc16 = body.RWS[0].RW[2].FIS[0].FI[5].TMC.DE;
	  	const jf16 = body.RWS[0].RW[2].FIS[0].FI[5].CF[0].JF;
	  	var vva = ' ';
	    let analysis11 = "";
	  	if(jf11 == 0 || jf11 < 4){
	  		analysis11 = "For"+vva+intc11+vva+ "South bound lane Free flow of traffic";
	  	}else if(jf11 == 4 || jf11 < 8){
	  		analysis11 = "For"+vva+intc11+vva+ "South bound Sluggish flow of traffic";
	  	}else if(jf11 == 8 || jf11 < 10){
	  		analysis11 = "For"+vva+intc11+vva+ "South bound Slow flow of traffic";
	  	}else if(jf11 == 10){
	  		analysis11 = "For"+vva+intc11+vva+ "South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis11 = "Cannot compute"
	  	}
	  	let analysis12 = "";
	  	if(jf12 == 0 || jf12 < 4){
	  		analysis12 = "For"+vva+intc12+vva+ "South bound Free flow of traffic";
	  	}else if(jf12 == 4 || jf12 < 8){
	  		analysis12 = "For"+vva+intc12+vva+ "South bound Sluggish flow of traffic";
	  	}else if(jf12 == 8 || jf12 < 10){
	  		analysis12 = "For"+vva+intc12+vva+ "South bound Slow flow of traffic";
	  	}else if(jf12 == 10){
	  		analysis12 = "For"+vva+intc12+vva+ "South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis12 = "Cannot compute"
	  	}
	  	let analysis13 = "";
	  	if(jf13 == 0 || jf13 < 4){
	  		analysis13 = "For"+vva+intc13+vva+ "South bound Free flow of traffic";
	  	}else if(jf13 == 4 || jf13 < 8){
	  		analysis13 = "For"+vva+intc13+vva+ "South bound Sluggish flow of traffic";
	  	}else if(jf13 == 8 || jf13 < 10){
	  		analysis13 = "For"+vva+intc13+vva+ "South bound Slow flow of traffic";
	  	}else if(jf13 == 10){
	  		analysis13 = "For"+vva+intc13+vva+ "South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis13 = "Cannot compute"
	  	}
	  	let analysis14 = "";
	  	if(jf14 == 0 || jf14 < 4){
	  		analysis14 = "For"+vva+intc14+vva+ "South bound Free flow of traffic";
	  	}else if(jf14 == 4 || jf14 < 8){
	  		analysis14 = "For"+vva+intc14+vva+ "South bound Sluggish flow of traffic";
	  	}else if(jf14 == 8 || jf14 < 10){
	  		analysis14 = "For"+vva+intc14+vva+ "South bound Slow flow of traffic";
	  	}else if(jf14 == 10){
	  		analysis14 = "For"+vva+intc14+vva+ "South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis14 = "Cannot compute"
	  	}

	  	let analysis15 = "";
	  	if(jf15 == 0 || jf15 < 4){
	  		analysis15 = "For"+vva+intc15+vva+ "South bound Free flow of traffic";
	  	}else if(jf15 == 4 || jf15 < 8){
	  		analysis15 = "For"+vva+intc15+vva+ "South bound Sluggish flow of traffic";
	  	}else if(jf15 == 8 || jf15 < 10){
	  		analysis15 = "For"+vva+intc15+vva+ "South bound Slow flow of traffic";
	  	}else if(jf15 == 10){
	  		analysis15 = "For"+vva+intc15+vva+ "South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis15 = "Cannot compute"
	  	}
	    let analysis16 = "";
	  	if(jf16 == 0 || jf16 < 4){
	  		analysis16 = "For"+vva+intc16+vva+ "South bound Free flow of traffic";
	  	}else if(jf16 == 4 || jf16 < 8){
	  		analysis16 = "For"+vva+intc16+vva+ "South bound Sluggish flow of traffic";
	  	}else if(jf16 == 8 || jf16 < 10){
	  		analysis16 = "For"+vva+intc16+vva+ "South bound Slow flow of traffic";
	  	}else if(jf16 == 10){
	  		analysis16 = "For"+vva+intc16+vva+ "South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis16 = "Cannot compute"
	  	}
	  	//jp north 

	  	//jp north intersections
	  	const jplaureel1 = body.RWS[0].RW[3].DE;
	  	const intc17 = body.RWS[0].RW[3].FIS[0].FI[0].TMC.DE;
	  	const jf17 = body.RWS[0].RW[3].FIS[0].FI[0].CF[0].JF;
	  	const intc18 = body.RWS[0].RW[3].FIS[0].FI[1].TMC.DE;
	  	const jf18 = body.RWS[0].RW[3].FIS[0].FI[1].CF[0].JF;
	  	const intc19 = body.RWS[0].RW[3].FIS[0].FI[2].TMC.DE;
	  	const jf19 = body.RWS[0].RW[3].FIS[0].FI[2].CF[0].JF;
	  	const intc20 = body.RWS[0].RW[3].FIS[0].FI[3].TMC.DE;
	  	const jf20 = body.RWS[0].RW[3].FIS[0].FI[3].CF[0].JF;
	  	const intc21 = body.RWS[0].RW[3].FIS[0].FI[4].TMC.DE;
	  	const jf21 = body.RWS[0].RW[3].FIS[0].FI[4].CF[0].JF;
	  	const intc22 = body.RWS[0].RW[3].FIS[0].FI[5].TMC.DE;
	  	const jf22 = body.RWS[0].RW[3].FIS[0].FI[5].CF[0].JF;
	  	var pp = ' ';
	  	let analysis17 = "";
	  	if(jf17 == 0 || jf17 < 4){
	  		analysis17 = "For"+pp+intc17+pp+"North bound lane Free flow of traffic";
	  	}else if(jf17 == 4 || jf17 < 8){
	  		analysis17 = "For"+pp+intc17+pp+"North bound lane Free Sluggish flow of traffic";
	  	}else if(jf17 == 8 || jf17 < 10){
	  		analysis17 = "For"+pp+intc17+pp+"North bound lane Free Slow flow of traffic";
	  	}else if(jf17 == 10){
	  		analysis17 = "For"+pp+intc17+pp+"North bound lane Free Traffic stopped or Road closed"
	  	}else{
	  		analysis17 = "Cannot compute"
	  	}
	  	let analysis18 = "";
	  	if(jf18 == 0 || jf18 < 4){
	  		analysis18 = "For"+pp+intc18+pp+"North bound lane Free flow of traffic";
	  	}else if(jf18 == 4 || jf18 < 8){
	  		analysis18 = "For"+pp+intc18+pp+"North bound lane Free Sluggish flow of traffic";
	  	}else if(jf18 == 8 || jf18 < 10){
	  		analysis18 = "For"+pp+intc18+pp+"North bound lane Free Slow flow of traffic";
	  	}else if(jf18 == 10){
	  		analysis18 = "For"+pp+intc18+pp+"North bound lane Free Traffic stopped or Road closed"
	  	}else{
	  		analysis18 = "Cannot compute"
	  	}
	  	let analysis19 = "";
	  	if(jf19 == 0 || jf19 < 4){
	  		analysis19 = "For"+pp+intc19+pp+"North bound lane Free flow of traffic";
	  	}else if(jf19 == 4 || jf19 < 8){
	  		analysis19 = "For"+pp+intc19+pp+"North bound lane Free Sluggish flow of traffic";
	  	}else if(jf19 == 8 || jf19 < 10){
	  		analysis19 = "For"+pp+intc19+pp+"North bound lane Free Slow flow of traffic";
	  	}else if(jf19 == 10){
	  		analysis19 = "For"+pp+intc19+pp+"North bound lane Free Traffic stopped or Road closed"
	  	}else{
	  		analysis19 = "Cannot compute"
	  	}
	  	let analysis20 = "";
	  	if(jf20 == 0 || jf20 < 4){
	  		analysis20 = "For"+pp+intc20+pp+"North bound lane Free flow of traffic";
	  	}else if(jf20 == 4 || jf20 < 8){
	  		analysis20 = "For"+pp+intc20+pp+"North bound lane Free Sluggish flow of traffic";
	  	}else if(jf20 == 8 || jf20 < 10){
	  		analysis20 = "For"+pp+intc20+pp+"North bound lane Free Slow flow of traffic";
	  	}else if(jf20 == 10){
	  		analysis20 = "For"+pp+intc20+pp+"North bound lane Free Traffic stopped or Road closed"
	  	}else{
	  		analysis20 = "Cannot compute"
	  	}
	  	let analysis21 = "";
	  	if(jf21 == 0 || jf21 < 4){
	  		analysis21 = "For"+pp+intc21+pp+"North bound lane Free flow of traffic";
	  	}else if(jf21 == 4 || jf21 < 8){
	  		analysis21 = "For"+pp+intc21+pp+"North bound lane Free Sluggish flow of traffic";
	  	}else if(jf21 == 8 || jf21 < 10){
	  		analysis21 = "For"+pp+intc21+pp+"North bound lane Free Slow flow of traffic";
	  	}else if(jf21 == 10){
	  		analysis21 = "For"+pp+intc21+pp+"North bound lane Free Traffic stopped or Road closed"
	  	}else{
	  		analysis21 = "Cannot compute"
	  	}
	  	let analysis22 = "";
	  	if(jf22 == 0 || jf22 < 4){
	  		analysis22 = "For"+pp+intc22+pp+"North bound lane Free flow of traffic";
	  	}else if(jf22 == 4 || jf22 < 8){
	  		analysis22 = "For"+pp+intc22+pp+"North bound lane Free Sluggish flow of traffic";
	  	}else if(jf22 == 8 || jf22 < 10){
	  		analysis22 = "For"+pp+intc22+pp+"North bound lane Free Slow flow of traffic";
	  	}else if(jf22 == 10){
	  		analysis22 = "For"+pp+intc22+pp+"North bound lane Free Traffic stopped or Road closed"
	  	}else{
	  		analysis22 = "Cannot compute"
	  	}
	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({ jplaurel1: jplaurel1, intc11: intc11, jf11: jf11,  intc12: intc12, jf12: jf12,  intc13: intc13, jf13: jf13,  
    		intc14: intc14, jf14: jf14,  intc15: intc15, jf15: jf15, intc16: intc16, jf16:jf16,analysis11:analysis11, analysis12:analysis12, analysis13:analysis13,
    		analysis14:analysis14, analysis15:analysis15,analysis16:analysis16, jplaureel1: jplaureel1, intc17: intc17, jf17: jf17,  intc18: intc18, jf18:  jf18 ,intc19: intc19, jf19: jf19, intc20: intc20, jf20: jf20,  intc21: intc21, jf21: jf21,
    		intc22:intc22,jf22:jf22, analysis17:analysis17,
		analysis18:analysis18, analysis19:analysis19, analysis20:analysis20,
    		analysis21:analysis21, analysis22:analysis22,}));
	 
	});
});
app.get('/mcarthur',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }
	  	
	  	//south intersections
	  	mcarthur1 = body.RWS[0].RW[4].DE;
	  	const intc23 = body.RWS[0].RW[4].FIS[0].FI[0].TMC.DE;
	  	const jf23 = body.RWS[0].RW[4].FIS[0].FI[0].CF[0].JF;
	  	const intc24 = body.RWS[0].RW[4].FIS[0].FI[1].TMC.DE;
	  	const jf24 = body.RWS[0].RW[4].FIS[0].FI[1].CF[0].JF;
		const intc25 = body.RWS[0].RW[4].FIS[0].FI[2].TMC.DE;
	  	const jf25 = body.RWS[0].RW[4].FIS[0].FI[2].CF[0].JF;
		const intc26 = body.RWS[0].RW[4].FIS[0].FI[3].TMC.DE;
	  	const jf26 = body.RWS[0].RW[4].FIS[0].FI[3].CF[0].JF;
	  	const intc27 = body.RWS[0].RW[4].FIS[0].FI[4].TMC.DE;
	  	const jf27 = body.RWS[0].RW[4].FIS[0].FI[4].CF[0].JF;
	  	const intc28 = body.RWS[0].RW[4].FIS[0].FI[5].TMC.DE;
	  	const jf28 = body.RWS[0].RW[4].FIS[0].FI[5].CF[0].JF;
	  	const intc29 = body.RWS[0].RW[4].FIS[0].FI[6].TMC.DE;
	  	const jf29 = body.RWS[0].RW[4].FIS[0].FI[6].CF[0].JF;
	  	const intc30 = body.RWS[0].RW[4].FIS[0].FI[7].TMC.DE;
	  	const jf30 = body.RWS[0].RW[4].FIS[0].FI[7].CF[0].JF;
	  	const intc31 = body.RWS[0].RW[4].FIS[0].FI[8].TMC.DE;
	  	const jf31 = body.RWS[0].RW[4].FIS[0].FI[8].CF[0].JF;
	  	const intc32 = body.RWS[0].RW[4].FIS[0].FI[9].TMC.DE;
	  	const jf32 = body.RWS[0].RW[4].FIS[0].FI[9].CF[0].JF;
	  	const intc33 = body.RWS[0].RW[4].FIS[0].FI[10].TMC.DE;
	  	const jf33  = body.RWS[0].RW[4].FIS[0].FI[10].CF[0].JF;	
	  	const intc34 = body.RWS[0].RW[4].FIS[0].FI[11].TMC.DE;
	  	const jf34 = body.RWS[0].RW[4].FIS[0].FI[11].CF[0].JF;
	  	const intc35 = body.RWS[0].RW[4].FIS[0].FI[12].TMC.DE;
	  	const jf35 = body.RWS[0].RW[4].FIS[0].FI[12].CF[0].JF;
	  	const intc36 = body.RWS[0].RW[4].FIS[0].FI[13].TMC.DE;
	  	const jf36 = body.RWS[0].RW[4].FIS[0].FI[13].CF[0].JF;
	  	var ya = ' ';
	  	let analysis23 = "";
	  	if(jf23 == 0 || jf23 < 4){
	  		analysis23 = "For"+ya+intc23+ya+"South bound lane Free flow of traffic";
	  	}else if(jf23 == 4 || jf23 < 8){
	  		analysis23 = "For"+ya+intc23+ya+"South bound lane Sluggish flow of traffic";
	  	}else if(jf23 == 8 || jf23 < 10){
	  		analysis23 = "For"+ya+intc23+ya+"South bound lane Slow flow of traffic";
	  	}else if(jf23 == 10){
	  		analysis23 = "For"+ya+intc23+ya+"South bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis23 = "Cannot compute"
	  	}
	  	let analysis24 = "";
	  	if(jf24 == 0 || jf24 < 4){
	  		analysis24 = "For"+ya+intc24+ya+"South bound lane Free flow of traffic";
	  	}else if(jf24 == 4 || jf24 < 8){
	  		analysis24 = "For"+ya+intc24+ya+"South bound lane Sluggish flow of traffic";
	  	}else if(jf24 == 8 || jf24 < 10){
	  		analysis24 = "For"+ya+intc24+ya+"South bound lane Slow flow of traffic";
	  	}else if(jf24 == 10){
	  		analysis24 = "For"+ya+intc24+ya+"South bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis24 = "Cannot compute"
	  	}
	  	let analysis25 = "";
	  	if(jf25 == 0 || jf25 < 4){
	  		analysis25 = "For"+ya+intc25+ya+"South bound lane Free flow of traffic";
	  	}else if(jf25 == 4 || jf25 < 8){
	  		analysis25 = "For"+ya+intc25+ya+"South bound lane Sluggish flow of traffic";
	  	}else if(jf25 == 8 || jf25 < 10){
	  		analysis25 = "For"+ya+intc25+ya+"South bound lane Slow flow of traffic";
	  	}else if(jf25 == 10){
	  		analysis25 = "For"+ya+intc25+ya+"South bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis25 = "Cannot compute"
	  	}
	  	let analysis26 = "";
	  	if(jf26 == 0 || jf26 < 4){
	  		analysis26 = "For"+ya+intc26+ya+"South bound lane Free flow of traffic";
	  	}else if(jf26 == 4 || jf26 < 8){
	  		analysis26 = "For"+ya+intc26+ya+"South bound lane Sluggish flow of traffic";
	  	}else if(jf26 == 8 || jf26 < 10){
	  		analysis26 = "For"+ya+intc26+ya+"South bound lane Slow flow of traffic";
	  	}else if(jf26 == 10){
	  		analysis26 = "For"+ya+intc26+ya+"South bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis26 = "Cannot compute"
	  	}
	  	let analysis27 = "";
	  	if(jf27 == 0 || jf27 < 4){
	  		analysis27 = "For"+ya+intc27+ya+"South bound lane Free flow of traffic";
	  	}else if(jf27 == 4 || jf27 < 8){
	  		analysis27 = "For"+ya+intc27+ya+"South bound lane Sluggish flow of traffic";
	  	}else if(jf27 == 8 || jf27 < 10){
	  		analysis27 = "For"+ya+intc27+ya+"South bound lane Slow flow of traffic";
	  	}else if(jf27 == 10){
	  		analysis27 = "For"+ya+intc27+ya+"South bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis27 = "Cannot compute"
	  	}
	  	let analysis28 = "";
	  	if(jf28 == 0 || jf28 < 4){
	  		analysis28 = "For"+ya+intc28+ya+"South bound lane Free flow of traffic";
	  	}else if(jf28 == 4 || jf28 < 8){
	  		analysis28 = "For"+ya+intc28+ya+"South bound lane Sluggish flow of traffic";
	  	}else if(jf28 == 8 || jf28 < 10){
	  		analysis28 = "For"+ya+intc28+ya+"South bound lane Slow flow of traffic";
	  	}else if(jf28 == 10){
	  		analysis28 = "For"+ya+intc28+ya+"South bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis28 = "Cannot compute"
	  	}
	  	let analysis29 = "";
	  	if(jf29 == 0 || jf29 < 4){
	  		analysis29 = "For"+ya+intc29+ya+"South bound lane Free flow of traffic";
	  	}else if(jf29 == 4 || jf29 < 8){
	  		analysis29 = "For"+ya+intc29+ya+"South bound lane Sluggish flow of traffic";
	  	}else if(jf29 == 8 || jf29 < 10){
	  		analysis29 = "For"+ya+intc29+ya+"South bound lane Slow flow of traffic";
	  	}else if(jf29 == 10){
	  		analysis29 = "For"+ya+intc29+ya+"South bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis29 = "Cannot compute"
	  	}
	  	let analysis30 = "";
	  	if(jf30 == 0 || jf30 < 4){
	  		analysis30 = "For"+ya+intc30+ya+"South bound lane Free flow of traffic";
	  	}else if(jf30 == 4 || jf30 < 8){
	  		analysis30 = "For"+ya+intc30+ya+"South bound lane Sluggish flow of traffic";
	  	}else if(jf30 == 8 || jf30 < 10){
	  		analysis30 = "For"+ya+intc30+ya+"South bound lane Slow flow of traffic";
	  	}else if(jf30 == 10){
	  		analysis30 = "For"+ya+intc30+ya+"South bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis30 = "Cannot compute"
	  	}
	  	let analysis31 = "";
	  	if(jf31 == 0 || jf31 < 4){
	  		analysis31 = "For"+ya+intc31+ya+"South bound lane Free flow of traffic";
	  	}else if(jf31 == 4 || jf31 < 8){
	  		analysis31 = "For"+ya+intc31+ya+"South bound lane Sluggish flow of traffic";
	  	}else if(jf31 == 8 || jf31 < 10){
	  		analysis31 = "For"+ya+intc31+ya+"South bound lane Slow flow of traffic";
	  	}else if(jf31 == 10){
	  		analysis31 = "For"+ya+intc31+ya+"South bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis31 = "Cannot compute"
	  	}
	  	let analysis32 = "";
	  	if(jf32 == 0 || jf32 < 4){
	  		analysis32 = "For"+ya+intc32+ya+"South bound lane Free flow of traffic";
	  	}else if(jf32 == 4 || jf32 < 8){
	  		analysis32 = "For"+ya+intc32+ya+"South bound lane Sluggish flow of traffic";
	  	}else if(jf32 == 8 || jf32 < 10){
	  		analysis32 = "For"+ya+intc32+ya+"South bound lane Slow flow of traffic";
	  	}else if(jf32 == 10){
	  		analysis32 = "For"+ya+intc32+ya+"South bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis31 = "Cannot compute"
	  	}
	  	let analysis33 = "";
	  	if(jf33 == 0 || jf33 < 4){
	  		analysis33 = "For"+ya+intc33+ya+"South bound lane Free flow of traffic";
	  	}else if(jf33 == 4 || jf33 < 8){
	  		analysis33 = "For"+ya+intc33+ya+"South bound lane Sluggish flow of traffic";
	  	}else if(jf33 == 8 || jf33 < 10){
	  		analysis33 = "For"+ya+intc33+ya+"South bound lane Slow flow of traffic";
	  	}else if(jf33 == 10){
	  		analysis33 = "For"+ya+intc33+ya+"South bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis33 = "Cannot compute"
	  	}
	  	let analysis34 = "";
	  	if(jf34 == 0 || jf34 < 4){
	  		analysis34 = "For"+ya+intc34+ya+"South bound lane Free flow of traffic";
	  	}else if(jf34 == 4 || jf34 < 8){
	  		analysis34 = "For"+ya+intc34+ya+"South bound lane Sluggish flow of traffic";
	  	}else if(jf34 == 8 || jf34 < 10){
	  		analysis34 = "For"+ya+intc34+ya+"South bound lane Slow flow of traffic";
	  	}else if(jf34 == 10){
	  		analysis34 = "For"+ya+intc34+ya+"South bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis34 = "Cannot compute"
	  	}
	  	let analysis35 = "";
	  	if(jf35 == 0 || jf35 < 4){
	  		analysis35 = "For"+ya+intc35+ya+"South bound lane Free flow of traffic";
	  	}else if(jf35 == 4 || jf35 < 8){
	  		analysis35 = "For"+ya+intc35+ya+"South bound lane Sluggish flow of traffic";
	  	}else if(jf35 == 8 || jf35 < 10){
	  		analysis35 = "For"+ya+intc35+ya+"South bound lane Slow flow of traffic";
	  	}else if(jf35 == 10){
	  		analysis35 = "For"+ya+intc35+ya+"South bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis35 = "Cannot compute"
	  	}
	  	let analysis36 = "";
	  	if(jf36 == 0 || jf36 < 4){
	  		analysis36 = "For"+ya+intc36+ya+"South bound lane Free flow of traffic";
	  	}else if(jf36 == 4 || jf36 < 8){
	  		analysis36 = "For"+ya+intc36+ya+"South bound lane Sluggish flow of traffic";
	  	}else if(jf36 == 8 || jf36 < 10){
	  		analysis36 = "For"+ya+intc36+ya+"South bound lane Slow flow of traffic";
	  	}else if(jf36 == 10){
	  		analysis36 = "For"+ya+intc36+ya+"South bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis36 = "Cannot compute"
	  	}

	  	//north intersections
	  	const mcarthuur1 = body.RWS[0].RW[5].DE;
	  	const intc37 = body.RWS[0].RW[5].FIS[0].FI[0].TMC.DE;
	  	const jf37 = body.RWS[0].RW[5].FIS[0].FI[0].CF[0].JF;
	  	const intc38 = body.RWS[0].RW[5].FIS[0].FI[1].TMC.DE;
	  	const jf38 = body.RWS[0].RW[5].FIS[0].FI[1].CF[0].JF;
	  	const intc39 = body.RWS[0].RW[5].FIS[0].FI[2].TMC.DE;
	  	const jf39 = body.RWS[0].RW[5].FIS[0].FI[2].CF[0].JF;
	  	const intc40 = body.RWS[0].RW[5].FIS[0].FI[3].TMC.DE;
	  	const jf40 = body.RWS[0].RW[5].FIS[0].FI[3].CF[0].JF;
	  	const intc41 = body.RWS[0].RW[5].FIS[0].FI[4].TMC.DE;
	  	const jf41 = body.RWS[0].RW[5].FIS[0].FI[4].CF[0].JF;
	  	const intc42 = body.RWS[0].RW[5].FIS[0].FI[5].TMC.DE;
	  	const jf42 = body.RWS[0].RW[5].FIS[0].FI[5].CF[0].JF;
	  	const intc43 = body.RWS[0].RW[5].FIS[0].FI[6].TMC.DE;
	  	const jf43 = body.RWS[0].RW[5].FIS[0].FI[6].CF[0].JF;
	  	const intc78 = body.RWS[0].RW[5].FIS[0].FI[7].TMC.DE;
	  	const jf44 = body.RWS[0].RW[5].FIS[0].FI[7].CF[0].JF;
	  	const intc45 = body.RWS[0].RW[5].FIS[0].FI[8].TMC.DE;
	  	const jf45 = body.RWS[0].RW[5].FIS[0].FI[8].CF[0].JF;
	  	const intc46 = body.RWS[0].RW[5].FIS[0].FI[9].TMC.DE;
	  	const jf46 = body.RWS[0].RW[5].FIS[0].FI[9].CF[0].JF;
	  	const intc47 = body.RWS[0].RW[5].FIS[0].FI[10].TMC.DE;
	  	const jf47  = body.RWS[0].RW[5].FIS[0].FI[10].CF[0].JF;	
	  	const intc48 = body.RWS[0].RW[5].FIS[0].FI[11].TMC.DE;
	  	const jf48 = body.RWS[0].RW[5].FIS[0].FI[11].CF[0].JF;
	  	const intc49 = body.RWS[0].RW[5].FIS[0].FI[12].TMC.DE;
	  	const jf49 = body.RWS[0].RW[5].FIS[0].FI[12].CF[0].JF;	
	  	const intc50 = body.RWS[0].RW[5].FIS[0].FI[13].TMC.DE;
	  	const jf50 = body.RWS[0].RW[5].FIS[0].FI[13].CF[0].JF;

		let analysis37 = "";
	  	if(jf37 == 0 || jf37 < 4){
	  		analysis37 = "For"+ya+intc37+ya+"North bound lane Free flow of traffic";
	  	}else if(jf37 == 4 || jf37 < 8){
	  		analysis37 = "For"+ya+intc37+ya+"North bound lane Sluggish flow of traffic";
	  	}else if(jf37 == 8 || jf37 < 10){
	  		analysis37 = "For"+ya+intc37+ya+"North bound lane Slow flow of traffic";
	  	}else if(jf37 == 10){
	  		analysis37 = "For"+ya+intc37+ya+"North bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis37 = "Cannot compute"
	  	}
	  	let analysis38 = "";
	  	if(jf38 == 0 || jf38 < 4){
	  		analysis38 = "For"+ya+intc38+ya+"North bound lane Free flow of traffic";
	  	}else if(jf38 == 4 || jf38 < 8){
	  		analysis38 = "For"+ya+intc38+ya+"North bound lane Sluggish flow of traffic";
	  	}else if(jf38 == 8 || jf38 < 10){
	  		analysis38 = "For"+ya+intc38+ya+"North bound lane Slow flow of traffic";
	  	}else if(jf38 == 10){
	  		analysis38 = "For"+ya+intc38+ya+"North bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis38 = "Cannot compute"
	  	}	
	  	let analysis39 = "";
	  	if(jf39 == 0 || jf39 < 4){
	  		analysis39 = "For"+ya+intc39+ya+"North bound lane Free flow of traffic";
	  	}else if(jf39 == 4 || jf39 < 8){
	  		analysis39 = "For"+ya+intc39+ya+"North bound lane Sluggish flow of traffic";
	  	}else if(jf39 == 8 || jf39 < 10){
	  		analysis39 = "For"+ya+intc39+ya+"North bound lane Slow flow of traffic";
	  	}else if(jf39 == 10){
	  		analysis39 = "For"+ya+intc39+ya+"North bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis39 = "Cannot compute"
	  	}	
	  	let analysis40 = "";
	  	if(jf40 == 0 || jf40 < 4){
	  		analysis40 = "For"+ya+intc40+ya+"North bound lane Free flow of traffic";
	  	}else if(jf40 == 4 || jf40 < 8){
	  		analysis40 = "For"+ya+intc40+ya+"North bound lane Sluggish flow of traffic";
	  	}else if(jf40 == 8 || jf40 < 10){
	  		analysis40 = "For"+ya+intc40+ya+"North bound lane Slow flow of traffic";
	  	}else if(jf40 == 10){
	  		analysis40 = "For"+ya+intc40+ya+"North bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis40 = "Cannot compute"
	  	} 	
	 	let analysis41 = "";
	  	if(jf41 == 0 || jf41 < 4){
	  		analysis41 = "For"+ya+intc41+ya+"North bound lane Free flow of traffic";
	  	}else if(jf41 == 4 || jf41 < 8){
	  		analysis41 = "For"+ya+intc41+ya+"North bound lane Sluggish flow of traffic";
	  	}else if(jf41 == 8 || jf41 < 10){
	  		analysis41 = "For"+ya+intc41+ya+"North bound lane Slow flow of traffic";
	  	}else if(jf41 == 10){
	  		analysis41 = "For"+ya+intc41+ya+"North bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis41 = "Cannot compute"
	  	}
	  	let analysis42 = "";
	  	if(jf42 == 0 || jf42 < 4){
	  		analysis42 = "For"+ya+intc42+ya+"North bound lane Free flow of traffic";
	  	}else if(jf42 == 4 || jf42 < 8){
	  		analysis42 = "For"+ya+intc42+ya+"North bound lane Sluggish flow of traffic";
	  	}else if(jf42 == 8 || jf42 < 10){
	  		analysis42 = "For"+ya+intc42+ya+"North bound lane Slow flow of traffic";
	  	}else if(jf42 == 10){
	  		analysis42 = "For"+ya+intc42+ya+"North bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis42 = "Cannot compute"
	  	}
	  	let analysis43 = "";
	  	if(jf43 == 0 || jf43 < 4){
	  		analysis43 = "For"+ya+intc43+ya+"North bound lane Free flow of traffic";
	  	}else if(jf43 == 4 || jf43 < 8){
	  		analysis43 = "For"+ya+intc43+ya+"North bound lane Sluggish flow of traffic";
	  	}else if(jf43 == 8 || jf43 < 10){
	  		analysis43 = "For"+ya+intc43+ya+"North bound lane Slow flow of traffic";
	  	}else if(jf43 == 10){
	  		analysis43 = "For"+ya+intc43+ya+"North bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis43 = "Cannot compute"
	  	}
	  	let analysis44 = "";
	  	if(jf44 == 0 || jf44 < 4){
	  		analysis44 = "For"+ya+intc78+ya+"North bound lane Free flow of traffic";
	  	}else if(jf44 == 4 || jf44 < 8){
	  		analysis44 = "For"+ya+intc78+ya+"North bound lane Sluggish flow of traffic";
	  	}else if(jf44 == 8 || jf44 < 10){
	  		analysis44 = "For"+ya+intc78+ya+"North bound lane Slow flow of traffic";
	  	}else if(jf44 == 10){
	  		analysis44 = "For"+ya+intc78+ya+"North bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis44 = "Cannot compute"
	  	}
	  	let analysis45 = "";
	  	if(jf45 == 0 || jf45 < 4){
	  		analysis45 = "For"+ya+intc45+ya+"North bound lane Free flow of traffic";
	  	}else if(jf45 == 4 || jf45 < 8){
	  		analysis45 = "For"+ya+intc45+ya+"North bound lane Sluggish flow of traffic";
	  	}else if(jf45 == 8 || jf45 < 10){
	  		analysis45 = "For"+ya+intc45+ya+"North bound lane Slow flow of traffic";
	  	}else if(jf45 == 10){
	  		analysis45 = "For"+ya+intc45+ya+"North bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis45 = "Cannot compute"
	  	}
	  	let analysis46 = "";
	  	if(jf46 == 0 || jf46 < 4){
	  	analysis46 = "For"+ya+intc46+ya+"North bound lane Free flow of traffic";
	  	}else if(jf46 == 4 || jf46 < 8){
	  		analysis46 = "For"+ya+intc46+ya+"North bound lane Sluggish flow of traffic";
	  	}else if(jf46 == 8 || jf46 < 10){
	  		analysis46 = "For"+ya+intc46+ya+"North bound lane Slow flow of traffic";
	  	}else if(jf46 == 10){
	  		analysis46 = "For"+ya+intc46+ya+"North bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis46 = "Cannot compute"
	  	}
	  	let analysis47 = "";
	  	if(jf47 == 0 || jf47 < 4){
	  	analysis47 = "For"+ya+intc47+ya+"North bound lane Free flow of traffic";
	  	}else if(jf47 == 4 || jf47 < 8){
	  		analysis47 = "For"+ya+intc47+ya+"North bound lane Sluggish flow of traffic";
	  	}else if(jf47 == 8 || jf47 < 10){
	  		analysis47 = "For"+ya+intc47+ya+"North bound lane Slow flow of traffic";
	  	}else if(jf47 == 10){
	  		analysis47 = "For"+ya+intc47+ya+"North bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis47 = "Cannot compute"
	  	}
	  	let analysis48 = "";
	  	if(jf48 == 0 || jf48 < 4){
	  	analysis48 = "For"+ya+intc48+ya+"North bound lane Free flow of traffic";
	  	}else if(jf48 == 4 || jf48 < 8){
	  		analysis48 = "For"+ya+intc48+ya+"North bound lane Sluggish flow of traffic";
	  	}else if(jf48 == 8 || jf48 < 10){
	  		analysis48 = "For"+ya+intc48+ya+"North bound lane Slow flow of traffic";
	  	}else if(jf48 == 10){
	  		analysis48 = "For"+ya+intc48+ya+"North bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis48 = "Cannot compute"
	  	}
	  	let analysis49 = "";
	  	if(jf49 == 0 || jf49 < 4){
	  	analysis49 = "For"+ya+intc49+ya+"North bound lane Free flow of traffic";
	  	}else if(jf49 == 4 || jf49 < 8){
	  		analysis49 = "For"+ya+intc49+ya+"North bound lane Sluggish flow of traffic";
	  	}else if(jf49 == 8 || jf49 < 10){
	  		analysis49 = "For"+ya+intc49+ya+"North bound lane Slow flow of traffic";
	  	}else if(jf49 == 10){
	  		analysis49 = "For"+ya+intc49+ya+"North bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis49 = "Cannot compute"
	  	}
		let analysis50 = "";
	  	if(jf50 == 0 || jf50 < 4){
	  	analysis50 = "For"+ya+intc50+ya+"North bound lane Free flow of traffic";
	  	}else if(jf50 == 4 || jf50 < 8){
	  		analysis50 = "For"+ya+intc50+ya+"North bound lane Sluggish flow of traffic";
	  	}else if(jf50 == 8 || jf50 < 10){
	  		analysis50 = "For"+ya+intc50+ya+"North bound lane Slow flow of traffic";
	  	}else if(jf50 == 10){
	  		analysis50 = "For"+ya+intc50+ya+"North bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis50 = "Cannot compute"
	  	}

  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({ mcarthur1: mcarthur1,intc23: intc23, jf23:jf23, intc24: intc24, jf24: jf24, intc25: intc25, jf25: jf25,  intc26: intc26, 
    		jf26: jf26, intc27: intc27, jf27: jf27,  intc28: intc28, jf28: jf28,  intc29: intc29, jf29: jf29,  intc30: intc30, 
    		jf30: jf30,  intc31: intc31, jf31: jf31,  intc32: intc32, jf32: jf32, intc33: intc33, jf33: jf33, 
    		intc34: intc34, jf34: jf34, intc35: intc35, jf35: jf35,  intc36: intc36, jf36: jf36,analysis23: analysis23,
    		analysis24: analysis24, analysis25:analysis25, analysis26:analysis26, analysis27:analysis27, analysis28:analysis28, analysis29:analysis29, analysis30:analysis30,
    		analysis31:analysis31, analysis32:analysis32, analysis33:analysis33, analysis34:analysis34, analysis35:analysis35, analysis36:analysis36, mcarthuur1: mcarthuur1,  
    		intc37: intc37, jf37:jf37, intc38: intc38, jf38: jf38, intc39: intc39, jf39: jf39,  intc40: intc40, 
    		jf40: jf40, intc41: intc41, jf41: jf41,  intc42: intc42, jf42: jf42,  intc43: intc43, jf43: jf43,  intc78: intc78, 
    		jf44: jf44,  intc45: intc45, jf45: jf45,  intc46: intc46, jf46: jf46, intc47: intc47, jf47: jf47, 
    		intc48: intc48, jf48: jf48, intc49: intc49, jf49: jf49,  intc50: intc50, jf50: jf50,  analysis37: analysis37,
    		analysis38: analysis38, analysis39: analysis39, analysis40: analysis40, analysis41: analysis41, 
    		analysis42: analysis42, analysis43: analysis43, analysis44: analysis44, analysis45: analysis45, analysis46: analysis46,
    		analysis47: analysis47, analysis48: analysis48, analysis49: analysis49, analysis50: analysis50 }));
	});
});
app.get('/ecowestdr',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }
	  	//south intersections
	 	ecowestdr1 = body.RWS[0].RW[6].DE;
	  	const intc51 = body.RWS[0].RW[6].FIS[0].FI[0].TMC.DE;
	  	const jf51 = body.RWS[0].RW[6].FIS[0].FI[0].CF[0].JF;
	  	const intc52 = body.RWS[0].RW[6].FIS[0].FI[1].TMC.DE;
	  	const jf52 = body.RWS[0].RW[6].FIS[0].FI[1].CF[0].JF;
	  	var yya = ' ';
	  	let analysis51 = "";
	  	if(jf51 == 0 || jf51 < 4){
	  		analysis51 = "For"+yya+intc51+yya+"South bound lane Free flow of traffic";
	  	}else if(jf51 == 4 || jf51 < 8){
	  		analysis51 = "For"+yya+intc51+yya+"South bound lane Sluggish flow of traffic";
	  	}else if(jf51 == 8 || jf51 < 10){
	  		analysis51 = "For"+yya+intc51+yya+"South bound lane Slow flow of traffic";
	  	}else if(jf51 == 10){
	  		analysis51 = "For"+yya+intc51+yya+"South bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis51 = "Cannot compute"
	  	}
	  	let analysis52 = "";
	  	if(jf52 == 0 || jf52 < 4){
	  	    analysis52 = "For"+yya+intc52+yya+"South bound lane Free flow of traffic";
	  	}else if(jf52 == 4 || jf52 < 8){
	  		analysis52 = "For"+yya+intc52+yya+"South bound lane Sluggish flow of traffic";
	  	}else if(jf52 == 8 || jf52 < 10){
	  		analysis52 = "For"+yya+intc52+yya+"South bound lane Slow flow of traffic";
	  	}else if(jf52 == 10){
	  		analysis52 = "For"+yya+intc52+yya+"South bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis52 = "Cannot compute"
	  	}
	  	//north intersection
	  	const ecowestdrr1 = body.RWS[0].RW[7].DE;
	  	const intc53 = body.RWS[0].RW[7].FIS[0].FI[0].TMC.DE;
	  	const jf53 = body.RWS[0].RW[7].FIS[0].FI[0].CF[0].JF;  	
	  	const intc54 = body.RWS[0].RW[7].FIS[0].FI[1].TMC.DE;
	  	const jf54 = body.RWS[0].RW[7].FIS[0].FI[1].CF[0].JF;
	  	let analysis53 = "";
	  	if(jf53 == 0 || jf53 < 4){
	  		analysis53 = "For"+yya+intc53+yya+"North bound lane Free flow of traffic";
	  	}else if(jf53 == 4 || jf53 < 8){
	  		analysis53 = "For"+yya+intc53+yya+"North bound lane Sluggish flow of traffic";
	  	}else if(jf53 == 8 || jf53 < 10){
	  		analysis53 = "For"+yya+intc53+yya+"North bound lane Slow flow of traffic";
	  	}else if(jf53 == 10){
	  		analysis53 = "For"+yya+intc53+yya+"North bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis53 = "Cannot compute"
	  	}
	  	let analysis54 = "";
	  	if(jf54 == 0 || jf54 < 4){
	  	    analysis54 = "For"+yya+intc54+yya+"North bound lane Free flow of traffic";
	  	}else if(jf54 == 4 || jf54 < 8){
	  		analysis54 = "For"+yya+intc54+yya+"North bound lane Sluggish flow of traffic";
	  	}else if(jf54 == 8 || jf54 < 10){
	  		analysis54 = "For"+yya+intc54+yya+"North bound lane Slow flow of traffic";
	  	}else if(jf54 == 10){
	  		analysis54 = "For"+yya+intc54+yya+"North bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis54 = "Cannot compute"
	  	}  	
	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({ ecowestdr1: ecowestdr1, intc51: intc51, jf51: jf51,  intc52: intc52, jf52: jf52, 
    		analysis51:analysis51, analysis52:analysis52, ecowestdrr1: ecowestdrr1, intc53: intc53, jf53: jf53,  intc54: intc54, jf54: jf54, 
    		analysis53:analysis53, analysis54:analysis54}));  
	});
});
app.get('/matinaaplaya',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }
		
		//south intersections
		var yyas = ' ';
	  	matinaaplaya1 = body.RWS[0].RW[8].DE;
	  	const intc55 = body.RWS[0].RW[8].FIS[0].FI[0].TMC.DE;
	  	const jf55 = body.RWS[0].RW[8].FIS[0].FI[0].CF[0].JF;  	
	  	const intc56 = body.RWS[0].RW[8].FIS[0].FI[1].TMC.DE;
	  	const jf56 = body.RWS[0].RW[8].FIS[0].FI[1].CF[0].JF;
	  	const intc57 = body.RWS[0].RW[8].FIS[0].FI[2].TMC.DE;
	  	const jf57 = body.RWS[0].RW[8].FIS[0].FI[2].CF[0].JF;
	  	const intc58 = body.RWS[0].RW[8].FIS[0].FI[3].TMC.DE;
	  	const jf58 = body.RWS[0].RW[8].FIS[0].FI[3].CF[0].JF;  

		let analysis55 = "";
	  	if(jf55 == 0 || jf55 < 4){
	  		analysis55 = "For"+yyas+intc55+yyas+"South bound lane Free flow of traffic";
	  	}else if(jf55 == 4 || jf55 < 8){
	  		analysis55 = "For"+yyas+intc55+yyas+"South bound lane Sluggish flow of traffic";
	  	}else if(jf55 == 8 || jf55 < 10){
	  		analysis55 = "For"+yyas+intc55+yyas+"South bound lane Slow flow of traffic";
	  	}else if(jf55 == 10){
	  		analysis55 = "For"+yyas+intc55+yyas+"South bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis55 = "Cannot compute"
	  	}
		let analysis56 = "";
	  	if(jf56 == 0 || jf56 < 4){
	  		analysis56 = "For"+yyas+intc56+yyas+"South bound lane Free flow of traffic";
	  	}else if(jf56 == 4 || jf56 < 8){
	  		analysis56 = "For"+yyas+intc56+yyas+"South bound lane Sluggish flow of traffic";
	  	}else if(jf56 == 8 || jf56 < 10){
	  		analysis56 = "For"+yyas+intc56+yyas+"South bound lane Slow flow of traffic";
	  	}else if(jf56 == 10){
	  		analysis56 = "For"+yyas+intc56+yyas+"South bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis56 = "Cannot compute"
	  	}
		let analysis57 = "";
	  	if(jf57 == 0 || jf57 < 4){
	  		analysis57 = "For"+yyas+intc57+yyas+"South bound lane Free flow of traffic";
	  	}else if(jf57 == 4 || jf57 < 8){
	  		analysis57 = "For"+yyas+intc57+yyas+"South bound lane Sluggish flow of traffic";
	  	}else if(jf57 == 8 || jf57 < 10){
	  		analysis57 = "For"+yyas+intc57+yyas+"South bound lane Slow flow of traffic";
	  	}else if(jf57 == 10){
	  		analysis57 = "For"+yyas+intc57+yyas+"South bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis57 = "Cannot compute"
	  	}
	  	let analysis58 = "";
	  	if(jf58 == 0 || jf58 < 4){
	  		analysis58 = "For"+yyas+intc58+yyas+"South bound lane Free flow of traffic";
	  	}else if(jf58 == 4 || jf58 < 8){
	  		analysis58 = "For"+yyas+intc58+yyas+"South bound lane Sluggish flow of traffic";
	  	}else if(jf58 == 8 || jf58 < 10){
	  		analysis58 = "For"+yyas+intc58+yyas+"South bound lane Slow flow of traffic";
	  	}else if(jf58 == 10){
	  		analysis58 = "For"+yyas+intc58+yyas+"South bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis58 = "Cannot compute"
	  	}

	  	//north intersections
	  	const matinaaplayaa1 = body.RWS[0].RW[10].DE;
	  	const intc59 = body.RWS[0].RW[10].FIS[0].FI[0].TMC.DE;
	  	const jf59 = body.RWS[0].RW[10].FIS[0].FI[0].CF[0].JF;
	  	const intc60 = body.RWS[0].RW[10].FIS[0].FI[1].TMC.DE;
	  	const jf60 = body.RWS[0].RW[10].FIS[0].FI[1].CF[0].JF;
	  	const intc61 = body.RWS[0].RW[10].FIS[0].FI[2].TMC.DE;
	  	const jf61 = body.RWS[0].RW[10].FIS[0].FI[2].CF[0].JF;
	  	const intc62 = body.RWS[0].RW[10].FIS[0].FI[3].TMC.DE;
	  	const jf62 = body.RWS[0].RW[10].FIS[0].FI[3].CF[0].JF;

	  	let analysis59 = "";
	  	if(jf59 == 0 || jf59 < 4){
	  		analysis59 = "For"+yyas+intc59+yyas+"North bound lane Free flow of traffic";
	  	}else if(jf59 == 4 || jf59 < 8){
	  		analysis59 = "For"+yyas+intc59+yyas+"North bound lane Sluggish flow of traffic";
	  	}else if(jf59 == 8 || jf59 < 10){
	  		analysis59 = "For"+yyas+intc59+yyas+"North bound lane Slow flow of traffic";
	  	}else if(jf59 == 10){
	  		analysis59 = "For"+yyas+intc59+yyas+"North bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis59 = "Cannot compute"
	  	}

		let analysis60 = "";
	  	if(jf60 == 0 || jf60 < 4){
	  		analysis60 = "For"+yyas+intc60+yyas+"North bound lane Free flow of traffic";
	  	}else if(jf60 == 4 || jf60 < 8){
	  		analysis60 = "For"+yyas+intc60+yyas+"North bound lane Sluggish flow of traffic";
	  	}else if(jf60 == 8 || jf60 < 10){
	  		analysis60 = "For"+yyas+intc60+yyas+"North bound lane Slow flow of traffic";
	  	}else if(jf60 == 10){
	  		analysis60 = "For"+yyas+intc60+yyas+"North bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis60 = "Cannot compute"
	  	}

		let analysis61 = "";
	  	if(jf61 == 0 || jf61 < 4){
	  		analysis61 = "For"+yyas+intc61+yyas+"North bound lane Free flow of traffic";
	  	}else if(jf61 == 4 || jf61 < 8){
	  		analysis61 = "For"+yyas+intc61+yyas+"North bound lane Sluggish flow of traffic";
	  	}else if(jf61 == 8 || jf61 < 10){
	  		analysis61 = "For"+yyas+intc61+yyas+"North bound lane Slow flow of traffic";
	  	}else if(jf61 == 10){
	  		analysis61 = "For"+yyas+intc61+yyas+"North bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis61 = "Cannot compute"
	  	}

		let analysis62 = "";
	  	if(jf62 == 0 || jf62 < 4){
	  		analysis62 = "For"+yyas+intc62+yyas+"North bound lane Free flow of traffic";
	  	}else if(jf62 == 4 || jf62 < 8){
	  		analysis62 = "For"+yyas+intc62+yyas+"North bound lane Sluggish flow of traffic";
	  	}else if(jf62 == 8 || jf62 < 10){
	  		analysis62 = "For"+yyas+intc62+yyas+"North bound lane Slow flow of traffic";
	  	}else if(jf62 == 10){
	  		analysis62 = "For"+yyas+intc62+yyas+"North bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis62 = "Cannot compute"
	  	}

	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({ matinaaplaya1: matinaaplaya1,  intc55: intc55, jf55: jf55,  intc56: intc56, jf56: jf56, intc57: intc57, jf57: jf57, intc58:intc58, jf58:jf58, 
    		 analysis55:analysis55, analysis56: analysis56, analysis57: analysis57,analysis58:analysis58, matinaaplayaa1: matinaaplayaa1, intc59: intc59, jf59: jf59, 
    		  intc60: intc60, jf60: jf60, intc61: intc61, jf61: jf61, intc62:intc62, jf62:jf62,
    	analysis59:analysis59, analysis60:analysis60, analysis61:analysis61, analysis62:analysis62}));
  
	});
});
app.get('/ecoland',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }
	  	//south intersection	
	  	ecoland1 = body.RWS[0].RW[9].DE;
	  	const intc63 = body.RWS[0].RW[9].FIS[0].FI[0].TMC.DE;
	  	const jf63 = body.RWS[0].RW[9].FIS[0].FI[0].CF[0].JF;  	
	  	const intc64 = body.RWS[0].RW[9].FIS[0].FI[1].TMC.DE;
	  	const jf64 = body.RWS[0].RW[9].FIS[0].FI[1].CF[0].JF;
	  	const intc65 = body.RWS[0].RW[9].FIS[0].FI[2].TMC.DE;
	  	const jf65 = body.RWS[0].RW[9].FIS[0].FI[2].CF[0].JF;
	  	var s = ' ';
	  	let analysis63 = "";
	  	if(jf63 == 0 || jf63 < 4){
	  		analysis63 = "For"+s+intc63+s+"South bound lane Free flow of traffic";
	  	}else if(jf63 == 4 || jf63 < 8){
	  		analysis63 = "For"+s+intc63+s+"South bound lane Sluggish flow of traffic";
	  	}else if(jf63 == 8 || jf63 < 10){
	  		analysis63 = "For"+s+intc63+s+"South bound lane Slow flow of traffic";
	  	}else if(jf63 == 10){
	  		analysis63 = "For"+s+intc63+s+"South bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis63 = "Cannot compute"
	  	}
	  	let analysis64 = "";
	  	if(jf64 == 0 || jf64 < 4){
	  		analysis64 = "For"+s+intc64+s+"South bound lane Free flow of traffic";
	  	}else if(jf64 == 4 || jf64 < 8){
	  		analysis64 = "For"+s+intc64+s+"South bound lane Sluggish flow of traffic";
	  	}else if(jf64 == 8 || jf64 < 10){
	  		analysis64 = "For"+s+intc64+s+"South bound lane Slow flow of traffic";
	  	}else if(jf64 == 10){
	  		analysis64 = "For"+s+intc64+s+"South bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis64 = "Cannot compute"
	  	}
	  	let analysis65 = "";
	  	if(jf65 == 0 || jf65 < 4){
	  		analysis65 = "For"+s+intc65+s+"South bound lane Free flow of traffic";
	  	}else if(jf65 == 4 || jf65 < 8){
	  		analysis65 = "For"+s+intc65+s+"South bound lane Sluggish flow of traffic";
	  	}else if(jf65 == 8 || jf65 < 10){
	  		analysis65 = "For"+s+intc65+s+"South bound lane Slow flow of traffic";
	  	}else if(jf65 == 10){
	  		analysis65 = "For"+s+intc65+s+"South bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis65 = "Cannot compute"
	  	}
	  	//north intersection
	  	const ecolaand1 = body.RWS[0].RW[11].DE;
	  	const intc66 = body.RWS[0].RW[11].FIS[0].FI[0].TMC.DE;
	  	const jf66 = body.RWS[0].RW[11].FIS[0].FI[0].CF[0].JF; 	
	  	const intc67 = body.RWS[0].RW[11].FIS[0].FI[1].TMC.DE;
	  	const jf67 = body.RWS[0].RW[11].FIS[0].FI[1].CF[0].JF;
	  	const intc68 = body.RWS[0].RW[11].FIS[0].FI[2].TMC.DE;
	  	const jf68 = body.RWS[0].RW[11].FIS[0].FI[2].CF[0].JF;

	  	let analysis66 = "";
	  	if(jf66 == 0 || jf66 < 4){
	  		analysis66 = "For"+s+intc66+s+"North bound lane Free flow of traffic";
	  	}else if(jf66 == 4 || jf66 < 8){
	  		analysis66 = "For"+s+intc66+s+"North bound lane Sluggish flow of traffic";
	  	}else if(jf66 == 8 || jf66 < 10){
	  		analysis66 = "For"+s+intc66+s+"North bound lane Slow flow of traffic";
	  	}else if(jf66 == 10){
	  		analysis66 = "For"+s+intc66+s+"North bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis66 = "Cannot compute"
	  	}
		let analysis67 = "";
	  	if(jf67 == 0 || jf67 < 4){
	  		analysis67 = "For"+s+intc67+s+"North bound lane Free flow of traffic";
	  	}else if(jf67 == 4 || jf67 < 8){
	  		analysis67 = "For"+s+intc67+s+"North bound lane Sluggish flow of traffic";
	  	}else if(jf67 == 8 || jf67 < 10){
	  		analysis67 = "For"+s+intc67+s+"North bound lane Slow flow of traffic";
	  	}else if(jf67 == 10){
	  		analysis67 = "For"+s+intc67+s+"North bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis67 = "Cannot compute"
	  	}
		let analysis68 = "";
	  	if(jf68 == 0 || jf68 < 4){
	  		analysis68 = "For"+s+intc68+s+"North bound lane Free flow of traffic";
	  	}else if(jf68 == 4 || jf68 < 8){
	  		analysis68 = "For"+s+intc68+s+"North bound lane Sluggish flow of traffic";
	  	}else if(jf68 == 8 || jf68 < 10){
	  		analysis68 = "For"+s+intc68+s+"North bound lane Slow flow of traffic";
	  	}else if(jf68 == 10){
	  		analysis68 = "For"+s+intc68+s+"North bound lane Traffic stopped or Road closed"
	  	}else{
	  		analysis68 = "Cannot compute"
	  	}
		
	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({ ecoland1:ecoland1, intc63: intc63, jf63: jf63,  intc64: intc64, jf64: jf64, intc65: intc65, jf65: jf65,
    	analysis63:analysis63, analysis64:analysis64, analysis65:analysis65, ecolaand1: ecolaand1, intc66: intc66, jf66: jf66,  intc67: intc67, jf67: jf67, intc68: intc68, jf68: jf68,
    	analysis66:analysis66, analysis67:analysis67, analysis68:analysis68}));  
	});
});
app.get('/tulipdr',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }

		var wa = ' ';
	  	//south intersections
	 	tulipdr1 = body.RWS[0].RW[12].DE;
	  	const intc69 = body.RWS[0].RW[12].FIS[0].FI[0].TMC.DE;
	  	const jf69 = body.RWS[0].RW[12].FIS[0].FI[0].CF[0].JF;	
	  	const intc70 = body.RWS[0].RW[12].FIS[0].FI[1].TMC.DE;
	  	const jf70 = body.RWS[0].RW[12].FIS[0].FI[1].CF[0].JF;
	  	const intc71 = body.RWS[0].RW[12].FIS[0].FI[2].TMC.DE;
	  	const jf71 = body.RWS[0].RW[12].FIS[0].FI[2].CF[0].JF;

	  	let analysis69 = "";
	  	if(jf69 == 0 || jf69 < 4){
	  		analysis69 = "For"+wa+intc69+wa+"South bound Free flow of traffic";
	  	}else if(jf69 == 4 || jf69 < 8){
	  		analysis69 = "For"+wa+intc69+wa+"South bound flow of traffic";
	  	}else if(jf69 == 8 || jf69 < 10){
	  		analysis69 = "For"+wa+intc69+wa+"South bound Ecoland: Slow flow of traffic";
	  	}else if(jf69 == 10){
	  		analysis69 = "For"+wa+intc69+wa+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis11 = "Cannot compute"
	  	}
		let analysis70 = "";
	  	if(jf70 == 0 || jf70 < 4){
	  		analysis70 = "For"+wa+intc70+wa+"South bound Free flow of traffic";
	  	}else if(jf70 == 4 || jf70 < 8){
	  		analysis70 = "For"+wa+intc70+wa+"South bound Sluggish flow of traffic";
	  	}else if(jf70 == 8 || jf70 < 10){
	  		analysis70 = "For"+wa+intc70+wa+"South bound Slow flow of traffic";
	  	}else if(jf70 == 10){
	  		analysis70 = "For"+wa+intc70+wa+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis12 = "Cannot compute"
	  	}
		let analysis71 = "";
	  	if(jf71 == 0 || jf71 < 4){
	  		analysis71 = "For"+wa+intc71+wa+"South bound Free flow of traffic";
	  	}else if(jf71 == 4 || jf71 < 8){
	  		analysis71 = "For"+wa+intc71+wa+"South bound Sluggish flow of traffic";
	  	}else if(jf71 == 8 || jf71 < 10){
	  		analysis71 = "For"+wa+intc71+wa+"South bound Slow flow of traffic";
	  	}else if(jf71 == 10){
	  		analysis71 = "For"+wa+intc71+wa+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis71 = "Cannot compute"
	  	}

	  	//north intersections
		const tulipdrr1 = body.RWS[0].RW[13].DE;
	  	const intc72 = body.RWS[0].RW[13].FIS[0].FI[0].TMC.DE;
	  	const jf72 = body.RWS[0].RW[13].FIS[0].FI[0].CF[0].JF;  	
	  	const intc73 = body.RWS[0].RW[13].FIS[0].FI[1].TMC.DE;
	  	const jf73 = body.RWS[0].RW[13].FIS[0].FI[1].CF[0].JF;
	  	const intc74 = body.RWS[0].RW[13].FIS[0].FI[2].TMC.DE;
	  	const jf74 = body.RWS[0].RW[13].FIS[0].FI[2].CF[0].JF;
	
	  	let analysis72 = "";
	  	if(jf72 == 0 || jf72 < 4){
	  		analysis72 = "For"+wa+intc72+wa+"North bound Free flow of traffic";
	  	}else if(jf72 == 4 || jf72 < 8){
	  		analysis72 = "For"+wa+intc72+wa+"North bound Sluggish flow of traffic";
	  	}else if(jf72 == 8 || jf72 < 10){
	  		analysis72 = "For"+wa+intc72+wa+"North bound Slow flow of traffic";
	  	}else if(jf72 == 10){
	  		analysis72 = "For"+wa+intc72+wa+"North bound Traffic stopped or Road closed"
	  	}else{
	  		analysis72 = "Cannot compute"
	  	}
		let analysis73 = "";
	  	if(jf73 == 0 || jf73 < 4){
	  		analysis73 = "For"+wa+intc73+wa+"North bound Free flow of traffic";
	  	}else if(jf73 == 4 || jf73 < 8){
	  		analysis73 = "For"+wa+intc73+wa+"North bound Slow flow of traffic";
	  	}else if(jf73 == 8 || jf73 < 10){
	  		analysis73 = "For"+wa+intc73+wa+"North bound Slow flow of traffic";
	  	}else if(jf73 == 10){
	  		analysis73 = "For"+wa+intc73+wa+"North bound Traffic stopped or Road closed"
	  	}else{
	  		analysis73 = "Cannot compute"
	  	}
		let analysis74 = "";
	  	if(jf74 == 0 || jf74 < 4){
	  		analysis74 = "For"+wa+intc74+wa+"North bound Free flow of traffic";
	  	}else if(jf74 == 4 || jf74 < 8){
	  		analysis74 = "For"+wa+intc74+wa+"North bound Sluggish flow of traffic";
	  	}else if(jf74 == 8 || jf74 < 10){
	  		analysis74 = "For"+wa+intc74+wa+"North bound Slow flow of traffic";
	  	}else if(jf74 == 10){
	  		analysis74 = "For"+wa+intc74+wa+"North bound Traffic stopped or Road closed"
	  	}else{
	  		analysis74 = "Cannot compute"
	  	}
	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({ tulipdr1: tulipdr1, intc69: intc69, jf69: jf69,intc70: intc70, jf70: jf70, intc71: intc71, jf71: jf71,
    	analysis69:analysis69, analysis70:analysis70, analysis71:analysis71,tulipdrr1: tulipdrr1, intc72: intc72, jf72: jf72,  intc73: intc73, jf73: jf73, intc74: intc74, jf74: jf74, 
    		analysis72:analysis72, analysis73:analysis73, analysis74:analysis74}));  
	});
});
app.get('/quimpoblvd',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }
	    //north 
	  	quimpoblvd1 = body.RWS[0].RW[14].DE;
	  	const intc75 = body.RWS[0].RW[14].FIS[0].FI[0].TMC.DE; 
	  	const jf75 = body.RWS[0].RW[14].FIS[0].FI[0].CF[0].JF;	
	  	const intc76 = body.RWS[0].RW[14].FIS[0].FI[1].TMC.DE;
	  	const jf76 = body.RWS[0].RW[14].FIS[0].FI[1].CF[0].JF;
	  	const intc77 = body.RWS[0].RW[14].FIS[0].FI[2].TMC.DE;
	    const jf77 = body.RWS[0].RW[14].FIS[0].FI[2].CF[0].JF;
	  	const intc78 = body.RWS[0].RW[14].FIS[0].FI[3].TMC.DE;
	  	const jf78 = body.RWS[0].RW[14].FIS[0].FI[3].CF[0].JF;
	  	var x = ' ';//space ni
	  	let analysis75 = "";
	  	if(jf75 == 0 || jf75 < 4){
	  		analysis75 = "For"+x+intc75+x+"South bound Free flow of traffic";
	  	}else if(jf75 == 4 || jf75 < 8){
	  		analysis75 = "For"+x+intc75+x+"South bound Sluggish flow of traffic";
	  	}else if(jf75 == 8 || jf75 < 10){
	  		analysis75 = "For"+x+intc75+x+"South bound Slow flow of traffic";
	  	}else if(jf75 == 10){
	  		analysis75 = "For"+x+intc75+x+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis75 = "Cannot compute"
	  	}
	  	let analysis76 = "";
	  	if(jf76 == 0 || jf76 < 4){
	  		analysis76 = "For"+x+intc76+x+"South bound Free flow of traffic";
	  	}else if(jf76 == 4 || jf76 < 8){
	  		analysis76 = "For"+x+intc76+x+"South bound Sluggish flow of traffic";
	  	}else if(jf76 == 8 || jf76 < 10){
	  		analysis76 = "For"+x+intc76+x+"South bound Slow flow of traffic";
	  	}else if(jf76 == 10){
	  		analysis76 = "For"+x+intc76+x+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis76 = "Cannot compute"
	  	}
	  	let analysis77 = "";
	  	if(jf77 == 0 || jf77 < 4){
	  		analysis77 = "For"+x+intc77+x+"South bound Free flow of traffic";
	  	}else if(jf77 == 4 || jf77 < 8){
	  		analysis77 = "For"+x+intc77+x+"South bound Sluggish flow of traffic";
	  	}else if(jf77 == 8 || jf77 < 10){
	  		analysis77 = "For"+x+intc77+x+"South bound Slow flow of traffic";
	  	}else if(jf77 == 10){
	  		analysis77 = "For"+x+intc77+x+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis77 = "Cannot compute"
	  	}
	  	let analysis78 = "";
	  	if(jf78 == 0 || jf78 < 4){
	  		analysis78 = "For"+x+intc78+x+"South bound Free flow of traffic";
	  	}else if(jf78 == 4 || jf78 < 8){
	  		analysis78 = "For"+x+intc78+x+"South bound Sluggish flow of traffic";
	  	}else if(jf78 == 8 || jf78 < 10){
	  		analysis78 = "For"+x+intc78+x+"South bound Slow flow of traffic";
	  	}else if(jf78 == 10){
	  		analysis78 = "For"+x+intc78+x+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis78 = "Cannot compute"
	  	}
	  	//north
	  	const quimpooblvd1 = body.RWS[0].RW[16].DE;
	  	const intc79 = body.RWS[0].RW[16].FIS[0].FI[0].TMC.DE; 
	  	const jf79 = body.RWS[0].RW[16].FIS[0].FI[0].CF[0].JF;	
	  	const intc80 = body.RWS[0].RW[16].FIS[0].FI[1].TMC.DE;
	  	const jf80 = body.RWS[0].RW[16].FIS[0].FI[1].CF[0].JF;
	  	const intc81 = body.RWS[0].RW[16].FIS[0].FI[2].TMC.DE;
	    const jf81 = body.RWS[0].RW[16].FIS[0].FI[2].CF[0].JF;
	  	const intc82 = body.RWS[0].RW[16].FIS[0].FI[3].TMC.DE;
	  	const jf82 = body.RWS[0].RW[16].FIS[0].FI[3].CF[0].JF;
	  	var x = ' ';//space ni
	  	let analysis79 = "";
	  	if(jf79 == 0 || jf79 < 4){
	  		analysis79 = "For"+x+intc79+x+"South bound Free flow of traffic";
	  	}else if(jf79 == 4 || jf79 < 8){
	  		analysis79 = "For"+x+intc79+x+"South bound Sluggish flow of traffic";
	  	}else if(jf79 == 8 || jf79 < 10){
	  		analysis79 = "For"+x+intc79+x+"South bound Slow flow of traffic";
	  	}else if(jf79 == 10){
	  		analysis79 = "For"+x+intc79+x+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis79 = "Cannot compute"
	  	}
	  	let analysis80 = "";
	  	if(jf80 == 0 || jf80 < 4){
	  		analysis80 = "For"+x+intc80+x+"South bound Free flow of traffic";
	  	}else if(jf80 == 4 || jf80 < 8){
	  		analysis80 = "For"+x+intc80+x+"South bound Sluggish flow of traffic";
	  	}else if(jf80 == 8 || jf80 < 10){
	  		analysis80 = "For"+x+intc80+x+"South bound Slow flow of traffic";
	  	}else if(jf80 == 10){
	  		analysis80 = "For"+x+intc80+x+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis80 = "Cannot compute"
	  	}
	  	let analysis81 = "";
	  	if(jf81 == 0 || jf81 < 4){
	  		analysis81 = "For"+x+intc81+x+"South bound Free flow of traffic";
	  	}else if(jf81 == 4 || jf81 < 8){
	  		analysis81 = "For"+x+intc81+x+"South bound Sluggish flow of traffic";
	  	}else if(jf81 == 8 || jf81 < 10){
	  		analysis81 = "For"+x+intc81+x+"South bound Slow flow of traffic";
	  	}else if(jf81 == 10){
	  		analysis81 = "For"+x+intc81+x+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis81 = "Cannot compute"
	  	}
	  	let analysis82 = "";
	  	if(jf82 == 0 || jf82 < 4){
	  		analysis82 = "For"+x+intc82+x+"South bound Free flow of traffic";
	  	}else if(jf82 == 4 || jf82 < 8){
	  		analysis82 = "For"+x+intc82+x+"South bound Sluggish flow of traffic";
	  	}else if(jf82 == 8 || jf82 < 10){
	  		analysis82 = "For"+x+intc82+x+"South bound Slow flow of traffic";
	  	}else if(jf82 == 10){
	  		analysis82 = "For"+x+intc82+x+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis82 = "Cannot compute"
	  	}
	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({ quimpoblvd1: quimpoblvd1, intc75: intc75, jf75: jf75,  intc76: intc76, jf76: jf76,intc77:intc77,jf77:jf77, intc78: intc78, jf78: jf78,
    	analysis75:analysis75, analysis76:analysis76,analysis77:analysis77, analysis78:analysis78,quimpooblvd1: quimpooblvd1, intc79: intc79, jf79: jf79,  intc80: intc80, jf80: jf80,intc81:intc81,jf81:jf81, intc82: intc82, jf82: jf82,
    	analysis79:analysis79, analysis80:analysis80,analysis81:analysis81, analysis82:analysis82, }));  
	});
});
app.get('/sandaward',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }
	    //north 
	  	sandawa1 = body.RWS[0].RW[15].DE;
	  	const intc83 = body.RWS[0].RW[15].FIS[0].FI[0].TMC.DE; 
	  	const jf83 = body.RWS[0].RW[15].FIS[0].FI[0].CF[0].JF;	
	  	const intc84 = body.RWS[0].RW[15].FIS[0].FI[1].TMC.DE;
	  	const jf84 = body.RWS[0].RW[15].FIS[0].FI[1].CF[0].JF;

	  	var sa = ' ';//space ni
	  	let analysis83 = "";
	  	if(jf83 == 0 || jf83 < 4){
	  		analysis83 = "For"+sa+intc83+sa+"South bound Free flow of traffic";
	  	}else if(jf83 == 4 || jf83 < 8){
	  		analysis83 = "For"+sa+intc83+sa+"South bound Sluggish flow of traffic";
	  	}else if(jf83 == 8 || jf83 < 10){
	  		analysis83 = "For"+sa+intc83+sa+"South bound Slow flow of traffic";
	  	}else if(jf83 == 10){
	  		analysis83 = "For"+sa+intc83+sa+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis83 = "Cannot compute"
	  	}

	  	let analysis84 = "";
	  	if(jf84 == 0 || jf84 < 4){
	  		analysis84 = "For"+sa+intc84+sa+"South bound Free flow of traffic";
	  	}else if(jf84 == 4 || jf84 < 8){
	  		analysis84 = "For"+sa+intc84+sa+"South bound Sluggish flow of traffic";
	  	}else if(jf84 == 8 || jf84 < 10){
	  		analysis84 = "For"+sa+intc84+sa+"South bound Slow flow of traffic";
	  	}else if(jf84 == 10){
	  		analysis84 = "For"+sa+intc84+sa+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis84 = "Cannot compute"
	  	}

	  	const sandawaa1 = body.RWS[0].RW[17].DE;
	  	const intc85 = body.RWS[0].RW[17].FIS[0].FI[0].TMC.DE; 
	  	const jf85 = body.RWS[0].RW[17].FIS[0].FI[0].CF[0].JF;	
	  	const intc86 = body.RWS[0].RW[17].FIS[0].FI[1].TMC.DE;
	  	const jf86 = body.RWS[0].RW[17].FIS[0].FI[1].CF[0].JF;

	  	var sa = ' ';//space ni
	  	let analysis85 = "";
	  	if(jf85 == 0 || jf85 < 4){
	  		analysis85 = "For"+sa+intc85+sa+"North bound Free flow of traffic";
	  	}else if(jf85 == 4 || jf85 < 8){
	  		analysis85 = "For"+sa+intc85+sa+"North bound Sluggish flow of traffic";
	  	}else if(jf85 == 8 || jf85 < 10){
	  		analysis85 = "For"+sa+intc85+sa+"North bound Slow flow of traffic";
	  	}else if(jf85 == 10){
	  		analysis85 = "For"+sa+intc85+sa+"North bound Traffic stopped or Road closed"
	  	}else{
	  		analysis85 = "Cannot compute"
	  	}

	  	let analysis86 = "";
	  	if(jf86 == 0 || jf86 < 4){
	  		analysis86 = "For"+sa+intc86+sa+"North bound Free flow of traffic";
	  	}else if(jf86 == 4 || jf86 < 8){
	  		analysis86 = "For"+sa+intc86+sa+"North bound Sluggish flow of traffic";
	  	}else if(jf86 == 8 || jf86 < 10){
	  		analysis86 = "For"+sa+intc86+sa+"North bound Slow flow of traffic";
	  	}else if(jf86 == 10){
	  		analysis86 = "For"+sa+intc86+sa+"North bound Traffic stopped or Road closed"
	  	}else{
	  		analysis86 = "Cannot compute"
	  	}
	  	
	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({ sandawa1: sandawa1, intc83: intc83, jf83: jf83,  intc84: intc84, jf84: jf84,
    	analysis83:analysis83, analysis84:analysis84, sandawaa1: sandawaa1, intc85: intc85, jf85: jf85,  intc86: intc86, jf86: jf86,
    	analysis85:analysis85, analysis86:analysis86}));  
	});
});

app.get('/quezonblvd',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }
	    //north 
	  	quezonblvd1 = body.RWS[0].RW[18].DE;
	  	const intc87 = body.RWS[0].RW[18].FIS[0].FI[0].TMC.DE; 
	  	const jf87 = body.RWS[0].RW[18].FIS[0].FI[0].CF[0].JF;	
	  	const intc88 = body.RWS[0].RW[18].FIS[0].FI[1].TMC.DE;
	  	const jf88 = body.RWS[0].RW[18].FIS[0].FI[1].CF[0].JF;
	  	const intc89 = body.RWS[0].RW[18].FIS[0].FI[2].TMC.DE;
	  	const jf89 = body.RWS[0].RW[18].FIS[0].FI[2].CF[0].JF;
	  	const intc90 = body.RWS[0].RW[18].FIS[0].FI[3].TMC.DE;
	  	const jf90 = body.RWS[0].RW[18].FIS[0].FI[3].CF[0].JF;
	  	const intc91 = body.RWS[0].RW[18].FIS[0].FI[4].TMC.DE;
	  	const jf91 = body.RWS[0].RW[18].FIS[0].FI[4].CF[0].JF;

	  	var qu = ' ';//space ni
	  	let analysis87 = "";
	  	if(jf87 == 0 || jf87 < 4){
	  		analysis87 = "For"+qu+intc87+qu+"South bound Free flow of traffic";
	  	}else if(jf87 == 4 || jf87 < 8){
	  		analysis87 = "For"+qu+intc87+qu+"South bound Sluggish flow of traffic";
	  	}else if(jf87 == 8 || jf87 < 10){
	  		analysis87 = "For"+qu+intc87+qu+"South bound Slow flow of traffic";
	  	}else if(jf87 == 10){
	  		analysis87 = "For"+qu+intc87+qu+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis87 = "Cannot compute"
	  	}

	  	let analysis88 = "";
	  	if(jf88 == 0 || jf88 < 4){
	  		analysis88 = "For"+qu+intc88+qu+"South bound Free flow of traffic";
	  	}else if(jf88 == 4 || jf88 < 8){
	  		analysis88 = "For"+qu+intc88+qu+"South bound Sluggish flow of traffic";
	  	}else if(jf88 == 8 || jf88 < 10){
	  		analysis88 = "For"+qu+intc88+qu+"South bound Slow flow of traffic";
	  	}else if(jf88 == 10){
	  		analysis88 = "For"+qu+intc88+qu+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis88 = "Cannot compute"
	  	}

	  	let analysis89 = "";
	  	if(jf89 == 0 || jf89 < 4){
	  		analysis89 = "For"+qu+intc89+qu+"South bound Free flow of traffic";
	  	}else if(jf89 == 4 || jf89 < 8){
	  		analysis89 = "For"+qu+intc89+qu+"South bound Sluggish flow of traffic";
	  	}else if(jf89 == 8 || jf89 < 10){
	  		analysis89 = "For"+qu+intc89+qu+"South bound Slow flow of traffic";
	  	}else if(jf89 == 10){
	  		analysis89 = "For"+qu+intc89+qu+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis89 = "Cannot compute"
	  	}

	  	let analysis90 = "";
	  	if(jf90 == 0 || jf90 < 4){
	  		analysis90 = "For"+qu+intc90+qu+"South bound Free flow of traffic";
	  	}else if(jf90 == 4 || jf90 < 8){
	  		analysis90 = "For"+qu+intc90+qu+"South bound Sluggish flow of traffic";
	  	}else if(jf90 == 8 || jf90 < 10){
	  		analysis90 = "For"+qu+intc90+qu+"South bound Slow flow of traffic";
	  	}else if(jf90 == 10){
	  		analysis90 = "For"+qu+intc90+qu+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis90 = "Cannot compute"
	  	}

	  	let analysis91 = "";
	  	if(jf91 == 0 || jf91 < 4){
	  		analysis91 = "For"+qu+intc91+qu+"South bound Free flow of traffic";
	  	}else if(jf91 == 4 || jf91 < 8){
	  		analysis91 = "For"+qu+intc91+qu+"South bound Sluggish flow of traffic";
	  	}else if(jf91 == 8 || jf91 < 10){
	  		analysis91 = "For"+qu+intc91+qu+"South bound Slow flow of traffic";
	  	}else if(jf91 == 10){
	  		analysis91 = "For"+qu+intc91+qu+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis91 = "Cannot compute"
	  	}

	  	const quezoonblvd1 = body.RWS[0].RW[19].DE;
	  	const intc92 = body.RWS[0].RW[19].FIS[0].FI[0].TMC.DE; 
	  	const jf92 = body.RWS[0].RW[19].FIS[0].FI[0].CF[0].JF;	
	  	const intc93 = body.RWS[0].RW[19].FIS[0].FI[1].TMC.DE;
	  	const jf93 = body.RWS[0].RW[19].FIS[0].FI[1].CF[0].JF;
	  	const intc94 = body.RWS[0].RW[19].FIS[0].FI[2].TMC.DE;
	  	const jf94 = body.RWS[0].RW[19].FIS[0].FI[2].CF[0].JF;
	  	const intc95 = body.RWS[0].RW[19].FIS[0].FI[3].TMC.DE;
	  	const jf95 = body.RWS[0].RW[19].FIS[0].FI[3].CF[0].JF;
	  	const intc96 = body.RWS[0].RW[19].FIS[0].FI[4].TMC.DE;
	  	const jf96 = body.RWS[0].RW[19].FIS[0].FI[4].CF[0].JF;

	  	var qu = ' ';//space ni
	  	let analysis92 = "";
	  	if(jf92 == 0 || jf92 < 4){
	  		analysis92 = "For"+qu+intc92+qu+"North bound Free flow of traffic";
	  	}else if(jf92 == 4 || jf92 < 8){
	  		analysis92 = "For"+qu+intc92+qu+"North bound Sluggish flow of traffic";
	  	}else if(jf92 == 8 || jf92 < 10){
	  		analysis92 = "For"+qu+intc92+qu+"North bound Slow flow of traffic";
	  	}else if(jf92 == 10){
	  		analysis92 = "For"+qu+intc92+qu+"North bound Traffic stopped or Road closed"
	  	}else{
	  		analysis92 = "Cannot compute"
	  	}

	  	let analysis93 = "";
	  	if(jf93 == 0 || jf93 < 4){
	  		analysis93 = "For"+qu+intc93+qu+"North bound Free flow of traffic";
	  	}else if(jf93 == 4 || jf93 < 8){
	  		analysis93 = "For"+qu+intc93+qu+"North bound Sluggish flow of traffic";
	  	}else if(jf93 == 8 || jf93 < 10){
	  		analysis93 = "For"+qu+intc93+qu+"North bound Slow flow of traffic";
	  	}else if(jf93 == 10){
	  		analysis93 = "For"+qu+intc93+qu+"North bound Traffic stopped or Road closed"
	  	}else{
	  		analysis93 = "Cannot compute"
	  	}

	  	let analysis94 = "";
	  	if(jf94 == 0 || jf94 < 4){
	  		analysis94 = "For"+qu+intc94+qu+"North bound Free flow of traffic";
	  	}else if(jf94 == 4 || jf94 < 8){
	  		analysis94 = "For"+qu+intc94+qu+"North bound Sluggish flow of traffic";
	  	}else if(jf94 == 8 || jf94 < 10){
	  		analysis94 = "For"+qu+intc94+qu+"North bound Slow flow of traffic";
	  	}else if(jf94 == 10){
	  		analysis94 = "For"+qu+intc94+qu+"North bound Traffic stopped or Road closed"
	  	}else{
	  		analysis94 = "Cannot compute"
	  	}

	  	let analysis95 = "";
	  	if(jf95 == 0 || jf95 < 4){
	  		analysis95 = "For"+qu+intc95+qu+"North bound Free flow of traffic";
	  	}else if(jf95 == 4 || jf95 < 8){
	  		analysis95 = "For"+qu+intc95+qu+"North bound Sluggish flow of traffic";
	  	}else if(jf95 == 8 || jf95 < 10){
	  		analysis95 = "For"+qu+intc95+qu+"North bound Slow flow of traffic";
	  	}else if(jf95 == 10){
	  		analysis95 = "For"+qu+intc95+qu+"North bound Traffic stopped or Road closed"
	  	}else{
	  		analysis95 = "Cannot compute"
	  	}

	  	let analysis96 = "";
	  	if(jf96 == 0 || jf96 < 4){
	  		analysis96 = "For"+qu+intc96+qu+"North bound Free flow of traffic";
	  	}else if(jf96 == 4 || jf96 < 8){
	  		analysis96 = "For"+qu+intc96+qu+"North bound Sluggish flow of traffic";
	  	}else if(jf96 == 8 || jf96 < 10){
	  		analysis96 = "For"+qu+intc96+qu+"North bound Slow flow of traffic";
	  	}else if(jf96 == 10){
	  		analysis96 = "For"+qu+intc96+qu+"North bound Traffic stopped or Road closed"
	  	}else{
	  		analysis96 = "Cannot compute"
	  	}
	  	
	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({ quezonblvd1: quezonblvd1, intc87: intc87, jf87: jf87,  intc88: intc88, jf88: jf88, intc89: intc89, jf89: jf89, intc90: intc90, jf90: jf90, intc91: intc91, jf91: jf91,
    	analysis87:analysis87, analysis88:analysis88, analysis89:analysis89, analysis90:analysis90, analysis91:analysis91, quezoonblvd1: quezoonblvd1, intc92: intc92, jf92: jf92,  intc93: intc93, jf93: jf93, intc94: intc94, jf94: jf94, intc95: intc95, jf95: jf95, intc96: intc96, jf96: jf96,
    	analysis92:analysis92, analysis93:analysis93, analysis94:analysis94, analysis95:analysis95, analysis96:analysis96}));  
	});
});

app.get('/mlquezonblvd',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }
	    //north 
	  	mlquezon1 = body.RWS[0].RW[20].DE;
	  	const intc97 = body.RWS[0].RW[20].FIS[0].FI[0].TMC.DE; 
	  	const jf97 = body.RWS[0].RW[20].FIS[0].FI[0].CF[0].JF;	
	  	const intc98 = body.RWS[0].RW[20].FIS[0].FI[1].TMC.DE;
	  	const jf98 = body.RWS[0].RW[20].FIS[0].FI[1].CF[0].JF;
	  	const intc99 = body.RWS[0].RW[20].FIS[0].FI[2].TMC.DE;
	  	const jf99 = body.RWS[0].RW[20].FIS[0].FI[2].CF[0].JF;
	  	const intc100 = body.RWS[0].RW[20].FIS[0].FI[3].TMC.DE;
	  	const jf100 = body.RWS[0].RW[20].FIS[0].FI[3].CF[0].JF;
	  	const intc101 = body.RWS[0].RW[20].FIS[0].FI[4].TMC.DE;
	  	const jf101 = body.RWS[0].RW[20].FIS[0].FI[4].CF[0].JF;
	  	const intc102 = body.RWS[0].RW[20].FIS[0].FI[5].TMC.DE;
	  	const jf102 = body.RWS[0].RW[20].FIS[0].FI[5].CF[0].JF;

	  	var ml = ' ';//space ni
	  	let analysis97 = "";
	  	if(jf97 == 0 || jf97 < 4){
	  		analysis97 = "For"+ml+intc97+ml+"South bound Free flow of traffic";
	  	}else if(jf97 == 4 || jf97 < 8){
	  		analysis97 = "For"+ml+intc97+ml+"South bound Sluggish flow of traffic";
	  	}else if(jf97 == 8 || jf97 < 10){
	  		analysis97 = "For"+ml+intc97+ml+"South bound Slow flow of traffic";
	  	}else if(jf97 == 10){
	  		analysis97 = "For"+ml+intc97+ml+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis97 = "Cannot compute"
	  	}

	  	let analysis98 = "";
	  	if(jf98 == 0 || jf98 < 4){
	  		analysis98 = "For"+ml+intc98+ml+"South bound Free flow of traffic";
	  	}else if(jf98 == 4 || jf98 < 8){
	  		analysis98 = "For"+ml+intc98+ml+"South bound Sluggish flow of traffic";
	  	}else if(jf98 == 8 || jf98 < 10){
	  		analysis98 = "For"+ml+intc98+ml+"South bound Slow flow of traffic";
	  	}else if(jf98 == 10){
	  		analysis98 = "For"+ml+intc98+ml+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis98 = "Cannot compute"
	  	}

	  	let analysis99 = "";
	  	if(jf99 == 0 || jf99 < 4){
	  		analysis99 = "For"+ml+intc99+ml+"South bound Free flow of traffic";
	  	}else if(jf99 == 4 || jf99 < 8){
	  		analysis99 = "For"+ml+intc99+ml+"South bound Sluggish flow of traffic";
	  	}else if(jf99 == 8 || jf99 < 10){
	  		analysis99 = "For"+ml+intc99+ml+"South bound Slow flow of traffic";
	  	}else if(jf99 == 10){
	  		analysis99 = "For"+ml+intc99+ml+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis99 = "Cannot compute"
	  	}

	  	let analysis100 = "";
	  	if(jf100 == 0 || jf100 < 4){
	  		analysis100 = "For"+ml+intc100+ml+"South bound Free flow of traffic";
	  	}else if(jf100 == 4 || jf100 < 8){
	  		analysis100 = "For"+ml+intc100+ml+"South bound Sluggish flow of traffic";
	  	}else if(jf100 == 8 || jf100 < 10){
	  		analysis100 = "For"+ml+intc100+ml+"South bound Slow flow of traffic";
	  	}else if(jf100 == 10){
	  		analysis100 = "For"+ml+intc100+ml+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis100 = "Cannot compute"
	  	}

	  	let analysis101 = "";
	  	if(jf101 == 0 || jf101 < 4){
	  		analysis101 = "For"+ml+intc101+ml+"South bound Free flow of traffic";
	  	}else if(jf101 == 4 || jf101 < 8){
	  		analysis101 = "For"+ml+intc101+ml+"South bound Sluggish flow of traffic";
	  	}else if(jf101 == 8 || jf101 < 10){
	  		analysis101 = "For"+ml+intc101+ml+"South bound Slow flow of traffic";
	  	}else if(jf101 == 10){
	  		analysis101 = "For"+ml+intc101+ml+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis101 = "Cannot compute"
	  	}

	  	let analysis102 = "";
	  	if(jf102 == 0 || jf102 < 4){
	  		analysis102 = "For"+ml+intc102+ml+"South bound Free flow of traffic";
	  	}else if(jf102 == 4 || jf102 < 8){
	  		analysis102 = "For"+ml+intc102+ml+"South bound Sluggish flow of traffic";
	  	}else if(jf102 == 8 || jf102 < 10){
	  		analysis102 = "For"+ml+intc102+ml+"South bound Slow flow of traffic";
	  	}else if(jf102 == 10){
	  		analysis102 = "For"+ml+intc102+ml+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis102 = "Cannot compute"
	  	}

	  	const mlquezoon1 = body.RWS[0].RW[22].DE;
	  	const intc103 = body.RWS[0].RW[22].FIS[0].FI[0].TMC.DE; 
	  	const jf103 = body.RWS[0].RW[22].FIS[0].FI[0].CF[0].JF;	
	  	const intc104 = body.RWS[0].RW[22].FIS[0].FI[1].TMC.DE;
	  	const jf104 = body.RWS[0].RW[22].FIS[0].FI[1].CF[0].JF;
	  	const intc105 = body.RWS[0].RW[22].FIS[0].FI[2].TMC.DE;
	  	const jf105 = body.RWS[0].RW[22].FIS[0].FI[2].CF[0].JF;
	  	const intc106 = body.RWS[0].RW[22].FIS[0].FI[3].TMC.DE;
	  	const jf106 = body.RWS[0].RW[22].FIS[0].FI[3].CF[0].JF;
	  	const intc107 = body.RWS[0].RW[22].FIS[0].FI[4].TMC.DE;
	  	const jf107 = body.RWS[0].RW[22].FIS[0].FI[4].CF[0].JF;
	  	const intc108 = body.RWS[0].RW[22].FIS[0].FI[5].TMC.DE;
	  	const jf108 = body.RWS[0].RW[22].FIS[0].FI[5].CF[0].JF;

	  	var ml = ' ';//space ni
	  	let analysis103 = "";
	  	if(jf103 == 0 || jf103 < 4){
	  		analysis103 = "For"+ml+intc103+ml+"North bound Free flow of traffic";
	  	}else if(jf103 == 4 || jf103 < 8){
	  		analysis103 = "For"+ml+intc103+ml+"North bound Sluggish flow of traffic";
	  	}else if(jf103 == 8 || jf103 < 10){
	  		analysis103 = "For"+ml+intc103+ml+"North bound Slow flow of traffic";
	  	}else if(jf103 == 10){
	  		analysis103 = "For"+ml+intc103+ml+"North bound Traffic stopped or Road closed"
	  	}else{
	  		analysis103 = "Cannot compute"
	  	}

	  	let analysis104 = "";
	  	if(jf104 == 0 || jf104 < 4){
	  		analysis104 = "For"+ml+intc104+ml+"North bound Free flow of traffic";
	  	}else if(jf104 == 4 || jf104 < 8){
	  		analysis104 = "For"+ml+intc104+ml+"North bound Sluggish flow of traffic";
	  	}else if(jf104 == 8 || jf104 < 10){
	  		analysis104 = "For"+ml+intc104+ml+"North bound Slow flow of traffic";
	  	}else if(jf104 == 10){
	  		analysis104 = "For"+ml+intc104+ml+"North bound Traffic stopped or Road closed"
	  	}else{
	  		analysis104 = "Cannot compute"
	  	}

	  	let analysis105 = "";
	  	if(jf105 == 0 || jf105 < 4){
	  		analysis105 = "For"+ml+intc105+ml+"North bound Free flow of traffic";
	  	}else if(jf105 == 4 || jf105 < 8){
	  		analysis105 = "For"+ml+intc105+ml+"North bound Sluggish flow of traffic";
	  	}else if(jf105 == 8 || jf105 < 10){
	  		analysis105 = "For"+ml+intc105+ml+"North bound Slow flow of traffic";
	  	}else if(jf105 == 10){
	  		analysis105 = "For"+ml+intc105+ml+"North bound Traffic stopped or Road closed"
	  	}else{
	  		analysis105 = "Cannot compute"
	  	}

	  	let analysis106 = "";
	  	if(jf106 == 0 || jf106 < 4){
	  		analysis106 = "For"+ml+intc106+ml+"North bound Free flow of traffic";
	  	}else if(jf106 == 4 || jf106 < 8){
	  		analysis106 = "For"+ml+intc106+ml+"North bound Sluggish flow of traffic";
	  	}else if(jf106 == 8 || jf106 < 10){
	  		analysis106 = "For"+ml+intc106+ml+"North bound Slow flow of traffic";
	  	}else if(jf106 == 10){
	  		analysis106 = "For"+ml+intc106+ml+"North bound Traffic stopped or Road closed"
	  	}else{
	  		analysis106 = "Cannot compute"
	  	}

	  	let analysis107 = "";
	  	if(jf107 == 0 || jf107 < 4){
	  		analysis107 = "For"+ml+intc107+ml+"North bound Free flow of traffic";
	  	}else if(jf107 == 4 || jf107 < 8){
	  		analysis107 = "For"+ml+intc107+ml+"North bound Sluggish flow of traffic";
	  	}else if(jf107 == 8 || jf107 < 10){
	  		analysis107 = "For"+ml+intc107+ml+"North bound Slow flow of traffic";
	  	}else if(jf107 == 10){
	  		analysis107 = "For"+ml+intc107+ml+"North bound Traffic stopped or Road closed"
	  	}else{
	  		analysis107 = "Cannot compute"
	  	}

	  	let analysis108 = "";
	  	if(jf108 == 0 || jf108 < 4){
	  		analysis108 = "For"+ml+intc108+ml+"North bound Free flow of traffic";
	  	}else if(jf108 == 4 || jf108 < 8){
	  		analysis108 = "For"+ml+intc108+ml+"North bound Sluggish flow of traffic";
	  	}else if(jf108 == 8 || jf108 < 10){
	  		analysis108 = "For"+ml+intc108+ml+"North bound Slow flow of traffic";
	  	}else if(jf108 == 10){
	  		analysis108 = "For"+ml+intc108+ml+"North bound Traffic stopped or Road closed"
	  	}else{
	  		analysis108 = "Cannot compute"
	  	}
	  	
	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({ mlquezon1: mlquezon1, intc97: intc97, jf97: jf97,  intc98: intc98, jf98: jf98, intc99: intc99, jf99: jf99, intc100: intc100, jf100: jf100, intc101: intc101, jf101: jf101, intc102: intc102, jf102: jf102,
    	analysis97:analysis97, analysis98:analysis98, analysis99:analysis99, analysis100:analysis100, analysis101:analysis101, analysis102: analysis102, mlquezoon1: mlquezoon1, intc103: intc103, jf103: jf103,  intc104: intc104, jf104: jf104, intc105: intc105, jf105: jf105, intc106: intc106, jf106: jf106, intc107: intc107, jf107: jf107, intc108: intc108, jf108: jf108,
    	analysis103:analysis103, analysis104:analysis104, analysis105:analysis105, analysis106:analysis106, analysis107:analysis107, analysis108: analysis108}));  
	});
});

app.get('/cabaguio',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }
	    //north 
	  	cabaguio1 = body.RWS[0].RW[21].DE;
	  	const intc109 = body.RWS[0].RW[21].FIS[0].FI[0].TMC.DE; 
	  	const jf109 = body.RWS[0].RW[21].FIS[0].FI[0].CF[0].JF;	
	  	const intc110 = body.RWS[0].RW[21].FIS[0].FI[1].TMC.DE;
	  	const jf110 = body.RWS[0].RW[21].FIS[0].FI[1].CF[0].JF;
	  	

	  	var ca = ' ';//space ni
	  	let analysis109 = "";
	  	if(jf109 == 0 || jf109 < 4){
	  		analysis109 = "For"+ca+intc109+ca+"South bound Free flow of traffic";
	  	}else if(jf109 == 4 || jf109 < 8){
	  		analysis109 = "For"+ca+intc109+ca+"South bound Sluggish flow of traffic";
	  	}else if(jf109 == 8 || jf109 < 10){
	  		analysis109 = "For"+ca+intc109+ca+"South bound Slow flow of traffic";
	  	}else if(jf109 == 10){
	  		analysis109 = "For"+ca+intc109+ca+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis109 = "Cannot compute"
	  	}

	  	let analysis110 = "";
	  	if(jf110 == 0 || jf110 < 4){
	  		analysis110 = "For"+ca+intc110+ca+"South bound Free flow of traffic";
	  	}else if(jf110 == 4 || jf110 < 8){
	  		analysis110 = "For"+ca+intc110+ca+"South bound Sluggish flow of traffic";
	  	}else if(jf110 == 8 || jf110 < 10){
	  		analysis110 = "For"+ca+intc110+ca+"South bound Slow flow of traffic";
	  	}else if(jf110 == 10){
	  		analysis110 = "For"+ca+intc110+ca+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis110 = "Cannot compute"
	  	}

	  	const cabaguioo1 = body.RWS[0].RW[24].DE;
	  	const intc111 = body.RWS[0].RW[24].FIS[0].FI[0].TMC.DE; 
	  	const jf111 = body.RWS[0].RW[24].FIS[0].FI[0].CF[0].JF;	
	  	const intc112 = body.RWS[0].RW[24].FIS[0].FI[1].TMC.DE;
	  	const jf112 = body.RWS[0].RW[24].FIS[0].FI[1].CF[0].JF;

	  	var ca = ' ';//space ni
	  	let analysis111 = "";
	  	if(jf111 == 0 || jf111 < 4){
	  		analysis111 = "For"+ca+intc111+ca+"North bound Free flow of traffic";
	  	}else if(jf111 == 4 || jf111 < 8){
	  		analysis111 = "For"+ca+intc111+ca+"North bound Sluggish flow of traffic";
	  	}else if(jf111 == 8 || jf111 < 10){
	  		analysis111 = "For"+ca+intc111+ca+"North bound Slow flow of traffic";
	  	}else if(jf111 == 10){
	  		analysis111 = "For"+ca+intc111+ca+"North bound Traffic stopped or Road closed"
	  	}else{
	  		analysis111 = "Cannot compute"
	  	}

	  	let analysis112 = "";
	  	if(jf112 == 0 || jf112 < 4){
	  		analysis112 = "For"+ca+intc112+ca+"North bound Free flow of traffic";
	  	}else if(jf112 == 4 || jf112 < 8){
	  		analysis112 = "For"+ca+intc112+ca+"North bound Sluggish flow of traffic";
	  	}else if(jf112 == 8 || jf112 < 10){
	  		analysis112 = "For"+ca+intc112+ca+"North bound Slow flow of traffic";
	  	}else if(jf112 == 10){
	  		analysis112 = "For"+ca+intc112+ca+"North bound Traffic stopped or Road closed"
	  	}else{
	  		analysis112 = "Cannot compute"
	  	}
	  	
	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({ cabaguio1: cabaguio1, intc109: intc109, jf109: jf109,  intc110: intc110, jf110: jf110, analysis109:analysis109, analysis110:analysis110, cabaguioo1: cabaguioo1, intc111: intc111, jf111: jf111, intc112: intc112, jf112: jf112, 
    	 analysis111:analysis111, analysis112: analysis112}));  
	});
});

app.get('/dacudao',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }
	    //north 
	  	dacudao1 = body.RWS[0].RW[23].DE;
	  	const intc113 = body.RWS[0].RW[23].FIS[0].FI[0].TMC.DE; 
	  	const jf113 = body.RWS[0].RW[23].FIS[0].FI[0].CF[0].JF;	
	  	const intc114 = body.RWS[0].RW[23].FIS[0].FI[1].TMC.DE;
	  	const jf114 = body.RWS[0].RW[23].FIS[0].FI[1].CF[0].JF;
	  	

	  	var da = ' ';//space ni
	  	let analysis113 = "";
	  	if(jf113 == 0 || jf113 < 4){
	  		analysis113 = "For"+da+intc113+da+"South bound Free flow of traffic";
	  	}else if(jf113 == 4 || jf113 < 8){
	  		analysis113 = "For"+da+intc113+da+"South bound Sluggish flow of traffic";
	  	}else if(jf113 == 8 || jf113 < 10){
	  		analysis113 = "For"+da+intc113+da+"South bound Slow flow of traffic";
	  	}else if(jf113 == 10){
	  		analysis113 = "For"+da+intc113+da+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis113 = "Cannot compute"
	  	}

	  	let analysis114 = "";
	  	if(jf114 == 0 || jf114 < 4){
	  		analysis114 = "For"+da+intc114+da+"South bound Free flow of traffic";
	  	}else if(jf114 == 4 || jf114 < 8){
	  		analysis114 = "For"+da+intc114+da+"South bound Sluggish flow of traffic";
	  	}else if(jf114 == 8 || jf114 < 10){
	  		analysis114 = "For"+da+intc114+da+"South bound Slow flow of traffic";
	  	}else if(jf114 == 10){
	  		analysis114 = "For"+da+intc114+da+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis114 = "Cannot compute"
	  	}

	  	const dacudaoo1 = body.RWS[0].RW[25].DE;
	  	const intc115 = body.RWS[0].RW[25].FIS[0].FI[0].TMC.DE; 
	  	const jf115 = body.RWS[0].RW[25].FIS[0].FI[0].CF[0].JF;	
	  	const intc116 = body.RWS[0].RW[25].FIS[0].FI[1].TMC.DE;
	  	const jf116 = body.RWS[0].RW[25].FIS[0].FI[1].CF[0].JF;

	  	var da = ' ';//space ni
	  	let analysis115 = "";
	  	if(jf115 == 0 || jf115 < 4){
	  		analysis115 = "For"+da+intc115+da+"North bound Free flow of traffic";
	  	}else if(jf115 == 4 || jf115 < 8){
	  		analysis115 = "For"+da+intc115+da+"North bound Sluggish flow of traffic";
	  	}else if(jf115 == 8 || jf115 < 10){
	  		analysis115 = "For"+da+intc115+da+"North bound Slow flow of traffic";
	  	}else if(jf115 == 10){
	  		analysis115 = "For"+da+intc115+da+"North bound Traffic stopped or Road closed"
	  	}else{
	  		analysis115 = "Cannot compute"
	  	}

	  	let analysis116 = "";
	  	if(jf116 == 0 || jf116 < 4){
	  		analysis116 = "For"+da+intc116+da+"North bound Free flow of traffic";
	  	}else if(jf116 == 4 || jf116 < 8){
	  		analysis116 = "For"+da+intc116+da+"North bound Sluggish flow of traffic";
	  	}else if(jf116 == 8 || jf116 < 10){
	  		analysis116 = "For"+da+intc116+da+"North bound Slow flow of traffic";
	  	}else if(jf116 == 10){
	  		analysis116 = "For"+da+intc116+da+"North bound Traffic stopped or Road closed"
	  	}else{
	  		analysis116 = "Cannot compute"
	  	}
	  	
	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({ dacudao1: dacudao1, intc113: intc113, jf113: jf113,  intc114: intc114, jf114: jf114, analysis113:analysis113, analysis114:analysis114, dacudaoo1: dacudaoo1, intc115: intc115, jf115: jf115, intc116: intc116, jf116: jf116, 
    	 analysis115:analysis115, analysis116: analysis116}));  
	});
});

app.get('/pichonst',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }
	    //north 
	  	pichonst1 = body.RWS[0].RW[26].DE;
	  	const intc117 = body.RWS[0].RW[26].FIS[0].FI[0].TMC.DE; 
	  	const jf117 = body.RWS[0].RW[26].FIS[0].FI[0].CF[0].JF;	
	  	const intc118 = body.RWS[0].RW[26].FIS[0].FI[1].TMC.DE;
	  	const jf118 = body.RWS[0].RW[26].FIS[0].FI[1].CF[0].JF;
	  	const intc119 = body.RWS[0].RW[26].FIS[0].FI[2].TMC.DE;
	  	const jf119 = body.RWS[0].RW[26].FIS[0].FI[2].CF[0].JF;
	  	const intc120 = body.RWS[0].RW[26].FIS[0].FI[3].TMC.DE;
	  	const jf120 = body.RWS[0].RW[26].FIS[0].FI[3].CF[0].JF;
	  	const intc121 = body.RWS[0].RW[26].FIS[0].FI[4].TMC.DE;
	  	const jf121 = body.RWS[0].RW[26].FIS[0].FI[4].CF[0].JF;
	  	

	  	var pic = ' ';//space ni
	  	let analysis117 = "";
	  	if(jf117 == 0 || jf117 < 4){
	  		analysis117 = "For"+pic+intc117+pic+"South bound Free flow of traffic";
	  	}else if(jf117 == 4 || jf117 < 8){
	  		analysis117 = "For"+pic+intc117+pic+"South bound Sluggish flow of traffic";
	  	}else if(jf117 == 8 || jf117 < 10){
	  		analysis117 = "For"+pic+intc117+pic+"South bound Slow flow of traffic";
	  	}else if(jf117 == 10){
	  		analysis117 = "For"+pic+intc117+pic+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis117 = "Cannot compute"
	  	}

	  	let analysis118 = "";
	  	if(jf118 == 0 || jf118 < 4){
	  		analysis118 = "For"+pic+intc118+pic+"South bound Free flow of traffic";
	  	}else if(jf118 == 4 || jf118 < 8){
	  		analysis118 = "For"+pic+intc118+pic+"South bound Sluggish flow of traffic";
	  	}else if(jf118 == 8 || jf118 < 10){
	  		analysis118 = "For"+pic+intc118+pic+"South bound Slow flow of traffic";
	  	}else if(jf118 == 10){
	  		analysis118 = "For"+pic+intc118+pic+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis118 = "Cannot compute"
	  	}

	  	let analysis119 = "";
	  	if(jf119 == 0 || jf119 < 4){
	  		analysis119 = "For"+pic+intc119+pic+"South bound Free flow of traffic";
	  	}else if(jf119 == 4 || jf119 < 8){
	  		analysis119 = "For"+pic+intc119+pic+"South bound Sluggish flow of traffic";
	  	}else if(jf119 == 8 || jf119 < 10){
	  		analysis119 = "For"+pic+intc119+pic+"South bound Slow flow of traffic";
	  	}else if(jf119 == 10){
	  		analysis119 = "For"+pic+intc119+pic+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis119 = "Cannot compute"
	  	}

	  	let analysis120 = "";
	  	if(jf120 == 0 || jf120 < 4){
	  		analysis120 = "For"+pic+intc120+pic+"South bound Free flow of traffic";
	  	}else if(jf120 == 4 || jf120 < 8){
	  		analysis120 = "For"+pic+intc120+pic+"South bound Sluggish flow of traffic";
	  	}else if(jf120 == 8 || jf120 < 10){
	  		analysis120 = "For"+pic+intc120+pic+"South bound Slow flow of traffic";
	  	}else if(jf120 == 10){
	  		analysis120 = "For"+pic+intc120+pic+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis120 = "Cannot compute"
	  	}

	  	let analysis121 = "";
	  	if(jf121 == 0 || jf121 < 4){
	  		analysis121 = "For"+pic+intc121+pic+"South bound Free flow of traffic";
	  	}else if(jf121 == 4 || jf121 < 8){
	  		analysis121 = "For"+pic+intc121+pic+"South bound Sluggish flow of traffic";
	  	}else if(jf121 == 8 || jf121 < 10){
	  		analysis121 = "For"+pic+intc121+pic+"South bound Slow flow of traffic";
	  	}else if(jf121 == 10){
	  		analysis121 = "For"+pic+intc121+pic+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis121 = "Cannot compute"
	  	}

	  	const pichoonst1 = body.RWS[0].RW[27].DE;
	  	const intc122 = body.RWS[0].RW[27].FIS[0].FI[0].TMC.DE; 
	  	const jf122 = body.RWS[0].RW[27].FIS[0].FI[0].CF[0].JF;	

	  	var pic = ' ';//space ni
	  	let analysis122 = "";
	  	if(jf122 == 0 || jf122 < 4){
	  		analysis122 = "For"+pic+intc122+pic+"North bound Free flow of traffic";
	  	}else if(jf122 == 4 || jf122 < 8){
	  		analysis122 = "For"+pic+intc122+pic+"North bound Sluggish flow of traffic";
	  	}else if(jf122 == 8 || jf122 < 10){
	  		analysis122 = "For"+pic+intc122+pic+"North bound Slow flow of traffic";
	  	}else if(jf122 == 10){
	  		analysis122 = "For"+pic+intc122+pic+"North bound Traffic stopped or Road closed"
	  	}else{
	  		analysis122 = "Cannot compute"
	  	}

	  	
	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({ pichonst1: pichonst1, intc117: intc117, jf117: jf117,  intc118: intc118, jf118: jf118, intc119: intc119, jf119: jf119, intc120: intc120, jf120: jf120, intc121: intc121, jf121: jf121, analysis117:analysis117, analysis118:analysis118, analysis119:analysis119, analysis120:analysis120, analysis121:analysis121,
    	 pichoonst1: pichonst1, intc122: intc122, jf122: jf122, analysis122:analysis122}));  
	});
});

app.get('/sanpedrost',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }
	    //north 
	  	sanpedro1 = body.RWS[0].RW[28].DE;
	  	const intc123 = body.RWS[0].RW[28].FIS[0].FI[0].TMC.DE; 
	  	const jf123 = body.RWS[0].RW[28].FIS[0].FI[0].CF[0].JF;	
	  	const intc124 = body.RWS[0].RW[28].FIS[0].FI[1].TMC.DE;
	  	const jf124 = body.RWS[0].RW[28].FIS[0].FI[1].CF[0].JF;
	  	const intc125 = body.RWS[0].RW[28].FIS[0].FI[2].TMC.DE;
	  	const jf125 = body.RWS[0].RW[28].FIS[0].FI[2].CF[0].JF;
	  	const intc126 = body.RWS[0].RW[28].FIS[0].FI[3].TMC.DE;
	  	const jf126 = body.RWS[0].RW[28].FIS[0].FI[3].CF[0].JF;
	  	
	  	var san = ' ';//space ni
	  	let analysis123 = "";
	  	if(jf123 == 0 || jf123 < 4){
	  		analysis123 = "For"+san+intc123+san+"North bound Free flow of traffic";
	  	}else if(jf123 == 4 || jf123 < 8){
	  		analysis123 = "For"+san+intc123+san+"North bound Sluggish flow of traffic";
	  	}else if(jf123 == 8 || jf123 < 10){
	  		analysis123 = "For"+san+intc123+san+"North bound Slow flow of traffic";
	  	}else if(jf123 == 10){
	  		analysis123 = "For"+san+intc123+san+"North bound Traffic stopped or Road closed"
	  	}else{
	  		analysis123 = "Cannot compute"
	  	}

	  	let analysis124 = "";
	  	if(jf124 == 0 || jf124 < 4){
	  		analysis124 = "For"+san+intc124+san+"North bound Free flow of traffic";
	  	}else if(jf124 == 4 || jf124 < 8){
	  		analysis124 = "For"+san+intc124+san+"North bound Sluggish flow of traffic";
	  	}else if(jf124 == 8 || jf124 < 10){
	  		analysis124 = "For"+san+intc124+san+"North bound Slow flow of traffic";
	  	}else if(jf124 == 10){
	  		analysis124 = "For"+san+intc124+san+"North bound Traffic stopped or Road closed"
	  	}else{
	  		analysis124 = "Cannot compute"
	  	}

	  	let analysis125 = "";
	  	if(jf125 == 0 || jf125 < 4){
	  		analysis125 = "For"+san+intc125+san+"North bound Free flow of traffic";
	  	}else if(jf125 == 4 || jf125 < 8){
	  		analysis125 = "For"+san+intc125+san+"North bound Sluggish flow of traffic";
	  	}else if(jf125 == 8 || jf125 < 10){
	  		analysis125 = "For"+san+intc125+san+"North bound Slow flow of traffic";
	  	}else if(jf125 == 10){
	  		analysis125 = "For"+san+intc125+san+"North bound Traffic stopped or Road closed"
	  	}else{
	  		analysis125 = "Cannot compute"
	  	}

	  	let analysis126 = "";
	  	if(jf126 == 0 || jf126 < 4){
	  		analysis126 = "For"+san+intc126+san+"North bound Free flow of traffic";
	  	}else if(jf126 == 4 || jf126 < 8){
	  		analysis126 = "For"+san+intc126+san+"North bound Sluggish flow of traffic";
	  	}else if(jf126 == 8 || jf126 < 10){
	  		analysis126 = "For"+san+intc126+san+"North bound Slow flow of traffic";
	  	}else if(jf126 == 10){
	  		analysis126 = "For"+san+intc126+san+"North bound Traffic stopped or Road closed"
	  	}else{
	  		analysis126 = "Cannot compute"
	  	}

	  	
	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({ sanpedro1: sanpedro1, intc123: intc123, jf123: jf123,  intc124: intc124, jf124: jf124, intc125: intc125, jf125: jf125, intc126: intc126, jf126: jf126, 
    	 analysis123:analysis123, analysis124:analysis124, analysis125:analysis125, analysis126:analysis126}));  
	});
});

app.get('/bonifaciost',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }
	    //north 
	  	bonifaciost1 = body.RWS[0].RW[30].DE;
	  	const intc127 = body.RWS[0].RW[30].FIS[0].FI[0].TMC.DE; 
	  	const jf127 = body.RWS[0].RW[30].FIS[0].FI[0].CF[0].JF;	
	  	const intc128 = body.RWS[0].RW[30].FIS[0].FI[1].TMC.DE;
	  	const jf128 = body.RWS[0].RW[30].FIS[0].FI[1].CF[0].JF;
	  	const intc129 = body.RWS[0].RW[30].FIS[0].FI[2].TMC.DE;
	  	const jf129 = body.RWS[0].RW[30].FIS[0].FI[2].CF[0].JF;
	  	
	  	var bo = ' ';//space ni
	  	let analysis127 = "";
	  	if(jf127 == 0 || jf127 < 4){
	  		analysis127 = "For"+bo+intc127+bo+"South bound Free flow of traffic";
	  	}else if(jf127 == 4 || jf127 < 8){
	  		analysis127 = "For"+bo+intc127+bo+"South bound Sluggish flow of traffic";
	  	}else if(jf127 == 8 || jf127 < 10){
	  		analysis127 = "For"+bo+intc127+bo+"South bound Slow flow of traffic";
	  	}else if(jf127 == 10){
	  		analysis127 = "For"+bo+intc127+bo+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis127 = "Cannot compute"
	  	}

	  	let analysis128 = "";
	  	if(jf128 == 0 || jf128 < 4){
	  		analysis128 = "For"+bo+intc128+bo+"South bound Free flow of traffic";
	  	}else if(jf128 == 4 || jf128 < 8){
	  		analysis128 = "For"+bo+intc128+bo+"South bound Sluggish flow of traffic";
	  	}else if(jf128 == 8 || jf128 < 10){
	  		analysis128 = "For"+bo+intc128+bo+"South bound Slow flow of traffic";
	  	}else if(jf128 == 10){
	  		analysis128 = "For"+bo+intc128+bo+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis128 = "Cannot compute"
	  	}

	  	let analysis129 = "";
	  	if(jf129 == 0 || jf129 < 4){
	  		analysis129 = "For"+bo+intc129+bo+"South bound Free flow of traffic";
	  	}else if(jf129 == 4 || jf129 < 8){
	  		analysis129 = "For"+bo+intc129+bo+"South bound Sluggish flow of traffic";
	  	}else if(jf129 == 8 || jf129 < 10){
	  		analysis129 = "For"+bo+intc129+bo+"South bound Slow flow of traffic";
	  	}else if(jf129 == 10){
	  		analysis129 = "For"+bo+intc129+bo+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis129 = "Cannot compute"
	  	}

	  	const bonifacioost1 = body.RWS[0].RW[33].DE;
	  	const intc130 = body.RWS[0].RW[33].FIS[0].FI[0].TMC.DE; 
	  	const jf130 = body.RWS[0].RW[33].FIS[0].FI[0].CF[0].JF;	
	  	const intc131 = body.RWS[0].RW[33].FIS[0].FI[1].TMC.DE;
	  	const jf131 = body.RWS[0].RW[33].FIS[0].FI[1].CF[0].JF;
	  	const intc132 = body.RWS[0].RW[33].FIS[0].FI[2].TMC.DE;
	  	const jf132 = body.RWS[0].RW[33].FIS[0].FI[2].CF[0].JF;


	  	var bo = ' ';//space ni
	  	let analysis130 = "";
	  	if(jf130 == 0 || jf130 < 4){
	  		analysis130 = "For"+bo+intc130+bo+"North bound Free flow of traffic";
	  	}else if(jf130 == 4 || jf130 < 8){
	  		analysis130 = "For"+bo+intc130+bo+"North bound Sluggish flow of traffic";
	  	}else if(jf130 == 8 || jf130 < 10){
	  		analysis130 = "For"+bo+intc130+bo+"North bound Slow flow of traffic";
	  	}else if(jf130 == 10){
	  		analysis130 = "For"+bo+intc130+bo+"North bound Traffic stopped or Road closed"
	  	}else{
	  		analysis130 = "Cannot compute"
	  	}
	  	let analysis131 = "";
	  	if(jf131 == 0 || jf131 < 4){
	  		analysis131 = "For"+bo+intc131+bo+"North bound Free flow of traffic";
	  	}else if(jf131 == 4 || jf131 < 8){
	  		analysis131 = "For"+bo+intc131+bo+"North bound Sluggish flow of traffic";
	  	}else if(jf131 == 8 || jf131 < 10){
	  		analysis131 = "For"+bo+intc131+bo+"North bound Slow flow of traffic";
	  	}else if(jf131 == 10){
	  		analysis131 = "For"+bo+intc131+bo+"North bound Traffic stopped or Road closed"
	  	}else{
	  		analysis131 = "Cannot compute"
	  	}
	  	let analysis132 = "";
	  	if(jf132 == 0 || jf132 < 4){
	  		analysis132 = "For"+bo+intc132+bo+"North bound Free flow of traffic";
	  	}else if(jf132 == 4 || jf132 < 8){
	  		analysis132 = "For"+bo+intc132+bo+"North bound Sluggish flow of traffic";
	  	}else if(jf132 == 8 || jf132 < 10){
	  		analysis132 = "For"+bo+intc132+bo+"North bound Slow flow of traffic";
	  	}else if(jf132 == 10){
	  		analysis132 = "For"+bo+intc132+bo+"North bound Traffic stopped or Road closed"
	  	}else{
	  		analysis132 = "Cannot compute"
	  	}

	  	
	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({ bonifaciost1: bonifaciost1, intc127: intc127, jf127: jf127,  intc128: intc128, jf128: jf128, intc129: intc129, jf129: jf129, analysis127:analysis127, analysis128:analysis128, analysis129:analysis129,
    	 bonifacioost1: bonifacioost1, intc130: intc130, jf130: jf130, intc131: intc131, jf131: jf131, intc132: intc132, jf132: jf132,  analysis130:analysis130,  analysis131:analysis131,  analysis132:analysis132}));  
	});
});

app.get('/ftorrest',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }
	    //north 
	  	ftorrest1 = body.RWS[0].RW[31].DE;
	  	const intc133 = body.RWS[0].RW[31].FIS[0].FI[0].TMC.DE; 
	  	const jf133 = body.RWS[0].RW[31].FIS[0].FI[0].CF[0].JF;	
	  	const intc134 = body.RWS[0].RW[31].FIS[0].FI[1].TMC.DE;
	  	const jf134 = body.RWS[0].RW[31].FIS[0].FI[1].CF[0].JF;
	  	
	  	var ft = ' ';//space ni
	  	let analysis133 = "";
	  	if(jf133 == 0 || jf133 < 4){
	  		analysis133 = "For"+ft+intc133+ft+"South bound Free flow of traffic";
	  	}else if(jf133 == 4 || jf133 < 8){
	  		analysis133 = "For"+ft+intc133+ft+"South bound Sluggish flow of traffic";
	  	}else if(jf133 == 8 || jf133 < 10){
	  		analysis133 = "For"+ft+intc133+ft+"South bound Slow flow of traffic";
	  	}else if(jf133 == 10){
	  		analysis133 = "For"+ft+intc133+ft+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis133 = "Cannot compute"
	  	}

	  	let analysis134 = "";
	  	if(jf134 == 0 || jf134 < 4){
	  		analysis134 = "For"+ft+intc134+ft+"South bound Free flow of traffic";
	  	}else if(jf134 == 4 || jf134 < 8){
	  		analysis134 = "For"+ft+intc134+ft+"South bound Sluggish flow of traffic";
	  	}else if(jf134 == 8 || jf134 < 10){
	  		analysis134 = "For"+ft+intc134+ft+"South bound Slow flow of traffic";
	  	}else if(jf134 == 10){
	  		analysis134 = "For"+ft+intc134+ft+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis134 = "Cannot compute"
	  	}


	  	const ftorreest1 = body.RWS[0].RW[32].DE;
	  	const intc135 = body.RWS[0].RW[32].FIS[0].FI[0].TMC.DE; 
	  	const jf135 = body.RWS[0].RW[32].FIS[0].FI[0].CF[0].JF;	
	  	const intc136 = body.RWS[0].RW[32].FIS[0].FI[1].TMC.DE;
	  	const jf136 = body.RWS[0].RW[32].FIS[0].FI[1].CF[0].JF;

	  	var ft = ' ';//space ni
	  	let analysis135 = "";
	  	if(jf135 == 0 || jf135 < 4){
	  		analysis135 = "For"+ft+intc135+ft+"North bound Free flow of traffic";
	  	}else if(jf135 == 4 || jf135 < 8){
	  		analysis135 = "For"+ft+intc135+ft+"North bound Sluggish flow of traffic";
	  	}else if(jf135 == 8 || jf135 < 10){
	  		analysis135 = "For"+ft+intc135+ft+"North bound Slow flow of traffic";
	  	}else if(jf135 == 10){
	  		analysis135 = "For"+ft+intc135+ft+"North bound Traffic stopped or Road closed"
	  	}else{
	  		analysis135 = "Cannot compute"
	  	}
	  	let analysis136 = "";
	  	if(jf136 == 0 || jf136 < 4){
	  		analysis136 = "For"+ft+intc136+ft+"North bound Free flow of traffic";
	  	}else if(jf136 == 4 || jf136 < 8){
	  		analysis136 = "For"+ft+intc136+ft+"North bound Sluggish flow of traffic";
	  	}else if(jf136 == 8 || jf136 < 10){
	  		analysis136 = "For"+ft+intc136+ft+"North bound Slow flow of traffic";
	  	}else if(jf136 == 10){
	  		analysis136 = "For"+ft+intc136+ft+"North bound Traffic stopped or Road closed"
	  	}else{
	  		analysis136 = "Cannot compute"
	  	}
	  	
	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({ ftorrest1: ftorrest1, intc133: intc133, jf144: jf133,  intc134: intc134, jf134: jf134, analysis133:analysis133, analysis134:analysis134,
    	 ftorreest1: ftorreest1, intc135: intc135, jf135: jf135, intc136: intc136, jf136: jf136, analysis135:analysis135,  analysis136:analysis136}));  
	});
});

app.get('/mroxas',function(_req, _res){

	request('https://traffic.api.here.com/traffic/6.1/flow.json?bbox=7.2598%2C125.0860%3B6.7670%2C125.6674&app_id=fQbW8CGYiU3l5mLqWgBE&app_code=SYZXwjFBHSYi_1t1GNuHow', { json: true }, (err, res, body) => {
	  if (err) { return console.log(err); }
	    //north 
	  	mroxas1 = body.RWS[0].RW[34].DE;
	  	const intc137 = body.RWS[0].RW[34].FIS[0].FI[0].TMC.DE; 
	  	const jf137 = body.RWS[0].RW[34].FIS[0].FI[0].CF[0].JF;	
	  	const intc138 = body.RWS[0].RW[34].FIS[0].FI[1].TMC.DE;
	  	const jf138 = body.RWS[0].RW[34].FIS[0].FI[1].CF[0].JF;
	  	const intc139 = body.RWS[0].RW[34].FIS[0].FI[2].TMC.DE;
	  	const jf139 = body.RWS[0].RW[34].FIS[0].FI[2].CF[0].JF;
	  	
	  	var mr = ' ';//space ni
	  	let analysis137 = "";
	  	if(jf137 == 0 || jf137 < 4){
	  		analysis137 = "For"+mr+intc137+mr+"South bound Free flow of traffic";
	  	}else if(jf137 == 4 || jf137 < 8){
	  		analysis137 = "For"+mr+intc137+mr+"South bound Sluggish flow of traffic";
	  	}else if(jf137 == 8 || jf137 < 10){
	  		analysis137 = "For"+mr+intc137+mr+"South bound Slow flow of traffic";
	  	}else if(jf137 == 10){
	  		analysis137 = "For"+mr+intc137+mr+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis137 = "Cannot compute"
	  	}

	  	let analysis138 = "";
	  	if(jf138 == 0 || jf138 < 4){
	  		analysis138 = "For"+mr+intc138+mr+"South bound Free flow of traffic";
	  	}else if(jf138 == 4 || jf138 < 8){
	  		analysis138 = "For"+mr+intc138+mr+"South bound Sluggish flow of traffic";
	  	}else if(jf138 == 8 || jf138 < 10){
	  		analysis138 = "For"+mr+intc138+mr+"South bound Slow flow of traffic";
	  	}else if(jf138 == 10){
	  		analysis138 = "For"+mr+intc138+mr+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis138 = "Cannot compute"
	  	}

	  	let analysis139 = "";
	  	if(jf139 == 0 || jf139 < 4){
	  		analysis139 = "For"+mr+intc139+mr+"South bound Free flow of traffic";
	  	}else if(jf139 == 4 || jf139 < 8){
	  		analysis139 = "For"+mr+intc139+mr+"South bound Sluggish flow of traffic";
	  	}else if(jf139 == 8 || jf139 < 10){
	  		analysis139 = "For"+mr+intc139+mr+"South bound Slow flow of traffic";
	  	}else if(jf139 == 10){
	  		analysis139 = "For"+mr+intc139+mr+"South bound Traffic stopped or Road closed"
	  	}else{
	  		analysis139 = "Cannot compute"
	  	}

	  	const mroxaas1 = body.RWS[0].RW[35].DE;
	  	const intc140 = body.RWS[0].RW[35].FIS[0].FI[0].TMC.DE; 
	  	const jf140 = body.RWS[0].RW[35].FIS[0].FI[0].CF[0].JF;	
	  	const intc141 = body.RWS[0].RW[35].FIS[0].FI[1].TMC.DE;
	  	const jf141 = body.RWS[0].RW[35].FIS[0].FI[1].CF[0].JF;
	  	const intc142 = body.RWS[0].RW[35].FIS[0].FI[2].TMC.DE;
	  	const jf142 = body.RWS[0].RW[35].FIS[0].FI[2].CF[0].JF;


	  	var mr = ' ';//space ni
	  	let analysis140 = "";
	  	if(jf140 == 0 || jf140 < 4){
	  		analysis140 = "For"+mr+intc140+mr+"North bound Free flow of traffic";
	  	}else if(jf140 == 4 || jf140 < 8){
	  		analysis140 = "For"+mr+intc140+mr+"North bound Sluggish flow of traffic";
	  	}else if(jf140 == 8 || jf140 < 10){
	  		analysis140 = "For"+mr+intc140+mr+"North bound Slow flow of traffic";
	  	}else if(jf140 == 10){
	  		analysis140 = "For"+mr+intc140+mr+"North bound Traffic stopped or Road closed"
	  	}else{
	  		analysis140 = "Cannot compute"
	  	}
	  	let analysis141 = "";
	  	if(jf141 == 0 || jf141 < 4){
	  		analysis141 = "For"+mr+intc141+mr+"North bound Free flow of traffic";
	  	}else if(jf141 == 4 || jf141 < 8){
	  		analysis141 = "For"+mr+intc141+mr+"North bound Sluggish flow of traffic";
	  	}else if(jf141 == 8 || jf141 < 10){
	  		analysis141 = "For"+mr+intc141+mr+"North bound Slow flow of traffic";
	  	}else if(jf141 == 10){
	  		analysis141 = "For"+mr+intc141+mr+"North bound Traffic stopped or Road closed"
	  	}else{
	  		analysis141 = "Cannot compute"
	  	}
	  	let analysis142 = "";
	  	if(jf142 == 0 || jf142 < 4){
	  		analysis142 = "For"+mr+intc142+mr+"North bound Free flow of traffic";
	  	}else if(jf142 == 4 || jf142 < 8){
	  		analysis142 = "For"+mr+intc142+mr+"North bound Sluggish flow of traffic";
	  	}else if(jf142 == 8 || jf142 < 10){
	  		analysis142 = "For"+mr+intc142+mr+"North bound Slow flow of traffic";
	  	}else if(jf142 == 10){
	  		analysis142 = "For"+mr+intc142+mr+"North bound Traffic stopped or Road closed"
	  	}else{
	  		analysis142 = "Cannot compute"
	  	}

	  	
	  	_res.setHeader('Content-Type', 'application/json');
    	_res.send(JSON.stringify({ mroxas1: mroxas1, intc137: intc137, jf137: jf137,  intc138: intc138, jf138: jf138, intc139: intc139, jf139: jf139, analysis137:analysis137, analysis138:analysis138, analysis139:analysis139,
    	 mroxaas1: mroxaas1, intc140: intc140, jf140: jf140, intc141: intc141, jf141: jf141, intc142: intc142, jf142: jf142,  analysis140:analysis140,  analysis141:analysis141,  analysis142:analysis142}));  
	});
});

//-------------------------------------------

app.get('/geo',function(req, res){
	axios.get('http://trapiknapud.herokuapp.com/equirino')
	  .then(function (response) {
	    console.log(response.data);
	  
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });
})
app.get('/geo',function(req, res){
	axios.get('http://trapiknapud.herokuapp.com/jplauel')
	  .then(function (response) {
	    console.log(response.data);	  
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });
})
app.get('/geo',function(req, res){
	axios.get('http://trapiknapud.herokuapp.com/mcarthur')
	  .then(function (response) {
	    console.log(response.data);	  
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });
})
app.get('/geo',function(req, res){
	axios.get('http://trapiknapud.herokuapp.com/ecowestdr')
	  .then(function (response) {
	    console.log(response.data);	  
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });
})
app.get('/geo',function(req, res){
	axios.get('http://trapiknapud.herokuapp.com/matinaaplaya')
	  .then(function (response) {
	    console.log(response.data);	  
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });
})
app.get('/geo',function(req, res){
	axios.get('http://trapiknapud.herokuapp.com/ecoland')
	  .then(function (response) {
	    console.log(response.data);	  
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });
})
app.get('/geo',function(req, res){
	axios.get('http://trapiknapud.herokuapp.com/tulipdr')
	  .then(function (response) {
	    console.log(response.data);	  
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });
})
app.get('/geo',function(req, res){
	axios.get('http://trapiknapud.herokuapp.com/quimpoblvd')
	  .then(function (response) {
	    console.log(response.data);	  
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });
})
app.get('/geo',function(req, res){
	axios.get('http://trapiknapud.herokuapp.com/sandaward')
	  .then(function (response) {
	    console.log(response.data);	  
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });
})
app.get('/geo',function(req, res){
	axios.get('http://trapiknapud.herokuapp.com/quezonblvd')
	  .then(function (response) {
	    console.log(response.data);	  
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });
})

app.get('/geo',function(req, res){
	axios.get('http://trapiknapud.herokuapp.com/mlquezonblvd')
	  .then(function (response) {
	    console.log(response.data);	  
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });
})

app.get('/geo',function(req, res){
	axios.get('http://trapiknapud.herokuapp.com/cabaguio')
	  .then(function (response) {
	    console.log(response.data);	  
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });
})

app.get('/geo',function(req, res){
	axios.get('http://trapiknapud.herokuapp.com/dacudao')
	  .then(function (response) {
	    console.log(response.data);	  
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });
})

app.get('/geo',function(req, res){
	axios.get('http://trapiknapud.herokuapp.com/pichonst')
	  .then(function (response) {
	    console.log(response.data);	  
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });
})

app.get('/geo',function(req, res){
	axios.get('http://trapiknapud.herokuapp.com/sanpedrost')
	  .then(function (response) {
	    console.log(response.data);	  
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });
})

app.get('/geo',function(req, res){
	axios.get('http://trapiknapud.herokuapp.com/bonifaciost')
	  .then(function (response) {
	    console.log(response.data);	  
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });
})

app.get('/geo',function(req, res){
	axios.get('http://trapiknapud.herokuapp.com/ftorrest')
	  .then(function (response) {
	    console.log(response.data);	  
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });
})

app.get('/geo',function(req, res){
	axios.get('http://trapiknapud.herokuapp.com/mroxas')
	  .then(function (response) {
	    console.log(response.data);	  
	  })
	  .catch(function (error) {
	    console.log(error);
	 
	  });
})




//facebook reply---------------------------------------------------------------------------------------------------------------

var b = 'hallo';
//var a  = ' ';

app.post('/webhook/', function(req, res) {
	let messaging_events = req.body.entry[0].messaging
	for (let i = 0; i < messaging_events.length; i++) {
		let event = messaging_events[i]
		let sender = event.sender.id
		if (event.message && event.message.text) {
			let text = event.message.text
			var a  = ' ';
		//	streetj = body.RWS[0].RW[3].DE;
			if(text.includes('quirino north') || text.includes("Quirino North")|| text.includes("quirino North")){
				sendText(sender, "I guess you mean"+a+equirino1+a+"north intersections. The traffic status for the intersections.")
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
				let chatbotResponse4 = "";	
				axios.get('http://trapiknapud.herokuapp.com/equirino')
					.then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.analysis1;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis2;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis3;
				    sendText(sender, chatbotResponse2)
				    chatbotResponse3 = response.data.analysis4;
				    sendText(sender, chatbotResponse3)
				    chatbotResponse4 = response.data.analysis5;
				    sendText(sender, chatbotResponse4)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}
				else if(text.includes('quirino south') || text.includes("Quirino South")|| text.includes("quirino South")){
					sendText(sender, "I guess you mean"+a+equirino1+a+"south intersections. The traffic status for the intersections.")
					let chatbotResponse = "";
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";
					let chatbotResponse3 = "";
					let chatbotResponse4 = "";	
				//source : https://www.npmjs.com/package/axios
					axios.get('http://trapiknapud.herokuapp.com/equirino')
				  		.then(function (response) {
				    //console.log(response);
				    	chatbotResponse = response.data.analysis6;
				    	sendText(sender, chatbotResponse)
				    	chatbotResponse1 = response.data.analysis7;
				    	sendText(sender, chatbotResponse1)
				    	chatbotResponse2 = response.data.analysis8;
				    	sendText(sender, chatbotResponse2)
				    	chatbotResponse3 = response.data.analysis9;
				    	sendText(sender, chatbotResponse3)
				    	chatbotResponse4 = response.data.analysis10;
				    	sendText(sender, chatbotResponse4)
				 	})
				  	.catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text== ''+equirino1+a+'south intersections'){
				 //sendText(sender, "I guess you mean"+a+street+a+"north intersections. The traffic status for the intersections.")
					let chatbotResponse = "";
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";
					let chatbotResponse3 = "";
					let chatbotResponse4 = "";	
				//source : https://www.npmjs.com/package/axios
					axios.get('http://trapiknapud.herokuapp.com/equirino')
				  		.then(function (response) {
				    //console.log(response);
				   		chatbotResponse = response.data.analysis1;
				    	sendText(sender, chatbotResponse)
				    	chatbotResponse1 = response.data.analysis2;
				    	sendText(sender, chatbotResponse1)
				    	chatbotResponse2 = response.data.analysis3;
				    	sendText(sender, chatbotResponse2)
				    	chatbotResponse3 = response.data.analysis4;
				    	sendText(sender, chatbotResponse3)
				    	chatbotResponse4 = response.data.analysis5;
				    	sendText(sender, chatbotResponse4)
				  	})
				  	.catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}
				else if(text== ''+equirino1+a+'north intersections'){
				 //sendText(sender, "I guess you mean"+a+street+a+"north intersections. The traffic status for the intersections.")
					let chatbotResponse = "";
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";
					let chatbotResponse3 = "";
					let chatbotResponse4 = "";	
				//source : https://www.npmjs.com/package/axios
					axios.get('http://trapiknapud.herokuapp.com/equirino')
				  		.then(function (response) {
				    //console.log(response);
				    	chatbotResponse = response.data.analysis6;
				    	sendText(sender, chatbotResponse)
				    	chatbotResponse1 = response.data.analysis7;
				    	sendText(sender, chatbotResponse1)
				    	chatbotResponse2 = response.data.analysis8;
				    	sendText(sender, chatbotResponse2)
				    	chatbotResponse3 = response.data.analysis9;
				    	sendText(sender, chatbotResponse3)
				    	chatbotResponse4 = response.data.analysis10;
				    	sendText(sender, chatbotResponse4)
				  	})
				  	.catch(function (error) {
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}
				else if(text.includes('laurel north') || text.includes("Laurel North")|| text.includes("laurel North")){
					sendText(sender, "I guess you mean"+a+jplaurel1+a+"north intersections. The traffic status for the intersections.")
					let chatbotResponse = "";
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";
					let chatbotResponse3 = "";
					let chatbotResponse4 = "";
					let chatbotResponse5 = "";	
					axios.get('http://trapiknapud.herokuapp.com/jplaurel')
						.then(function (response) {
				    //console.log(response);
				    	chatbotResponse = response.data.analysis17;
				    	sendText(sender, chatbotResponse)
				    	chatbotResponse1 = response.data.analysis18;
				    	sendText(sender, chatbotResponse1)
				    	chatbotResponse2 = response.data.analysis19;
				    	sendText(sender, chatbotResponse2)
				    	chatbotResponse3 = response.data.analysis20;
				    	sendText(sender, chatbotResponse3)
				    	chatbotResponse4 = response.data.analysis21;
				    	sendText(sender, chatbotResponse4)
				     	chatbotResponse5 = response.data.analysis22;
				    	sendText(sender, chatbotResponse5)
				 	})
				  	.catch(function (error) {
				    //console.log(error);
				 		chatbotResponse = "not ok";
				    	sendText(sender, chatbotResponse)
				  	});
				  	break;
				}
				else if(text.includes('laurel south') || text.includes("Laurel south")|| text.includes("laurel South")){
					sendText(sender, "I guess you mean"+a+jplaurel1+a+"south intersections. The traffic status for the intersections.")
					let chatbotResponse = "";
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";
					let chatbotResponse3 = "";
					let chatbotResponse4 = "";
					let chatbotResponse5 = "";	
				axios.get('http://trapiknapud.herokuapp.com/jplaurel')
					.then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.analysis11;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis12;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis13;
				    sendText(sender, chatbotResponse2)
				    chatbotResponse3 = response.data.analysis14;
				    sendText(sender, chatbotResponse3)
				    chatbotResponse4 = response.data.analysis15;
				    sendText(sender, chatbotResponse4)
				    chatbotResponse5 = response.data.analysis16;
				    sendText(sender, chatbotResponse5)
				  })
				  	.catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text == ''+jplaurel1+a+'south intersections'){
				 //sendText(sender, "I guess you mean"+a+streetj+a+"south intersections. The traffic status for the intersections.")
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
				let chatbotResponse4 = "";
				let chatbotResponse5 = "";	
				axios.get('http://trapiknapud.herokuapp.com/jplaurel')
				  .then(function (response) {
				    //console.log(response);
				   chatbotResponse = response.data.analysis11;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis12;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis13;
				    sendText(sender, chatbotResponse2)
				    chatbotResponse3 = response.data.analysis14;
				    sendText(sender, chatbotResponse3)
				    chatbotResponse4 = response.data.analysis15;
				    sendText(sender, chatbotResponse4)
				    chatbotResponse5 = response.data.analysis16;
				    sendText(sender, chatbotResponse5)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}
				else if(text == ''+jplaurel1+a+'north intersections'){
				 //sendText(sender, "I guess you mean"+a+streetj+a+"south intersections. The traffic status for the intersections.")
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
				let chatbotResponse4 = "";
				let chatbotResponse5 = "";	
				axios.get('http://trapiknapud.herokuapp.com/jplaurel')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.analysis17;
				    sendText(sender, chatbotResponse)
				   	chatbotResponse1 = response.data.analysis18;
				   	sendText(sender, chatbotResponse1)
				   	chatbotResponse2 = response.data.analysis19;
				   	sendText(sender, chatbotResponse2)
			    	chatbotResponse3 = response.data.analysis20;
			    	sendText(sender, chatbotResponse3)
			    	chatbotResponse4 = response.data.analysis21;
			    	sendText(sender, chatbotResponse4)
			     	chatbotResponse5 = response.data.analysis22;
			    	sendText(sender, chatbotResponse5)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}
				else if(text.includes('mcarthur south') ||  text.includes('mcarthur South')){
					sendText(sender, "I guess you mean"+a+mcarthur1+a+"south intersections. The traffic status for the intersections.")
					let chatbotResponse = "";
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";
					let chatbotResponse3 = "";
					let chatbotResponse4 = "";
					let chatbotResponse5 = "";
					let chatbotResponse6 = "";
					let chatbotResponse7 = "";
					let chatbotResponse8 = "";
					let chatbotResponse9 = "";
					let chatbotResponse10 = "";
					let chatbotResponse11 = "";
					let chatbotResponse12 = "";
					let chatbotResponse13 = "";		
					axios.get('http://trapiknapud.herokuapp.com/mcarthur')
				  		.then(function (response) {
				    //console.log(response);
				    	chatbotResponse = response.data.analysis23;
				    	sendText(sender, chatbotResponse)
				    	chatbotResponse1 = response.data.analysis24;
				    	sendText(sender, chatbotResponse1)
				    	chatbotResponse2 = response.data.analysis25;
				    	sendText(sender, chatbotResponse2)
				    	chatbotResponse3 = response.data.analysis26;
				    	sendText(sender, chatbotResponse3)
				    	chatbotResponse4 = response.data.analysis27;
				    	sendText(sender, chatbotResponse4)
				    	chatbotResponse5 = response.data.analysis28;
				    	sendText(sender, chatbotResponse5)
				     	chatbotResponse6 = response.data.analysis29;
				    	sendText(sender, chatbotResponse6)
				    	chatbotResponse7 = response.data.analysis30;
				    	sendText(sender, chatbotResponse7)
				     	chatbotResponse8 = response.data.analysis31;
				    	sendText(sender, chatbotResponse8)
				    	chatbotResponse9 = response.data.analysis32;
				    	sendText(sender, chatbotResponse9)
				    	chatbotResponse10 = response.data.analysis33;
				    	sendText(sender, chatbotResponse10)
				    	chatbotResponse11 = response.data.analysis34;
				    	sendText(sender, chatbotResponse12)
				    	chatbotResponse12 = response.data.analysis35;
				    	sendText(sender, chatbotResponse12)
				    	chatbotResponse13 = response.data.analysis36;
				    	sendText(sender, chatbotResponse13)
				  	})
				  	.catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				 	});
				  break;
				}
				else if(text.includes('mcarthur north') || text.includes('mcarthur North')){
					sendText(sender, "I guess you mean"+a+mcarthur1+a+"north intersections. The traffic status for the intersections.")
					let chatbotResponse = "";
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";
					let chatbotResponse3 = "";
					let chatbotResponse4 = "";
					let chatbotResponse5 = "";
					let chatbotResponse6 = "";
					let chatbotResponse7 = "";
					let chatbotResponse8 = "";
					let chatbotResponse9 = "";
					let chatbotResponse10 = "";
					let chatbotResponse11 = "";
					let chatbotResponse12 = "";
					let chatbotResponse13 = "";			
					axios.get('http://trapiknapud.herokuapp.com/mcarthur')
				  		.then(function (response) {
				    //console.log(response);
				    	chatbotResponse = response.data.analysis37;
				    	sendText(sender, chatbotResponse)
				    	chatbotResponse1 = response.data.analysis38;
				    	sendText(sender, chatbotResponse1)
				    	chatbotResponse2 = response.data.analysis39;
				    	sendText(sender, chatbotResponse2)
				    	chatbotResponse3 = response.data.analysis40;
				    	sendText(sender, chatbotResponse3)
				    	chatbotResponse4 = response.data.analysis41;
				    	sendText(sender, chatbotResponse4)
				    	chatbotResponse5 = response.data.analysis42;
				    	sendText(sender, chatbotResponse5)
				    	chatbotResponse6 = response.data.analysis43;
				    	sendText(sender, chatbotResponse6)
				    	chatbotResponse7 = response.data.analysis44;
				    	sendText(sender, chatbotResponse7)
				    	chatbotResponse8 = response.data.analysis45;
				    	sendText(sender, chatbotResponse8)
				    	chatbotResponse9 = response.data.analysis46;
				    	sendText(sender, chatbotResponse9)
				    	chatbotResponse10 = response.data.analysis47;
				    	sendText(sender, chatbotResponse10)
				    	chatbotResponse11 = response.data.analysis48;
				    	sendText(sender, chatbotResponse12)
				    	chatbotResponse12 = response.data.analysis49;
				    	sendText(sender, chatbotResponse12)
				    	chatbotResponse13 = response.data.analysis50;
				    	sendText(sender, chatbotResponse13)
				    // chatbotResponse14 = response.data.analysis34;
				    // sendText(sender, chatbotResponse14)
				  	})
				  	.catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  	});
				  	break;
				}
				else if(text == ''+mcarthur1+a+'south intersections'){
				 //sendText(sender, "I guess you mean"+a+streetj+a+"south intersections. The traffic status for the intersections.")
					let chatbotResponse = "";
					let chatbotResponse1 = "";
					let chatbotResponse2 = "";
					let chatbotResponse3 = "";
					let chatbotResponse4 = "";
					let chatbotResponse5 = "";
					let chatbotResponse6 = "";
					let chatbotResponse7 = "";
					let chatbotResponse8 = "";
					let chatbotResponse9 = "";
					let chatbotResponse10 = "";
					let chatbotResponse11 = "";
					let chatbotResponse12 = "";
					let chatbotResponse13 = "";			
					axios.get('http://trapiknapud.herokuapp.com/mcarthur')
				 		.then(function (response) {
				    //console.log(response);
				    	chatbotResponse = response.data.analysis23;
				    	sendText(sender, chatbotResponse)
				    	chatbotResponse1 = response.data.analysis24;
				    	sendText(sender, chatbotResponse1)
				    	chatbotResponse2 = response.data.analysis25;
				    	sendText(sender, chatbotResponse2)
				    	chatbotResponse3 = response.data.analysis26;
				    	sendText(sender, chatbotResponse3)
				    	chatbotResponse4 = response.data.analysis27;
				    	sendText(sender, chatbotResponse4)
				    	chatbotResponse5 = response.data.analysis28;
				    	sendText(sender, chatbotResponse5)
				    	chatbotResponse6 = response.data.analysis29;
				    	sendText(sender, chatbotResponse6)
				    	chatbotResponse7 = response.data.analysis30;
				    	sendText(sender, chatbotResponse7)
				    	chatbotResponse8 = response.data.analysis31;
				    	sendText(sender, chatbotResponse8)
				    	chatbotResponse9 = response.data.analysis32;
				    	sendText(sender, chatbotResponse9)
				    	chatbotResponse10 = response.data.analysis33;
				    	sendText(sender, chatbotResponse10)
				    	chatbotResponse11 = response.data.analysis34;
				    	sendText(sender, chatbotResponse12)
				    	chatbotResponse12 = response.data.analysis35;
				   		sendText(sender, chatbotResponse12)
				   		chatbotResponse13 = response.data.analysis36;
				    	sendText(sender, chatbotResponse13)
				  	})
				  	.catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  	});
				  	break;
				}
				else if(text == ''+mcarthur1+a+'north intersections'){
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
				let chatbotResponse4 = "";
				let chatbotResponse5 = "";
				let chatbotResponse6 = "";
				let chatbotResponse7 = "";
				let chatbotResponse8 = "";
				let chatbotResponse9 = "";
				let chatbotResponse10 = "";
				let chatbotResponse11 = "";
				let chatbotResponse12 = "";
				let chatbotResponse13 = "";		
				axios.get('http://trapiknapud.herokuapp.com/mcarthur')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.analysis37;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis38;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis39;
				    sendText(sender, chatbotResponse2)
				    chatbotResponse3 = response.data.analysis40;
				    sendText(sender, chatbotResponse3)
				    chatbotResponse4 = response.data.analysis41;
				    sendText(sender, chatbotResponse4)
				    chatbotResponse5 = response.data.analysis42;
				    sendText(sender, chatbotResponse5)
				     chatbotResponse6 = response.data.analysis43;
				    sendText(sender, chatbotResponse6)
				     chatbotResponse7 = response.data.analysis44;
				    sendText(sender, chatbotResponse7)
				     chatbotResponse8 = response.data.analysis45;
				    sendText(sender, chatbotResponse8)
				     chatbotResponse9 = response.data.analysis46;
				    sendText(sender, chatbotResponse9)
				     chatbotResponse10 = response.data.analysis47;
				    sendText(sender, chatbotResponse10)
				     chatbotResponse11 = response.data.analysis48;
				    sendText(sender, chatbotResponse12)
				     chatbotResponse12 = response.data.analysis49;
				    sendText(sender, chatbotResponse12)
				    chatbotResponse13 = response.data.analysis50;
				    sendText(sender, chatbotResponse13)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}
				else if(text.includes('ecowest north') || text.includes("Ecowest North")|| text.includes("ecowest North")){
				sendText(sender, "I guess you mean"+a+ecowestdr1+a+"north intersections. The traffic status for the intersections.")
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				axios.get('http://trapiknapud.herokuapp.com/ecowestdr')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.analysis51;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis52;
				    sendText(sender, chatbotResponse1)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}
				else if(text.includes('ecowest south') || text.includes("Ecowest South")|| text.includes("ecowest South")){
				sendText(sender, "I guess you mean"+a+ecowestdr1+a+"south intersections. The traffic status for the intersections.")
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				axios.get('http://trapiknapud.herokuapp.com/ecowestdr')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.analysis53;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis54;
				    sendText(sender, chatbotResponse1)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}
				else if(text==''+ecowestdr1+a+'south intersections'){
			//	sendText(sender, "I guess you mean"+a+streetec+a+"south intersections. The traffic status for the intersections.")
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				axios.get('http://trapiknapud.herokuapp.com/ecowestdr')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.analysis51;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis52;
				    sendText(sender, chatbotResponse1)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}
				else if(text==''+ecowestdr1+a+'north intersections'){
			//	sendText(sender, "I guess you mean"+a+streetec+a+"south intersections. The traffic status for the intersections.")
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				axios.get('http://trapiknapud.herokuapp.com/ecowestdr')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.analysis53;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis54;
				    sendText(sender, chatbotResponse1)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text.includes('matina south') || text.includes("Matina South")|| text.includes("matina South")){
				sendText(sender, "I guess you mean"+a+matinaaplaya1+a+"south intersections. The traffic status for the intersections.")
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
				axios.get('http://trapiknapud.herokuapp.com/matinaaplaya')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.analysis55;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis56;
				    sendText(sender, chatbotResponse1)
				      chatbotResponse2 = response.data.analysis57;
				    sendText(sender, chatbotResponse2)
				      chatbotResponse3 = response.data.analysis58;
				    sendText(sender, chatbotResponse3)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text.includes('mati north') || text.includes("Mati North")|| text.includes("mati north")){
				sendText(sender, "I guess you mean"+a+matinaaplaya1+a+"north intersections. The traffic status for the intersections.")
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
				axios.get('http://trapiknapud.herokuapp.com/matinaaplaya')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.analysis59;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis60;
				    sendText(sender, chatbotResponse1)
				      chatbotResponse2 = response.data.analysis61;
				    sendText(sender, chatbotResponse2)
				      chatbotResponse3 = response.data.analysis62;
				    sendText(sender, chatbotResponse3)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text==''+matinaaplaya1+a+'south intersections'){
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
				axios.get('http://trapiknapud.herokuapp.com/matinaaplaya')
				  .then(function (response) {
				    //console.log(response);
				    chatbotResponse = response.data.analysis55;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis56;
				    sendText(sender, chatbotResponse1)
				      chatbotResponse2 = response.data.analysis57;
				    sendText(sender, chatbotResponse2)
				      chatbotResponse3 = response.data.analysis58;
				    sendText(sender, chatbotResponse3)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text==''+matinaaplaya1+a+'north intersections'){
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
				axios.get('http://trapiknapud.herokuapp.com/matinaaplaya')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis59;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis60;
				    sendText(sender, chatbotResponse1)
				      chatbotResponse2 = response.data.analysis61;
				    sendText(sender, chatbotResponse2)
				      chatbotResponse3 = response.data.analysis62;
				    sendText(sender, chatbotResponse3)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}
				else if(text.includes('ecoland south')||text.includes('ecoland South')||text.includes('Ecoland south')){
				sendText(sender, "I guess you mean"+a+ecoland1+a+"south intersections. The Traffic status for the intersections.")
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('http://trapiknapud.herokuapp.com/ecoland')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis63;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis64;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis65;
				    sendText(sender, chatbotResponse2)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}
				else if(text.includes('ecoland north')||text.includes('ecoland North')||text.includes('Ecoland north')){
				sendText(sender, "I guess you mean"+a+ecoland1+a+"north intersections. The Traffic status for the intersections.")
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('http://trapiknapud.herokuapp.com/ecoland')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis66;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis67;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis68;
				    sendText(sender, chatbotResponse2)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}
				else if(text==''+ecoland1+a+'south intersections'){
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('http://trapiknapud.herokuapp.com/ecoland')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis63;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis64;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis65;
				    sendText(sender, chatbotResponse2)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text==''+ecoland1+a+'north intersections'){
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('http://trapiknapud.herokuapp.com/ecoland')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis66;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis67;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis68;
				    sendText(sender, chatbotResponse2)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}
				else if(text==''+tulipdr1+a+'north intersections'){
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('http://trapiknapud.herokuapp.com/tulipdr')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis69;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis70;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis71;
				    sendText(sender, chatbotResponse2)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text==''+tulipdr1+a+'south intersections'){
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('http://trapiknapud.herokuapp.com/tulipdr')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis72;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis73;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis74;
				    sendText(sender, chatbotResponse2)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text.includes('tulip north') || text.includes('tulip North')){
				sendText(sender, "I gues you mean"+a+tulipdr1+a+"north intersections.The traffic status for the intersections.")		
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('http://trapiknapud.herokuapp.com/tulipdr')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis72;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis73;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis74;
				    sendText(sender, chatbotResponse2)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text.includes('tulip south') || text.includes('tulip South')){
				sendText(sender, "I gues you mean"+a+tulipdr1+a+"south intersections.The traffic status for the intersections.")		
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('http://trapiknapud.herokuapp.com/tulipdr')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis69;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis70;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis71;
				    sendText(sender, chatbotResponse2)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}
				else if(text==''+quimpoblvd1+a+'north intersections'){
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
				axios.get('http://trapiknapud.herokuapp.com/quimpoblvd')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis75;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis76;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis77;
				    sendText(sender, chatbotResponse2)
				    chatbotResponse3 = response.data.analysis78;
				    sendText(sender, chatbotResponse3)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text==''+quimpoblvd1+a+'south intersections'){
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
				axios.get('http://trapiknapud.herokuapp.com/quimpoblvd')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis79;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis80;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis81;
				    sendText(sender, chatbotResponse2)
				    chatbotResponse3 = response.data.analysis82;
				    sendText(sender, chatbotResponse3)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text.includes('quimpo north') || text.includes('quimpo North')){
				sendText(sender, "I gues you mean"+a+quimpoblvd1+a+"north intersections.The traffic status for the intersections.")		
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
				axios.get('http://trapiknapud.herokuapp.com/quimpoblvd')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis75;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis76;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis77;
				    sendText(sender, chatbotResponse2)
				    chatbotResponse3 = response.data.analysis78;
				    sendText(sender, chatbotResponse3)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text.includes('quimpo south') || text.includes('quimpo South')){
				sendText(sender, "I gues you mean"+a+quimpoblvd1+a+"south intersections.The traffic status for the intersections.")		
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
				axios.get('http://trapiknapud.herokuapp.com/quimpoblvd')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis79;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis80;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis81;
				    sendText(sender, chatbotResponse2)
				    chatbotResponse3 = response.data.analysis82;
				    sendText(sender, chatbotResponse3)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}
				else if(text==''+sandawa1+a+'north intersections'){
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				axios.get('http://trapiknapud.herokuapp.com/sandaward')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis85;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis86;
				    sendText(sender, chatbotResponse1)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text==''+sandawa1+a+'south intersections'){
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
				axios.get('http://trapiknapud.herokuapp.com/sandaward')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis83;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis84;
				    sendText(sender, chatbotResponse1)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text.includes('sandawa north') || text.includes('Sandawa North')||text.includes('Sandawa north')){
				sendText(sender, "I gues you mean"+a+sandawa1+a+"north intersections.The traffic status for the intersections.")		
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				axios.get('http://trapiknapud.herokuapp.com/sandaward')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis85;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis86;
				    sendText(sender, chatbotResponse1)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text.includes('sandawa south') || text.includes('Sandawa South')||text.includes('Sandawa south')){
				sendText(sender, "I gues you mean"+a+sandawa1+a+"south intersections.The traffic status for the intersections.")		
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				axios.get('http://trapiknapud.herokuapp.com/sandaward')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis83;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis84;
				    sendText(sender, chatbotResponse1)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				
				}
				else if(text==''+quezonblvd1+a+'north intersections'){
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
				let chatbotResponse4 = "";
				axios.get('http://trapiknapud.herokuapp.com/quezonblvd')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis92;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis93;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis94;
				    sendText(sender, chatbotResponse2)
				    chatbotResponse3 = response.data.analysis95;
				    sendText(sender, chatbotResponse3)
				    chatbotResponse4 = response.data.analysis96;
				    sendText(sender, chatbotResponse4)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text==''+quezonblvd1+a+'south intersections'){
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
				let chatbotResponse4 = "";
				axios.get('http://trapiknapud.herokuapp.com/quezonblvd')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis87;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis88;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis89;
				    sendText(sender, chatbotResponse2)
				    chatbotResponse4 = response.data.analysis90;
				    sendText(sender, chatbotResponse3)
				    chatbotResponse4 = response.data.analysis91;
				    sendText(sender, chatbotResponse4)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text.includes('quezon north') || text.includes('Sandawa North')||text.includes('Sandawa north')){
				sendText(sender, "I gues you mean"+a+quezonblvd1+a+"north intersections.The traffic status for the intersections.")		
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
				let chatbotResponse4 = "";
				axios.get('http://trapiknapud.herokuapp.com/quezonblvd')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis92;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis93;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis94;
				    sendText(sender, chatbotResponse2)
				    chatbotResponse3 = response.data.analysis95;
				    sendText(sender, chatbotResponse3)
				    chatbotResponse4 = response.data.analysis96;
				    sendText(sender, chatbotResponse4)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text.includes('quezon south') || text.includes('Quezon South')||text.includes('Quezon south')){
				sendText(sender, "I gues you mean"+a+quezonblvd1+a+"south intersections.The traffic status for the intersections.")		
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
				let chatbotResponse4 = "";
				axios.get('http://trapiknapud.herokuapp.com/quezonblvd')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis87;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis88;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis89;
				    sendText(sender, chatbotResponse2)
				    chatbotResponse3 = response.data.analysis90;
				    sendText(sender, chatbotResponse3)
				    chatbotResponse4 = response.data.analysis91;
				    sendText(sender, chatbotResponse4)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				
				}
				else if(text==''+mlquezon1+a+'north intersections'){
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
				let chatbotResponse4 = "";
				let chatbotResponse5 = "";
				axios.get('http://trapiknapud.herokuapp.com/mlquezonblvd')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis103;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis104;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis105;
				    sendText(sender, chatbotResponse2)
				    chatbotResponse3 = response.data.analysis106;
				    sendText(sender, chatbotResponse3)
				    chatbotResponse4 = response.data.analysis107;
				    sendText(sender, chatbotResponse4)
				    chatbotResponse5 = response.data.analysis108;
				    sendText(sender, chatbotResponse5)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text==''+mlquezon1+a+'south intersections'){
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
				let chatbotResponse4 = "";
				let chatbotResponse5 = "";
				axios.get('http://trapiknapud.herokuapp.com/mlquezonblvd')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis97;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis98;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis99;
				    sendText(sender, chatbotResponse2)
				    chatbotResponse3 = response.data.analysis100;
				    sendText(sender, chatbotResponse3)
				    chatbotResponse4 = response.data.analysis101;
				    sendText(sender, chatbotResponse4)
				    chatbotResponse5 = response.data.analysis102;
				    sendText(sender, chatbotResponse5)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text.includes('mlquezon north') || text.includes('Mlquezon North')||text.includes('Mlquezon north')){
				sendText(sender, "I gues you mean"+a+mlquezonblvd+a+"north intersections.The traffic status for the intersections.")		
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
				let chatbotResponse4 = "";
				let chatbotResponse5 = "";
				axios.get('http://trapiknapud.herokuapp.com/mlquezonblvd')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis97;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis98;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis99;
				    sendText(sender, chatbotResponse2)
				    chatbotResponse3 = response.data.analysis100;
				    sendText(sender, chatbotResponse3)
				    chatbotResponse4 = response.data.analysis101;
				    sendText(sender, chatbotResponse4)
				    chatbotResponse5 = response.data.analysis102;
				    sendText(sender, chatbotResponse5)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text.includes('mlquezon south') || text.includes('Mlquezon South')||text.includes('Mlquezon south')){
				sendText(sender, "I gues you mean"+a+mlquezon1+a+"south intersections.The traffic status for the intersections.")		
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
				let chatbotResponse4 = "";
				let chatbotResponse5 = "";
				axios.get('http://trapiknapud.herokuapp.com/mlquezonblvd')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis97;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis98;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis99;
				    sendText(sender, chatbotResponse2)
				    chatbotResponse3 = response.data.analysis100;
				    sendText(sender, chatbotResponse3)
				    chatbotResponse4 = response.data.analysis101;
				    sendText(sender, chatbotResponse4)
				    chatbotResponse5 = response.data.analysis102;
				    sendText(sender, chatbotResponse5)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				
				}
				else if(text==''+cabaguio1+a+'north intersections'){
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				axios.get('http://trapiknapud.herokuapp.com/cabaguio')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis111;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis112;
				    sendText(sender, chatbotResponse1)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text==''+cabaguio1+a+'south intersections'){
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				axios.get('http://trapiknapud.herokuapp.com/cabaguio')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis109;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis110;
				    sendText(sender, chatbotResponse1)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text.includes('cabaguio north') || text.includes('Cabaguio North')||text.includes('Cabaguio north')){
				sendText(sender, "I gues you mean"+a+cabaguio1+a+"north intersections.The traffic status for the intersections.")		
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				axios.get('http://trapiknapud.herokuapp.com/cabaguio')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis111;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis112;
				    sendText(sender, chatbotResponse1)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text.includes('cabaguio south') || text.includes('Cabaguio South')||text.includes('Cabaguio south')){
				sendText(sender, "I gues you mean"+a+cabaguio1+a+"south intersections.The traffic status for the intersections.")		
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				axios.get('http://trapiknapud.herokuapp.com/cabaguio')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis109;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis110;
				    sendText(sender, chatbotResponse1)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				
				}
				else if(text==''+dacudao1+a+'north intersections'){
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				axios.get('http://trapiknapud.herokuapp.com/dacudao')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis115;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis116;
				    sendText(sender, chatbotResponse1)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text==''+dacudao1+a+'south intersections'){
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				axios.get('http://trapiknapud.herokuapp.com/dacudao')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis113;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis114;
				    sendText(sender, chatbotResponse1)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text.includes('dacudao north') || text.includes('Dacudao North')||text.includes('Dacudao north')){
				sendText(sender, "I gues you mean"+a+dacudao1+a+"north intersections.The traffic status for the intersections.")		
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				axios.get('http://trapiknapud.herokuapp.com/dacudao')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis115;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis116;
				    sendText(sender, chatbotResponse1)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text.includes('dacudao south') || text.includes('Dacudao South')||text.includes('Dacudao south')){
				sendText(sender, "I gues you mean"+a+dacudao1+a+"south intersections.The traffic status for the intersections.")		
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				axios.get('http://trapiknapud.herokuapp.com/dacudao')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis113;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis114;
				    sendText(sender, chatbotResponse1)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				
				}
				else if(text==''+pichonst1+a+'north intersections'){
				let chatbotResponse = "";
				axios.get('http://trapiknapud.herokuapp.com/pichonst')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis122;
				    sendText(sender, chatbotResponse)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text==''+pichonst1+a+'south intersections'){
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
				let chatbotResponse4 = "";
				axios.get('http://trapiknapud.herokuapp.com/pichonst')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis117;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis118;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis119;
				    sendText(sender, chatbotResponse2)
				    chatbotResponse3 = response.data.analysis120;
				    sendText(sender, chatbotResponse3)
				    chatbotResponse4 = response.data.analysis121;
				    sendText(sender, chatbotResponse4)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text.includes('pichon north') || text.includes('Pichon North')||text.includes('Pichon north')){
				sendText(sender, "I gues you mean"+a+pichonst1+a+"north intersections.The traffic status for the intersections.")		
				let chatbotResponse = "";
				axios.get('http://trapiknapud.herokuapp.com/pichonst')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis122;
				    sendText(sender, chatbotResponse)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text.includes('pichon south') || text.includes('Pichon South')||text.includes('Pichon south')){
				sendText(sender, "I gues you mean"+a+pichonst1+a+"south intersections.The traffic status for the intersections.")		
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
				let chatbotResponse4 = "";
				axios.get('http://trapiknapud.herokuapp.com/pichonst')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis117;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis118;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis119;
				    sendText(sender, chatbotResponse2)
				    chatbotResponse3 = response.data.analysis120;
				    sendText(sender, chatbotResponse3)
				    chatbotResponse4 = response.data.analysis121;
				    sendText(sender, chatbotResponse4)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				
				}
				else if(text==''+sanpedro1+a+'north intersections'){
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
				axios.get('http://trapiknapud.herokuapp.com/sanpedrost')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis123;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis124;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis125;
				    sendText(sender, chatbotResponse2)
				    chatbotResponse3 = response.data.analysis126;
				    sendText(sender, chatbotResponse3)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text.includes('sanpedro north') || text.includes('Sanpedro north')||text.includes('Sanpedro north')){
				sendText(sender, "I gues you mean"+a+sanpedro1+a+"north intersections.The traffic status for the intersections.")		
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				let chatbotResponse3 = "";
				axios.get('http://trapiknapud.herokuapp.com/sanpedrost')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis123;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis124;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis125;
				    sendText(sender, chatbotResponse2)
				    chatbotResponse3 = response.data.analysis126;
				    sendText(sender, chatbotResponse3)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				
				}
				else if(text==''+bonifaciost1+a+'north intersections'){
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('http://trapiknapud.herokuapp.com/bonifaciost')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis130;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis131;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis132;
				    sendText(sender, chatbotResponse2)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text==''+bonifaciost1+a+'south intersections'){
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('http://trapiknapud.herokuapp.com/bonifaciost')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis127;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis128;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis129;
				    sendText(sender, chatbotResponse2)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text.includes('bonifacio north') || text.includes('Bonifacio North')||text.includes('Bonifacio north')){
				sendText(sender, "I gues you mean"+a+bonifaciost1+a+"north intersections.The traffic status for the intersections.")		
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('http://trapiknapud.herokuapp.com/bonifaciost')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis130;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis131;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis132;
				    sendText(sender, chatbotResponse2)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text.includes('bonifacio south') || text.includes('Bonifacio South')||text.includes('Bonifacio south')){
				sendText(sender, "I gues you mean"+a+bonifaciost1+a+"south intersections.The traffic status for the intersections.")		
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('http://trapiknapud.herokuapp.com/bonifaciost')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis127;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis128;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis129;
				    sendText(sender, chatbotResponse2)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				
				}
				else if(text==''+ftorrest1+a+'north intersections'){
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				axios.get('http://trapiknapud.herokuapp.com/ftorrest')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis135;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis136;
				    sendText(sender, chatbotResponse1)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text==''+ftorrest1+a+'south intersections'){
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				axios.get('http://trapiknapud.herokuapp.com/ftorrest')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis133;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis134;
				    sendText(sender, chatbotResponse1)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text.includes('ftorres north') || text.includes('Ftorres North')||text.includes('Ftorres north')){
				sendText(sender, "I gues you mean"+a+ftorrest1+a+"north intersections.The traffic status for the intersections.")		
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				axios.get('http://trapiknapud.herokuapp.com/ftorrest')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis135;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis136;
				    sendText(sender, chatbotResponse1)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text.includes('ftorres south') || text.includes('Ftorres South')||text.includes('Ftorres south')){
				sendText(sender, "I gues you mean"+a+ftorrest1+a+"south intersections.The traffic status for the intersections.")		
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				axios.get('http://trapiknapud.herokuapp.com/ftorrest')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis133;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis134;
				    sendText(sender, chatbotResponse1)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				
				}
				else if(text==''+mroxas1+a+'north intersections'){
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('http://trapiknapud.herokuapp.com/mroxas')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis140;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis141;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis142;
				    sendText(sender, chatbotResponse2)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text==''+mroxas1+a+'south intersections'){
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('http://trapiknapud.herokuapp.com/mroxas')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis137;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis138;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis139;
				    sendText(sender, chatbotResponse2)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text.includes('mroxas north') || text.includes('Mroxas North')||text.includes('Mroxas north')){
				sendText(sender, "I gues you mean"+a+mroxas1+a+"north intersections.The traffic status for the intersections.")		
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('http://trapiknapud.herokuapp.com/mroxas')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis140;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis141;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis142;
				    sendText(sender, chatbotResponse2)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				}else if(text.includes('mroxas south') || text.includes('Mroxas South')||text.includes('Mroxas south')){
				sendText(sender, "I gues you mean"+a+mroxas1+a+"south intersections.The traffic status for the intersections.")		
				let chatbotResponse = "";
				let chatbotResponse1 = "";
				let chatbotResponse2 = "";
				axios.get('http://trapiknapud.herokuapp.com/mroxas')
				  .then(function (response) {
				    chatbotResponse = response.data.analysis137;
				    sendText(sender, chatbotResponse)
				    chatbotResponse1 = response.data.analysis138;
				    sendText(sender, chatbotResponse1)
				    chatbotResponse2 = response.data.analysis139;
				    sendText(sender, chatbotResponse2)
				  })
				  .catch(function (error) {
				    //console.log(error);
				    chatbotResponse = "not ok";
				    sendText(sender, chatbotResponse)
				  });
				  break;
				
				}
				
				else{
					sendText(sender, "Command does not exist.")
				}





	}
}
	res.sendStatus(200)
})

function sendText(sender, text) {
	let messageData = {text: text}
	request({
		url: "https://graph.facebook.com/v2.6/me/messages",
		qs : {access_token: token},
		method: "POST",
		json: {
			recipient: {id: sender},
			message : messageData,
		}
	}, function(error, response, body) {
		if (error) {
			console.log("sending error")
		} else if (response.body.error) {
			console.log("response body error")
		}
	})
}

app.listen(app.get('port'), function() {
	console.log("running: port")
})