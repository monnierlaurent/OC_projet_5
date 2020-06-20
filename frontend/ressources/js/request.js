async function request(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
};

async function send(data) {
    let response = await fetch('http://localhost:3000/api/teddies/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }); //fin fetch
    let responseData = await response.json();
};

// function de creation d'element