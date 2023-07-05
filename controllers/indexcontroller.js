let yup = require("yup");
const userModel = require('../model/userModel')
let schema=yup.object().shape({
'email':yup.string().required().email(),
'password':yup.string().required().min(4),
'name':yup.string().required(),
// 'lastName':yup.string().required()
});

  exports.about=function(req, res, next) {
    res.render('about', { name: 'oluwatobi' });
  }
  exports.password=function(req, res, next) {
    res.render('password', {password:1234});
  }
 exports.details=function(req, res, next) {
  // res.render('details', {fork:'ok'});
  return res.send({message:'Hello world', status:'ok'})
}


exports.signup= async function(req, res, next){
try {
  // return res.send('Data well received')
 await schema.validate(req.body)

 let find = await userModel.find({email:req.body.email});
 if (find.length>=1) {
  return res.status(400).json({error:"Email has already been used "})
 }
 let usa = await userModel.create(req.body);
//  res.json(usa)

  return res.send({ message:"Account has been created succesfully"})

} catch (error) {
  return res.status(400).json({error:error.message}) 
}
}

exports.getUser=async(req,res,next)=>{
  try {
    const users=await userModel.find();
    return res.send(users)
  } catch (error) {
    
  }
}


// exports.login= async function(req, res, next){
//   try {
//     // return res.send('Data well received')
//    await schema.validate(req.body)
  
//    let find = await userModel.find({email:req.body.email});
//    if (find.length>=1) {
//     return res.status(400).json({error:"The Email address have already been registered "})
//    }
//    let usa = await userModel.create(req.body);
//   //  res.json(usa)
  
//     return res.send({ message:"Account has been created succesfully"})
  
//   } 
//   catch (error) {
//     return res.status(400).json({error:error.message}) 
//   }
//   }
  
//   exports.getUser=async(req,res,next)=>{
//     try {
//       const users=await userModel.find();
//       return res.send(users)
//     } catch (error) {
      
//     }
//   }