var hotel = {
    // Object properties
    name: 'Clayton',
    rooms: 110,
    booked: 25,
    gym: true,
    breakfast: true,
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
function Hotel(name, rooms, booked, gym,breakfast) {
    // Object properties
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.gym = gym;
    this.checkAvailablity = function() {
        return this.rooms - this.booked;
    };
}

// Define to instances of the hotel and their arguments
var clayHotel = new Hotel('Clayton', 68, 3, 'Yes');
var lemonHotel = new Hotel('Lemon', 56, 15, 'Yes');
var ballHotel = new Hotel ('Ball', 50, 23, 'No');

// Declare a variable to hold the name of the hotel and room availability 
var details1 = clayHotel.name + ' rooms: ';
    details1 += clayHotel.checkAvailablity();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

var details1_gym = 'Is there a gym: ' + clayHotel.gym;
var elHotel1_gym = document.getElementById('hotel1_extra');
elHotel1_gym.textContent = details1_gym;

var details2 = lemonHotel.name + ' rooms: ';
    details2 += lemonHotel.checkAvailablity();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;

var details2_gym = 'Is there a gym: ' + lemonHotel.gym;
var elHotel2_gym = document.getElementById('hotel2_extra');
elHotel2_gym.textContent = details2_gym;

var details3 = ballHotel.name + ' rooms: ' ;
    details3 += ballHotel.checkAvailablity();
var elHotel3 = document.getElementById('hotel3');
elHotel3.textContent = details3;   

var details3_gym = 'Is there a gym: ' + ballHotel.gym;
var elHotel3_gym = document.getElementById('hotel3_extra');
elHotel3_gym.textContent = details3_gym;

