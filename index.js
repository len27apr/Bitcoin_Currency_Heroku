const axios = require('axios');
// const fetch = require("node-fetch");
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: { origin: "*" },
    transports: ['websocket', 'polling']
});
const bitcoinArray=[];
let count=0;
let clearingInterval;




axios.get('https://bitpay.com/api/rates')
    .then(response => {
        console.log('the length of the dataArray is: ', response.data.length);
        response.data.map((data) => {
              bitcoinArray.push({
               id: data.code,
               rate: data.rate,
               name:data.name
           })
        })
       
         console.log("The length of the bitcoin array is: ", bitcoinArray.length);
        
        
        function calculate(val)
        {
        //    console.log('the value of count in the calculate function is: ',val);
           return bitcoinArray[val];
        }
        clearInterval(clearingInterval)
        io.on('connection', socket => {
            clearingInterval=setInterval(() => {
                    bitcoinData=calculate(count);
                    // console.log('the bitcoin data in the server is:',bitcoinData);
                    socket.emit('bitcoin',bitcoinData); 
                    count++;
                    if(count>bitcoinArray.length)
                    {
                        count=0;
                    }
                }, 3000)
        });

        
    }).catch(err=>{
        console.log('the error obtained is: ',err);
    });

if(process.env.NODE_ENV === 'production')
{
    app.use(express.static('client/build'));
     app.get('*',(req,res)=> {
        res.sendFile(path.resolve(__dirname,"client","build","index.html"));
    })
}
    
const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
    console.log('listening: port 4000');
})



    
