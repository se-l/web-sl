import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import { ArticleList } from './articles/ArticleList';

function App() {
  return (
    <BrowserRouter>    
      <Routes>
        <Route path="/" element={<HomePage />} />
        {ArticleList.map((article, i) => 
          <Route key={i} path={`/${article.route}`} element={<article.postComponent />} />
        )}
      </Routes>
    </BrowserRouter>   
  );
}


export default App;
