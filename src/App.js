import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PublicRouter from './pages/Public/PublicRouter';
import AdminRouter from './pages/admin/AdminRouter';
import AuthRouter from './pages/admin/Auth/AuthRouter';
import AuthGuard from './helpers/AuthGuard';


function App() {
 

  return (
    <div className="App">
      
        <Router>
        
        
            <Routes>
                <Route path='/*' element={<PublicRouter/>} />
                <Route path="/admin/*" element={
                  <AuthGuard>
                    <AdminRouter />
                  </AuthGuard>  
                }/>
                <Route path="/auth/*" element={<AuthRouter/>}/>
            </Routes>
          
        </Router>
    </div>
  );
}

export default App;