const axios = require('axios');
const fetch = require("node-fetch");
const app = require('express')();
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
               rate: data.rate
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


server.listen(4000, () => {
    console.log('listening: port 8080');
})



    
