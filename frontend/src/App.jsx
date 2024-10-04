import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FileUpload from './views/FileUpload';
import FileTable from './views/FileTable';
import AdminDashboard from './views/AdminDashBoard';
import Header from './views/components/header';

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Routes>
                    {/* Default Route */}
                    <Route path="/" element={<FileUpload />} />
                    
                    {/* Route for File Table */}
                    <Route path="/filetable" element={<FileTable />} />

                    {/* Route for AdminDashboard */}
                    <Route path="/admin-dashboard" element={<AdminDashboard />} />


                </Routes>
            </div>
        </Router>
    );
}

export default App;
