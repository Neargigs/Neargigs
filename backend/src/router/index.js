const express=require("express")
const router=express.Router();
const userRouter=require("./user");
const jobRouter=require('./fulltimeJob')
const freelanceJobRouter=require('./freelanceJob')
const gigRouter=require('./gigJob')
const z=require("zod");

router.use("/user",  userRouter)
router.use("/jobs",jobRouter)
router.use('/frjobs',freelanceJobRouter)
router.use('/gigJob',gigRouter)


module.exports=router;