const { contextBridge } = require('electron');
const { title } = require('process');
var carsList = [];
var preview_url = "https://tinyurl.com/6xty6mvp";

function createCarsList() {
    carsList = [];
}

window.onload=function(){
    var newImage = document.getElementById("image");
    newImage.addEventListener("change", function() {
        uploadImage(this);
    });
}
    

function uploadImage(inputImage)
{
    // Image upload code retrieved from: https://stackoverflow.com/questions/31710127/javascript-image-upload-and-display
    var reader;
    var preview = document.getElementById("preview");
    if (inputImage.files && inputImage.files[0]) {
        reader = new FileReader();
        reader.onload = function(e) {
            preview.setAttribute('src', e.target.result);
        }
        reader.readAsDataURL(inputImage.files[0]);
    }
}

function askCarDetails() {
    var brand = document.getElementById("brand").value;
    var model = document.getElementById("model").value;
    var color = document.getElementById("color").value;
    var mileage = document.getElementById("mileage").value;
    var year = document.getElementById("year").value;
    var price = document.getElementById("price").value;
    var imagePath = document.getElementById("image").files[0].path;
    actualAdd(brand, model, color, mileage, year, price, imagePath);
    document.getElementById("brand").value = "";
    document.getElementById("model").value = "";
    document.getElementById("color").value = "";
    document.getElementById("mileage").value = "";
    document.getElementById("year").value = "";
    document.getElementById("price").value = "";
    var preview = document.getElementById("preview");
    preview.setAttribute('src', preview_url);
    document.getElementById("image").value = "";
}

function actualAdd(brand, model, color, mileage, year, price, imagePath) 
{
    carDict = {}
    carDict["brand"] = brand;
    carDict["model"] = model;
    carDict["color"] = color;
    carDict["mileage"] = mileage;
    carDict["year"] = year;
    carDict["price"] = price;
    carDict["imagePath"] = imagePath;
    carsList.push(carDict);
    writeToJSONFile();
}

function writeToJSONFile() {
    var listString = JSON.stringify(carsList, null, 4);
    var fs = require('fs');
    console.log("About to write file");
    fs.writeFileSync('cars.json', listString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })
}