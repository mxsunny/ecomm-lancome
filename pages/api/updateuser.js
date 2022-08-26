import connectDb from "../../middleware/mongoose"
import jsonwebtoken from "jsonwebtoken"
import User from "../../models/User"


const handler=async(req, res)=>{
    if(req.method=='POST'){
        let token=req.body.token
        let user=jsonwebtoken.verify(token,process.env.NEXT_PUBLIC_JWT_SECRET)
        //console.log(user)
        let dbuser=await User.findOneAndUpdate({email:user.email},{address:req.body.address,pincode:req.body.pincode,phone:req.body.phone,name:req.body.name})
        //console.log(dbuser)
        
        res.status(200).json({success:true})
    }
    else{
        res.status(400).json({error:"error"})
    }
     
        
        
       
        
      
}
export default connectDb(handler)