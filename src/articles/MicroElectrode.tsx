import { Grid } from '@mui/material';
import Header from '../Header';
import { Article } from './Article';
import { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';

import { microelectrodeUrl } from '../Constants';

export const articleMicroElectrode = new Article(
  "articles/micro-electrode",
  "Micro Electrode for current and energy control of nanotip field electron emitters",
  "My master thesis at the Max Planck Institute in Berlin. Best time of my university years.",
  "me",
  "Science",
  ["science"],
  "2013", 
  "",
  MicroElectrode,
)

console.log(`pdfjs.version: ${pdfjs.version}`);
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


function MicroElectrode() {
  const [numPages, setNumPages] = useState<number>();

  return (
    <>
      <Header />

      <p>The pdf is rendered best in your browser's PDF viewer, click <a target='blank' href={microelectrodeUrl}>here</a>.</p>

      <Grid container direction="row" justifyContent="center" alignItems="center" padding={1}>
        <Grid item />
        <Grid item xs={12} sm={12} md={12} lg={11} xl={10}>
        <Document
          file={microelectrodeUrl}
          onLoadSuccess={({ numPages })=>setNumPages(numPages)}
      >
          {Array.apply(null, Array(numPages))
          .map((x, i)=>i+1)
          .map(page => <Page key={page} pageNumber={page}/>)}
      </Document>

        </Grid>
        <Grid item />
      </Grid>
    </>
  );
}
