function getDOB() {
    let data = document.getElementById("inputDob").value;
    let dob = new Date(data);
    let now = new Date();

    let yearDiff = now.getFullYear() - dob.getFullYear();
    let monthDiff = now.getMonth() - dob.getMonth();
    let dateDiff = now.getDate() - dob.getDate();

    if (yearDiff < 0) {
        document.getElementById("currentAge").innerHTML = "Invalid Date";
    } else if (monthDiff > 0 || (monthDiff === 0 && dateDiff >= 0)) {
        document.getElementById("currentAge").innerHTML = `Your current age is ${yearDiff} years, ${monthDiff} months, and ${dateDiff} days`;
    } else {
        yearDiff = yearDiff - 1;
        if (monthDiff <= 0) {
            if (dateDiff > 0) {
                monthDiff = 12 + monthDiff;
            } else {
                monthDiff = 11 - monthDiff;
            }
        }
        if (dateDiff < 0) {
            dateDiff = 30 + dateDiff;
            monthDiff -= 1;
        }
        document.getElementById("currentAge").innerHTML = `Your current age is ${yearDiff} years, ${monthDiff} months, and ${dateDiff} days`;
    }
}

// Set default date value for current date
function currentDate() {
    let d = document.getElementById("inputDob");
    d.value = formatted();
}

// Format date as YYYY-MM-DD
function formatted(date = new Date()) {
    return [
        date.getFullYear(),
        short(date.getMonth() + 1),
        short(date.getDate())
    ].join("-");
}

// Ensure month and day components are zero-padded
function short(num) {
    return num.toString().padStart(2, "0");
}

currentDate();