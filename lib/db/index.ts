import mongoose from "mongoose";

export async function connect() {
    try{
        mongoose.connect(process.env.MONGO_URI!,{dbName:'GitamAeroAstroClub'} )
        const connection =mongoose.connection;
        connection.on('connected', ()=>{
            console.log("Database connected successfully");
        })
        connection.on('error', (err)=>{
            console.log('Database connection error' + err)
            process.exit()
        })
    //     console.log('Connecting Database ...');
    // const MongooseURI = process.env.MONGO_URI;
    // await mongoose.connect(MongooseURI, {dbName: process.env.DB_NAME});
    // console.log('Database Connecting Successful');
    }catch(error){
        console.log('something goes wrong!')
        console.log(error)

    }
}