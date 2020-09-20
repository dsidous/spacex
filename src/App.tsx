import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi } from './redux/actions';

const tabs = ['dragons', 'rockets'];

const App: React.FC = () => {
  const [tab, setTab] = React.useState(tabs[0]);
  const items = useSelector((state) => state[tab].items);
  const isFetching = useSelector((state) => state[tab].isFetching);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!items || items === []) dispatch(fetchApi(tab));
  }, []);

  if (isFetching) {
    return <div>...loading</div>;
  }

  return <div>{items && items.map((item) => item.id)}</div>;
};

export default App;
