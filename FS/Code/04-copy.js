let fs = require('fs')

let copy = (src,target,callback) => {
    fs.readFile(src,(err,callback) => {
        if(!err) {
            fs.writeFile(target,data,(err,data)=>{
                if (!err) {
                    callback && callback()
                }else {
                    throw err;
                }
            })
        }
    })
}

copy(__dirname + '/resource/b.txt', __dirname + '/resource/d.txt',(err) => {
    if (!err) {console.log("COPY SEUUCESS")}
})