import Canvas from './components/Canvas';
import SettingBar from './components/SettingBar';
import Toolbar from './components/Toolbar';
import './styles/app.scss';
import { BrowserRouter, Navigate, NavLink, Redirect, Route, Routes } from 'react-router-dom';
import Main from './UI/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path={'/:id'} element={<Main />} />
          {/* <Navigate to={`f${(+new Date).toString(16)}`}  /> */}
          <Route path="/" element={<Navigate to={`f${(+new Date).toString(16)}`}  />} />
          {/* <Redirect to={`f${(+new Date).toString(16)}`}/> */}
          {/* <Route
            path="*"
            element={<Error />}
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
            element={<Navigate to="/" replace />}
          /> */}
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
