import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  authorName: String,
  authorEmail: String,
  authorIpAddress: {
    type: String,
    default: '0:0:0:0:0'
  },
  subjectName: String,
  subjectLocation: String,
  description: String,
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

const AghazadehPost = mongoose.model('aghazadeh', postSchema);

export default AghazadehPost;