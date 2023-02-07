import { Profile } from "../models/profile.js"
import { Fortune } from "../models/fortune.js"

const create = async (req, res) => {
try {
  req.body.owner = req.user.profile
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

const index = async (req, res) => {
  try {
    const fortunes = await Fortune.find({})
      .populate('owner')
      .sort({ createAt : 'desc' })
    res.status(200).json(fortunes)
  } catch (error) {
    res.status(500).json(error)
  }
}

const show = async (req, res) => {
  try {
    const fortune = await Fortune.findById(req.params.id)
    .populate('owner')
    res.status(200).json(fortune)
  } catch (error){
    res.status(500).json(error)
  }
}

const update = async (req , res) => {
  try {
    const fortune = await Fortune.findByIdAndUpdate(
        req.params.id, 
        req.body,
        { new: true }
      ).populate('owner')
      res.status(200).json(fortune)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteFortune = async (req, res) => {
  try {
    const fortune = await Fortune.findByIdAndDelete(req.params.id)
    const profile = await Profile.findById(req.user.profile)
    profile.fortunes.remove({ _id: req.params.id })
    await profile.save()
    res.status(200).json(fortune)
  } catch (error){
    res.status(500).json(error)
  }

}

export { 
  create ,
  index,
  show,
  update,
  deleteFortune as delete,
}