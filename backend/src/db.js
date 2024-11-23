import mongoose from 'mongoose'


export const connectDB = async () => {
    try {
      const mongoURI = process.env.MONGO_URI || 'mongodb://localhost/NodeCrud';
      await mongoose.connect(mongoURI);
      console.log('db Conectado');
    } catch (error) {
      console.error('Database coneccion erronia:', error);
    }
  };




// export const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/NodeCrud', {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('db Conectado');
//     } catch (error) {
//         console.error('Database coneccion erronia:', error);
//     }
// };
