const express=require("express")
const router=express.Router();
const userRouter=require("./user");
const z=require("zod");

router.use("/user",  userRouter)


module.exports=router;