var hotel = {
    // Object properties
    name: 'Clayton',
    rooms: 110,
    booked: 25,
    gym: true,
    roomTypes: ['double', 'twin', 'suite', 'king'],
    checkAvailablity: function() {
        return this.rooms - this.booked;
    }
};

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.checkAvailablity();

// Define a constructor function template for hotels
function Hotel(name, rooms, booked) {
    // Object properties
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailablity = function() {
        return this.rooms - this.booked;
    };
}

// Define to instances of the hotel and their arguments
var clayHotel = new Hotel('Clayton', 68, 3);
var lemonHotel = new Hotel('Lemon', 56, 15);
var ballHotel = new Hotel ('Ball', 50, 23);

// Declare a variable to hold the name of the hotel and room availability 
var details1 = clayHotel.name + ' rooms: ';
    // add content to an existing variable----
    details1 += clayHotel.checkAvailablity();
// Get the hotel1 div
var elHotel1 = document.getElementById('hotel1');
// Add the variables created onto the empty div
elHotel1.textContent = details1;

var details2 = lemonHotel.name + ' rooms: ';
    details2 += lemonHotel.checkAvailablity();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;

var details3 = ballHotel.name + ' rooms: ' ;
    details3 += ballHotel.checkAvailablity();
var elHotel3 = document.getElementById('hotel3');
elHotel3.textContent = details3;    

