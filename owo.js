const fetch = require('node-fetch');

body = {'content':'uwu'};

fetch('https://discord.com/api/webhooks/772197161366192128/Hy5-EkgsxgBupHlLcI85_6fYyZynZ34AQSs7mE-XaL-VK_bBKrGMvdgoL_JCBwrQhg6r', {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(json => console.log(json));
