import { Grid } from '@mui/material';
import Header from '../../Header';
import { Article } from '../Article';
import { ssviStreamlitUrl } from '../../Constants';

export const articleSSVIStreamlit = new Article(
  "articles/ssvi-streamlit", 
  "Feeling model parameters for Implied Volatility Surface (SSVI)", 
  "", 
  "ssvi-streamlit", 
  "Tutorials", 
  ["finance"], 
  "2024-08-16"
)

function SSVIStreamlit() {

  return (
    <>
      <Header />

      <p>Can view embedded frame directly at streamlit <a target='blank' href={ssviStreamlitUrl}>here</a>.</p>

      <Grid container direction="row" justifyContent="center" alignItems="center" padding={1}>
        <Grid item />
        <Grid item xs={12} sm={12} md={12} lg={11} xl={10}>
        
        <iframe src="https://research-emcwzdbrbg4cfk4nunpkpd.streamlit.app/?embed=true" title="SSVI Streamlit" width="100%" height="2000px" style={{border: 0}}></iframe>

        </Grid>
        <Grid item />
      </Grid>
    </>
  );
}

export default SSVIStreamlit;
