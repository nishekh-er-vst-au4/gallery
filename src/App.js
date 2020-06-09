import React from "react";
import Tab1 from "./components/tab1";
import Tab2 from "./components/tab2";
import "./App.css";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function App() {
  return (
    <div>
      <h4 className=" mt-2 text-center header">Gallery</h4>
      <Tabs>
        <TabList>
          <Tab>Image-Grid1</Tab>
          <Tab>Image-Grid2</Tab>
        </TabList>

        <TabPanel>
          <Tab1 />
        </TabPanel>
        <TabPanel>
          <Tab2 />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
