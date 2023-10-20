import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./components/Home"



function App() {
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Home/>,
    }
  ])

  return (
    <><RouterProvider router={appRouter}>

      <div className='text-3xl bg-red-300'>
       Lets Build Slack
      </div>
    </RouterProvider>
    </>
      
  )
}

export default App
