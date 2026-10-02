import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    tags: { type: [String], default: [] },
    liveUrl: { type: String },
    repoUrl: { type: String },
    image: { type: String },
    featured: { type: Boolean, default: false }
  },
  { timestamps: true }
);

const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);
export default Project;
