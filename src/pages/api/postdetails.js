import connectDb from "../../../middleware/mongoose";
import contact from "../../../models/contact";

const handler =async(req,res) => {
    if(req.method=='POST'){
        const {name,email,message}=req.body;
        let u=new contact({name,email,message})

        await u.save();
        res.status(200).json({success:"success"})
    }else{
        res.status(400).json({error:"This method is not allowed"});
    }
}

export default connectDb(handler);