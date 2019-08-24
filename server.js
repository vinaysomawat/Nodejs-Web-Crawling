// Write Javascript code here 
const request = require('request'); 
const cheerio = require('cheerio'); 
const fs = require('fs'); 


const URL = "https://www.flipkart.com/search?q=mobiles"; 

request(URL, function (err, res, body) { 
	if(err) 
	{ 
		console.log(err); 
	} 
	else
	{ 
		const arr = []; 
		let $ = cheerio.load(body); 
		$('div._1HmYoV > div.col-12-12>div._3O0U0u').each(function(index){ 
			
			const data = $(this).find('div._1UoZlX>a').attr('href'); 
			const name = $(this).find('div._1-2Iqu>div.col-7-12>div._3wU53n').text(); 
			const obj = { 
				data : data, 
				name : name 
			}; 
			console.log(obj); 
			arr.push(JSON.stringify(obj)); 
		}); 
		console.log(arr.toString()); 
		fs.writeFile('data.txt', arr, function (err) { 
			if(err) { 
				console.log(err); 
			} 
				else{ 
					console.log("success"); 
				} 
		}); 

	} 
}); 
