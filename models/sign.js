import mongoose from 'mongoose'

const Schema = mongoose.Schema

const signSchema = new Schema({
  noun: {
    type: String,
    required: true,
  },
  adjective: {
    type: String,
    required: true,
  },
},{
  timestamps: true,
})

const Sign = mongoose.model('Sign', signSchema)

export { Sign }