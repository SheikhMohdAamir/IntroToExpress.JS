const express=require('express')
const router=express.Router()
const fs=require('fs')
router.get('/',(req, res, next)=>{
    fs.readFile('username',(err, data)=>{
        if(err){
            data='no chat exist'
            console.log(err)
        }
        res.send(`${data}<form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" action="/message/send" method="POST">
              <input type="text" name="message"/>
              <input type="text" id="username" name="username"/>
              <button type="submit">Send</button>
              </form>`)
    })
    
})
router.post('/send',(req, res, next)=>{
    console.log(req.body.username,req.body.message)
    fs.writeFile('username',`${req.body.username} ${req.body.message}`,{flag:'a'},(err)=>
        err?console.log(err):res.redirect('/message')
    )
})

module.exports=router