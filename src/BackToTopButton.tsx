import { FC, useContext } from 'react';
import { PageContext } from './context/context';

const BackToTopButton: FC = () => {
  const { isBackToTopBtnDisplay, gridAPI } = useContext(PageContext)
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
export default BackToTopButton