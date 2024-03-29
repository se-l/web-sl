import { Articles } from './articles/Articles';
import { Link } from 'react-router-dom';
import { Box, Divider, Grid } from '@mui/material';
import ContactDiscord from './ContactDiscord';

function HomeNavigation() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" padding={1}>
      <Grid item xs={12} sm={12} md={12} lg={11} xl={10}>
        <p>Sharing few notes, notebooks and resources - work related.</p>
        <ul>
          {Articles.map(article => (
            <li key={article.id}>
              <Link to={article.route}>
                <h4>{article.title}</h4>
              </Link>
            </li>
          ))}
        </ul>
        <Divider /> 
        <Box mt={2}/>
        <ContactDiscord />
      </Grid>
    </Grid>
  );
}

export default HomeNavigation;