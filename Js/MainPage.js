"use strict";

function BtnAddOnClickEvent(){
    let Name = FieldToBeAddedName.value;
    let Brand = FieldToBeAddedBrand.value;
    let Type = FieldToBeAddedType.value;
    let year = DpToBeAddedYear.value;

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
var BtnSave = document.getElementById('BtnSave');
var BtnChange = document.getElementById('BtnChange');
var FieldToBeAddedName = document.getElementById('FieldToBeAddedName');
var FieldToBeAddedBrand = document.getElementById('FieldToBeAddedBrand');
var FieldToBeAddedType = document.getElementById('FieldToBeAddedType');
var DpToBeAddedYear = document.getElementById('DpToBeAddedYear');

var SelectedCar = "";
BtnChange.addEventListener("click", BtnChangeOnclickEvent);
BtnAdd.addEventListener("click", BtnAddOnClickEvent);
BtnRemove.addEventListener("click", BtnRemoveOnClickEvent);
BtnSave.addEventListener('click', BtnSaveOnClickEvent);
BtnSave.style.visibility = 'hidden';


class Car {
    constructor(name, brand, type, year){
        this.Name = name ? name: "Unnamed";
        this.Brand = brand ? brand: "Undefined";
        this.Type = type ? type: "Unknown";
        this.Year = year;
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
        var found = false;
        this.CarList.forEach(item => {
            if (item.Name = name){
                found = true
                return item;
            }
        });
        if (!found) {
            alert("This car is currently not in our garage, maybe check your spelling");
        }
    }
}

var OurGarage = new Garage();

function UpdateLists(){
    CarTableView.innerHTML = "";

    OurGarage.CarList.forEach(car => {
        var row = document.createElement("tr");
        var nameEl = document.createElement("td");
        nameEl.appendChild(document.createTextNode(car.Name));
        row.appendChild(nameEl);
        var brandEl = document.createElement("td");
        brandEl.innerText = car.Brand;
        row.appendChild(brandEl);
        var typeEl = document.createElement("td");
        typeEl.innerText = car.Type;
        row.appendChild(typeEl);
        var yearEl = document.createElement("td");
        yearEl.innerText = car.Year.year;
        row.appendChild(yearEl);
        CarTableView.appendChild(row);
    });
}

function BtnChangeOnclickEvent(){
    var selectedCarName = prompt("Which car would you like to change?");
    SelectedCar = OurGarage.GetCarByName(selectedCarName);
    FieldToBeAddedName.value = SelectedCar.Name;
    FieldToBeAddedBrand.value = SelectedCar.Brand;
    FieldToBeAddedType.value = SelectedCar.Type;
    DpToBeAddedYear.value = SelectedCar.Year;
    BtnSave.style.visibility = 'visible';
    BtnAdd.style.visibility = 'hidden';
}

function BtnSaveOnClickEvent(){
    SelectedCar.Name = FieldToBeAddedName.value;
    SelectedCar.Brand = FieldToBeAddedBrand.value;
    SelectedCar.Type = FieldToBeAddedType.value;
    SelectedCar.year = DpToBeAddedYear.value;
    BtnSave.style.visibility = 'hidden';
    BtnAdd.style.visibility = 'visible';
    FieldToBeAddedName.value = "";
    FieldToBeAddedBrand.value = "";
    FieldToBeAddedType.value = "";
    DpToBeAddedYear.value = "";
    UpdateLists();
}