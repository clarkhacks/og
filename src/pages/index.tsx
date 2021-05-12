import { NextPage } from "next";
import React from "react";
import "twin.macro";

const Home: NextPage = () => {
  return (
    <main tw="px-6 max-w-6xl w-full mx-auto">
      <header tw="text-center mt-20 mb-12 space-y-4">
        <h1 tw="text-4xl font-bold">Railway OG Image Generator</h1>
      </header>

      <section tw="grid gap-4 grid-cols-1 md:grid-cols-3">
        <Config />
        <OGImage />
      </section>
    </main>
  );
};

export default Home;

export const Config: React.FC = () => {
  return <div tw="bg-pink-100">CONFIG</div>;
};

export const OGImage: React.FC = () => {
  return (
    <div className="image-wrapper" tw="col-span-2">
      <img
        tw="shadow-lg w-full"
        src="https://og-image.vercel.app/**Hello**%20World.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg"
        alt=""
      />
    </div>
  );
};
