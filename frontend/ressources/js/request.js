async function request(url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
};

async function send(url, datas) {
    let response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datas)
    });
    let data2 = await response.json();
    return data2;
};