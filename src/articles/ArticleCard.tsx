
import { Grid, Stack, ThemeProvider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { theme } from '../theme';
import { Article } from './Article';

export function ArticleCard({article}: {article: Article}) {
  
  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="row" justifyContent="center" alignItems="flex-start" py={1} my={1}>
        {/* <Grid item xs={1}> */}
          {/* <img src="https://via.placeholder.com/150" alt="placeholder" /> */}
        {/* </Grid> */}

        <Grid item xs={11}>

          <Grid container direction="column" justifyContent="space-between" alignItems="flex-start">
            <Grid item>
              
              <Stack spacing={0}>
                <Link to={article.route}>
                  <Typography variant='h6'>{article.title}</Typography>
                </Link>
                
                <Typography variant='subtitle2'>Created: {article.date}{article.lastUpdated === '' ? '' : ', Last Updated: '}{article.lastUpdated}</Typography>
              </Stack>
            </Grid>

            <Grid item>
              <Typography variant='body2'>{article.description}</Typography>
            </Grid>

          </Grid>

        </Grid>
      </Grid>
    </ThemeProvider>
  );
}