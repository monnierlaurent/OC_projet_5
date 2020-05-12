let produit1 = document.getElementById("produit_1"); // récupration de l'id du produit 1
let produit2 = document.getElementById("produit_2"); // récupration de l'id du produit 2
let produit3 = document.getElementById("produit_3"); // récupration de l'id du produit 3
let produit4 = document.getElementById("produit_4"); // récupration de l'id du produit 4
let produit5 = document.getElementById("produit_5"); // récupration de l'id du produit 5

let api = "http://localhost:3000/api/teddies"; // definitin de l'adresse de l'api

const ids = { // tableau ordonné stockant les "_id" des produit stocké dans l'api 
    id_1: "5be9c8541c9d440000665243",
    id_2: "5beaa8bf1c9d440000a57d94",
    id_3: "5beaaa8f1c9d440000a57d95",
    id_4: "5beaabe91c9d440000a57d96",
    id_5: "5beaacd41c9d440000a57d97",
};

// produit 1
produit1.addEventListener("click", function() { // ecouter le click sur l'article du produit 1
    let request = new XMLHttpRequest();

    request.onreadystatechange = function() {

        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            let responseProduit1 = JSON.parse(this.responseText);

            console.log(responseProduit1.name);

        };

    };

    request.open("GET", "http://localhost:3000/api/teddies/" + ids.id_1);
    request.send();
});

// produit 2

produit2.addEventListener("click", function() { // ecouter le click sur l'article du produit 2
    let request = new XMLHttpRequest();

    request.onreadystatechange = function() {

        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            let responseProduit2 = JSON.parse(this.responseText);

            console.log(responseProduit2.name);

        };

    };

    request.open("GET", "http://localhost:3000/api/teddies/" + ids.id_2);
    request.send();
});