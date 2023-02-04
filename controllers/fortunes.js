import { Profile } from "../models/profile.js"
import { Fortune } from "../models/fortune.js"

const create = async (req, res) => {
try {
  req.body.owner = req.user.Profile
  const fortune = await Fortune.create(req.body)
  const profile = await Profile.findByIdAndUpdate(req.user.profile,
    { $push: { fortunes: fortune }},
    { new: true }
  )
  fortune.owner = profile
  res.status(201).json(fortune)
  } catch (error){
    console.log(error)
    res.status(500).json(error)
  }
}



export { 
  create 
}