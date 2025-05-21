import { FC, memo } from 'react';
import { useAtomValue } from 'jotai';
import { backToTopButtonAtom, gridAPIAtom } from '../context/pageContextAtom';
import styles from './BackToTopButton.module.scss';
import { ArrowUpOutlined } from '@ant-design/icons';

const BackToTopButton: FC = () => {
  console.log(styles);
  const isBackToTopBtnDisplay = useAtomValue(backToTopButtonAtom);
  const gridAPI = useAtomValue(gridAPIAtom);
  return (
    <button
      type="button"
      className={`${styles.backToTopBtn} ${isBackToTopBtnDisplay ? styles.shows : ''}`}
      onClick={() => {
        gridAPI?.ensureIndexVisible(0);
      }}
    >
      <ArrowUpOutlined />
    </button>
  );
};
export default memo(BackToTopButton);
