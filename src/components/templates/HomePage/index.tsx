import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUseStyles } from 'react-jss';

import Details from '../../molecules/Details';
import { fetchDragons, fetchRockets } from '../../../redux/actions';

import { Dragon } from '../../../types/Dragon';
import { Rocket } from '../../../types/Rocket';

type TItem = Dragon & Rocket & { gridPosition?: number };

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

const TABS = {
  dragons: Tabs.dragons,
  rockets: Tabs.rockets,
};

const COLUMNS = 2;

const useStyles = createUseStyles({
  page: {
    margin: '0 auto',
    maxWidth: 1000,
  },

  grid: {
    display: 'grid',
    gap: '20px',
    gridTemplateColumns: `repeat(${COLUMNS}, 1fr)`,

    '& figure': {
      height: '100%',
      margin: 0,

      '& img': {
        display: 'block',
        objectFit: 'cover',
        height: '100%',
        width: '100%',
      },
    },
  },

  cell: {
    position: 'relative',
  },

  title: {
    backgroundColor: 'rgba(255,255,255,.6)',
    borderRadius: 6,
    bottom: 10,
    padding: '10px 20px',
    position: 'absolute',
    right: 10,
  },
});

const HomePage: React.FC = () => {
  const classes = useStyles();
  const [tab, setTab] = useState(TABS.rockets);
  const [details, setDetails] = useState<TItem | null>(null);

  const items = useSelector((state: Items) => state[tab].items);
  const isFetching = useSelector((state: Items) => state[tab].isFetching);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!items || items.length === 0) {
      tab === 'dragons' ? dispatch(fetchDragons()) : dispatch(fetchRockets());
    }
    setDetails(null);
  }, [tab]);

  const showDetails = (item: TItem, index: number) => {
    const gridPosition = index - (index % COLUMNS) + COLUMNS;

    setDetails({
      ...item,
      gridPosition,
    });
  };

  if (isFetching) {
    return <div>...loading</div>;
  }

  return (
    <div className={classes.page}>
      <div className={classes.grid}>
        <div style={{ justifyContent: 'flex-end', display: 'flex' }}>
          <button onClick={() => setTab(TABS.dragons)}>Dragons</button>
        </div>
        <div>
          <button onClick={() => setTab(TABS.rockets)}>Rockets</button>
        </div>
        {items &&
          (items as TItem[]).map((item, index) => (
            <>
              {details && details.gridPosition === index && (
                <Details details={details} />
              )}

              <div
                key={item.id}
                className={classes.cell}
                onClick={() => showDetails(item, index)}
              >
                <figure>
                  <img
                    src={item.flickr_images[0]}
                    alt={item.name || item.rocket_name}
                  />
                </figure>

                <div className={classes.title}>
                  {item.name || item.rocket_name}
                </div>
              </div>
            </>
          ))}
        {details && details.gridPosition === items.length && (
          <Details details={details} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
