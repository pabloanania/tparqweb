const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');

const app = express();

var _providers = [
    { id: 1, name: "Telecom", address: "Calle 45 1000, CABA", contacto: "Pepe Monje" },
    { id: 2, name: "Telefonica", address: "Av. Cabildo 2450, CABA", contacto: "Ernesto Hache" },
    { id: 3, name: "Sinectis", address: "Caminito 300, CABA", contacto: "Alejo Mardona" }
];


// parse body as json
app.use(bodyParser.json());

// all requests
app.use((req, res, next) => {
    console.log(`${req.method}: ${req.path} - ${moment().format(moment.HTML5_FMT.DATETIME_LOCAL_MS)}`);

    next();
});

// get home
app.get('/', (req, res) => {
    let list = [];

    _providers.forEach((c) => {
        list.push(`<li>${c.name} con direccion: ${c.address}</li>`);
    });

    res.send(
        `<html>
            <head>
                <title>Title</title>
            </head>
            <body>
                <ul>
                    ${list.join('')}
                </ul>            
            </body>
        </html>`
    );
});



// API
// Obtiene providers
app.get('/api/providers', (req, res) => {
    res.json(_providers);
});

// Obtiene providers por id
app.get('/api/providers/:id', (req, res) => {
    let prov = _providers.find(p => p.id == req.params.id);

    if (prov) {
        res.json(prov);
    } else {
        res.status(404).end();
    }
});

// Añade nuevo provider
app.post('/api/providers', (req, res) => {
    _providers.push(req.body);

    res.status(201).send(req.body);
});

// Elimina provider
app.delete('/api/providers/:id', (req, res) => {
    _providers = _providers.filter(p => p.id != req.params.id);

    res.status(204).end();
});

// Actualiza provider
app.put('/api/providers/', (req, res) => {
    _providers = _providers.filter(p => p.id != req.body.id);
    _providers.push(req.body);

    res.status(200).end();
});


// Inicia servidor
app.listen(process.env.PORT || 3000, function () {
    console.log('API funcionando con express...');
});