const express = require('express');

const app = express();
const port = 4002

app.get("/", (request, response) => {
    return response.json({
        message: "Hello Word!!",
    });
});


app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`));