const express = require('express')
const { path } = require('express/lib/application')

const app = express()

// const path = require('Path')

// path.join( index)
console.log(__dirname)
console.log(__filename)




app.set("view engine", "hbs")


app.get('', (req, res) => {

    res.render('index', {

        Title: 'Aniket Pratap Singh',
        details:'B.tech'
    })
})





app.get('/about', (req, res) => {

    res.render( {

        Title: 'This is about',
        details: 'ofcrs about'
    })
})



app.get('*', (req, res) => {

    res.send( {

        Title: 'Error 404',
        details: 'Some error occured'
    })
})

app.listen(3000, ()=>{

    console.log('hi ayush port has been started at 3000')

})