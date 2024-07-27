import { Grid } from '@mui/material';
import Header from '../../Header';
import parse from 'html-react-parser';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { disqusShortname, PAGE_URL } from '../../Constants';
import Disqus from "disqus-react"
import { Article } from '../Article';
import { getScriptElements } from '../../helper';
import { MathJaxProvider, MathJaxHtml } from 'mathjax3-react';

export const articleCalibrateSSVI = new Article("articles/calibrate-ssvi", "Calibrate Implied Volatility Surface (SSVI)", "", 4, "Tutorials", ["finance"], "2024-07-26")
const notebookComponentStr = require('./CalibrateSSVI.html').default

const helmets: any[] = []
//@ts-ignore
const scriptElements = getScriptElements(parse(notebookComponentStr))
scriptElements.forEach((el, i) => {
  var s = document.createElement('script')
  if (el.props.type !== undefined) {
    s.type = el.props.type
  }
  if (el.props.src !== undefined) s.src = el.props.src
  if (el.props.dangerouslySetInnerHTML !== undefined) s.text = el.props.dangerouslySetInnerHTML.__html
  helmets.push(<script type={s.type} key={`calibrate${i}`}>{s.text}</script>);
});

export default function CalibrateSSVI() {

  const disqusConfig = {
    url: PAGE_URL,
    identifier: articleCalibrateSSVI.id.toString(),
    title: articleCalibrateSSVI.title,
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
          <MathJaxProvider options={{
            tex: {
              inlineMath: [
                ['$', '$'],
              ],
            },
            displayAlign: 'right',
            displayIndent: '5em'
          }}>
            <MathJaxHtml html={notebookComponentStr} />
          </MathJaxProvider>
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
