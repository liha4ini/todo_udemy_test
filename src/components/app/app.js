import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


const data = [
	{name: 'Hren s Bugra', salary: 326, increase: false, id: 1},
	{name: 'Dimkon', salary: 457, increase: true, id: 2},
	{name: 'Chupakabra', salary: 1226, increase: false, id: 3},
]

function App() {
  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList data={data}/>
        <EmployeesAddForm/>
    </div>
  );
}

export default App;
