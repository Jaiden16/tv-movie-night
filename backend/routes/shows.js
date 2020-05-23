var express = require('express');
var router = express.Router();
const db = require("../database/database.js")

const GetAllShows = async (req, res) => {
    try {
        let allShows = await db.any("Select * FROM shows")

        res.json({
            shows: allShows,
            message: "Sucess"
        })

    } catch (err) {
        console.log('Error', err)
        res.json({
            message: `Error ${err}`
        })
    }
}

const GetSingleShow = async (req, res) => {
    try {
        let singleShow = await db.one(`Select * FROM 
        shows WHERE id = ${req.params.id}`)

        res.json({
            shows: singleShow,
            message: "Success"
        })

    } catch (err) {
        console.log(`Error`, err)
        res.json({
            message: `Error ${err}`
        })
    }
}

const PostNewShow = async (req, res) => {
    let showsObject = {
        title: req.body.title,
        img_url: req.body.img_url,
        user_id: req.body.user_id,
        genre_id: req.body.genre_id
    }

    try {
        if (req.body.title, req.body.img_url, req.body.user_id, req.body.genre_id) {
            let newShow = await db.one(`INSERT into shows (title,img_url,user_id,genre_id) 
            Values ($/title/, $/img_url/,$/user_id/, $/genre_id/)RETURNING *`, showsObject)
            res.json({
                show: newShow,
                message: "Success"
            })
        }
    } catch (err) {
        console.log(err)
        res.json({
            message: `Error ${err}`
        })
    }
}

const ShowsByGenre = async (req, res) =>{
    try{
        let showsGenre = await db.any(`Select * FROM shows WHERE genre_id = ${req.params.genre_id}`)
        res.json({
            showsGenre: showsGenre,
            message: "Success"
        })

    }catch(err){
        console.log(`Error`, err)
        res.json({
            message: `error: ${err}`
        })
    }
}

const ShowsByUserId = async (req,res) =>{
    try{
        let showsUser = await db.any(`Select * From shows Where user_id = ${req.params.user_id}`)
        res.json({
            showsUser:showsUser,
            message: "Success"
        })

    }catch(err){
        console.log(`Error`, err);
        res.json({
            message: `Error ${err}`
        })

    }
}


//Get shows
router.get('/', GetAllShows);

//Get Shows/:id
router.get('/:id', GetSingleShow);

//Post
router.post('/', PostNewShow);

//Get Show by genre.. genre/genre_id
router.get('/genre/:genre_id',ShowsByGenre);

//Get Show by user.. user/user_id
router.get('/user/:user_id',ShowsByUserId);


module.exports = router;