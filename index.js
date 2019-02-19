let porta = 3000;
let app = require('./config/express')();

require('./controllers/passenger-dashboard.controller') (app);

app.listen(porta, () => console.log('Servidor rodando na porta: ', porta));