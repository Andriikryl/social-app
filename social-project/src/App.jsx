import "./App.css"
import {BrowserRouter, Route, Routes} from "react-router-dom"

const App = () => {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>page 1</div>}/>
          <Route path="/:id" element={<div>user page</div>}/>
        </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App