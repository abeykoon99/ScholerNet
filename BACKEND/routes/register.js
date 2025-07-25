const router = require("express").Router();
let Register = require("../models/Register.js");

let Attendance = require("../models/attendance.js");


router.route("/add").post(async (req, res) => {
  const leader = req.body.leader;
  const lmail = req.body.lmail;
  const intake = req.body.intake;
  const lcont = req.body.lcont;
  const lreg = Number(req.body.lreg);
  const spec = req.body.spec;
  const mem2 = req.body.mem2;
  const reg2 = req.body.reg2;
  const mail2 = req.body.mail2;
  const cont2 = req.body.cont2;
  const mem3 = req.body.mem3;
  const reg3 = req.body.reg3;
  const mail3 = req.body.mail3;
  const cont3 = req.body.cont3;
  const mem4 = req.body.mem4;
  const reg4 = req.body.reg4;
  const mail4 = req.body.mail4;
  const cont4 = req.body.cont4;
  const ptitle = req.body.ptitle;
  const area = req.body.area;
  const ptype = req.body.ptype;
  const p2 = req.body.p2;
  const p3 = req.body.p3;

  // Check if contact number already exists
  const existingRegister = await Register.findOne({ lreg: lreg });
  if (existingRegister) {
    return res.status(400).json({ error: "Student Registration number already exists" });
  }

  const newRegister = new Register({
    leader,
    lmail,
    intake,
    lcont,
    lreg,
    spec,
    mem2,
    reg2,
    mail2,
    cont2,
    mem3,
    reg3,
    mail3,
    cont3,
    mem4,
    reg4,
    mail4,
    cont4,
    ptitle,
    area,
    ptype,
    p2,
    p3
  });

  newRegister
    .save()
    .then(() => {
      res.json("Register Added");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to add Register" });
    });
});

// Other routes remain unchanged


router.route("/").get((req,res)=>{

    Register.find().then((Registers)=>{
        res.json(Registers)
    }).catch((err)=>{
        console.log(err)
    })
})


router.route("/update/:id").put(async(req,res)=>{  
    let userId = req.params.id;
    const {leader,lmail,intake,lcont,lreg,spec,mem2,reg2,mail2,cont2,mem3,reg3,mail3,cont3,mem4,reg4,mail4,cont4,ptitle,area,ptype,p2,p3} = req.body;

    const updateStudent = {
        leader,
        lmail,
        intake,
        lcont,
        lreg,
        spec,
        mem2,
        reg2,
        mail2,
        cont2,
        mem3,
        reg3,
        mail3,
        cont3,
        mem4,
        reg4,
        mail4,
        cont4,
        ptitle,
        area,
        ptype,
        p2,
        p3
    }

    const update = await Register.findByIdAndUpdate(userId,updateStudent)
    .then(()=>{
        res.status(200).send({status:"User updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })
})

router.route("/delete/:id").delete(async(req,res)=>{
    let userId=req.params.id;

    await Register.findByIdAndDelete(userId)
    .then(() =>{
        res.status(200).send({status:"Group deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete user", error:err.message});
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let userId=req.params.id;
    const user = await Register.findById(userId)
    .then((Register)=>{
        res.status(200).send({status:"User fetched",Register})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({ststus:"Error with get user",error:err.message});
    })
})




router.route("/adds").post((req,res)=>{

    const r1 = req.body.r1;
    const r2 = req.body.r2;
    const r3 = req.body.r3; 
    const r4 = req.body.r4;
    const r5 = req.body.r5;
    const r6 = req.body.r6;
    const r7 = req.body.r7;
    const r8 = req.body.r8;
    const r9 = req.body.r9;
    

    const newAttendance = new Attendance({
        r1,
        r2,
        r3,
        r4,
        r5,
        r6,
        r7,
        r8,
        r9
    })

    newAttendance.save().then(()=>{
        res.json("Attendance Marked")
    }).catch((err)=>{
        console.log(err);
    })  
})
router.route("/updatea/:id").put(async(req,res)=>{  
    let userId = req.params.id;
    const {r1,r2,r3,r4,r5,r6,r7,r8,r9} = req.body;

    const updateStudent = {
        r1,
        r2,
        r3,
        r4,
        r5,
        r6,
        r7,
        r8,
        r9
      
    }

    const update = await Register.findByIdAndUpdate(userId,updateStudent)
    .then(()=>{
        res.status(200).send({status:"User updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
    })
})


router.route("/getss").get((req,res)=>{

    Attendance.find().then((attendance)=>{
        res.json(attendance)
    }).catch((err)=>{
        console.log(err)
    })
})
;

module.exports = router;
