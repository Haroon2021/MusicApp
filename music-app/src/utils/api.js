import axios from 'axios';


const options = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/tracks/',
  params: {ids: '4WNcduiCmDNfmTEz7JvmLv'},
  headers: {
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
    'X-RapidAPI-Key': '268d1365d5mshd8fed733c9404b8p1898c0jsn11b717f9a09a'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});