import { Grid } from '@mui/material';
import Header from '../../Header';
import { disqusShortname, PAGE_URL } from '../../Constants';
import Disqus from "disqus-react"
import { Article } from '../Article';
import RenderNb from '../../components/RenderNb';
import HelmetWrapper from '../../components/HelmetWrapper';

export const articleEarningsRelease =  new Article(
  "articles/trade-earnings-release", 
  "Trading Earnings Releases", 
  `I traded corporate earnings announcements capturing the difference in implied volatility before and after the announcement.
  The entiry implied volatility surface change is estimated and a portfolio of option is constructed to benefit from the change irrespective of the direction of the stock price movement.
  That's fairly akin to a butterfly spread, but here applied to the entire surface, not just a single tenor.`, 
  "trading-earnings-release", "Tutorials", ["finance"], 
  "2024-05-01",
  "",
  TradeEarningsRelease,
)
const notebook = require('./EarningsRelease.html').default

function TradeEarningsRelease() {

  const disqusConfig = {
    url: PAGE_URL,
    identifier: articleEarningsRelease.id,
    title: articleEarningsRelease.title,
  }

  return (
    <HelmetWrapper notebook={notebook}>
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
    </HelmetWrapper>
  );
}