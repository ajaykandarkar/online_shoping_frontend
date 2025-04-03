import { TopBar } from '../../componenets/TopBar'
import axios from 'axios';

const handleLogin = () =>{
  const uri = process.env.REACT_APP_BASE_URL;
  console.log("uri : ",uri)
  axios
  .post(`${uri}/login`)
  .then((response) => {
    console.log("response of ",response)
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
}

export const Login = () => {
  return (
    <div>
        <TopBar/>
      <button  onClick={handleLogin}>Login click</button>
    </div>
  )
}

