import './App.css';
import 'ag-grid-community/styles/ag-grid.css'; // Mandatory CSS required by the Data Grid
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Optional Theme applied to the Data Grid
import MainTable from './MainTable';
import BackToTopButton from './BackToTopButton/BackToTopButton';

function App() {
  return (
    <>
      <BackToTopButton />
      <div style={{ height: '100vh' }}>
        <MainTable />
      </div>
    </>
  );
}

export default App;
