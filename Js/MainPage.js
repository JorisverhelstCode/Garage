"use strict";

function BtnAddOnClickEvent(){
    let Name = FieldToBeAddedName.value;
    let Brand = FieldToBeAddedBrand.value;
    let Type = FieldToBeAddedType.value;
    let year = DpToBeAddedYear.value.year;

    var toBeAddedCar = new Car(Name, Brand, Type, year);
    OurGarage.Add(toBeAddedCar);
    UpdateLists();
}

function BtnRemoveOnClickEvent(){
    var choiceCarName = prompt("Give the name of the car you woud like to delete");
    var choiceCar = OurGarage.GetCarByName(choiceCarName);
    OurGarage.Remove(choiceCar);
    UpdateLists();
}

var CarTableView = document.getElementById('CarTableView');
var BtnAdd = document.getElementById('BtnAdd');
var BtnRemove = document.getElementById('BtnRemove');
var FieldToBeAddedName = document.getElementById('FieldToBeAddedName');
var FieldToBeAddedBrand = document.getElementById('FieldToBeAddedBrand');
var FieldToBeAddedType = document.getElementById('FieldToBeAddedType');
var DpToBeAddedYear = document.getElementById('DpToBeAddedYear');


BtnAdd.addEventListener("click", BtnAddOnClickEvent);
BtnRemove.addEventListener("click", BtnRemoveOnClickEvent);


class Car {
    constructor(name, brand, type, year){
        this.Name = name ? name: "Unnamed";
        this.Brand = brand ? brand: "Undefined";
        this.Type = type ? type: "Unknown";
        this.Year = year ? year: 2000;
    }
}

class Garage {
    constructor(carList = []){
        this.CarList = carList;
    }

    Add (car){
        this.CarList.push(car);
    }

    Remove(car){
        this.CarList.splice(car);
    }

    GetCarByName(name) {
        this.CarList.forEach(item => {
            if (item.Name = name){
                return item;
            }
        });
    }
}

var OurGarage = new Garage();

function UpdateLists(){
    CarTableView.innerHTML = "";

    OurGarage.CarList.forEach(car => {
        var row = document.createElement("tr");
        var nameEl = document.createElement("td")
        nameEl.appendChild(document.createTextNode(car.Name));
        row.appendChild(nameEl);
        var brandEl = document.createElement("td")
        brandEl.innerText = car.Brand;
        row.appendChild(brandEl);
        var typeEl = document.createElement("td")
        typeEl.innerText = car.Type;
        row.appendChild(typeEl);
        var yearEl = document.createElement("td")
        yearEl.innerText = car.Year;
        row.appendChild(yearEl);
        var btnChange = document.createElement("button")
        btnChange.textContent = "Change";
        row.appendChild(btnChange);
        CarTableView.appendChild(row);
    });
}