import { Sign } from "../models/sign.js";


const create = async (req,res) => {
  try {
    const sign = await Sign.create(req.body)
    res.status(201).json(sign)
  } catch (error) {
    console.log(error) 
    res.status(500).json(error)
  }
}


export {
  create,
  
}