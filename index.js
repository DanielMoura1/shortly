import express from 'express';
import pg from 'pg';

const { Pool } = pg;

const connection = new Pool({
  user: 'bootcamp_role',
  host: 'localhost',
  port: 5432, 
  database: 'shortly',
  password: ''
});

const app = express();
app.use(express.json());

app.post('/signup',async  (req, res) => {
    const { name, email, password,confirmpassword } = req.body;
    try{
      await connection.query('INSERT INTO signup (name, email, password,confirmpassword) VALUES ($1, $2, $3,$4);', [name, email, password,confirmpassword])
      .then(result => {
        res.sendStatus(201);
    });
    }catch(e){

    }
    
});
app.post('/signin',async  (req, res) => {
    const { email, password} = req.body;
    try{
      await connection.query('INSERT INTO signup (email, password) VALUES ($1, $2);', [ email, password])
      .then(result => {
        res.sendStatus(201);
      });
    }catch(e){

    }
    
});
app.post('/urls/shorten',async  (req, res) => {
    const {urls} = req.body;
    try{
      await connection.query('INSERT INTO signup (urls) VALUES ($1);', [urls])
      .then(result => {
        res.sendStatus(201);
      });
    }catch(e){
      
    }
    
});
app.get('/urls/:id',async  (req, res) => {
  const {id} = req.body;
  try{
    await connection.query('SELECT * FROM users WHERE id = $1;', [id])
  }catch(e){
    
  }
 
 
});
app.get('/urls/open/:shortUrl',async  (req, res) => {
  try{

  }catch(e){
    
  }
    
});
app.delete('/urls/:id', async (req, res) => {
  const {id} = req.body;
  try{
    await connection.query('DELETE FROM usuarios WHERE id = $1;', [id])
  }catch(e){
    
  }
 
  
    
});
app.get('/users/:id', async (req, res) => {
  try{

  }catch(e){
    
  }
    
});
app.get('/users/ranking',async  (req, res) => {
  try{

  }catch(e){
    
  }
    
});


app.listen(4000, () => {
  console.log('Server listening on port.');
});
