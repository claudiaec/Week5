/*Coding Steps: 
Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements. 
Use at least one array. 
Use at least two classes. 
Your menu should have the options to create, view, and delete elements. 
Screenshots of Code: */


// WEEKLY SCHEDULE

//1. Create a class called Meals
            // 1 Meal = 1 string
            // meals = []array of strings

class Meal {
    constructor(nameOfMeal)
        {this.nameOfMeal = nameOfMeal;}    
}
                
//2. Create a class called Days
            // 1 Day = 1 string
            // days = []array of strings 

class Day {
    constructor(nameOfDay)
        {this.nameOfDay = nameOfDay;}        
}

//3. Create a class called Menu

class WeeklySchedule {
    constructor (){
        this.Meals=[];
        this.Days=[];
        this.selecteday = null;
    }    
    
    start(){
        let selection = this.showMainMenuOptions();
        while (selection != 0){
            switch (selection){
                case '1':
                    this.createDay();
                    break;
                case '2':
                    this.displayDays();
                    break;
                case '3':
                    this.deleteDay();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert ('Goodbye');
    }

    showMainMenuOptions(){
        return prompt(`
        Welcome to your weekly meal planner!!

        0) exit
        1) create new day
        2) display all days
        3) delete day
        `);
    }

    // 3.1 Create a createDay method:
        // prompt write a day
        // prompt write a meal

    createDay(){
        let nameOfDay = prompt ('Enter your new day')   
            this.Days.push(new Day(nameOfDay))

        let nameOfMeal = prompt ('Enter your new meal')
            this.Meals.push(new Meal(nameOfMeal)) 

            prompt("Your day was made succesfully")
               
    }

    //3.2 Show all elements by index and name

    displayDays(){
        console.log(this)
        const { Meals, Days } = this;
        const allDays= this.Meals.map (function(value,index){
            console.log(this)
            return index + " " + Days[index].nameOfDay + " "+ Meals[index].nameOfMeal + " \n ";
        })
        
        prompt(allDays);
    }

//var array1 = ["monday", "tuesday", "wednesday", "thursday", "Friday"];
//var array2 = ["Steak and veggies", "Rice with Banana and beans", "steak and smashed potatoes", "green salad and jelly"];

//var newArray = array1.map(function(value, index) {
  //return index + " " + value + " " + array2[index]
//});
//console.log(newArray);*/


        //3.3 Create a DeleteDay method:
        //display all days and meals with index
        //prompt write index of element to delete
        //delete elements in both arrays

    deleteDay(){
        let index = prompt ('Enter the index of the Day you wish to delete');
        if(index > -1 && index < this.Days.length){
            this.Days.splice (index,1);
            this.Meals.splice (index,1);
        }
    }
}

let wSchedule = new WeeklySchedule()
wSchedule.start();


// Weekly Schedule(... my steps)
//1. Create a class called Meals
            // 1 Meal = 1 string
            // meals = []array of strings

//2. Create a class called Days
            // 1 Day = 1 string
            // days = []array of strings 

//3. Create a class called Menu
    //3.1 Create a createDay method:
        // prompt write a day
        // prompt write a meal

    //3.2 Show all elements by index and name

    //3.3 Create a DeleteDay method:
        //display all days and meals with index
        //prompt write index of element to delete
        //delete elements in both arrays

   
