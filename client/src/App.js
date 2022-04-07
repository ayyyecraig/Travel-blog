import { Route, Routes} from 'react-router-dom'
import Posts from './components/TravelBlog'
// import Comments from './components/Posts'


const App = () => {
  
  return (
    <div className="App">
      <h3>Travel Blog</h3>
      <div className="flex-row">
        <div className="left">
       
        </div>
        <div className="right">
          <Routes>
            <Route path="/" element={<Posts />} />
          {/* <Route path="/Posts/:id" element={<Comments />}/> */}
           
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App