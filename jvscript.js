const display = document.getElementById("display");
const inputGrades = document.getElementById("inputGrades");
const buttonOfJudgement = document.getElementById("buttonOfJudgement");

buttonOfJudgement.addEventListener("click", function () {

    let grade = parseFloat(inputGrades.value);

    if (isNaN(grade)) {
        display.value = "Enter a valid number";
        return;
    }

//Numerical grades ni siya
    if (grade >= 1.00 && grade <= 5.00) {

        if (grade <= 1.25) {
            display.value = "Excellent";
        }
        else if (grade <= 1.75) {
            display.value = "Very Good";
        }
        else if (grade <= 2.25) {
            display.value = "Good";
        }
        else if (grade <= 2.75) {
            display.value = "Satisfactory";
        }
        else if (grade <= 3.00) {
            display.value = "Passing";
        }
        else {
            display.value = "💀💀";
        }

    }

//Percentage Grades ni siya
    else if (grade >= 0 && grade <= 100) {

        if (grade >= 94) {
            display.value = "Excellent";
        }
        else if (grade >= 88) {
            display.value = "Very Good";
        }
        else if (grade >= 82) {
            display.value = "Good";
        }
        else if (grade >= 76) {
            display.value = "Satisfactory";
        }
        else if (grade >= 75) {
            display.value = "Passing";
        }
        else {
            display.value = "💀💀";
        }

    }

    else {
        display.value = "Invalid Grade";
    }

});
