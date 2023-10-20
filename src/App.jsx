import {RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"
import styled from "styled-components"
import Sidebar from "./components/Sidebar"
import { Provider } from "react-redux"
import store from "./components/store/Store"



function App() {
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Home/>,
    }
  ])

  return (
    <Provider store={store}>
    <Header/>
    <AppBody>
    <Sidebar/>
    <RouterProvider router={appRouter}/>
     </AppBody>
    </Provider>
      
  )
}

export default App

const AppBody = styled.div`
display: flex;
height: 100vh;

`