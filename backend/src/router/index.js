const express=require("express")
const router=express.Router();
const userRouter=require("./user");
const jobRouter=require('./fulltimeJob')
const freelanceJobRouter=require('./freelanceJob')
const z=require("zod");

router.use("/user",  userRouter)
router.use("/jobs",jobRouter)
router.use('/frjobs',freelanceJobRouter)


module.exports=router;