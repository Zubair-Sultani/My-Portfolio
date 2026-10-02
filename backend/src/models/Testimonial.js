import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    role: { type: String, trim: true },
    company: { type: String, trim: true },
    quote: { type: String, required: true, trim: true },
    rating: { type: Number, min: 1, max: 5 }
  },
  { timestamps: true }
);

const Testimonial = mongoose.models.Testimonial || mongoose.model('Testimonial', testimonialSchema);
export default Testimonial;
