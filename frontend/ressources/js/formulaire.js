const formClient = document.getElementById('formulaire');

const newdiv1 = formClient.appendChild(createElm1('div', '', 'class', 'bloc__form--flex2'));

newdiv1.appendChild(createElm2('label', 'Prenom :', 'class', 'bloc__form__label--font', 'for', 'prenom'));
newdiv1.appendChild(createElm2('label', 'Nom :', 'class', 'bloc__form__label--font1', 'for', 'nom'));
newdiv1.appendChild(createElm2('label', 'Adresse :', 'class', 'bloc__form__label--font1', 'for', 'adresse'));
newdiv1.appendChild(createElm2('label', 'Ville :', 'class', 'bloc__form__label--font1', 'for', 'ville'));
newdiv1.appendChild(createElm2('label', 'Adresse électronique :', 'class', 'bloc__form__label--font1', 'for', 'email'));


const newdiv2 = formClient.appendChild(createElm1('div', '', 'class', 'bloc__form--flex2 bloc__form--padding'));

newdiv2.appendChild(createElm1('p', '* champ obligatoire', 'id', 'erreur1'));
newdiv2.appendChild(createinputs('input', 'id', 'prenom', 'name', 'prenom', 'class', 'bloc__form__input--border', 'type', 'text', 'value', ''));

newdiv2.appendChild(createElm1('p', '* champ obligatoire', 'id', 'erreur2'));
newdiv2.appendChild(createinputs('input', 'id', 'nom', 'name', 'nom', 'class', 'bloc__form__input--border', 'type', 'text', 'value', ''));

newdiv2.appendChild(createElm1('p', '* champ obligatoire', 'id', 'erreur3'));
newdiv2.appendChild(createinputs('input', 'id', 'adresse', 'name', 'adresse', 'class', 'bloc__form__input--border', 'type', 'text', 'value', ''));

newdiv2.appendChild(createElm1('p', '* champ obligatoire', 'id', 'erreur4'));
newdiv2.appendChild(createinputs('input', 'id', 'ville', 'name', 'ville', 'class', 'bloc__form__input--border', 'type', 'text', 'value', ''));

newdiv2.appendChild(createElm1('p', '* champ obligatoire', 'id', 'erreur5'));
newdiv2.appendChild(createinputs('input', 'id', 'email', 'name', 'email', 'class', 'bloc__form__input--border', 'type', 'email', 'value', ''));

newdiv2.appendChild(createElm3('button', 'Commander', 'id', 'envoyer_commande', 'class', 'bloc__section_4__button--style', 'type', 'submit'));