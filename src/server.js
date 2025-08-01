import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';





const app = express();
app.use(cors());
app.use(express.json());



const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'SUS77#ta',
  database: 'mywebsite'
});




app.post('/register', async (req, res) => {
  const {FirstName,LastName, username,email,mobile, password ,dateofbirth} = req.body;
  const hash = await bcrypt.hash(password, 10);
  db.query('INSERT INTO users (FirstName,LastName,username,email,mobile,password,dateofbirth) VALUES (?,?,?,?,?,?,?)', [FirstName, LastName, username, email, mobile, hash, dateofbirth], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Admin registered' });
  });
});


app.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
    if (err || results.length === 0) return res.status(401).json({ error: 'Invalid credentials' });
    const match = await bcrypt.compare(password, results[0].Password);
    if (!match) return res.status(401).json({ error: 'Invalid credentials' });
    // const hpw=result[0].password;
    // if(!password || !hpw)
    // {
    //   return res.status(400).json({error: "missing data"})
    // }
    const token = jwt.sign({ id: results[0].id }, 'secret_key'); 
    res.json({ message: 'Login successful', token });
  });
});






app.listen(5000, () => console.log('Server running on port 5000'));
