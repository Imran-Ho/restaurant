import { Helmet } from "react-helmet-async";
import Cover from "../Cover/Cover";
import orderImg from "../../assets/pictures/01.jpg";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../hook/useMenu";

import TabItems from "../../Shared/TabItems/TabItems";
import { useParams } from "react-router-dom";

const Order = () => {
  //   const categories = ["salad", "pizza", "dessert", "soup", "drinks"];
  const categories = ["salad", "pizza", "dessert", "soup"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  //   console.log(category);
  const [itemIndex, setItemIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <>
      <Helmet>
        <title>Simple Restaurent | Order </title>
      </Helmet>
      <Cover img={orderImg} title="Order Food"></Cover>
      <div>
        <Tabs
          defaultIndex={itemIndex}
          onSelect={(index) => setItemIndex(index)}
        >
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Dessert</Tab>
            <Tab>Soup</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          {/* used shared components for showing data. */}
          <TabPanel>
            <div>
              <TabItems items={salad}></TabItems>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <TabItems items={pizza}></TabItems>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <TabItems items={desserts}></TabItems>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <TabItems items={soup}></TabItems>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <TabItems items={drinks}></TabItems>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default Order;
