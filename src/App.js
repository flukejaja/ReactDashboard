// import logo from './logo.svg';
import './App.css';
import Dashboard from './Conponents/DashboardComponent';
import DeleteDashboard from './Conponents/DeleteDashboard';
import FindDashboard from './Conponents/FindDashboard';
import InsertDashboard from './Conponents/InsertDashboard';
function App() {
  return (
  <div>
    <Dashboard/>
    <InsertDashboard/>
    <DeleteDashboard/>
    <FindDashboard/>
  </div>

  );
}

export default App;
