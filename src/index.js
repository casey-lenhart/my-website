import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import useGoogleSheets from "use-google-sheets";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Works from "./pages/Works";
import "./index.css";

const Root = () => {
  const { data, loading, error } = useGoogleSheets({
    apiKey: process.env.NODE_ENV === 'development'
      ? process.env.REACT_APP_LOCAL_API_KEY
      : "AIzaSyBTJnfAyzfEUkDx1WCJ-dl_Gi_4-2h-fjY",
    sheetId: "1_wiygUp4ZTrDy5VBjSO3tYVSlTQXBMWd-G1alnulptQ",
  });
  return <div>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home data={data} />} />
          <Route path="about" element={<About data={data} />} />
          <Route path="works" element={<Works data={data} />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
