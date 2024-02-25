import React from 'react';
import { Articles } from './articles/Articles';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

function HomeNavigation() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" padding={1}>
      <Grid item xs={12} sm={12} md={12} lg={11} xl={10}>
        <p>Sharing few notes, notebooks and resources - work related.</p>
        <ul>
          {Articles.map(article => (
            <li key={article.id}>
              <Link to={article.route}>
                <h3>{article.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
}

export default HomeNavigation;