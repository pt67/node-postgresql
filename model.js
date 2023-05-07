
const { Pool } = require('pg')
/*


create table todos(
id serial not null,
task varchar(150) not null,
detail varchar(150) not null, 
created_at timestamp default current_timestamp
);

insert into todos(task, detail) values('tack one', 'Going home but raining');

*/

/*
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'pernstack',
  password: '123456',
  port: 5432,
})

*/


//server
const pool = new Pool({
   connectionString: process.env.POSTGRES_URL + "?sslmode=require",
   user: process.env.POSTGRES_USER,
   host: process.env.POSTGRES_HOST,
   database:process.env.POSTGRES_DATABASE,
   password:process.env.POSTGRES_PASSWORD,
   port: 5432,
});


/*pool.query('SELECT * FROM todos', (err, res) => {
  console.log(err, res.rows)
})*/


module.exports = {
pool

};



