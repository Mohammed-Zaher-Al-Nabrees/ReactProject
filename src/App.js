import './App.css'
import {Footer, Header,Container} from './components/index'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import {Home , About ,Services,Contact ,LatestNews , NotFound} from './Pages/index'
import OneBlog from './components/News/OneBlog'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Container>
            <Routes>
              <Route path='/'  element={<Home />}/>
              <Route path='/about'  element={<About />}/>
              <Route path='/services'  element={<Services />}/>
              <Route path='/latestNews'  element={<LatestNews />} />
              <Route path='/latestNews/:id' element={<OneBlog /> } />
              <Route path='/contact'  element={<Contact />}/>
              <Route path='*'  element={<NotFound />}/>
            </Routes>
          </Container>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App