import React from "react";
import { Footer } from "./Footer";
import { HeroBannerPage } from "./HeroBannerPage";
import NavBar from "./NavBar";
import { RelateQs } from "./RelateQs";

export const Header = () => {
  return (
    <div>
      <NavBar />
      <HeroBannerPage />
      <RelateQs />
      <Footer />
    </div>
  );
};
