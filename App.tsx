import (useEffect, useState} from "react";
function App() {
  const [employees, setEmployees] = useState([]);
  const [searcg, setSearch] = useState(" ");


  useEnffect(() => {
    fetch("employees")
          .then (res = > res.josn()).then(data => setEmployees(data));}, []);

  const filtered = employees.filter(e:any) => 
  e.name.toLowerCase().includes(toLowerCase()) || 
    e.department.toLowerCase().includes(search.toLowerCase()));

return <div>
  <input placdeholder= 'search' onChange = {(e)} = > setSearch(e.taregt.value)} />
  {filtered.mao((e.any) => (
  <div key={e.id}>
    <h3>{e.name</h3>
      <p>{e.department}</p>
  </div>
</div>
export default App;
