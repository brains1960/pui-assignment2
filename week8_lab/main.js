function Rabbit(name, age) {
    this.name = name;
    this.age = age;
    this.type = 'Rabbit';
    this.image = 'rabbit.jpg';
}

function Raven(name, age) {
    this.name = name;
    this.age = age;
    this.type = 'Raven';
    this.image = 'raven.jpg';
}

function Racoon(name, age) {
    this.name = name;
    this.age = age;
    this.type = 'Racoon';
    this.image = 'racoon.jpg';
}

var animal = [new Rabbit(), new Raven(), new Racoon()];

var names = ["Ray", "Randy", "Ralph"];

function generateRandomIndex(maxIndex) {
    /*console.log(Math.floor(Math.random() * maxIndex))*/
    return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
    var randomIndex = generateRandomIndex(3);
    return names[randomIndex];
}

function generateRandomAge() {
    return generateRandomIndex(10);
    
}

function generateRandomAnimal() {
    var randomIdx = generateRandomIndex(3);
    var randomAnimal = animal[randomIdx];
    
    if (randomAnimal.type == 'Rabbit') {
        return (new Rabbit(generateRandomName(), generateRandomAge()));
    }
    if (randomAnimal.type == 'Raven') {
        return (new Raven(generateRandomName(), generateRandomAge()));
    }
    if (randomAnimal.type == 'Racoon') {
        return (new Racoon(generateRandomName(), generateRandomAge()));
    }
}

$(document).ready(function() {

    // generate a random animal when the document opens
    var oldAnimal = JSON.parse(localStorage.getItem("saved_animal"));
    var animal = generateRandomAnimal();
    // update the page based on the animal properties
    $("#text").text(animal.name + "  " + animal.age + "years old");
    $("#img").attr("src", animal.image);
    $("#save_btn").click(function() {
        
        if(oldAnimal.type == animal.type) {
            $("#feedback_p").text("A "+ animal.type + " is already saved");
            $("#save_btn").text("Clear Me")
            $("#save_btn").click(function() {
                localStorage.getItem("saved_animal") = null;

            });
;        } else {
            localStorage.setItem("saved_animal", JSON.stringify(animal));
            $("#feedback_p").text(animal.name + " Saved");
        }
    });

});