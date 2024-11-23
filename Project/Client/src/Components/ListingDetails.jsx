import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { FaMedal, FaHome, FaDoorOpen, FaToilet } from 'react-icons/fa';

const ListingDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    window.scrollTo(0,0);
 }, []);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/listings/${id}`);
        setListing(response.data);
      } catch (error) {
        console.error('Error fetching listing:', error);
      }
    };
    fetchListing();
  }, [id]);

  const handleBooking = (id) => {
    navigate(`/booking/${id}`);
  };

  if (!listing) return <div className="mt-[150px] xl:px-[180px] min-h-screen mx-auto p-6 bg-white">Loading...</div>;

  return (
    <div className="mt-[150px] xl:px-[180px] min-h-screen mx-auto p-6 bg-white">
      <div className='grid w-full overflow-hidden gap-[6px] grid-cols-5 rounded-[25px]'>
        <div className="col-span-5 h-[430px] md:col-span-3">
          <img
            src={listing.image}
            alt={listing.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className='hidden h-[430px] col-span-2 md:grid grid-cols-2 grid-rows-2 gap-[6px]'>
          <div className="flex items-center justify-center h-full">
            <img src={listing.image} alt={listing.title} className="w-full h-full object-cover" />
          </div>
          <div className="flex items-center justify-center h-full">
            <img src={listing.image} alt={listing.title} className="w-full h-full object-cover" />
          </div>
          <div className="flex items-center justify-center h-full">
            <img src={listing.image} alt={listing.title} className="w-full h-full object-cover" />
          </div>
          <div className="flex items-center justify-center h-full">
            <img src={listing.image} alt={listing.title} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4 space-y-6 md:space-y-8 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0">
        <div className="lg:col-span-2 space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">{listing.title}</h2>
            <p className="text-gray-600">1 bed · Shared bathroom</p>
          </div>

          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center md:space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-yellow-500">🏆</span>
              <p>Guest favorite</p>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-yellow-500">🏅</span>
              <p>One of the most loved homes on Airbnb, according to guests</p>
            </div>
            <div className="flex items-center space-x-1 text-sm">
              <p className="font-semibold">4.96</p>
              <span>⭐</span>
              <p className="text-gray-600">(124 Reviews)</p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gray-200">
              <div className='h-full w-full rounded-full bg-gray-600'></div>
            </div>
            <div>
              <p className="font-semibold">Host</p>
              <p className="text-gray-500 text-sm">Superhost · 3 years hosting</p>
            </div>
          </div>

          <div className="">
            <div className="flex items-start space-x-2 text-[17px] mb-[32px]">
              <FaMedal className="text-yellow-500 mt-[12px] text-[28px] mr-[15px] " />
              <div>
                <p className="font-semibold">Top 5% of homes</p>
                <p className="text-gray-700">This home is highly ranked based on ratings, reviews, and reliability.</p>
              </div>
            </div>

            <div className="flex items-start space-x-2 text-[17px] mb-[32px]">
              <FaHome className="text-gray-700 mt-[12px] text-[28px] mr-[15px] " />
              <div>
                <p className="font-semibold">Room in a casa particular</p>
                <p className="text-gray-700">Your own room in a home, plus access to shared spaces.</p>
              </div>
            </div>

            <div className="flex items-start space-x-2 text-[17px] mb-[32px]">
              <FaDoorOpen className="text-gray-700 mt-[12px] text-[28px] mr-[15px] " />
              <div>
                <p className="font-semibold">Shared common spaces</p>
                <p className="text-gray-700">You'll share parts of the home with the Host.</p>
              </div>
            </div>

            <div className="flex items-start space-x-2 text-[17px] mb-[32px]">
              <FaToilet className="text-gray-700 mt-[12px] text-[28px] mr-[15px] " />
              <div>
                <p className="font-semibold">Shared bathroom</p>
                <p className="text-gray-700">You'll share the bathroom with others.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg">About this place</h3>
            <p className="text-sm text-gray-600">
              Inner City - Private room in a prestigious area with double bed and double closet in spacious apartment in Store Kongesgade.
              2 mins away from Queens Palace, Nyhavn and Konges Nytorv. Metro 2 mins away (Marmorkirken). The apartment is close to all
              top restaurants and high-street shops. Perfect for 1 or 2 people. Flat is 170 SQM and you have access to all areas including
              1 toilet...
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="border bg-white shadow-lg rounded-lg py-[30px] px-4 border-[#e7e7e7] space-y-[18px]">
            <div className="flex justify-between items-center">
              <p className="text-2xl font-semibold">$111</p>
              <p className="text-sm text-gray-600 font-[600]">/ night</p>
            </div>

            <div className="border border-[#818181] rounded-lg py-4 w-full max-w-sm">
              <div className="grid grid-cols-2 px-[15px] border-b border-[#818181] pb-4 gap-4">
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-gray-600">CHECK-IN</p>
                  <p className="text-sm font-medium text-gray-800">6/25/2025</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-gray-600">CHECKOUT</p>
                  <p className="text-sm font-medium text-gray-800">7/4/2025</p>
                </div>
              </div>
              <div className="px-4 pt-4 flex justify-between items-center">
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-gray-600">GUESTS</p>
                  <p className="text-sm font-medium text-gray-800">2 guests</p>
                </div>
                <span className="text-gray-500">▼</span>
              </div>
            </div>


            <button onClick={() => handleBooking(id)} className="w-full py-2 bg-gradient-to-r from-pink-600 to-pink-800 text-white font-semibold rounded-lg">
              Reserve
            </button>

            <p className="text-center text-gray-600 font-[500] text-[15px]">You won't be charged yet</p>

            <div className="space-y-1 text-gray-600 font-[500] underline text-[15px]">
              <div className="flex justify-between">
                <p>$111 x 5 nights</p>
                <p>$554</p>
              </div>
              <div className="flex justify-between">
                <p>Cleaning fee</p>
                <p>$29</p>
              </div>
              <div className="flex justify-between">
                <p>Airbnb service fee</p>
                <p>$89</p>
              </div>
            </div>
            <div className='mx-auto h-[2px] bg-gray-300'></div>
            <div className="flex justify-between font-semibold">
              <p>Total before taxes</p>
              <p>$672</p>
            </div>
          </div>

          <div className="border rounded-lg p-4 shadow-sm">
            <p className="text-pink-800 font-semibold">This is a rare find</p>
            <p className="text-sm text-gray-600">Bo's place is usually fully booked.</p>
          </div>

          <div className="text-center">
            <button className="text-sm text-gray-500 underline">Report this listing</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
