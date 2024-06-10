import express from 'express';

const app  = express();

const PORT =process.env.PORT|| 3000;
app.get('/', (req, res)=> {
    res.send('server is ready');
})

//get a list of 5 jokes 

app.get('/jokes', (req, res)=> {
    
    const jokes = [{
       id : 1,
       title : 'a joke',
       content : ' this is joke'
    },
    {
        id : 1,
        title : 'a joke',
        content : ' this is joke'
     },
     {
        id : 2,
        title : 'a joke',
        content : ' this is 2 joke'
     },
     {
        id : 3,
        title : 'a joke',
        content : ' this is 3 joke'
     }
   ];
  res.send(jokes);
});


app.listen(PORT, () => {
    console.log(`serve at http://localhost:${PORT}`);
})
