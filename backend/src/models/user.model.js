import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim:true },
  email: { type: String, required: true, }, /// unique: true 
  password: { type: String, required: true },
  lastName: { type: String, nullable: true, default: ""  },
  document: { type: String, default: "" }, /// unique: true 
  diagnosticEvaluation: { type: Number, default: 0 }, // 0 falso, 1 verdad
  codeInstitute: { type: Number, default: 0, nullable: true },
  userType: { type: Number, default: 0 }, // 0 estudiante, 1 profesor
}, { timestamps: true });


export default mongoose.model('User', userSchema); // Exportación por defecto
