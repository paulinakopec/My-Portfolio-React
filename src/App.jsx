import Skills from './components/skills/Skills';
import Intro from './components/intro/Intro';
import ProductList from './components/productList/ProductList';
import Contact from './components/contact/Contact';
import Toggle from './components/toggle/Toggle';
import { ThemeContext } from './context';
import { useContext } from 'react';
import Topbar from './components/topbar/Topbar';

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white"}}>
      <Topbar></Topbar>
      <Toggle></Toggle>
      <Intro></Intro>
      <Skills></Skills>
      <ProductList></ProductList>
      <Contact></Contact>
    </div>
  );
};

export default App;
