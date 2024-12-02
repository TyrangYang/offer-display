import './App.css';
import 'ag-grid-community/styles/ag-grid.css'; // Mandatory CSS required by the Data Grid
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Optional Theme applied to the Data Grid
import { GridApi } from 'ag-grid-community';
import { useState } from 'react';
import MainTable from './MainTable';
import BackToTopButton from './BackToTopButton';
function App() {
  const [gridAPI, setGridAPI] = useState<GridApi | null>(null);
  const [isBackToTopBtnDisplay, setIsBackToTopBtnDisplay] = useState(false)

  return (
    <>
      <BackToTopButton gridAPI={gridAPI} isBackToTopBtnDisplay={isBackToTopBtnDisplay} />
      <div style={{ height: '100vh' }}>
        <MainTable setGridAPI={setGridAPI} setIsBackToTopBtnDisplay={setIsBackToTopBtnDisplay} />
      </div>
    </>
  );
}

export default App;
