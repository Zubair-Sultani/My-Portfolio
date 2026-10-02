import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema(
  {
    role: { type: String, required: true, trim: true },
    company: { type: String, required: true, trim: true },
    period: { type: String, required: true, trim: true },
    summary: { type: String },
    technologies: { type: [String], default: [] }
  },
  { timestamps: true }
);

const Experience = mongoose.models.Experience || mongoose.model('Experience', experienceSchema);
export default Experience;
