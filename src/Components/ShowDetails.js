import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function ShowDetails() {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => {
        setShow(response.data);
      })
      .catch((error) => {
        console.error('Error fetching show details:', error);
      });
  }, [id]);

  return (
    <div className='mt-28 border-2 lg:mx-64 mx-16 border-gray-700'>
    <div className="md:mx-24 sm:mx-16 mx-12 py-8">
      <h2 className="text-2xl font-bold mb-4">Show Summary</h2>
      {show ? (
        <div>
            {show.summary}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Link
        to={`/book/${id}`}
        className="bg-blue-500 text-white py-2 px-4 rounded mt-4 inline-block"
      >
        Book Ticket
      </Link>
    </div>
    </div>
  );
}

export default ShowDetails;
