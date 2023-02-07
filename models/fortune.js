import mongoose from 'mongoose'

const Schema = mongoose.Schema

const fortuneSchema = new Schema({
  message: {
    type: String,
    required: true,
  },
  luckyNumber: {
    type: Number,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId, 
    ref: 'Profile'
  },
  category: {
    type: String,
    required: true,
    enum: ['Love','Travel','Work','Food'],
  },
},{
  timestamps: true,
})

const Fortune = mongoose.model('Fortune', fortuneSchema)

export { Fortune }