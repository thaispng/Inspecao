import mongoose from 'mongoose';

const FormInspecaoSchema = new mongoose.Schema({
  nameConstructions: {
    type: String,
    required: true
  },
  addressConstructions: {
    type: String,
    required: true
  },
  inicialDate: {
    type: String,
    required: true,
    unique: true
  },
  finalDate: {
    type: String,
    required: true
  },
  status:{
    type: String,
    required: true,
    enum: ['Em andamento', 'Concluida', 'Pendente', 'Cancelada']
  },
  description:{
    type: String,
    required: true
  
  }
}, {
  timestamps: true
});

const FormInspecao = mongoose.models.FormInspecao || mongoose.model('FormInspecao', FormInspecaoSchema);
export default FormInspecao;
