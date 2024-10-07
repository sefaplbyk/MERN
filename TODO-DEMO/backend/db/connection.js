import mongoose from "mongoose";

export const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.DB_URL);
      console.log("MongoDB Connected : " + conn.connection.host);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1); // process code 1 code means exit with failure, 0 means succes(Uygulamayı sonlandırır hata 1 kod'uyla 0 'la başarılı şeklinde de kullanılabilir)
    }
  };