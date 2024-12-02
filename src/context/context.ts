import { GridApi } from 'ag-grid-community';
import { createContext, Dispatch, SetStateAction } from "react";
interface PageContextType {
  setGridAPI: (newVal: GridApi | null) => void,
  gridAPI: GridApi | null
  isBackToTopBtnDisplay: boolean,
  setIsBackToTopBtnDisplay: Dispatch<SetStateAction<boolean>>
}

export const PageContext = createContext<PageContextType>({
  gridAPI: null,
  setGridAPI: () => { },
  isBackToTopBtnDisplay: false,
  setIsBackToTopBtnDisplay: () => false,
})
