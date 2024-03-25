import { Grid } from '@mui/material';
import Header from '../Header';
import { Article } from './Article';
import { pdfjs } from 'react-pdf';
import { Viewer } from '@react-pdf-viewer/core';
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export const articleMicroElectrode = new Article(
  "articles/micro-electrode",
  "(2013) - Micro Electrode for current and energy control of nanotip field electron emitters",
  "",
  1,
  "Science", ["science"],
  "2024-01-01"
)

const pdf = require('../assets/microelectrode.pdf');

function MicroElectrode() {
  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <>
      <Header />      
      <Grid container direction="row" justifyContent="center" alignItems="center" padding={1}>
        <Grid item />
        <Grid item xs={12} sm={12} md={12} lg={11} xl={10}>
          <Viewer
          fileUrl={pdf}
          plugins={[defaultLayoutPluginInstance]}
        />
        </Grid>
        <Grid item />
      </Grid>
    </>
  );
}

export default MicroElectrode;
