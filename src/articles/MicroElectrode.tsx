import { Grid } from '@mui/material';
import Header from '../Header';
import { Article } from './Article';
import { EmbedPDF } from "@simplepdf/react-embed-pdf";
import { microelectrodeUrl } from '../Constants';

export const articleMicroElectrode = new Article(
  "articles/micro-electrode",
  "(2013) - Micro Electrode for current and energy control of nanotip field electron emitters",
  "",
  1,
  "Science", ["science"],
  "2024-01-01"
)


function MicroElectrode() {
  return (
    <>
      <Header />

      <p>Open in a separate tab <a target='blank' href={microelectrodeUrl}>here</a>. The in browser viewer is down.</p>

      <Grid container direction="row" justifyContent="center" alignItems="center" padding={1}>
        <Grid item />
        <Grid item xs={12} sm={12} md={12} lg={11} xl={10}>
          <EmbedPDF
          mode="inline"
          style={{ width: '100%', height: 1800 }}
          documentURL={microelectrodeUrl}
        />
        </Grid>
        <Grid item />
      </Grid>
    </>
  );
}

export default MicroElectrode;
