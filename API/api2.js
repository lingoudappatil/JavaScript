const URL = "https://cat-fact.herokuapp.com/facts";

const getFacts = async () =>
{
	console.log("Getting data..");
	let response = await fetch(URL);
	console.log(response);//JSON Formate
	let data = await response.json();
    console.log(data[0].text);
};	