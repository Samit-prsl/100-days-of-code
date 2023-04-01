const express = require('express');
const router = express.Router();
const {GetContact,PostContact,PutContact,DeleteContact,CreateContact} = require('../Controller/ContactController')
router.route('/').get(GetContact).post(CreateContact);
//=>{
  //  res.status(200).json({message:'get the contacts'});
//})
//router.route('/').post(CreateContact);



router.route('/:id').get((req,res)=>{
    res.status(200).json({message:`get the contacts for ${req.params.id}`});
})
router.route('/:id').post(PostContact)
    //(req,res)=>{
    //res.status(200).json({message:`post the contacts for ${req.params.id}`});
//})
router.route('/:id').put(PutContact)
    //(req,res)=>{
    //res.status(200).json({message:`update the contacts for ${req.params.id}` });
//})
router.route('/:id').delete(DeleteContact)
    //(req,res)=>{
    //res.status(200).json({message:`delete the contacts for ${req.params.id}`});
//})

module.exports = router;