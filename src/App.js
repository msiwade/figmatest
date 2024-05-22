import { ThemeProvider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";

import {
  studioTheme,
  Header,
  RequestForm,
  ListTitle,
  ListDetail,
  MenuBar,
} from "./ui-components";
import { Children } from "react";

function App() {
  function listbom() {
    const bom = [];
    bom.push(<ListTitle />);
    bom.push(<ListDetail />);
    return bom;
  }

  return (
    <ThemeProvider theme={studioTheme}>
      <Header width={"100%"} />

      <RequestForm
        width={"100%"}
        menuSlot={<MenuBar />}
        tableSlot={listbom()}
      />
    </ThemeProvider>
  );
}

export default App;
