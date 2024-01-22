import express from 'express';
import axios from 'axios';
import cheerio from 'cheerio';

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


const instance = axios.create({
	baseURL: 'https://www.realmeye.com/wiki/',
	timeout: 1000,
	headers: {
		'User-Agent': 
			'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', 
		"Accept": 
			"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7"
	}
});

instance.get('/steel-dagger')
	// .then((res) => console.log(res.data))
	.then((res) => {
		const data = res.data;
		const $ = cheerio.load(data);

		let itemName = $("h1").text();
		let tier = $("tr:contains('Tier'):first").children("th").text();
		// let
		// let weaponType = $("th:").text();

		console.log(itemName);
		console.log(tier);
		// console.log(weaponType);

	})
	.catch((err) => console.error(err))

// Tell your app to start listening for visitors on a specific address and port
app.listen(PORT, () => console.log(`Currently running on port ${PORT}`));
