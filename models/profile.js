import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  photo: String,
  fortunes: [{ type: Schema.Types.ObjectId, ref: 'Fortune'}],
  sign: { type: Schema.Types.ObjectId, ref: 'Sign'},
  blogs: [{ type: Schema.Types.ObjectId, ref: 'Blog'}],
},{
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }
