import React, { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import axios from 'axios';

function BookingForm() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const userData = {
        name,
        email,
        showId: id,
        showName: show.name,
      };
      localStorage.setItem('userData', JSON.stringify(userData))
      alert('Show booked thanks for visiting')
  };

  return (
    <div className="grid place-items-center sm:mx-16 mx-12 py-8 py-8">
      <h2 className="text-2xl font-bold mb-4 border-4 border-blue-600 px-4">Booking Form</h2>
      {show ? (
        <form onSubmit={handleFormSubmit} className="w-68 bg-gray-400 p-12 mt-12">
          <p className='text-2xl'>
            Movie: <strong>{show.name}</strong>
          </p>
          <p className='text-2xl my-2'>Type: {show.type}</p>
          <p className='text-2xl my-2 mb-4'>Language: {show.language}</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full py-2 border-2 border-gray-300 focus:border-gray-900 px-4 rounded mb-4"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full py-2 border-2 border-gray-300 focus:border-gray-900 px-4 rounded mb-4"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Book Now
          </button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default BookingForm;
