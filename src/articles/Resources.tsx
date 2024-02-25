import { Grid } from '@mui/material';
import Header from '../Header';
import parse from 'html-react-parser';
import { disqusShortname, PAGE_URL } from '../Constants';
import Disqus from "disqus-react"
import { Article } from './Article';

export const articleResources =  new Article("articles/Resources", "Resources", "", 2, "Tutorials", ["finance"], "2024-01-01")
const notebookComponent = parse(require('./Resources.html').default)


function TradeEarningsRelease() {

    const disqusConfig = {
      url: PAGE_URL,
      identifier: articleResources.id.toString(),
      title: articleResources.title,
    }

  return (
    <>
      <Header />
      <Grid container direction="row" justifyContent="center" alignItems="center" padding={1}>
        <Grid item />
        <Grid item xs={12} sm={12} md={12} lg={11} xl={10}>
          {notebookComponent}
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
