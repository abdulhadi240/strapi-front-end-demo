import React from "react";
import Cards from "./components/Cards";


const Page = async () => {

  const res = await fetch("https://strapi-demo-7o4t.onrender.com/api/articles?populate=*", {
    method: "GET",
    headers: {
      Authorization: `Bearer d7dde2659234a538515133faff162bff85e666f4168a84358a0dd66bd95a280d48ef619ea430dd2131c14868c6efb6392ee028716fe54a265598877c7f2e8277b2aca91437f2d75d6a1c810d4e15e0178ff2c06c2faef89630d9f6f97e7b9c28eb3e8446da9813078170ccf44c03b376f7aa1bb9978381b5419d1ac7dfdb8bd5`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  const data = await res.json();

  return (
    <div>
      <Cards data={data?.data}/>
    </div>
  );
};

export default Page;
