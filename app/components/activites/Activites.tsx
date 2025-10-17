"use client";

import Calendar from "@/app/components/icons/Calendar";
import React from "react";
import Navbar from "../navbar/Navbar";

type DayActivites = {
  key: string;
  label: string;
  title: string;
  content: React.ReactNode;
};

const days: DayActivites[] = [
  {
    key: "Quad",
    label: "Quad",
    title: "Randonnée en Quad – Désert & adrénaline",
    content: (
      <>
        <ul className="list-disc space-y-3 py-2 pl-5">
          
 <span>Enfourchez votre quad et filez entre palmeraies, regs et dunes aux portes du Sahara. Briefing express, guidage pro, sensations garanties… et un stop photo sur des panoramas XXL.
  <br></br>
 </span>

       <img
         src="/images/activites/Quad.jpeg"
         alt="Carte de Tunisie"
         width={500}
         height={500}
         className="rounded-lg shadow-lg"
       />
            <span>
<br></br>
<b>Infos pratiques</b>              
<br></br>
<b>Durée :</b> 1h, 2h ou demi-journée
<br></br>
<b>Encadrement</b> professionnel 
<br></br>
<b>Casque</b> fourni
<br></br>
<b>Accès :</b> La base de quad est située à 5 mn à pied de l’hôtel 
<br></br>
<b>À prévoir :</b> tenue confortable, lunettes de soleil 
<br></br>
<b>Réservation avant départ</b>, paiement sur place (euros acceptés)
<br></br>
<b>Tarif :</b> 1h/40 dinars (12€) – 2h/80 dinars (24€) – Demi-journée 200 dinars (60€)
</span>

  
       
        </ul>
      </>
    ),
  },
  {
    key: "Chott",
    label: "Chott el Jerid",
    title: "Découverte du Chott el Jerid",
    content: (
      <>
        <ul className="list-disc space-y-3 py-2 pl-5">
          
 <span>
Immense lac salé aux reflets changeants, le Chott el Jerid offre un spectacle unique au lever ou au coucher du soleil.<br></br>
Entre mirages et jeux de lumière, le désert se transforme en un tableau vivant où ciel et terre se confondent.<br></br>
Un moment magique et poétique, à savourer dans le silence du Sahara.
  <br></br>
 </span>

       <img
         src="/images/activites/Chott.jpeg"
         alt="Carte de Tunisie"
         width={500}
         height={500}
         className="rounded-lg shadow-lg"
       />
            <span>
               
<br></br>
<b>Infos pratiques</b>
<br></br>
<b>Durée :</b> 1h30 à 2h
<br></br>
<b>Accès :</b> Au départ de l’hôtel  
<br></br>
<b>Minimum :</b> 4 personnes
<br></br>
<b>À prévoir :</b> Lunettes de soleil, appareil photo, petite laine (températures fraîches au lever du jour) 
<br></br>
<b>Recommandé :</b> Lever du soleil pour les plus belles lumières
<br></br>
<b>Réservation avant départ</b>, paiement sur place (euros acceptés)
<br></br>
<b>Tarif :</b> 180 dinars (53€)  par 4x4 (6 personnes maximum)
</span>

  
       
        </ul>
      </>
    ),
  },
  {
    key: "Caleche",
    label: "Calèche",
    title: "Découverte de Tozeur en calèche",
    content: (
      <>
        <ul className="list-disc space-y-3 py-2 pl-5">
          
 <span>Balade en calèche à travers la briqueterie (fabrication des briques ocre), la vieille ville aux ruelles géométriques et la palmeraie apaisante. Ambiance authentique, pauses photo et belles anecdotes sur l’artisanat local.
<br></br>
 </span>

       <img
         src="/images/activites/Caleche.jpeg"
         alt="Carte de Tunisie"
         width={500}
         height={500}
         className="rounded-lg shadow-lg"
       />
            <span>
<br></br>
<b>Infos pratiques</b>
<br></br>
<b>Durée :</b> 1h ou 2h
<br></br>
<b>Accès :</b> Au départ de l’hôtel  
<br></br>
<b>Minimum :</b> 4 personnes
<br></br>
<b>Réservation avant départ</b>, paiement sur place (euros acceptés)
<br></br>
<b>Tarif :</b> 1h/20 dinars (6€) – 2h/40 dinars (12€)
</span>

  
       
        </ul>
      </>
    ),
  },
  {
    key: "Oasis",
    label: "Oasis de montagne",
    title: "Découverte de l’Oasis de montagne",
    content: (
      <>
        <ul className="list-disc space-y-3 py-2 pl-5">
          
 <span>
Entre désert et Atlas, explorez Chebika et ses sources, Midès et ses panoramas vertigineux, puis Tamerza, oasis luxuriante aux cascades cristallines. Une immersion entre canyons, palmeraies et villages perchés, avec pauses photo et moment fraîcheur au fil de l’eau.  
  <br></br>
 </span>

       <img
         src="/images/activites/Montagne.jpeg"
         alt="Carte de Tunisie"
         width={500}
         height={500}
         className="rounded-lg shadow-lg"
       />
            <span>
<br></br>
<b>Infos pratiques</b>
<br></br>
<b>Durée :</b> Demi-journée ou journée
<br></br>
<b>Accès :</b> Au départ de l’hôtel  
<br></br>
<b>Minimum :</b> 4 personnes
<br></br>
<b>Tenue :</b> confortable, chaussures fermées antidérapantes, chapeau/lunettes, crème solaire
<br></br>
<b>Réservation avant départ</b>, paiement sur place (euros acceptés)
<br></br>
<b>Tarif :</b> Demi-journée 180 dinars (53€) par 4x4 – Journée 380 dinars (112€)  par 4x4 (6 personnes maximum par 4x4)
</span>

  
       
        </ul>
      </>
    ),
  },
];

const Activites = () => {
  const [activeKey, setActiveKey] = React.useState<string>(days[0].key);
  const activeDay = React.useMemo(
    () => days.find((d) => d.key === activeKey)!,
    [activeKey]
  );

  return (
    <>
      <Navbar text="Activites" />
      <div className="mx-auto md:max-w-4xl">
        <div className="overflow-hidden">
          <div
            role="tablist"
            aria-label="Activites par jour"
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
                  <span className="sm:inline">{day.label}</span>

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

export default Activites;
