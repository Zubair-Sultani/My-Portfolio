import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema(
  {
    institution: { type: String, required: true, trim: true },
    degree: { type: String, required: true, trim: true },
    period: { type: String, required: true, trim: true },
    gpa: { type: String },
    details: { type: String }
  },
  { timestamps: true }
);

const Education = mongoose.models.Education || mongoose.model('Education', educationSchema);
export default Education;
