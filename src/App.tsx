import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragons, fetchRockets } from './redux/actions';
import { Dragon } from './types/Dragon';
import { Rocket } from './types/Rocket';

interface Items {
  dragons: {
    items: Dragon[];
    isFetching: boolean;
  };
  rockets: {
    items: Rocket[];
    isFetching: boolean;
  };
}

enum Tabs {
  dragons = 'dragons',
  rockets = 'rockets',
}

const tabs = {
  dragons: Tabs.dragons,
  rockets: Tabs.rockets,
};

const App: React.FC = () => {
  const [tab, setTab] = useState(tabs.rockets);
  const items = useSelector((state: Items) => state[tab].items);
  const isFetching = useSelector((state: Items) => state[tab].isFetching);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!items || items === []) {
      tab === 'dragons' ? dispatch(fetchDragons()) : dispatch(fetchRockets());
    }
  }, []);

  if (isFetching) {
    return <div>...loading</div>;
  }

  return <div>{items && items.map((item) => item.id)}</div>;
};

export default App;
