import React from "react";
import Cards from "./components/Cards";

const Page = async () => {
  const res = await fetch("https://strapi-demo-7o4t.onrender.com/api/articles?populate=*", {
    method: "GET",
    headers: {
      Authorization: `Bearer 8c091b5bb9f9a99b9bcedf4c4c5ebed7d8430ed667611cc79a59de3ef5b4ff00f173a00c25ec71716cc67b5ed0e52481103235a3d6f7b89e8be4b583671c1b9141f1d47e1484664451fdcbd4f5bbb0a08bec8da9b0c5e37aa892070901f74132fa7320273e4d5302a43d4743791c79d5e725baf33a29ca827c4199de950ba3a3`,
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
    },
    cache: "no-store", // Prevent caching
  });

  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  const data = await res.json();

  return (
    <div>
      <Cards data={data?.data} />
    </div>
  );
};

export default Page;
