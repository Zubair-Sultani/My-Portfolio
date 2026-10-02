import mongoose from 'mongoose';

const socialLinkSchema = new mongoose.Schema(
  {
    platform: { type: String, required: true, trim: true },
    url: { type: String, required: true, trim: true },
    icon: { type: String }
  },
  { timestamps: true }
);

const SocialLink = mongoose.models.SocialLink || mongoose.model('SocialLink', socialLinkSchema);
export default SocialLink;
