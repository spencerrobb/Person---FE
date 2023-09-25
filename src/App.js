import AddPersonComponent from './components/AddPersonComponent';
import ListOfPersonComponent from './components/ListOfPersonComponent';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import UpdatePersonComponent from './components/UpdatePersonComponent';

function App() {
  return (
    <div className='container'>
    <Router>
      <nav >
        <Link to="/persons">Home </Link>
        <Link to="/add_person">AddEmployee </Link>
      </nav>
      <Routes>
        <Route path="/" exact element={<ListOfPersonComponent/>} />
        <Route path="/persons/" element={<ListOfPersonComponent/>} />
        <Route path="/add_person" element={<AddPersonComponent/>} />
        <Route path="/update_person" element={<UpdatePersonComponent/>} />
        <Route path="/update_person/:id" element={<UpdatePersonComponent/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
