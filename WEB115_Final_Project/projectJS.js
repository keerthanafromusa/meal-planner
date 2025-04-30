console.log("generateMealPlan is running");
function validateEmail() {
    let email = document.forms["emailInputForm"]["email"].value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email to continue.")
        return false;
    }
    else {
        document.getElementById('customerInput').style.display = 'block';
        return false;
    }

}

function handleCustomerInput() {
    document.getElementById('mealPlan').style.display = 'block';
    return false;
}


function downloadTable() {
    const table = document.querySelector("table");
    let rows = table.rows;
    let text = "";

    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].cells;
        let rowText = [];
        for (let j = 0; j < cells.length; j++) {
            rowText.push(cells[j].innerText || cells[j].querySelector("input")?.value || "");
        }

        text += rowText.join(",") + "\n";
    }

    const b = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.download = "mealPlan.txt";
    link.href = window.URL.createObjectURL(b);
    link.click();
}


function clear() {
    const inp = document.querySelector("#mealPlan input[type = 'text]");
    inputs.forEach(input => {
        input.value = "";
    });
}

function win() {
    let newWindow = window.open();
    const monBreakfast = document.querySelector('input[name="monBreakfast"]').value;
    const monSnack1 = document.querySelector('input[name="monSnack1"]').value;
    const monLunch = document.querySelector('input[name="monLunch"]').value;
    const monDinner = document.querySelector('input[name="monDinner"]').value;
    const monSnack2 = document.querySelector('input[name="monSnack2"]').value;

    const tueBreakfast = document.querySelector('input[name="tueBreakfast"]').value;
    const tueSnack1 = document.querySelector('input[name="tueSnack1"]').value;
    const tueLunch = document.querySelector('input[name="tueLunch"]').value;
    const tueDinner = document.querySelector('input[name="tueDinner"]').value;
    const tueSnack2 = document.querySelector('input[name="tueSnack2"]').value;

    const wedBreakfast = document.querySelector('input[name="wedBreakfast"]').value;
    const wedSnack1 = document.querySelector('input[name="wedSnack1"]').value;
    const wedLunch = document.querySelector('input[name="wedLunch"]').value;
    const wedDinner = document.querySelector('input[name="wedDinner"]').value;
    const wedSnack2 = document.querySelector('input[name="wedSnack2"]').value;

    const thursBreakfast = document.querySelector('input[name="thursBreakfast"]').value;
    const thursSnack1 = document.querySelector('input[name="thursSnack1"]').value;
    const thursLunch = document.querySelector('input[name="thursLunch"]').value;
    const thursDinner = document.querySelector('input[name="thursDinner"]').value;
    const thursSnack2 = document.querySelector('input[name="thursSnack2"]').value;

    const friBreakfast = document.querySelector('input[name="friBreakfast"]').value;
    const friSnack1 = document.querySelector('input[name="friSnack1"]').value;
    const friLunch = document.querySelector('input[name="friLunch"]').value;
    const friDinner = document.querySelector('input[name="friDinner"]').value;
    const friSnack2 = document.querySelector('input[name="friSnack2"]').value;

    const satBreakfast = document.querySelector('input[name="satBreakfast"]').value;
    const satSnack1 = document.querySelector('input[name="satSnack1"]').value;
    const satLunch = document.querySelector('input[name="satLunch"]').value;
    const satDinner = document.querySelector('input[name="satDinner"]').value;
    const satSnack2 = document.querySelector('input[name="satSnack2"]').value;

    const sunBreakfast = document.querySelector('input[name="sunBreakfast"]').value;
    const sunSnack1 = document.querySelector('input[name="sunSnack1"]').value;
    const sunLunch = document.querySelector('input[name="sunLunch"]').value;
    const sunDinner = document.querySelector('input[name="sunDinner"]').value;
    const sunSnack2 = document.querySelector('input[name="sunSnack2"]').value;
    newWindow.document.write(`<html><head><title>Meal Plan</title>
        <style>
            .days{
                color: #1c3e6b
            }

            body{
                font-family: 'Courier New', Courier, monospace;
            }
        </style>
        </head><body><h1>Final Meal Plan </h1> <p>The meals are arranged each day in the following order: Breakfast, Snack 1, Lunch, Dinner, Snack 2. Follow this plan to the best of your ability to get the most out of your fitness journey!!</p>

        <tr>
    <td class = "days">Monday:</td>
    <td>${monBreakfast}</td>
    <td>${monSnack1}</td>
    <td>${monLunch}</td>
    <td>${monDinner}</td>
    <td>${monSnack2}</td>
</tr>

<br><br>
    
    <tr>
    <td class = "days">Tuesday:</td>
    <td>${tueBreakfast}</td>
    <td>${tueSnack1}</td>
    <td>${tueLunch}</td>
    <td>${tueDinner}</td>
    <td>${tueSnack2}</td>
</tr>


<br><br>

<tr>
    <td class = "days">Wednesday:</td>
    <td>${wedBreakfast}</td>
    <td>${wedSnack1}</td>
    <td>${wedLunch}</td>
    <td>${wedDinner}</td>
    <td>${wedSnack2}</td>
</tr>


<br><br>

<tr>
    <td class = "days">Thursday:</td>
    <td>${thursBreakfast}</td>
    <td>${thursSnack1}</td>
    <td>${thursLunch}</td>
    <td>${thursDinner}</td>
    <td>${thursSnack2}</td>
</tr>


<br><br>
<tr>
    <td class = "days">Friday:</td>
    <td>${friBreakfast}</td>
    <td>${friSnack1}</td>
    <td>${friLunch}</td>
    <td>${friDinner}</td>
    <td>${friSnack2}</td>
</tr>


<br><br>

    <tr> <td class = "days">Saturday:</td> <td>${satBreakfast}</td><td>${satSnack1}</td> <td>${satLunch}</td><td>${satDinner}</td><td>${satSnack2}</td> </tr>
    

<br><br>
<tr>
    <td class = "days">Sunday:</td>
    <td>${sunBreakfast}</td>
    <td>${sunSnack1}</td>
    <td>${sunLunch}</td>
    <td>${sunDinner}</td>
    <td>${sunSnack2}</td>
</tr>
    </body></html>`);
    newWindow.document.close();
}
