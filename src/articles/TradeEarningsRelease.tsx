import { Grid } from '@mui/material';
import Header from '../Header';
import parse from 'html-react-parser';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { disqusShortname, PAGE_URL } from '../Constants';
import Disqus from "disqus-react"
import { Article } from './Article';

export const articleEarningsRelease =  new Article("articles/TradeEarningsRelease", "Trade Earnings Releases", "", 1, "Tutorials", ["finance"], "2024-01-01")

function getScriptElements(element: React.ReactElement<any, any>): React.ReactElement<any, any>[] {
  const scriptElements: React.ReactElement<any, any>[] = [];

  if (element.props.children !== undefined && Array.isArray(element.props.children)) {
    element.props.children.forEach((child: React.ReactElement<any, any>) => {
      // console.log(typeof child)
      if (typeof child === 'object') {
        if (child.type === "script") {
          scriptElements.push(child);          
          // console.log(child)
          // remove child from parent
          element.props.children.splice(element.props.children.indexOf(child), 1);
        } else {
          getScriptElements(child).forEach(scriptElement => {
            scriptElements.push(scriptElement);
          });
        }
      }

    });
  }

  return scriptElements;
}

const notebookComponent = parse(require('./IVSurfModelCalibration.html').default)

//@ts-ignore
const scriptElements = getScriptElements(notebookComponent)

// const parsed = parse(require('./c.html').default)
// const scriptPlotly = document.createElement('script')
// const scriptPlot = document.createElement('script')
// scriptPlotly.type = "text/javascript"
// scriptPlot.type = "text/javascript"
// if (Array.isArray(parsed)) {
//   scriptPlotly.text = parsed[0].props.dangerouslySetInnerHTML.__html
//   scriptPlot.text = parsed[4].props.dangerouslySetInnerHTML.__html
// }
// const divPlot = Array.isArray(parsed) ? parsed[2] : parsed
// console.log("divPlot")
// console.log(divPlot)

// console.log(scriptElements)
// const docScriptElements: any[] = []//scriptPlotly, scriptPlot];

const helmets: any[] = []
const docScriptElements: any[] = []

scriptElements.forEach((el, i) => {
  var s = document.createElement('script')
  if (el.props.type !== undefined) {
    s.type = el.props.type
  }
  if (el.props.src !== undefined) s.src = el.props.src
  if (el.props.dangerouslySetInnerHTML !== undefined) s.text = el.props.dangerouslySetInnerHTML.__html
  //console.log("scriptElement")
  //console.log(el)
  docScriptElements.push(s);
  // helmets.push(<script type={s.type}>{s.text}</script>)
});
helmets.push(...docScriptElements.map((tag, i) => <script type={tag.type}>{tag.text}</script>))

function TradeEarningsRelease() {

    const disqusConfig = {
      url: PAGE_URL,
      identifier: articleEarningsRelease.id.toString(),
      title: articleEarningsRelease.title,
    }

  return (
    <HelmetProvider>
      <Helmet>
        {helmets.map((el, i) => el)}
      </Helmet>

      <Header />
      <Grid container direction="row" justifyContent="center" alignItems="center" padding={1}>
        <Grid item />
        <Grid item xs={12} sm={12} md={12} lg={11} xl={10}>
          <p>Some Title</p>
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
