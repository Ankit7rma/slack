import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"
import styled from "styled-components"



function App() {
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Home/>,
    }
  ])

  return (
    <>
    <Header/>
    <AppBody>
Hello
   
    
    </AppBody>
    </>
      
  )
}

export default App

const AppBody = styled.div`
font: 600;

`