import './App.css';
import React from 'react';
import {HeaderContainer} from './containers/Header';
import {SideBarContainer} from './containers/Sidebar';
import {FeatureContainer} from './containers/Feature';

function App() {
  
  return (
    <div className="App">
      <HeaderContainer />
      <SideBarContainer />
      <FeatureContainer />
    </div>
  );
}

export default App;









 // const onChange=(event)=>{
  //   console.log('the event.target value is: ')
  //   console.log(event.target.options[event.target.selectedIndex].value);
  // }




// const name='https://rest.coinapi.io/v1/exchangerate/USD?apikey=3B48FE7C-5C44-4E92-9A14-4AD5D32B5F0F&invert=true&output_format=json';

// const name2='https://api.coinbase.com/v2/'

 // useEffect(()=>{
  //  fetch('https://rest.coinapi.io/v1/exchangerate/USD?apikey=3B48FE7C-5C44-4E92-9A14-4AD5D32B5F0F&invert=true&output_format=json').then((res)=>
  //  {
  //    return res.json().then((data)=>
  //     {
  //       console.log('the data is: ',data);
  //     })
  //  })
  // },[])