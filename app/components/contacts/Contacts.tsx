import React from "react";
import Navbar from "../navbar/Navbar";
import ContactCard from "./ContactCard";

const Contacts = () => {
  const data = [
    {
      title: "La dream team",
      content1: "Patricia : +33 6 09 15 56 12",
      content2: "Hervé : +33 6 45 24 42 20",
    },
    {
      title: "Ksar Rouge Hotel & Spa, Tozeur",
      content1: "Adresse : Route de Nefta, Tozeur 2200, Tunisie",
      content2: "Tél. : +216 76 454 888",
    },
  ];
  return (
    <div>
      <Navbar text="Contacts Utiles" />
      {data.map((item, index) => (
        <ContactCard key={index} {...item} />
      ))}
    </div>
  );
};

export default Contacts;
