import { FC, memo } from 'react';
import { useAtomValue } from 'jotai';
import { backToTopButtonAtom, gridAPIAtom } from '../context/pageContextAtom';
import styles from './BackToTopButton.module.css';

const BackToTopButton: FC = () => {
  console.log(styles);
  const isBackToTopBtnDisplay = useAtomValue(backToTopButtonAtom);
  const gridAPI = useAtomValue(gridAPIAtom);
  if (!isBackToTopBtnDisplay) return null;
  return (
    <button
      type="button"
      className={styles.backToTopBtn}
      onClick={() => {
        gridAPI?.ensureIndexVisible(0);
      }}
    >
      &#8679;
    </button>
  );
};
export default memo(BackToTopButton);
