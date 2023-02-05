import mongoose from 'mongoose'

const Schema = mongoose.Schema

const fortuneSchema = new Schema({
  message: String,
  luckyNumber: Number,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  category: {
    type: String,
    enum: ['Love','Travel','Work','Food']
  }
},{
  timestamps: true,
})

const Fortune = mongoose.model('Fortune', fortuneSchema)

export { Fortune }