var carListVieuw = document.getElementById('CarListVieuw');
var brandListVieuw = document.getElementById('brandListVieuw');
var BtnAdd = document.getElementById('BtnAdd');
var BtnRemove = document.getElementById('BtnRemove');



class Car {

    constructor(brand = "undefined", type = "Unknown", year = 2000){
        this.Brand = brand;
        this.Type = type;
        this.year = year;
    }


}

class Garage {
    constructor(carList = {}){
        this.CarList = carList;
    }

    Add (car){
        this.CarList.Add(car);
    }
}

function BtnAddOnClickEvent(){
    prompt("What is the new car's name?");
}