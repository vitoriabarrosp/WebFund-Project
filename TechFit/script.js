function openNewPage() {
    window.location.href='file:///C:/Users/vitor/OneDrive/Desktop/CodingDojo/TechFit/sricpt2.html'
}


function calculateDiet() {
    var age = document.getElementById("age").value;
    var height = document.getElementById("height").value * 2.54;
    var weight = document.getElementById("weight").value / 2.2;
    var result = 0;

    if (document.getElementById("male").checked) {
        result = 66.47 + (13.75 * weight) + (5.0 * height - (6.75 * age));
    } else if (document.getElementById("female").checked) {
        result = 655.1 + (9.56 * weight) + (1.84 * height - (4.67 * age));
    }

    if (document.getElementById("maintain").checked) {
        // Maintain Weight
        result *= 1.0;
    } else if (document.getElementById("gain").checked) {
        // Weight Gain
        result *= 1.1;
    } else if (document.getElementById("loss").checked) {
        // Weight Loss
        result *= 0.9;
    }

    // document.getElementById("#totalCals").innerHTML = Math.round(result);

    postCaloriesBox(result);
}

// Calories
function postCaloriesBox(num) {
    var popUp = document.querySelector("#caloriesBox");

    popUp.innerHTML = `
        <div class="popUp-box">
            <p>Total Calories needed to accomplish goal: ${Math.round(num)}</p>
        </div>
    `;
    popUp.style.display = "block";
}

