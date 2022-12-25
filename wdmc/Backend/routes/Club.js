const router = require('express').Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');

let ClubModel = require('../models/Club.model');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/Club')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});
const upload = multer({ storage: storage });

//fetching all the club info
router.get('/get', (req, res) => {
    ClubModel.find()
        .then(club => res.json(club))
        .catch(err => res.status(400).json('Error: ' + err));
});

//dynamic end point for different clubs 
router.get("/:club_name", (req, res) => {
    const club_name = req.params.club_name
    res.render("index.hbs", { name: club_name });
});


//fetching club info with its name 
router.get('/get/:club_name', (req, res) => {
    const club_name = req.params.club_name
    console.log(club_name)
    ClubModel.find({ ClubName: club_name })
        .then(club => res.json(club))
        .catch(err => res.status(400).json('Error: ' + err));
});

//adding new clubs to the database 
router.post('/add', upload.array('ClubImg', 10), (req, res, next) => {
    // console.log(req.body)

    //required attributes
    var obj = {
      ClubName: req.body.ClubName,
      ClubDesc: req.body.ClubDesc,
      ClubImg:[],
    //   ClubMemberNames:[],
    //   ClubMemberDesign:[],
    }
    //optional attributes
    if(req.body.ClubWebsite != undefined){
        obj.ClubWebsite = req.body.ClubWebsite;
    }
    if (req.body.ClubExtraContent != undefined) {
        obj.ClubExtraContent = req.body.ClubExtraContent;
    }
    // if(req.body.ClubMemberNames != undefined && req.body.ClubMemberNames.length != 0){
    //         obj.ClubMemberNames = req.body.ClubMemberNames;
    // }
    // if(req.body.ClubMemberDesign != undefined && req.body.ClubMemberDesign.length != 0){
    //         obj.ClubMemberDesign = req.body.ClubMemberDesign;
    // }

    for (let i = 0; i < req.files.length; i++) {
        obj.ClubImg.push(path.join(__dirname + '\\..\\uploads\\club\\' + req.files[i].filename))
    }
    // console.log(obj)
    ClubModel.create(obj, (err, item) => {
        if (err) {
            console.log(err);
            res.send('Error!');
        } else {
            item.save();
            res.send('club added successfully!');
        }
    });

  })

   
        

  
  router.post('/Update',(req,res)=>{

    const data=req.body;
    // console.log("Come in:",req.body)
    ClubModel.updateMany({"ClubName":data.ClubName},
        {$set:{'ClubWebsite':data.ClubWebsite,'ClubDesc':data.ClubDesc,
        'ClubExtraContent':data.ClubExtraContent }}, function (err, item) {
            if (err) {
                console.log(err);
                res.send('Error!');
            }
            else {
              
                res.send('club Updated successfully!');
            }
        });

  })

  router.post('/Update',(req,res)=>{

    const data=req.body;
    // console.log("Come in:",req.body)
    ClubModel.updateMany({"ClubName":data.ClubName},
        {$set:{'ClubWebsite':data.ClubWebsite,'ClubDesc':data.ClubDesc,
        'ClubExtraContent':data.ClubExtraContent }}, function (err, item) {
            if (err) {
                console.log(err);
                res.send('Error!');
            }
            else {
              
                res.send('club Updated successfully!');
            }
        });

  })

module.exports = router;