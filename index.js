const axios = require('axios');
const fetch = require("node-fetch");
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: { origin: "*" },
    transports: ['websocket', 'polling']
});
const commodity1 = []; 
const commodity2 = [];
const commodity = [];
let count=0;
let clearingInterval;


server.listen(8080, () => {
    console.log('listening: port 8080');
})

axios.get('https://bitpay.com/api/rates')
    .then(response => {
        // console.log("The Array is: ", response.data);
        console.log('the length of the dataArray is: ', response.data.length);
        response.data.map((data, index) => {
            if (index % 2 === 0) {
                commodity1.push({
                    id: data.code,
                    rate: data.rate
                })
            }
            else {
                commodity2.push({
                    id: data.code,
                    rate: data.rate
                });
            }

        })
       
        for (let i = 0; i < commodity1.length; i++) {
            commodity.push({
                commodity1_rate: commodity2[i].rate,
                commodity2_rate: commodity1[i].rate  
            })
        }
        console.log('the length of commodity1 array is: ', commodity1.length);
        console.log('the length of commodity2 array is: ', commodity2.length);
        console.log("The length of the commodity array is: ", commodity.length);
        
        
        function calculate(val)
        {
           console.log('the value of count in the calculate function is: ',val);
           return commodity[val];
        }
        clearInterval(clearingInterval)
        io.on('connection', socket => {
            clearingInterval=setInterval(() => {
                    bitcoinData=calculate(count);
                    // console.log('the bitcoin data in the server is:',bitcoinData);
                    socket.emit('bitcoin',bitcoinData); 
                    count++;
                    if(count>commodity.length)
                    {
                        count=0;
                    }
                }, 3000)
        });

        
    }).catch(err=>{
        console.log('the error obtained is: ',err);
    });






    
