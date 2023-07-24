import  express    from  "express";
import  connectDB  from  "./db/connecetdb.js";
import  { join }   from  "path";
import  webrouter  from  "./routers/web.js"
const app  = express();
const Port = process.env.PORT || "4040";
const DATABASE_URL = process.env.DATABASE_URL ||"mongodb+srv://deswaliirfan852:irfankhan098765@cluster0.zax8gon.mongodb.net/"

connectDB(DATABASE_URL);

 app.use(express.urlencoded({extended : false}))
 
 app.use("/student",express.static(join(process.cwd(),"public")))
 app.use("/student/edit",express.static(join(process.cwd(),"public")))

 app.set('view engine','ejs');
 app.use("/student",webrouter)
app.listen(Port,()=>{
    console.log(`server listen at http://localhost:${Port}`)
})