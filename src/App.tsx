import { Routes, Route, NavLink } from 'react-router-dom';
import WidgetPage from './pages/WidgetPage';
// import SettingsPage from './pages/SettingsPage';
// import PreviewPage from './pages/PreviewPage';
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";
import ToggleThemeUI from './components/ThemeToggleUI';
import './style/theme.css';


const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  return (
    <div className={`min-vh-100 theme-${theme}}`}>
      <div className=" py-4">
        {children}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <ThemeProvider>
        <Layout>
          <nav className="navbar navbar-expand navbar-light bg-light px-4 mb-3 container">
            <a className="navbar-brand" href="#">Widget Hub</a>
            <div className="navbar-nav">
              <NavLink to="/widgets" className="nav-link">Widgets</NavLink>
              <NavLink to="/settings" className="nav-link">Settings</NavLink>
              <NavLink to="/preview" className="nav-link">Preview</NavLink>
            </div>

            <div className="ml-auto">
              <ToggleThemeUI />
            </div>
       

          </nav>
          <div className="container">
            <Routes>
              <Route path="/widgets" element={<WidgetPage />} />
              {/* <Route path="/settings" element={<SettingsPage />} />
              <Route path="/preview" element={<PreviewPage />} /> */}
              <Route path="*" element={<p>請選擇一個頁面</p>} />
            </Routes>
            <WidgetPage />
          </div>

        </Layout>

      </ThemeProvider>

    </>
  );
}

