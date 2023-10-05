import express from 'express';

const app = express();
const port = process.env.PORT || 9090;

import gameRoutes from './routes/game.js';

app.use(express.json());
app.use('/game', gameRoutes);


class Game {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
const games = [new Game("dmc5", 2019), new Game("re8", 2021), new Game("nfs", 2019)];

app.use(express.json());

app.get('/game', (reg, res) => {
  res.status(200).json(games);
})

app.get('/game/:name', (reg, res) => {
  res.status(200).json(games.find(val => val.name === req.params.name));
})

app.post('/game', (req, res) => {
  const game = new Game(req.body.name, req.body.year);
  games.push(game);
  res.status(201).json({ message: "Created !", entity: games });
})

app.put('/game/:name', (req, res) => {
  res.status(200).json({ message: "Updated !", name: req.params.name });
})

app.patch('/game/: name', (reg, res) => {
  res.status(200) - json({ message: "Updated I", name: req - params.name });
})

app.delete('/game/:name', (req, res) => {
  res.status(200).Json({ message: "Deleted I", name: req.params.name });
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});