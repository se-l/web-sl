import { Grid } from '@mui/material';
import Header from '../../Header';
import { disqusShortname, PAGE_URL } from '../../Constants';
import Disqus from "disqus-react"
import { Article } from '../Article';
import RenderNb from '../../components/RenderNb';

export const articleResources =  new Article("articles/resources", "Resources", "", "resources", "Tutorials", ["finance"], "2024-01-01")
const notebook = require('./Resources.html').default


function TradeEarningsRelease() {

    const disqusConfig = {
      url: PAGE_URL,
      identifier: articleResources.id,
      title: articleResources.title,
    }

  return (
    <>
      <Header />
      <Grid container direction="row" justifyContent="center" alignItems="center" padding={1}>
        <Grid item />
        <Grid item xs={12} sm={12} md={12} lg={11} xl={10}>
          <RenderNb notebook={notebook} />
        </Grid>
        <Grid item />
      </Grid>
      <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </>
  );
}

export default TradeEarningsRelease;