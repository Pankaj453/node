const express = require("express")
const app = express()
const path = require("path")
const hbs = require('hbs')
const request = require('request')


const port = process.env.PORT || 3000

app.set('view engine' , "hbs")
const pp = path.join(__dirname , '/template/view')
const pp1 = path.join(__dirname , '/template/partials')
const axios = require('axios');
var d1 , d2 , d3 ;

setInterval(() => {
axios.get("http://111.118.243.76:8080/CoOr")
  .then(response => {
    d1 = response.data.digital1
    d2 = response.data.digital2
    d3 = response.data.digital3
    
//     console.log(response.data.digital1);
//     console.log(response.data.digital2);
//     console.log(response.data.digital3);   
  })
  .catch(error => {
    console.log(error);
  });

}, 1000);




console.log(pp)
console.log(pp1)


app.set('views' , pp)
hbs.registerPartials(pp1)
// console.log(__dirname)
// app.use(express.static(__dirname))
app.get("" , (req, res) =>{

    res.render('hhhh' ,{
        pks1 : d1 ,
        pks2 : d2 ,
        pks3 : d3 
        
       
    })
}
)



app.get("/about/*" , (req,res) => {
    
    res.render('404' , {
       
        com: "This about is by error "
    })
})

app.get("*" , (req,res) => {
    
    res.render('404' , {
        com: "This is by error"
    })
})


app.listen(port , () => {
    console.log(`listening at ${port} `)
})
