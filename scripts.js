//alert('hello');

function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
};

Phone.prototype.printInfo = function() {
	console.log("This phone is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
};

Phone.prototype.applyDiscount = function (percent) {
	console.log("The discount is " + Math.round(Math.random() * 10) / 10 + "%.");
};

var samsungGalaxyS6 = new Phone("Samsung", "2000", "black");
var iPhone6S = new Phone("Apple", "2250", "silver");
var onePlusOne = new Phone("OnePlus One", "2100", "grey");

samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
onePlusOne.printInfo();

samsungGalaxyS6.applyDiscount();
iPhone6S.applyDiscount();
onePlusOne.applyDiscount();

// function Phone(brand, price, color) {
// 	this.brand = brand;
// 	this.price = price;
// 	this.color = color;
// 	this.printInfo = function() {
// 		console.log("This phone is " + this.brand + ", color is" + this.price + "and the price is" + this.price + ".")
// 	};
// };

// Math.random();
// Math.floor(Math.random()*3);
// Math.round(Math.random() * 10);
// Math.round(Math.random() * 10) / 10;
