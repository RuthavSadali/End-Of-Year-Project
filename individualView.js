var year = "";
var make = "";
var model = "";
var color = "";
var mileage = "";
var price = 0;
var imagePath = "";

function getCarInfo() {
  // Referenced from: https://www.codeproject.com/Questions/795191/Passing-JavaScript-data-values-between-HTML-pages
  var carSpecs = decodeURIComponent(window.location.search).substring(1).split("&");
  year = carSpecs[0].split("=")[1];
  make = carSpecs[1].split("=")[1];
  model = carSpecs[2].split("=")[1];
  color = carSpecs[3].split("=")[1];
  mileage = carSpecs[4].split("=")[1];
  price = carSpecs[5].split("=")[1];
  imagePath = carSpecs[6].split("=")[1];
}

function displayCarInfo() {
  getCarInfo();
  document.getElementById("specs").innerHTML = year + "-" + make.toUpperCase() + "-" + model.toUpperCase();
  let briefDescription = document.getElementById("description");
  briefDescription.innerHTML = "Color: " + color + " \r\nMileage: " + mileage + " miles \r\nPrice: $" + price;
  briefDescription.style.whiteSpace = "pre";
  var carImage = document.createElement("img");
  carImage.src = imagePath;
  carImage.class = "d-block w-100";
  carImage.style.width = "1110px";
  carImage.style.height = "500px";
  var info = document.getElementById("info");
  info.appendChild(carImage);
}



//recyle code to program
function newElement() {
  var mAAke = document.getElementById('Make').value
  if (mAAke === '')
  {
    alert("Please write a task");
    return;
  } 
  else 
  {
    car = mAAke;
    if (make != '') {
      car = car + " by " + make
    }
  }
  var newCar = findNextId(),
    newCar = {
      'car': car,
      'id': 'car' + newCar
    };
  newCar.specifications.push(newCar);
  sortElementsById();
  clearFields();
}

function findNextId() {
  if (newCar.length === 0) {
    return 0;
  }
  var lastElementId = fetchIdFromObj(newCar[newCar.length - 1]),
    firstElementId = fetchIdFromObj(newCar[0]);
  return (firstElementId >= lastElementId) ? (firstElementId + 1) : (lastElementId + 1);
}
  
function displayOneElement(carMakeModel) {
  var li_element = document.createElement("li");
  var p_element = document.createElement("p");
  p_element.className = "task-name";
  li_element.appendChild(p_element);
  li_element.setAttribute("id", carMakeModel.id);
  var text_node = document.createTextNode(carMakeModel.newCar);
  p_element.appendChild(text_node);
  var span_element = document.createElement("SPAN");
  span_element.className = "close";
  var txt_node = document.createTextNode("\u00D7");
  span_element.appendChild(txt_node);
  span_element.onclick = deleteElement;
  li_element.appendChild(span_element);
  document.getElementById("task-list").appendChild(li_element);
}

function clearFields() {
  document.getElementById('make').value = '';
  document.getElementById('model').value = '';
}

function calculatePayment()
{
    var interestRate;
    if(document.getElementById('excellent').value == true)
    {
        interestRate = 1.5;
    }
     if(document.getElementById('good').value == true)
    {
        interestRate = 2.7;
    }
     if(document.getElementById('average').value == true)
    {
        interestRate = 3.8;
    }
     if(document.getElementById('poor').value == true)
    {
        interestRate = 5.2;
        
    }
    var interestCost = price * interest * loanTerm;
    var totalPrice = price + interestCost;
    var montlyPayment = totalPrice/loanTerm;
    return loanTerm;
}
