fetch('http://localhost:3000/api/teddies/')
    .then(function(response) {
        return response.json();

    }).then(function(rep) {

        for (i = 0; i < rep.length; i++) {

            let sectionProduit = document.getElementById('page_items');

            const newArticle = document.createElement('article');
            newArticle.setAttribute('class', 'bloc__section__article--border');
            sectionProduit.appendChild(newArticle);

            const newLien = document.createElement('a');
            newLien.setAttribute('class', 'bloc__section__article--flex');
            newLien.setAttribute('href', '#');
            newArticle.appendChild(newLien);

            const newImg = document.createElement('img');
            newImg.setAttribute('class', 'bloc__section__article--image');
            newImg.setAttribute('src', rep[i].imageUrl);
            newLien.appendChild(newImg);

            const newName = document.createElement('h2');
            newName.setAttribute('class', 'bloc__section__heading--font');
            newName.setAttribute('src', '/backend/images/teddy_1.jpg');
            newName.innerHTML = rep[i].name;
            newLien.appendChild(newName);

            console.log(rep[i]);
        };
    });