"use client";

import Calendar from "@/app/components/icons/Calendar";
import React from "react";
import Navbar from "../navbar/Navbar";

type DayProgramme = {
  key: string;
  label: string;
  title: string;
  content: React.ReactNode;
};

const days: DayProgramme[] = [
  {
    key: "2025-10-24",
    label: "Vendredi 24 octobre",
    title: "Vendredi 24 octobre : Bienvenue à Tozeur !",
    content: (
      <>
        <ul className="list-disc space-y-3 py-2 pl-5">
          <li className="space-x-2">
            <b>09h05 :</b>
            <span>Arrivée à Tozeur, accueil et assistance.</span>
          </li>
          <li className="space-x-2">
            <span>Transfert à l’hôtel.</span>
          </li>
          <li className="space-x-2">
            <span>Check-in et matinée libre à l’hôtel Ksar Rouge.</span>
          </li>          
          <li className="space-x-2">
            <b>À partir de 12h00 :</b>
            <span>Déjeuner buffet à l’hôtel. 
              <br></br><i>NB : le déjeuner est pris en charge, ainsi que les  boissons : 
              1/2 bouteille de vin, 1/2 bouteille d’eau et thé à la menthe par personne.</i></span>
          </li>
          <li className="space-x-2">
            <span>Temps libre à l’hôtel.</span>
          </li>          
          <li className="space-x-2">
            <span>
            <b>À partir de 20h00 : </b> Dîner buffet à l’hôtel
              <br></br><i>NB : le dîner est pris en charge, ainsi que les  boissons : 
                1/2 bouteille de vin, 1/2 bouteille d’eau et thé à la menthe par personne.</i>    
            </span>
          </li>
          <li className="space-x-2">
            <span>Nuit à l’hôtel Ksar Rouge.</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    key: "2025-10-25",
    label: "Samedi 25 octobre",
    title: "Samedi 25 octobre : Journée au grès de vos envies !",
    content: (
      <>
        <ul className="list-disc space-y-3 py-2 pl-5">
          <li className="space-x-2">
            <b>À partir de 07h00 :</b> 
            <span>Petit-déjeuner à l’hôtel.</span>
          </li>      
          <li className="space-x-2">
            <span>Journée libre, activités à la carte pour ceux qui le souhaitent (voir la rubrique « Activités ») :
          <br></br>
          Visite du Chott el Jerid
          <br></br> 
          Randonnée en quad 
          <br></br>
          Visite de l’Oasis de montagne 
          <br></br>
          Découverte de Tozeur en calèche
          <br></br><i>NB : Les activités doivent être réservées avant le départ. Paiement sur place, euros acceptés.
</i></span>
          </li>
          <li className="space-x-2">
            <span>Déjeuner libre.
              <br></br><i>NB : Le déjeuner est à votre charge, il y a de nombreux restaurants dans la 
                Medina, où l’on mange très bien et à des prix raisonnables, comptez maximum 10€.</i>               
            </span>
          </li>          
          <li className="space-x-2">
            <span>
            <b>À partir de 20h00 : </b> Diner buffet à l’hôtel 
              <br></br><i>NB : Le dîner est pris en charge, ainsi que les  boissons : 
                1/2 bouteille de vin, 1/2 bouteille d’eau et thé à la menthe par personne.</i>    
            </span>
          </li>
          <li className="space-x-2">
            <span>Nuit à l’hôtel Ksar Rouge.</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    key: "2025-10-26",
    label: "Dimanche 26 octobre",
    title: "Dimanche 26 octobre : Patou Birthday party !",
    content: (
      <>
        <ul className="list-disc space-y-3 py-2 pl-5">
          <li className="space-x-2">
            <b>À partir de 07h00 :</b> 
            <span>Petit-déjeuner à l’hôtel.</span>
          </li>      
          <li className="space-x-2">
            <span>Matinée libre, activités à la carte pour ceux qui le souhaitent (voir la rubrique « Activités ») :
          <br></br>
          Visite du Chott el Jerid
          <br></br> 
          Randonnée en quad 
          <br></br>
          Visite de l’Oasis de montagne 
          <br></br>
          Découverte de Tozeur en calèche
          <br></br><i>NB : Les activités doivent être réservées avant le départ. Paiement sur place, euros acceptés.
</i></span>
          </li>
          <li className="space-x-2">
            <span>Déjeuner libre.
              <br></br><i>NB : Le déjeuner est à votre charge, il y a de nombreux restaurants dans la 
                Medina, où l’on mange très bien et à des prix raisonnables, comptez maximum 10€.</i>               
            </span>
          </li>          
          <li className="space-x-2">
            <span>
            <b>16h00 : </b> Départ en 4x4 pour la soirée avec un arrêt surprise. 
              <br></br><i>NB : Dress code « chic & roots ». 
                Prévoyez une veste ou un pull, la soirée peut-être fraiche.</i>    
            </span>
          </li>
          <li className="space-x-2">
            <span>
          <b>20h00 : </b> Diner et soirée dansante dans un cadre féérique.               
            </span>
          </li>  
          <li className="space-x-2">
            <span>
          <b>02h00 : </b> Transfert retour à l’hôtel.               
            </span>
          </li>                   
          <li className="space-x-2">
            <span>Nuit à l’hôtel Ksar Rouge.</span>
          </li>
        </ul>
      </>
    ),
  },
  {
    key: "2025-10-27",
    label: "Lundi 27 octobre",
    title: "Lundi 27 octobre : Patou  we love you !",
    content: (
      <>
        <ul className="list-disc space-y-3 py-2 pl-5">
          <li className="space-x-2">
            <b>À partir de 07h00 :</b> 
            <span>Petit-déjeuner à l’hôtel.</span>
          </li>      
          <li className="space-x-2">
            <b>08h30 :</b> 
            <span>Libération des chambres, règlement des éventuels extras et remise des clés à la réception.</span>
          </li> 
          <li className="space-x-2">
            <b>09h00 :</b> 
            <span>Transfert vers l’aéroport.</span>
          </li> 
          <li className="space-x-2">
            <b>11h45 :</b> 
            <span>Envol pour Paris.</span>
          </li> 
          <li className="space-x-2">
            <b>14h40 :</b> 
            <span>Arrivée à Paris-Orly.</span>
          </li>                               
        </ul>
      </>
    ),
  },
];

const Programme = () => {
  const [activeKey, setActiveKey] = React.useState<string>(days[0].key);
  const activeDay = React.useMemo(
    () => days.find((d) => d.key === activeKey)!,
    [activeKey]
  );

  return (
    <>
      <Navbar text="PROGRAMME" />
      <div className="mx-auto md:max-w-4xl">
        <div className="overflow-hidden">
          <div
            role="tablist"
            aria-label="Programme par jour"
            className="grid grid-cols-3 "
          >
            {days.map((day) => {
              const selected = day.key === activeKey;
              return (
                <button
                  key={day.key}
                  role="tab"
                  aria-selected={selected}
                  className={`border border-white text-xs sm:text-sm md:text-base px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-center transition-colors whitespace-nowrap ${
                    selected
                      ? "bg-[#6B7280] text-white font-semibold"
                      : "bg-[#D1D5DB] hover:bg-gray-300"
                  }`}
                  onClick={() => setActiveKey(day.key)}
                >
                  <span className="hidden sm:inline">{day.label}</span>
                  <span className="sm:hidden">
                    {day.label.split(" ")[1]} {day.label.split(" ")[2]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="mt-4 sm:mt-6 mx-2 sm:mx-4">
          <p className="text-[#6A9360] mt-2 text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
            {activeDay.title}
          </p>
          <div className="text-sm sm:text-base">{activeDay.content}</div>
        </div>
      </div>
    </>
  );
};

export default Programme;
