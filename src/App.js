import './App.css';
import Home from './pages/home/Home';
import Login from './pages/login/login';
import List from './pages/list/list';
import Single from './pages/single/single';
import Neww from './pages/neww/neww';
import{BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />}/>
          <Route path="login" element={<Login />}/>
          <Route path="users">
            <Route index element={<List />}/>
            <Route path=":userId" element={<Single />}/>
            <Route path="new" element={<Neww />}/>
          </Route>
          <Route path="products">
            <Route index element={<List />}/>
            <Route path=":productId" element={<Single />}/>
            <Route path="new" element={<Neww />}/>
          </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
