import React from "react";
import { Fragment } from "react";
import {
  DescriptionPage,
  IphoneItems,
  ContactUs,
  SamsungItems,
} from "../components/items";
import About from "./About";
import Brands from "../components/brands/brands";
import Offer from "../components/offer/offer";

function HomePage() {
  return (
    <Fragment>
      <DescriptionPage />
      <Brands />
      <Offer />
      <ContactUs />
      <About />
    </Fragment>
  );
}

export default HomePage;
