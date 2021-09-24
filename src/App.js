import React from "react";
import "./App.css";
import axios from "axios"
import { HomePage } from "./containers/HomePage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CustomerAccessPage } from "./containers/customerAccessPage";

function App() {
  React.useEffect(() => {
    var config = {
      method: 'get',
      url: 'http://localhost:8000/login',
      headers: {
        'Cookie': '_auth_verification=%7B%22nonce%22%3A%22x-MH0hhNmCfCI8qAqSuQLVssCs0fT-upRKz2lc9XTTw%22%2C%22state%22%3A%22eyJyZXR1cm5UbyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCJ9%22%7D.01uS9vkBOfQgbPswz0YmxFETzoa4lg3JMYf7DyrYySU'
      }
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  })




  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/customer/access/:action"
            exact
            component={CustomerAccessPage}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
