// Constructor function
let Food = function(pName, pCalories) {
    this.name = pName;
    this.calories = parseInt(pCalories);
};

// array to hold "Food" objects
let FoodArray = [];

// pre-loaded array with 2 objects
let newFood1 = new Food("Apple", 95);
FoodArray.push(newFood1);

let newFood2 = new Food("Taco", 155);
FoodArray.push(newFood2);


document.addEventListener("DOMContentLoaded", function(event) {

    document.getElementById("totalCalories").disabled = true;

    // events when "Submit" button is clicked
    document.getElementById("submitBtn").addEventListener("click", function() {
        console.log(FoodArray);

        let fName = document.getElementById("foodName").value;
        let fCalories = parseInt(document.getElementById("calories").value);
    
        // if user types non-integer inside calories box, then it will return 0 (calories = 0)
        if (isNaN(fCalories)) {
            fCalories = 0;
        }

        FoodArray.push(new Food(fName, fCalories)); // add new object to array

        // add total calories
        let totalCal = 0;
        for (let i = 0; i < FoodArray.length; i++) {
            totalCal += FoodArray[i].calories;
        }
        document.getElementById("totalCalories").value = totalCal;
        
        // clear text boxes
        document.getElementById("foodName").value = "";
        document.getElementById("calories").value = "";
    });
});


