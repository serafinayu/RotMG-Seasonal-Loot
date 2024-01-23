import express from 'express';
import axios from 'axios';
import cheerio from 'cheerio';
import { PassThrough } from 'stream';

// Creates an instance of the express server and assigns it to a variable
const app = express();
// Set a port to run the application on 
// Reference nodejs's global "process", process's object "env", and now you can access your environment variable for PORT
// We assume there is an environment varible for port but if it undefined set it to 3000
const PORT = process.env.PORT || 3000;

// This will send a json item
app.get("/", (req, res) => {
	// Using the status method will send the mentioned status code to the server and it can be seen in the network tab
	res.status(201).send({msg: "Hello!"});
});

// This will send html Hello
// app.get("/", (req, res) => {
// 	res.send("Hello!")
// });

app.get("/api/items", (req, res) => {
	res.send([
		{id: 1, itemName: "Dagger of Cronus", tier: "UT"},
		{id: 2, itemName: "Ice Dagger", tier: "UT"},
		{id: 3, itemName: "T7 Dagger", tier: "T7"}
	])
});

app.get("/api/items/weapons", (req, res) => {
	res.send([
		{id: 1, name: "Dagger of Cronus"},
	])
})


// This module will use the realmeye wiki weapons page to get a list of all weapon types first
const instance = axios.create({
	baseURL: 'https://www.realmeye.com/wiki/weapons',
	// timeout: 1000,
	headers: {
		'User-Agent': 
			'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', 
		"Accept": 
			"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7"
	}
});

function getWeaponTypes() {
    instance.get()
        .then(res => { 
            const $ = cheerio.load(res.data);
			// object storing all a li elements of the first ul block
            const $list = $('div.wiki-page ul:first li a');
			const $listNoImgs = $('div.wiki-page ul:first li a:nth-child(-n + 2)');
			// .each() to get the link of each a element
			$listNoImgs.each((index, element) => {
				// console.log($(element).text());
				console.log($(element).attr('href'));
			});
        })
        .catch((err) => console.log(err));
}

getWeaponTypes();
// Tell your app to start listening for visitors on a specific address and port
app.listen(PORT, () => console.log(`Currently running on port ${PORT}`));
