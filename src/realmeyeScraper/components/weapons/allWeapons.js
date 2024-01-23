import cheerio from 'cheerio';
import axios from 'axios';


// This module will use the realmeye wiki weapons page to get a list of all weapon types first
const instance = axios.create({
	baseURL: 'https://www.realmeye.com/',
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