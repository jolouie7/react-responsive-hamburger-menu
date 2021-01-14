import GlobalStyle from "./globalStyles"
import { Navbar } from "./components"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/"/>
      </Switch>
    </Router>
  );
}

export default App;
