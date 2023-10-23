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



function App() {
  const [ user , loading ] = useAuthState(auth)
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