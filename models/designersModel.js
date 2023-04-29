import mongoose from 'mongoose';

const designerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },

    category: { type: String, required: true },
    description: { type: String, required: true },

    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Designer = mongoose.model('designer', designerSchema);
export default Designer;
