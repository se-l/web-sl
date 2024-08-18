import { ArticleList } from './articles/ArticleList';
import { Box, Divider, Grid } from '@mui/material';
import ContactDiscord from './ContactDiscord';
import { ArticleCard } from './articles/ArticleCard';

function HomeNavigation() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" padding={1}>
      <Grid item xs={12} sm={12} md={12} lg={11} xl={10}>
        <p>Sharing a few notes, notebooks and resources. So far mostly related to trading volatility of equity options.</p>
          {ArticleList.map((article, i) => (
            <div key={i}>
              <ArticleCard article={article} />
            </div>
          ))}
        <Divider /> 
        <Box mt={2}/>
        <ContactDiscord />
      </Grid>
    </Grid>
  );
}

export default HomeNavigation;