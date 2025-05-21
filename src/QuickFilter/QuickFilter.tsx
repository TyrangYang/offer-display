import { FC, useState } from 'react';
import { Input } from 'antd';
import { useAtomValue } from 'jotai';
import { gridAPIAtom } from '../context/pageContextAtom';

const QuickFilter: FC = () => {
  const [inputVal, setInputVal] = useState<string>('');
  const gridAPI = useAtomValue(gridAPIAtom);
  return (
    <div>
      <Input
        placeholder="quick search"
        value={inputVal}
        onChange={(event) => {
          const { value } = event.target;
          setInputVal(value);
          gridAPI?.setGridOption('quickFilterText', value);
        }}
      />
    </div>
  );
};
export default QuickFilter;
