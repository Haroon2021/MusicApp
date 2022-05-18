import axios from 'axios';
import React, { useState, useEffect } from 'react'

export default function Artists() {
  const [Artist, getArtists] = useState([])

  const getAllArtists = () => {
      axios
      .request(options).then((response)=> {
	    console.log(response.data);
        const Artists = response.data.atrists
        return Artists;
    }).
    catch((error)=> {
	console.error(error);
    });
    
  }

const options = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/artists/',
  params: {ids: '2w9zwq3AktTeYYMuhMjju8'},
  headers: {
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
    'X-RapidAPI-Key': '268d1365d5mshd8fed733c9404b8p1898c0jsn11b717f9a09a'
  }
};


  useEffect(() => {
    getAllArtists()
  }, [])

  return (
    <div>
      <h2>ARTIST</h2>
      
      {Artist.map(data => {
        return (
          <span key={data[0].id}>
            {data.name}
            <br />{" "}
          </span>
        );
      })}
      <span />
    </div>
  );
}