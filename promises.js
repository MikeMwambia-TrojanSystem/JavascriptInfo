/**
 * Gets data  processes then saves it again
 * 
 * @param {obj} data The data to be processed
 */


let db = process.env.mongoDB;

try{
new Promise(function(resolve,reject){
    db.getData((err,data)=>{
        if(err){
            reject(err);
        }
            data.a = "test"
            data.b = 1111
            resolve(data);
    })
}).then((data)=>{
    db.processData(data,(err,data)=>{
        if(err){
            return
        }
        return data;
    })
}).then((data)=>{
    db.saveData(err,data=>{
        if(err){
            return;
        }
        console.log(data);
        console.log('Finished');
    })
})
}catch(err){
    console.log(err);
        return;
}
