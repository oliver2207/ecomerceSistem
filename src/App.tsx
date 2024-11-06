import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Error404 from './container/errors/Error404'
import Home from './container/pages/Home'
import store from './store'
import { Provider } from 'react-redux'
import Blog from './container/pages/Blog'
import About from './container/pages/About'
import Careers from './container/pages/Careers'
import Contac from './container/pages/Contac'
import Services from './container/pages/Services'
import Cases from './container/pages/Cases'
import Price from './container/pages/Price'
function App() {

  return (
    <Provider store={store}>
       <Router>
      <Routes>
        <Route path='*' element={<Error404 />} />
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/contac' element={<Contac />} />
        <Route path='/services' element={<Services />} />
        <Route path='/cases' element={<Cases />} />
        <Route path='/price' element={<Price />} />

      </Routes>
    </Router>
    </Provider>
   
  )
}

export default App
