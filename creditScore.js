var urlComps = decodeURIComponent(window.location.search).substring(1).split("&");

function getPrice() {
    var price = urlComps[1].split("=")[1];
    return parseFloat(price);
}

function addSmallCarPic() {
    var imagePath = urlComps[0].split("=")[1];
    var smallCarImage = document.createElement("img");
    smallCarImage.src = imagePath;
    smallCarImage.style = "max-width:100%;";
    smallCarImage.style.width = "200px";
    smallCarImage.style.height = "200px";
    document.getElementById("smallPic").appendChild(smallCarImage);
}

function printMonthlyCost(price, interestRate) {
    document.getElementById('60').innerHTML = "$" + calculateMonthlyCost(price, interestRate, 60);
    document.getElementById('72').innerHTML = "$" + calculateMonthlyCost(price, interestRate, 72);
    document.getElementById('84').innerHTML = "$" + calculateMonthlyCost(price, interestRate, 84);
    document.getElementById("downPayment").value = "";
}

function calculateMonthlyCost(price, interestRate, numMonths) {
    var downPayment = document.getElementById("downPayment").value;
    var loanAmount = price - downPayment;
    var interest = loanAmount * (interestRate) * (numMonths/12);
    var total = interest + loanAmount;
    return (total/numMonths).toFixed(2);
}