const express = require('express');
const app = express();
const { uuid, isUuid } = require('uuidv4');

app.use(express.json());

const obras = [];

// Middlewares - interceptador de requisições
function logRequest(request, response, next) {
    console.time(request.method +" - "+ request.url)
    next();
    console.timeEnd(request.method +" - "+ request.url);
}

function checkId(request, response, next) {
    const { id } = request.params;

    if(!isUuid(id)) {
        return response.status(400).json({ message: "Project not found" });
    }
    next();
}

app.use(logRequest);
app.use("/obras/:id", checkId);

app.get("/obras", function(request, response) {
    return response.json(obras);
});

app.post("/obras", function(request, response) {
    const { titulo, editora, foto, autores } = request.body;
    const NovaObra = {
        id: uuid(),
        titulo: titulo,
        editora: editora,
        foto: foto,
        autores: autores
    }
    obras.push(NovaObra);

    return response.status(201).json(NovaObra);
});

app.put("/obras/:id", function(request, response) {
    const { id } = request.params;
    const { titulo, editora,  foto, autores } = request.body;

    const UppObra = {
        id: id,
        titulo: titulo,
        editora: editora, 
        foto: foto,
        autores: autores
    }

    const indexObra = obras.findIndex(function(obra) { obra.id == id });

    obras[indexObra] = UppObra;
    return response.json(UppObra)
});

app.delete("/obras/:id", checkId, function(request, response) {
    const { id } = request.params;
    
    const indexObra = obras.findIndex(function(obra) { obra.id == id });
    obras.splice(indexObra, 1);

    return response.status(204).send();
});

app.listen(process.env.port || 4002, function() { console.log(`Servidor está rodando na porta 4002...`) });