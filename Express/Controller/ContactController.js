//@desc Get all Contacts
//@route GET api/contact
//@access public

const GetContact = (req,res) =>{
    res.status(200).json({message:'get the contacts'});
}

//@Create all Contacts
//Post api/contact
//access public

const PostContact = (req,res)=>{
    res.status(201).json({message:`post the contacts for ${req.params.id}`})
}

//@update all contacts
//PUT api/contact
//access public

const PutContact = (req,res)=>{
    res.status(202).json({message:`update the contacts for ${req.params.id}` })
}

//@Delete all contacts
//Delete api/contact
//access public

const DeleteContact = (req,res) =>{
    res.status(203).json({message:`delete the contacts for ${req.params.id}`})
}
module.exports = {GetContact,PostContact,PutContact,DeleteContact}