import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.tvmaze.com/search/shows?q=all')
      .then((response) => {
        setShows(response.data.map((item) => item.show));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="mx-12 py-8 text-center">
      <h2 className="text-2xl font-bold mb-4 bg-blue-500">TV Shows</h2>
      <ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 bg-gray-500 p-12 gap-4">
        {shows.map((show) => (
          <li key={show.id} className="bg-white p-4 mb-8 shadow-xl rounded-xl">
            <img src={show.image?.medium} className='mx-auto' />
              <h5 className="text-xl font-bold">{show.name}</h5>
            <p>Type: {show.type}</p>
            <p>Language: {show.language}</p>
            <h2 className='text-lg'><a href={show.url}><span className='text-blue-400 text-xl'>Visit Official Page</span></a></h2>
            <Link
              to={`/shows/${show.id}`}
              className="bg-blue-500 text-white py-2 px-4 rounded mt-4 inline-block"
            >
              Summary
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
