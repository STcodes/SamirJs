function checkMale(){
                
    var noOfMales = document.getElementById("no_of_males").value;   
    for (var i = 1; i <= noOfMales; i++) {
        var empImage = document.createElement("img");
        empImage.src = "img/test1.png";
        empImage.style = "width: 30px; height: 50px; padding: 5px;";
        document.getElementById("employee-gender-wrapper").appendChild(empImage);
    }
}

function checkFemale(){

    var noOfFemales = document.getElementById("no_of_females").value;
    for (var i = 1; i <= noOfFemales; i++) {
            var empImage = document.createElement("img");
            empImage.src = "img/test2.png";
            empImage.style = "width: 30px; height: 50px; padding: 5px;";
            document.getElementById("employee-gender-wrapper").appendChild(empImage);
        }
    }

function resetIcons(){
    var resetIcon = document.getElementById("employee-gender-wrapper");
    resetIcon.innerHTML = " ";
}
