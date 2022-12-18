import {useLocation} from 'react-router-dom';

function Home() {
  const location = useLocation();
//   console.log(location.state.value);
  return (
    <div style={{"marginTop":"20%"}}>
      <center><h1>Company Name : {location.state.user.cname}</h1>
      <h1>Company Code : {location.state.user.ccode}</h1>
      <h1 style={{"color" : "red"}}>Current Stock Price : {location.state.data.value}</h1></center>
    </div>
  );
}

export default Home;