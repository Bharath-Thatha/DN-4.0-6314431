import logo from './logo.svg';
import './App.css';
import { CohortsData} from './Cohort'
import CohortDetails from './CohortDetails'; 

function App() {
 
  return (
    <>
    <h1>Cohorts Details</h1>
    <div id='outer_box'>
      {CohortsData.map(cohort => <CohortDetails cohort={cohort}/>)}
    </div>
  </>
  );
}

export default App;
