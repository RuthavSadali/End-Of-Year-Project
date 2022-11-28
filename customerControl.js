// Info from cars file.
var carsFile = "cars.json"
var carsList = []

// Set up starting positions for car images and descriptions.
var imageTopPosition = 50;
var imageLeftPosition = 50;
var imageWidth = 300;
var imageHeight = 300;
var leftSpacing = 50;
var topSpacing = 100;
var textTopPosition = imageTopPosition + imageHeight + 10;
var textLeftPosition = imageLeftPosition;


function readFromJSONFile() {
  var fs = require('fs');
  console.log("About to read from file");
  let carsData = fs.readFileSync(carsFile);
  carsList = JSON.parse(carsData);
}

function displayCarImage(carInfo) {
  var imagePath = carInfo.imagePath;
  var image = document.createElement("img");
  image.src = imagePath;
  image.style.width = "" + imageWidth + "px";
  image.style.height = "" + imageHeight + "px";
  image.style.position = "absolute";
  image.style.left = "" + imageLeftPosition + "px";
  image.style.top = "" + imageTopPosition + "px";
  image.onclick = function() {
    window.location.href = "TestIndividualView.html?year=" + 
                            carInfo.year + "&make=" + carInfo.brand + 
                            "&model=" + carInfo.model + "&color=" + carInfo.color
                            + "&mileage=" + carInfo.mileage + "&price=" + carInfo.price
                            + "&imagePath=" + imagePath;
  };
  return image;
}

function displayCarDescription(carInfo) {
  var brand = carInfo.brand;
  let car = document.createElement(brand);
  car.textContent = "Brand: " + brand + " \r\nModel: " + carInfo.model + " \r\n";
  car.style.position = "absolute";
  car.style.left = "" + textLeftPosition + "px";
  car.style.top = "" + textTopPosition + "px";
  car.style.whiteSpace = "pre";
  return car;
}

function displayOnCustomerPage() {
  readFromJSONFile(); // Read from cars.json.
  var header = document.createElement("allCars"); // Set up main header element.

  for(var i = 0; i < carsList.length; i++){
    // Get one car.
    var carInfo = carsList[i];
    // Display its image.
    header.appendChild(displayCarImage(carInfo));
    // Display the car's information.
    header.appendChild(displayCarDescription(carInfo));
    // Update positions.
    if (imageLeftPosition > 1000) {
      imageTopPosition += imageHeight + topSpacing;
      imageLeftPosition = leftSpacing;
      textTopPosition += imageHeight + topSpacing;
    } else {
      imageLeftPosition += imageWidth + leftSpacing;
    }
    textLeftPosition = imageLeftPosition;
  }
  document.body.appendChild(header);
}

