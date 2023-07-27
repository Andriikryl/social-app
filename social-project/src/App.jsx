import "./App.css"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import MainPage from "./pages/MainPage"
import UserPage from "./pages/UserPage"

const App = () => {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/:id" element={<UserPage/>}/>
        </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App