const router = require("express").Router();
const Contact = require("../models/contactSchema");
const mongoose = require("mongoose");
//-------------------------start -------------------------------------------------
const cors = require('cors');
const express =require ('express');
const app =express();

app.use(
    cors({
        origin:'http://localhost:3000',
        credentials:true,            //access-control-allow-credentials:true
        optionSuccessStatus:200,
    })
);
//------------------------start-----------------------------


router.post('/', async(req, res) => {
    const{name,email,phone,address,message}=req.body; 
    if(!name || !email || !phone || !address || !message){
        return res.status(422).json({error:"fill form proper"});
    }
    try {
        const newContact = new Contact({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            message: req.body.message
        });

        await newContact.save();
        res.json({ message: 'Contact saved successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error saving contact' });
    }
});




module.exports = router;