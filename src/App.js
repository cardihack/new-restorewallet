import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; // import { createBrowserHistory } from "history";
import { createBrowserHistory } from "history";
import { Header } from "views/Header";
import ImportForm from "views/importForm/ImportForm";
import { WalletPage } from "./views/walletApps/WalletPage";

const hist = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={hist}>
        <Switch>
          {/* <Route exact path="/" render={(props) => <Header {...props} />} /> */}
          <Route exact path="/">
            <Header />
          </Route>
          <Route path="/wallet">
            <WalletPage />
          </Route>
          <Route path="/wallets">
            <ImportForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
