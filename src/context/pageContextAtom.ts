import { GridApi } from "ag-grid-community";
import { atom } from "jotai";

export const backToTopButtonAtom = atom(false);
export const gridAPIAtom = atom<GridApi | null>(null);
