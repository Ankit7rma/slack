import {RouterProvider, createBrowserRouter } from "react-router-dom"
import Header from "./components/Header"
import styled from "styled-components"
import Sidebar from "./components/Sidebar"
import { Provider } from "react-redux"
import appStore from "./components/store/Store"
import Chat from "./components/Chat"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "./firebase"
import Login from "./components/Login"
import  CubeGrid  from 'react-spinkit';




function App() { 
  const [ user , loading ] = useAuthState(auth)
  if(loading){return(
    
    <AppLoading>
      <AppLoadingContents>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpDu4uROkHFyZTyrg1q1JFvMukUWX8PXPsmxygOvYT&s" alt="Slack-logo"/>
        
        <CubeGrid size={100}  
        name="folding-cube"
        color="purple"
        fadeIn="none"
        />
        
      </AppLoadingContents>
    </AppLoading>
  )
  }
  
  
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Chat/>,
    }
  ])

  return (
    <>
    <Provider store={appStore}>
    {!user?(<Login/>):(<>
      <Header/>
    <AppBody>
    <Sidebar/>
    <RouterProvider router={appRouter}/>
     </AppBody></>)}
    </Provider>
    </>
  )
}

export default App

const AppBody = styled.div`
display: flex;
height: 100vh;

`

const AppLoading = styled.div`
display: grid;
place-items: center;
height: 100vh;
width: 100%;
`
const AppLoadingContents = styled.div`
text-align: center;
padding-bottom:100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
>img{
  height: 200px;
  padding: 20px;
  margin-bottom:40px ;
}
`