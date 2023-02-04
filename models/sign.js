import mongoose from 'mongoose'

const Schema = mongoose.Schema

const signSchema = new Schema({
  noun: String,
  adjective: String,
},{
  timestamps: true,
})

const Sign = mongoose.model('Sign', signSchema)

export { Sign }