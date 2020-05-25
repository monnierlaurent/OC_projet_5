const hash = window.location.hash; // On créé une variable "hash" qui correspond au hash de l'URL qui a été chargée par l'utilisateur
const id = hash.replace("#", ""); // On reformate le "hash" pour lui enlever le symbole "#"
const urlProduct = 'http://localhost:3000/api/teddies/' + id; // L'URL chargée sera celle correspondant





function createPanier() {
    const datas = request(urlProduct);
    datas.then(products => {

        let storage = localStorage.length;

        for (let i = 0; i < storage; i++) {

            //creation d'un class pour recuper les infos produit necesaire au la creation de la ligne du panier
            class produitPanier {
                constructor(id, name, price) {
                    this.id = id;
                    this.name = name;
                    this.price = price;
                };
            };

            const newObj = new produitPanier(products._id, products.name, products.price); // creation d'une instance avec les élements du produit

            let newObjJson = JSON.stringify(newObj); // transformation de l'instance creer en chaine de caractere pour la stocker en local
            localStorage.setItem(products._id, newObjJson); // mise en memoire local du produit avec sont _id comme KEY
            let newObjConst = localStorage.getItem(products._id);

            let objParse = JSON.parse(newObjConst);
            console.log(objParse);

            let prices = objParse.price / 100;

            let tableauProduit = document.getElementById("panier_produit");

            const newTr = document.createElement('tr');
            tableauProduit.appendChild(newTr);

            const newTd = document.createElement('td');
            newTr.appendChild(newTd);
            newTd.innerHTML = objParse.name;

            const newTd1 = document.createElement('td');
            newTd1.setAttribute('class', 'bloc__table--align');
            newTr.appendChild(newTd1);
            newTd1.innerHTML = '1';

            const newTd2 = document.createElement('td');
            newTd2.setAttribute('class', 'bloc__table--align');
            newTr.appendChild(newTd2);
            newTd2.innerHTML = prices.toLocaleString('fr-FR', {
                style: "currency",
                currency: "EUR"
            });

            const newTd3 = document.createElement('td');
            newTd3.setAttribute('class', 'bloc__table--align');
            newTr.appendChild(newTd3);
            newTd3.innerHTML = prices.toLocaleString('fr-FR', {
                style: "currency",
                currency: "EUR"
            });

            const newTd4 = document.createElement('td');
            newTd4.setAttribute('class', 'bloc__table--align');
            newTr.appendChild(newTd4);

            const newButton = document.createElement('button');
            newButton.setAttribute('id', 'delete_items');
            newButton.setAttribute('class', 'bloc__table__button--style');
            newTd4.appendChild(newButton);
            newButton.innerHTML = 'supprimer';

        }; // fin de la boucle for
        console.log(localStorage);
    }); // fin de then
}; // fin de createPanier

createPanier();

/*----------------------------
let ecoutebutton = document.getElementById('delete_items');

function deleteElementPanier() {
    ecoutebutton.classList.add('deleteItem');
};
ecoutebutton.addEventListener('click', deleteElementPanier());
//----------------------------*/

/*let tableauTotalPrice = document.getElementById("total_panier");
                        const newTd5 = document.createElement('td');
                        tableauTotalPrice.appendChild(newTd5);
                        newTd5.innerHTML = 'Total de la commande';

                        const newTd6 = document.createElement('td');
                        newTd6.setAttribute('class', 'bloc__table--align bloc__table--padding');
                        tableauTotalPrice.appendChild(newTd6);
                        newTd6.innerHTML = prices.toLocaleString('fr-FR', {
                            style: "currency",
                            currency: "EUR"
                        });*/