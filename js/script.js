'use strict';

class Animal {
  constructor(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id;
    this.type = "just animal";
  }

  get information() {
    return `Hello! My name is ${this.name}, I am ${this.age}.`;
  }
}

class Cat extends Animal {
  constructor(name, age, id) {
    super(name, age, id);
    this.type = "Cat";
  }
}

class Dog extends Animal {
  constructor(name, age, id) {
    super(name, age, id);
    this.type = "Dog";
  }
}

//-------------------------------------------

class AnimalParty {
  constructor(id,title, arrOfAnimals, type) {
    this.id = id;
    this.title = title;
    this.arrOfAnimals = arrOfAnimals;
    this.type = type;
  }
}

//-------------------------------------------

var newCat0 = new Cat("Garfield",13,0);
var newCat1 = new Cat("Alex",0.5,1);

var newDog0 = new Dog("John",21,0);
var newDog1 = new Dog("Sharik",2,1);
var newDog2 = new Dog("Van Gog",33,2);
var newDog3 = new Dog("Muhtar",5,3);


var arrCats = [newCat0,newCat1];
var arrDogs = [newDog0,newDog1,newDog2,newDog3];

var numberCats = 2;
var numberDogs = 4;
var partyId = 0;

// var arrayObj = [newCat0,newDog1,newDog2,newDog3,newCat4];
// var number = 5;

function createAnimal() {
  if (($("#name").val() == undefined)||($("#name").val() == ""))
    return;
  let name = $("#name").val();
  if ((parseInt($("#age").val(), 10) == NaN)||($("#age").val() == "") || (parseInt($("#age").val(), 10) <=0 ))
    return;
  let age = parseInt($("#age").val(), 10);
  let Type = $("#type").val();
  if (Type == "Dog") { 
    var newAnimal = new Dog(name,age,numberDogs);
    arrDogs.push(newAnimal); 
    numberDogs++;
    showDog(newAnimal);
  }
  if (Type == "Cat") {
    var newAnimal = new Cat(name,age,numberCats);
    arrCats.push(newAnimal); 
    numberCats++;
    showCat(newAnimal);
  }
  //number++;

  //arrayObj.push(newAnimal); 
  //showAnimal(newAnimal);
  showAnimalArrayConsole();
};

function showCat(animal) {
  $("#oneCat").append(`
    <div class="col-xs-6 col-sm-4 col-md-4 col-lg-2 oneAnimal_desc" id="` + animal.id + `">
    <h1>` + animal.type + `</h1>
    <div class="oneAnimal_desc__inf">
      <h4>name: <b>` + animal.name + `</b> </h4>
      <h4>age: <b>` + animal.age + `</b> </h4>
    </div>
      <button class="delete_cat btn btn-default" id="` + animal.id + `">Delete!</button>
      <button class="edit_cat btn btn-default" id="` + animal.id + `">Edit!</button>
    </div>`);
};

function showDog(animal) {
  $("#oneDog").append(`
    <div class="col-xs-6 col-sm-4 col-md-4 col-lg-2 oneAnimal_desc" id="` + animal.id + `">
    <h1>` + animal.type + `</h1>
    <div class="oneAnimal_desc__inf">
      <h4>name: <b>` + animal.name + `</b> </h4>
      <h4>age: <b>` + animal.age + `</b> </h4>
    </div>
      <button class="delete_dog btn btn-default" id="` + animal.id + `">Delete!</button>
      <button class="edit_dog btn btn-default" id="` + animal.id + `">Edit!</button>
    </div>`);
};

// show all created animal array in console
function showAnimalArrayConsole() {
  console.log("--- cats array ---",arrCats.length);
  for (let i=0; i < arrCats.length; i++) { 
      console.log(arrCats[i]);
    }
  console.log("---------------------");
  console.log("--- dogs array ---",arrDogs.length);
  for (let i=0; i < arrDogs.length; i++) { 
      console.log(arrDogs[i]);
    }
  console.log("---------------------");
}

// function deleteAnimal(idnum) {
//   for (let i=0; arrayObj[i]; i++) { 
//       if (idnum == arrayObj[i].id)
//         arrayObj.splice(i, 1);
//     }
  
//   $("#oneAnimal").empty();
//   for (let i=0; arrayObj[i]; i++) { 
//       showAnimal(arrayObj[i]);
//     }

//   showAnimalArrayConsole();
// };
function deleteCat(idnum) {
  for (let i=0; arrCats[i]; i++) { 
      if (idnum == arrCats[i].id)
        arrCats.splice(i, 1);
    }
  
  $("#oneCat").empty();
  for (let i=0; arrCats[i]; i++) { 
      showCat(arrCats[i]);
    }

  showAnimalArrayConsole();
};
function deleteDog(idnum) {
  for (let i=0; arrDogs[i]; i++) { 
      if (idnum == arrDogs[i].id)
        arrDogs.splice(i, 1);
    }
  
  $("#oneDog").empty();
  for (let i=0; arrDogs[i]; i++) { 
      showDog(arrDogs[i]);
    }

  showAnimalArrayConsole();
};

function showModalWindow_2() {
  $(".modal_window_2").append(`
      <input type="text" placeholder="Name" id="name_2" >
      <input type="text" placeholder="Age" id="age_2" >
      <button class="btn btn-default" id="edit">
        Edit!
      </button>
  `);
};
function hideModalWindow_2() {
  $(".modal_window_2").empty();
};
function editCat(idnum) {
  for (let i=0; arrCats[i]; i++) { 
      if (idnum == arrCats[i].id) {
        showModalWindow_2();
        $("#name_2").val(arrCats[i].name);
        $("#age_2").val(arrCats[i].age);
        $("#edit").click(function() {
          editCatNewInfo(i);
          hideModalWindow_2();
          return;
        });
      }
    }
};
function editCatNewInfo(num) {
  if (($("#name_2").val() == undefined)||($("#name_2").val() == ""))
    return;
  let name_2 = $("#name_2").val();
  if ((parseInt($("#age_2").val(), 10) == NaN)||(parseInt($("#age_2").val(), 10) <= 0)||($("#age_2").val() == ""))
    return;
  let age_2 = parseInt($("#age_2").val(), 10);
  arrCats[num].name = name_2;
  arrCats[num].age = age_2;

  console.log(arrCats[num]);

  $("#oneCat").empty();
  for (let i=0; arrCats[i]; i++) { 
    showCat(arrCats[i]);
  }

  showAnimalArrayConsole();
}

function editDog(idnum) {
  for (let i=0; arrDogs[i]; i++) { 
      if (idnum == arrDogs[i].id) {
        showModalWindow_2();
        $("#name_2").val(arrDogs[i].name);
        $("#age_2").val(arrDogs[i].age);
        $("#edit").click(function() {
          editDogNewInfo(i);
          hideModalWindow_2();
          return;
        });
      }
    }
};
function editDogNewInfo(num) {
  if (($("#name_2").val() == undefined)||($("#name_2").val() == ""))
    return;
  let name_2 = $("#name_2").val();
  if ((parseInt($("#age_2").val(), 10) == NaN)||(parseInt($("#age_2").val(), 10) <= 0)||($("#age_2").val() == ""))
    return;
  let age_2 = parseInt($("#age_2").val(), 10);
  arrDogs[num].name = name_2;
  arrDogs[num].age = age_2;

  console.log(arrDogs[num]);

  $("#oneDog").empty();
  for (let i=0; arrDogs[i]; i++) { 
    showDog(arrDogs[i]);
  }

  showAnimalArrayConsole();
}

// $(document).ready(function() {
//     $("#modal_window").hide();
//     var i=0;
//       for (i=0; arrayObj[i]; i++) { 
//         showAnimal(arrayObj[i]);
//         //console.log(arrayObj[i]);
//       }
// });
// $(document).ready(function() {
//   $(document).on ("click", "#createNew", function () {
//     $("#modal_window").show();
//   });
// });
// $(document).ready(function() {
//   $(document).on ("click", "#add", function () {
//     $("#modal_window").hide();
//     addCreatedAnimal();
//   });
// });

function showModalWindow_3() {
  $(".modal_window_3").append(`
      <input type="text" placeholder="Type of party" id="typeParty" >
      <input type="text" placeholder="Title of party" id="title" >
      <h4>Who will be invited???</h4>
      <div>
        <h4>CATS:</h4>
        <div class="nameCats"></div>
      </div>
      <div>
        <h4>DOGS:</h4>
        <div class="nameDogs"></div>
      </div>
      <br>
      <button class="btn btn-default" id="createNewParty">
        Create party!
      </button>
  `);
};
function hideModalWindow_3() {
  $(".modal_window_3").empty();
};
function createAnimalParty() {
  showModalWindow_3();
  for (let i=0; arrCats[i]; i++) { 
    $(".nameCats").append(`
      <label class="col-sm-12 hello"><input type="checkbox" id="cat` + arrCats[i].id + `">   ` + arrCats[i].name + `</label>`);
  }
  for (let i=0; arrDogs[i]; i++) { 
    $(".nameDogs").append(`
      <label class="col-sm-12 hello"><input type="checkbox" id="dog` + arrDogs[i].id + `">   ` + arrDogs[i].name + `</label>`);
  }
  $("#createNewParty").click(function() {
          createAnimalPartyINFO();
          hideModalWindow_3();
          return;
        });
};


function createAnimalPartyINFO() {
  let arrForParty;
  arrForParty=[];
  for (let i=0; arrCats[i]; i++)
    if ($('#cat' + arrCats[i].id).is(":checked")) {
      arrForParty.push(arrCats[i]);
  }
  for (let i=0; arrDogs[i]; i++)
    if ($('#dog' + arrDogs[i].id).is(":checked")) {
      arrForParty.push(arrDogs[i]);
  }
  let title = $("#title").val();
  let typeParty = $("#typeParty").val();
  let oneParty = new AnimalParty(partyId,title,arrForParty,typeParty);
  partyId++;
  console.log(oneParty);
  showParty(oneParty);
};

function showParty(oneParty) {
  //$(".oneAnim").empty(); 
  $("#oneParty").append(`
    <div class="col-lg-4 col-md-6 col-sm-6 oneParty_desc" id=" ` + oneParty.id + ` ">
      <h1>` + oneParty.type + `</h1>
      <h4>title of the party: <b>` + oneParty.title + `</b> </h4>
      <div class="oneParty_desc__inf">
      <h4>PARTICIPANTS:</h4>
        <div id="oneAnim` + oneParty.id + `"></div>
      </div>
    </div>
    `);

    for (let i=0; oneParty.arrOfAnimals[i]; i++) {
      $('#oneAnim' + oneParty.id).append(`
      <div>      
        ` + oneParty.arrOfAnimals[i].type + ` <b>` + oneParty.arrOfAnimals[i].name + `</b>, age ` + oneParty.arrOfAnimals[i].age + `
      </div>
      `);
    }
    hideModalWindow_3();   
   // $(".oneAnim").empty();  
};

$(document).ready(function() {

  $("#modal_window").hide();
  for (let i=0; arrCats[i]; i++) { 
    showCat(arrCats[i]);
  }
  for (let i=0; arrDogs[i]; i++) { 
    showDog(arrDogs[i]);
  }

  //--------- create new animal
  $('#createNew').click(function() {
      $("#modal_window").show();
  });
  $('#add').click(function() {
      $("#modal_window").hide();
      createAnimal();
  });

  //--------- create new party
  $('#createParty').click(function() {
    $("#modal_window").hide();
      createAnimalParty();
  });

});

$(document).ready ( function () {
    $(document).on ("click", ".delete_cat", function () {
        deleteCat(this.id);
    });
    $(document).on ("click", ".delete_dog", function () {
        deleteDog(this.id);
    });

    let someParty = new AnimalParty(partyId,"SUPER-PUPER party",[newCat0, newDog2, newCat1, newDog3],"Family evening");
    partyId++;
    showParty(someParty);
});

$(document).ready ( function () {
    $(document).on ("click", ".edit_cat", function () {
        editCat(this.id);
    });
    $(document).on ("click", ".edit_dog", function () {
        editDog(this.id);
    });
});