createElm1 = (balise, value, attribut, attributValue) => {
    const newElm = document.createElement(balise);
    newElm.setAttribute(attribut, attributValue);
    newElm.innerHTML = value;
    return newElm;
};

createElm2 = (balise, value, attribut1, attributValue1, attribut2, attributValue2) => {
    const newLabel = document.createElement(balise);
    newLabel.setAttribute(attribut1, attributValue1);
    newLabel.setAttribute(attribut2, attributValue2);
    newLabel.innerHTML = value;
    return newLabel;
};

createinputs = (balise, atb1, atbVal1, atb2, atbVal2, atb3, atbVal3, atb4, atbVal4, atb5, atbVal5) => {
    const newInput = document.createElement(balise);
    newInput.setAttribute(atb1, atbVal1);
    newInput.setAttribute(atb2, atbVal2);
    newInput.setAttribute(atb3, atbVal3);
    newInput.setAttribute(atb4, atbVal4);
    newInput.setAttribute(atb5, atbVal5);
    return newInput;
};