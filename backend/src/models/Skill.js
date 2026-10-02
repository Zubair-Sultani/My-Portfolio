import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    proficiency: { type: Number, min: 0, max: 100, default: 75 }
  },
  { timestamps: true }
);

const Skill = mongoose.models.Skill || mongoose.model('Skill', skillSchema);
export default Skill;
