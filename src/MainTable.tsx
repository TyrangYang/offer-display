import { AgGridReact } from "ag-grid-react";
import { Dispatch, FC, memo, SetStateAction } from "react";
import { normalizeAMEX, normalizeBOA } from "./data/normalizedData";
import AMEX_Data from "./data/AMEX_Data.json";
import BOA_Data from "./data/BOA_data.json";
import { ColDef, GridApi } from "ag-grid-community";
import LogoRenderer from "./LogoRenderer";
interface Props {
  setGridAPI: (newVal: GridApi | null) => void,
  setIsBackToTopBtnDisplay: Dispatch<SetStateAction<boolean>>
}
const MainTable: FC<Props> = ({ setGridAPI, setIsBackToTopBtnDisplay }) => {
  const data = [...normalizeAMEX(AMEX_Data), ...normalizeBOA(BOA_Data)];
  const columnDefs: ColDef[] = [
    {
      field: "logo",
      cellRenderer: LogoRenderer,
      flex: 1,
    },
    { field: "name", flex: 1 },
    { field: "source", flex: 1 },
    // { field: 'category', flex: 1 },
    // { field: 'type', flex: 1 },
    // {
    //     headerName: 'Reword type',
    //     field: 'achievement_type',
    //     flex: 1,
    //     valueGetter: (props) => {
    //         if (props.data.achievement_type === 'STATEMENT_CREDIT')
    //             return 'statement';
    //         if (props.data.achievement_type === 'MEMBERSHIP_REWARDS')
    //             return 'credit';
    //         return props.data.achievement_type;
    //     },
    // },
    // { field: 'status', flex: 1 },
    { field: "description", flex: 3 },
    { field: "startDate", flex: 1, cellDataType: "date" },
    { field: "daysLeft", flex: 1 },
  ];

  return (
    <div
      className="ag-theme-quartz" // applying the Data Grid theme
      style={{ height: "100%" }} // the Data Grid will fill the size of the parent container
    >
      <AgGridReact
        rowData={data}
        columnDefs={columnDefs}
        rowHeight={100}
        enableCellTextSelection
        defaultColDef={{
          filter: true,
        }}
        onBodyScroll={(event) => {
          if (event.direction === "vertical") {
            const lastIdx = event.api.getLastDisplayedRowIndex();
            if (lastIdx > 30) {
              console.log(lastIdx);
              setIsBackToTopBtnDisplay((prev) => {
                if (prev === false) return !prev;
                return prev;
              });
            }

            if (lastIdx <= 30) {
              setIsBackToTopBtnDisplay((prev) => {
                if (prev === true) return !prev;
                return prev;
              });
            }
          }
        }}
        onGridReady={(event) => {
          setGridAPI(event.api);
        }}
        rowSelection={{
          mode: "multiRow",
        }}
      />
    </div>
  );
};
export default memo(MainTable);
