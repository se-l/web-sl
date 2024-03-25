import { Grid } from '@mui/material';
import Header from '../Header';
import parse from 'html-react-parser';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { disqusShortname, PAGE_URL } from '../Constants';
import Disqus from "disqus-react"
import { Article } from './Article';
import { getScriptElements } from '../helper';

export const articleEarningsRelease =  new Article("articles/trade-earnings-release", "Trade Earnings Releases (In Progress)", "", 1, "Tutorials", ["finance"], "2024-01-01")
const notebookComponent = parse(require('./EarningsRelease.html').default)

const helmets: any[] = []
//@ts-ignore
const scriptElements = getScriptElements(notebookComponent)
scriptElements.forEach((el, i) => {
  var s = document.createElement('script')
  if (el.props.type !== undefined) {
    s.type = el.props.type
  }
  if (el.props.src !== undefined) s.src = el.props.src
  if (el.props.dangerouslySetInnerHTML !== undefined) s.text = el.props.dangerouslySetInnerHTML.__html
  helmets.push(<script type={s.type}>{s.text}</script>);
});

function TradeEarningsRelease() {

    const disqusConfig = {
      url: PAGE_URL,
      identifier: articleEarningsRelease.id.toString(),
      title: articleEarningsRelease.title,
    }

  return (
    <HelmetProvider>
      <Helmet>
        {helmets}
      </Helmet>

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
    </HelmetProvider>
  );
}

export default TradeEarningsRelease;
