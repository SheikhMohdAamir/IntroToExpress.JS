const express=require('express')
const router=express.Router()
const path=require('path')
const helperPath=require('../helper/path')
router.get('/',(req,res,next)=>{
    res.sendFile(path.join(helperPath,'views','contact.html'))
})
router.post('/success',(req,res,next)=>{
    console.log(req.body,'Form successfuly filled')
    res.send('<h4>Form successfuly filled</h4>')
})

module.exports=router;