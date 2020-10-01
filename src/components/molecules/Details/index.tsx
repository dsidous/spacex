import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  details: {
    gridColumn: 'span 2',
    transition: 'all 2s ease-in-out',

    '&.show': {
      '& $detailsInner': {
        opacity: 1,
        padding: 40,
        visibility: 'visible',
      },
    },
  },

  detailsInner: {
    backgroundColor: '#e2e2e2',
    borderRadius: 8,
    opacity: 0,
    padding: 0,
    transition: 'all .2s ease-in-out',
    visibility: 'hidden',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',

    '& img': {
      width: '100%',
    },
  },
});

const Details = ({ details }) => {
  const classes = useStyles();
  return (
    <div className={[classes.details, details ? 'show' : ''].join(' ')}>
      <div className={classes.detailsInner}>
        {details && (
          <>
            <img
              src={details.flickr_images[1]}
              alt={details.name || details.rocket_name}
            />
            <div>
              <p>Name: {details.name || details.rocket_name}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Details;
