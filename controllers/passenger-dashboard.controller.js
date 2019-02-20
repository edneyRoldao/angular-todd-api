let passengers = [
  {
    id: 1,
    fullName: 'edney',
    checkedIn: true,
    checkInDate: 1623514352345,
    children: [
      {name: 'marjorie', age: 3},
      {name: 'nadine', age: 16}
    ]
  },
  {
    id: 2,
    fullName: 'giselle',
    checkedIn: false,
    checkInDate: null,
    children: [
      {name: 'marjorie', age: 3},
      {name: 'nadine', age: 16}
    ]
  },
  {
    id: 3,
    fullName: 'marjorie',
    checkedIn: true,
    checkInDate: 1623514352345,
    children: null
  },
  {
    id: 4,
    fullName: 'nadine',
    checkedIn: false,
    checkInDate: null,
    children: null
  },
  {
    id: 5,
    fullName: 'draco',
    checkedIn: false,
    checkInDate: null,
    children: null
  },
  {
    id: 6,
    fullName: 'marilene',
    checkedIn: true,
    checkInDate: 1623514352890,
    children: [
      {name: 'Elaine', age: 55},
      {name: 'Tuta', age: 61}
    ]
  },
  {
    id: 7,
    fullName: 'thabita',
    checkedIn: true,
    checkInDate: 1623514352676,
    children: [
      {name: 'felipe', age: 16},
      {name: 'lucas', age: 26}
    ]
  },
  {
    id: 8,
    fullName: 'Biba',
    checkedIn: false,
    checkInDate: 1623514352555,
    children: [
      {name: 'mayara', age: 18},
      {name: 'pietra', age: 14},
      {name: 'enzo', age: 5}
    ]
  },
  {
    id: 9,
    fullName: 'Biba',
    checkedIn: false,
    checkInDate: 1623514352888,
    children: [
      {name: 'gustavo', age: 14},
      {name: 'pedro', age: 8}
    ]
  },
  {
    id: 10,
    fullName: 'Giovanna',
    checkedIn: false,
    checkInDate: 1623514352999,
    children: [
      {name: 'marian', age: 3},
      {name: 'maria', age: 1}
    ]
  }
];  


module.exports = (app) => {

    // listando passengers
    app.get('/passengers', (req, res) => {
        res.send( passengers );
    });

    // retornando Passenger pelo id
    app.get('/passengers/:id', (req, res) => {
      const id = req.params.id;
      const passenger = getPassengers().filter(p => p.id == id)[0];
      res.send(passenger);
    });

    // endpoint que altera passenger
    app.put('/passengers/:id', (req, res) => {

      // trecho utilizado para testar a passagem de headers no projeto frontend (angular)
      let podeIssoArnaldo = req.headers.auth;
      if (podeIssoArnaldo) console.log('HEADER TEST: ', podeIssoArnaldo);
      
      // trecho utilizado para testar a passagem de queryString no projeto frontend (angular)
      if (req.query) console.log('QUERY_STRING TEST: ', req.query);
      
      const id = req.params.id;
      let passengerUpdate = req.body;

      passengers = passengers.map(passenger => {

        if (passenger.id == passengerUpdate.id) {
          passenger = Object.assign({}, passenger, passengerUpdate);
          passengerUpdate = passenger;
        }

        return passenger;
      });

      res.send( passengerUpdate );
    });

    app.delete('/passengers/:id', (req, res) => {
      let passengerDeleted;
      const id = req.params.id;

      passengers = passengers.filter(passenger => {
        if (passenger.id == id) {
          passengerDeleted = passenger;
          return;
        }

        return passenger;
      });

      res.send( passengerDeleted );
    })

}
