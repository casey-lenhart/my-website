import { Link, Outlet } from 'react-router-dom';
import useGoogleSheets from 'use-google-sheets'
import Header from './components/Header';

const App = () => {

  const { data, loading, error } = useGoogleSheets({
    apiKey: 'AIzaSyDnZ4bFfMlvV4VBL9RKsQJ2LdVXht4vLKY',
    sheetId: '1_wiygUp4ZTrDy5VBjSO3tYVSlTQXBMWd-G1alnulptQ',
  });

  return <>
      <Header />
      <Outlet></Outlet>
      <pre>
        {JSON.stringify(data, null, 2)}<br/>
        {JSON.stringify(loading, null, 2)}<br/>
        {JSON.stringify(error, null, 2)}<br/>
      </pre>
    </>
}

export default App;
