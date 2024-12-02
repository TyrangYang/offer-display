import { FC, memo } from 'react';
import { GridApi } from 'ag-grid-community';


interface Props {
  gridAPI: GridApi | null
  isBackToTopBtnDisplay: boolean,
}

const BackToTopButton: FC<Props> = ({ isBackToTopBtnDisplay, gridAPI }) => {
  if (!isBackToTopBtnDisplay) return null;
  return (
    <button
      type="button"
      className='back-to-top-btn'
      onClick={() => {
        gridAPI?.ensureIndexVisible(0);
      }}
    >
      &#8679;
    </button>
  )
}
export default memo(BackToTopButton)