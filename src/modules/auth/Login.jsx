import { TopBar } from '../../componenets/TopBar'
import axios from 'axios';

const handleLogin = () =>{
  const uri = process.env.REACT_APP_BASE_URL;
  console.log("uri : ",`${uri}/login`)
  axios
  .post(`${uri}/login`,{
    email:"ajay@gmail.com",
    password:"1234"
})
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

