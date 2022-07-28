const express = require('express');
const app = express();
const { uuid } = require('uuidv4');

app.use(express.json());

const obras = [];

app.get("/obras", function(request, response) {
    return response.json(obras);
});

app.post("/obras", function(request, response) {
    const { id, titulo, editora, foto, autores } = request.body;
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

app.delete("/obras/:id", function(request, response) {
    const { id } = request.params;
    
    const indexObra = obras.findIndex(function(obra) { obra.id == id });
    obras.splice(indexObra, 1);
    
    return response.status(204).send();
});

app.listen(process.env.port || 4002, function() { console.log(`Servidor está rodando na porta 4002...`) });