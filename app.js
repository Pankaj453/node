const express = require("express")
const app = express()
const path = require("path")
const hbs = require('hbs')

const port = process.env.PORT || 3000

app.set('view engine' , "hbs")
const pp = path.join(__dirname , '/template/view')
const pp1 = path.join(__dirname , '/template/partials')

console.log(pp)
console.log(pp1)


app.set('views' , pp)
hbs.registerPartials(pp1)
// console.log(__dirname)
// app.use(express.static(__dirname))
app.get("" , (req, res) =>{
    res.render('hhhh' ,{
        pks: "PAnkaj" ,
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
