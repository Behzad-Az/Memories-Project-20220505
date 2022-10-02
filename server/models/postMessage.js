import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  location: String,
  description: String,
  name: String,
  tags: [String],
  selectedFile: String,
  cleanCount: {
    type: Number,
    default: 0
  },
  crookCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const PostMessage = mongoose.model('aghazadeh', postSchema);

export default PostMessage;