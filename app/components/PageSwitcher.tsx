import React from "react";
import Programme from "./programme/Programme";
import Trombinoscope from "./trombinoscope/Trombinoscope";
import Activites from "./activites/Activites";
import CarteComponent from "./workshop/WorkshopComponent";
import Contacts from "./contacts/Contacts";
import ImagesDeSéjour from "./ImagesDeSéjour/ImagesDeSéjour";

interface PageName {
  name: string;
}

const PageSwitcher: React.FC<PageName> = ({ name }) => {
  return (
    <div className="md:mx-auto md:max-w-4xl pb-[100px]">
      {/* <Programme/> */}

      {name == "programmes" ? <Programme /> : ""}

      {name == "Images du séjour" ? <ImagesDeSéjour /> : ""}
      {name == "Contacts utiles" ? <Contacts /> : ""}

      {name == "activites" ? <Activites /> : ""}
      {name == "trombinoscope" ? <Trombinoscope /> : ""}
      {name == "Carte" ? <CarteComponent /> : ""}
    </div>
  );
};

export default PageSwitcher;
