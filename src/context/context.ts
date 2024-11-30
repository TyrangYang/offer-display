import { GridApi } from 'ag-grid-community';
import { createContext } from "react";
interface PageContextType {
  gridAPI: GridApi | null
  setGridAPI: (newVal: GridApi | null) => void,
  isBackToTopBtnDisplay: boolean,
  setIsBackToTopBtnDisplay: (newVal: boolean) => void
}
export const PageContext = createContext<PageContextType>({
  gridAPI: null,
  setGridAPI: () => { },
  isBackToTopBtnDisplay: false,
  setIsBackToTopBtnDisplay: () => { },
})
