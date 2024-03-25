import { Articles } from './articles/Articles';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';

const handlePublicDownload = () => {
  const fileUrl = process.env.PUBLIC_URL + '/microelectrode.pdf';
  window.open(fileUrl, '_blank');
  return false;
};

function HomeNavigation() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" padding={1}>
      <Grid item xs={12} sm={12} md={12} lg={11} xl={10}>
        <p>Sharing few notes, notebooks and resources - work related.</p>
        <ul>
          {Articles.map(article => (
            <li key={article.id}>
              <Link to={article.route}>
                <h4>{article.title}</h4>
              </Link>
            </li>
          ))}

          <li><h4>
            <a href="#" content-disposition="attachment" content-type="application/pdf" data-content-type="application/pdf" onClick={handlePublicDownload}>
            (2013) - Micro Electrode for current and energy control of nanotip field electron emitters
          </a></h4>
          </li>
        </ul>
      </Grid>
    </Grid>
  );
}

export default HomeNavigation;