import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
//import docker from 'docker';
import postRoutes from './routes/employee.rout.js';

const app= express();
app.use('/employee.rout', postRoutes);
app.use(bodyParser.json({limit:'10mb', extended: true}));
app.use(bodyParser.urlencoded({limit:'10mb', extended: true}));
app.use(cors());
const CONNECTION_URL='mongodb+srv://Adisssoftwareproj:JAVAJAVA143@cluster0.iboob.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT= process.env.PORT || 3000;
mongoose.connect(CONNECTION_URL,{useNewUrlParser: true,useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`server is running successfully on port: ${PORT}`)))
.catch((error) => console.log(error.message));
mongoose.set('useFindAndModify',false);