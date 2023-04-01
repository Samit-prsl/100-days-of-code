//@desc Get all Contacts
//@route GET api/contact
//@access public

const GetContact = (req,res) =>{
    res.status(200).json({message:'get the contacts'});
}

//@desc Get the contacts according to id
//@route Get api/contact/:id
//access public

const CreateContact = (req,res)=>{
    console.log("request body is " , req.body);
    const {name,email,number} = req.body;
    if(!name || !email || !number)
    {
        res.status(400)
        throw new Error("All fields are mandatory");
    }
    res.status(201).json({message:`Create the contacts`})
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
    res.status(200).json({message:`update the contacts for ${req.params.id}` })
}

//@Delete all contacts
//Delete api/contact
//access public

const DeleteContact = (req,res) =>{
    res.status(200).json({message:`delete the contacts for ${req.params.id}`})
}
module.exports = {GetContact,PostContact,PutContact,DeleteContact,CreateContact}