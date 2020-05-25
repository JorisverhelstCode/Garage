"use strict";

var CarTableView = document.getElementById('CarTableView');
var BtnAdd = document.getElementById('BtnAdd');
var BtnRemove = document.getElementById('BtnRemove');
var FieldToBeAddedName = document.getElementById('FieldToBeAddedName');
var FieldToBeAddedBrand = document.getElementById('FieldToBeAddedBrand');
var FieldToBeAddedType = document.getElementById('FieldToBeAddedType');
var DpToBeAddedYear = document.getElementById('DpToBeAddedYear');

var OurGarage = new Garage();
BtnAdd.addEventListener("click", BtnAddOnClickEvent);
BtnRemove.addEventListener("click", BtnRemoveOnClickEvent);


class Car {

    constructor(name = "Unnamed", brand = "undefined", type = "Unknown", year = 2000){
        this.Name = name;
        this.Brand = brand;
        this.Type = type;
        this.Year = year;
    }


}

class Garage {
    constructor(carList = {}){
        this.CarList = carList;
    }

    Add (car){
        this.CarList.Add(car);
    }

    Remove(car){
        this.CarList.Remove(car);
    }

    GetCarByName(name) {
        this.CarList.forEach(item => {
            if (item.Name = name){
                return item;
            }
        });
    }
}

function BtnAddOnClickEvent(){
    let Name = FieldToBeAddedName.textContent;
    let Brand = FieldToBeAddedBrand.textContent;
    let Type = FieldToBeAddedType.textContent;
    let year = DpToBeAddedYear.nodeValue;

    var Car = new Car(Name, Brand, Type, year);
    OurGarage.Add(Car);
    UpdateLists();
}

function BtnRemoveOnClickEvent(){
    var choiceCarName = prompt("Give the name of the car you woud like to delete");
    var choiceCar = OurGarage.GetCarByName(choiceCarName);
    OurGarage.Remove(choiceCar);
    UpdateLists();
}

function UpdateLists(){
    CarTableView.children.forEach(item => {
        carListVieuw.removeChild(item);
    });

    OurGarage.CarList.forEach(car => {
        var row = document.createElement("tr");
        var nameEl = document.createElement("td")
        nameEl.textContent = car.Name;
        row.appendChild(nameEl);
        var brandEl = document.createElement("td")
        brandEl.textContent = car.Brand;
        row.appendChild(brandEl);
        var typeEl = document.createElement("td")
        typeEl.textContent = car.Type;
        row.appendChild(typeEl);
        var yearEl = document.createElement("td")
        yearEl.textContent = car.Year;
        row.appendChild(yearEl);
        carListVieuw.appendChild(row);
    });
}