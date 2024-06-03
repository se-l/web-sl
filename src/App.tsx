import './App.css';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import HomePage from './HomePage';
import TradeEarningsRelease from './articles/TradeEarningsRelease';
import Resources from './articles/Resources';
import MicroElectrode from './articles/MicroElectrode';
import { useEffect, useState } from 'react';

function App() {
  return (
    <BrowserRouter>    
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/trade-earnings-release" element={<TradeEarningsRelease />} />
        <Route path="/articles/resources" element={<Resources />} />
        <Route path="/articles/micro-electrode" element={<MicroElectrode />} />
        <Route path="/figures/:path" element={<ServePublicFile  />} />
      </Routes>
    </BrowserRouter>   
  );
}

function ServePublicFile() {
  let params = useParams();
  const filePath = `${process.env.PUBLIC_URL}/figures/${params.path}`;
  console.log(filePath);

  // Serve the file from the public folder
  return <FileComponent file={filePath} />;
}


interface FileComponentProps {
  file: string;
}

const FileComponent: React.FC<FileComponentProps> = ({ file }) => {
  const [fileContent, setFileContent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFile() {
      try {
        const response = await fetch(file);
        if (!response.ok) {
          throw new Error(`Failed to fetch file: ${response.status}`);
        }
        const content = await response.text();
        setFileContent(content);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      }
    }

    fetchFile();
  }, [file]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!fileContent) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <pre>{fileContent}</pre>
    </div>
  );
};

export default App;
