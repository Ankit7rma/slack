import styled from "styled-components";
import { Button } from '@mui/material';
import { auth,provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";


const Login = () => {
    const signIn=(e)=>{
      e.preventDefault()
      signInWithPopup(auth, provider)
      .catch((error) => {

        alert(error.message)
      });

    }
  return (
    <LoginContainer>
    <LoginInnerContainer>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpDu4uROkHFyZTyrg1q1JFvMukUWX8PXPsmxygOvYT&s" alt="slack-logo"/>
     <h1>
        Sign In
     </h1>
     <p>XYZ.Slack.com</p>

     <Button onClick={signIn}>
        Sign In with Google

     </Button>
    </LoginInnerContainer>
        
    </LoginContainer>
  )
}

export default Login;

const LoginContainer = styled.div`
background-color: #f8f8f8;
height: 100vh;
display: grid;
place-items: center;

`
const LoginInnerContainer = styled.div`
padding: 100px;
text-align: center;
background-color: white;
border-radius: 20px;
box-shadow: 0 1px 3px rgba(0, 0 , 0, 0.12);
>h1{
    font-size: 20px;
}
>img{
    object-fit: content;
    height: 100px;
    margin-bottom: 40px;
}
`