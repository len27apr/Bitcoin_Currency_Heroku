import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';
import io from "socket.io-client";

import { ResponsiveContainer, Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import Feature from '../components/feature';


const socket = io();

export function FeatureContainer() {
    const [graphArray, setGraphValue] = useState([]);

    useEffect(() => {
        socket.on('bitcoin', (data) => {
            // console.log('the data value in the client is: ', data);
            setGraphValue((prevState) => {
                return [
                    ...prevState,
                    data
                ]
            }
            )
        })
    }, [])


    if (graphArray.length > 20) {
        for (let i = 0; i < 10; i++) {
            graphArray.pop();
        }
    }

    return (
        <Feature>
            <Feature.Frame>
                <Feature.Group>
                    <Feature.Image src='./Images/bitcoin.jpg' alt='bitcoin' />
                    <Feature.HeaderText>Real-time bitcoin graph</Feature.HeaderText>
                </Feature.Group>
                <Feature.Group>
                    <Feature.DropDown bgcolor='pink'>
                        <Feature.Option value='Commodity1' defaultvalue='selected'>Commodity1</Feature.Option>
                        <Feature.Option value='Option1'>Option1</Feature.Option>
                        <Feature.Option value='Option1'>Option1</Feature.Option>
                        <Feature.Option value='Option1'>Option1</Feature.Option>
                        <Feature.Option value='Option1'>Option1</Feature.Option>
                    </Feature.DropDown>
                    <Feature.DropDown bgcolor='blue'>
                        <Feature.Option value='Commodity2' defaultvalue='selected'>Commodity2</Feature.Option>
                        <Feature.Option value='Option1'>Option1</Feature.Option>
                        <Feature.Option value='Option1'>Option1</Feature.Option>
                        <Feature.Option value='Option1'>Option1</Feature.Option>
                        <Feature.Option value='Option1'>Option1</Feature.Option>
                    </Feature.DropDown>
                </Feature.Group>
            </Feature.Frame>
            <Feature.Frame>
                <ResponsiveContainer width="85%" height={470} >
                    <LineChart data={graphArray}>
                        <Line dataKey="rate" stroke="red" />
                        <XAxis dataKey="id" tickLine={false} />
                        <YAxis tickCount={6} />
                        <Tooltip />
                        <CartesianGrid opacity={0.2} />
                    </LineChart>
                </ResponsiveContainer>
            </Feature.Frame>
        </Feature>
    )
}





/* <LineChart width={500} height={300} data={graphArray}>
    <XAxis dataKey="commodity1_id" />
    <YAxis />
    <Tooltip />
    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
    <Line type="monotone" dataKey="commodity1_rate" stroke="#8884d8" />
    <Line type="monotone" dataKey="commodity2_rate" stroke="red" />
</LineChart> */



/* <ResponsiveContainer width="90%" height={400} >
        <AreaChart data={dummyArray}>
            <Area dataKey="commodity1_ratee" />
            <XAxis dataKey="commodity1_idd" />
            <YAxis dataKey='commodity_ratee' />
            <Tooltip />
            <CartesianGrid />
        </AreaChart>
    </ResponsiveContainer> */

// useEffect(()=>{
//     console.log('hi useEffect');
//     socket.on('num',(number)=>{
//         setGraphValue((prevState)=> {

//             // console.log('setting graph value which is',num);
//             // console.log('the previous value is: ');
//             if(prevState.value===20)
//             {
//                 prevState.value=0;
//                 prevState.value=(+prevState.value)+(+number.value);
//                 prevState.name=number.name;
//                 return {
//                     ...prevState
//                 } 
//             }
//             else{
//                 prevState.value=(+prevState.value)+(+number.value);
//                 prevState.name=number.name;
//                 return {
//                     ...prevState
//                 }
//             }

//     })
// })},[])