import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        //database Name
        const database='demomern';
        const con = await MongoServerClosedError.connect(`mongodb://127.0.0.1:27017/${databaseName}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        userCreateIndex: true
    });
        console.log(`Daatabase connected : ${con.connection.host}`)
    }  catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB