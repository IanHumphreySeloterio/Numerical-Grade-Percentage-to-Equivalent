const display = document.getElementById("display");
const inputGrades = document.getElementById("inputGrades");
const buttonOfJudgement = document.getElementById("buttonOfJudgement");

buttonOfJudgement.addEventListener("click", function() {

    let grade = parseFloat(inputGrades.value);

    if (grade >= 1.00 && grade <=1.25 || grade >= 94 && grade <=100) {
        display.value = "Excellent";
    }
    else if (grade > 1.25 && grade <=1.75 || grade >= 88 && grade <=93) {
        display.value = "Very Good";
    }
    else if (grade > 1.75 && grade <=2.25 || grade >= 82 && grade <=87) {
        display.value = "Good";
    }
    else if (grade > 2.25 && grade <=2.75 || grade >= 76 && grade <=81) {
        display.value = "Satisfactory";
    }
    else if (grade > 2.75 && grade <=3.00 || grade === 75) {
        display.value = "Passing";
    }
    else if ((grade > 3.00 && grade <= 5.00) || (grade >= 0 && grade < 75)) {
        display.value = "💀💀 Failed";
    }
    else {
        display.value = "Invalid Grade";
    }

});






