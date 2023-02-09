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

const show = async (req, res) => {
  try {
    const sign = await Sign.findById(req.params.id)
    res.status(200).json(sign)
  } catch (error) {
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const signs = await Sign.find({})
      .sort({ createAt : 'desc' })
    res.status(200).json(signs)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const sign = await Sign.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true}
    )
  res.status(200).json(sign)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteSign = async (req, res) => {
  try {
    const sign = await Sign.findByIdAndDelete(req.params.id)
    res.status(200).json(sign)
  } catch (error) {
    res.status(500).json(error)
  }
}

export {
  create,
  index,
  show,
  update,
  deleteSign as delete
}