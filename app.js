
'use strict';

let form = document.getElementById("form");
let container = document.getElementById("container");
let arrofData = [];
let table = document.createElement('table');
container.appendChild(table);


function CarGarage(name,catigory,model) {
  this.name=name ;
  this.catigory=catigory ;
  this.model=model ;
  arrofData.push(this);

}

CarGarage.prototype.render = function (){
    
    let catigoryInput = document.getElementById("catigory");
    this.catigory= catigoryInput.value;
    this.catigory.toLowerCase();
    let modelInput =document.getElementById('model');
    this.model = modelInput.value ;
    
     let tr = document.createElement('tr');
     table.appendChild(tr);
     let td = document.createElement('td');
     tr.appendChild(td);
     let img = document.createElement('img');
     td.appendChild(img);
     if (this.catigory === 'bmw'){
         img.setAttribute("src","img/bmw.jpeg");
     }else if(this.catigory === 'chevr'){
        img.setAttribute("src","img/chevr.jpeg");
     }else if(this.catigory === 'hondai'){
        img.setAttribute("src","img/hondai.jpeg");
     }else if(this.catigory === 'kia'){
        img.setAttribute("src","img/kia.jpeg");
     }else if(this.catigory === 'lexus'){
        img.setAttribute("src","img/lexus.jpeg");
     }else if(this.catigory === 'tesla'){
        img.setAttribute("src","img/tesla.jpeg");
     }else if(this.catigory === 'toyota'){
        img.setAttribute("src","img/toyota.jpeg");
     }else {
         alert('thanks');
     }
     let td2 = document.createElement('td');
     tr.appendChild(td2);
     td2.textContent=`car name : ${this.catigory}` + "\n" + `model year : ${this.model} `; 
 



    
    saveData();
}


form.addEventListener("submit" ,showTable )

function showTable(event) {
    event.preventDefault();
    let name = event.target.name.value
    let catigory = event.target.name.value
    let model = event.target.name.value
    let cars = new CarGarage(name , catigory,model)
    cars.render();
}



function saveData(){

    let data =JSON.stringify(arrofData);
    localStorage.setItem('alldata', data) ;

}


function previuosData(){
    let prevData=localStorage.getItem('alldata');
    let convprevData =JSON.parse(prevData)
 
    if(convprevData){ 
        arrofData = convprevData;
   }
 }

 previuosData();
 