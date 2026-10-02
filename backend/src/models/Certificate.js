import mongoose from 'mongoose';

const certificateSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    issuer: { type: String, required: true, trim: true },
    date: { type: String, trim: true },
    link: { type: String }
  },
  { timestamps: true }
);

const Certificate = mongoose.models.Certificate || mongoose.model('Certificate', certificateSchema);
export default Certificate;
