import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  photo: String,
  fortunes: [{ type: Schema.Types.ObjectId, ref: 'Fortune'}],
  sign: { type: Schema.Types.ObjectId, ref: 'Sign'}
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
