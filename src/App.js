import React from 'react';
import 'bootswatch/dist/slate/bootstrap.min.css'
/*import "~bootswatch/dist/slate/variables";
import "~bootstrap/scss/bootstrap";
import "~bootswatch/dist/slate/bootswatch";*/
import './App.scss';
import Layout from "./containers/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";

function App() {
  return(
      <Layout>
          <Quiz />
      </Layout>
  )
}

export default App;
