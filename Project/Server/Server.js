const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const PORT = 3001;

app.use(cors());
app.use(express.json());

const listingsData = require('./listingData');

// Data 
app.get('/api/listings', (req, res) => {
  res.json(listingsData);
});

// Data for one api
app.get('/api/listings/:id', (req, res) => {
  const listing = listingsData.find(listing => listing.id === parseInt(req.params.id));
  if (listing) {
    res.json(listing);
  } else {
    res.status(404).json({ error: 'Listing not found' });
  }
});

//Data of a file
app.get('/api/search', (req, res) => {
  const { type, title, category } = req.query;
  const filteredListings = listingsData.filter(listing => {
    return (
      (type && listing.type.toLowerCase().includes(type.toLowerCase())) ||
      (title && listing.title.toLowerCase().includes(title.toLowerCase())) ||
      (category && listing.category.toLowerCase().includes(category.toLowerCase()))
    );
  });

  res.json(filteredListings);
});


app.post('/api/bookings', (req, res) => {
  const { name, phoneNumber, title, category } = req.body;
  const newBooking = { name, phoneNumber, title, category };

  const filePath = path.join(__dirname, 'booking.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    let bookings = [];
    if (!err && data) {
      bookings = JSON.parse(data);
    }
    bookings.push(newBooking);

    fs.writeFile(filePath, JSON.stringify(bookings, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error saving booking data' });
      }
      res.status(201).json({ message: 'Booking saved successfully' });
    });
  });
});


app.listen(PORT, () => {
  console.log(`Server is on http://localhost:${PORT}`);
});
