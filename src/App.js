import './App.css';
import Hero from './components/hero/Hero';
import CategoryPage from './components/category/CategoryPage';
import Woman from './components/woman/Woman';
import USP from './components/usp/USP';
import Video from './components/video/Video';
import Footer from './components/footer/Footer';
import Topbar from './components/topbar/Topbar';
function App() {
  return (
    <div className="App">
      <Topbar/>
      <Hero/>
      <CategoryPage/>
      <Woman/>
      <USP/>
      <Video/>
      <Footer/>
    </div>
  );
}

export default App;
