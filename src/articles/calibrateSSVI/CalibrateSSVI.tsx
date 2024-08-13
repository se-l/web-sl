import { Grid } from '@mui/material';
import Header from '../../Header';
import { disqusShortname, PAGE_URL } from '../../Constants';
import Disqus from "disqus-react"
import { Article } from '../Article';
import RenderNb from '../../components/RenderNb';
import HelmetWrapper from '../../components/HelmetWrapper';

export const articleCalibrateSSVI = new Article("articles/calibrate-ssvi", "Calibrate Implied Volatility Surface (SSVI) Part 1", "", "calibrate-ssvi", "Tutorials", ["finance"], "2024-07-26")
const notebook = require('./CalibrateSSVIPart1.html').default


export default function CalibrateSSVI() {

  const disqusConfig = {
    url: PAGE_URL,
    identifier: articleCalibrateSSVI.id,
    title: articleCalibrateSSVI.title,
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
