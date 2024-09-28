'use client';
import Image from "next/image";
import GetToken from "./components/GetToken";
export default function Home() {
  const token = localStorage.getItem("token");
  return (
    <div className="w-full h-full">

    {token ?

<h1 className="uppercase text-center text-4xl text-red-500">welcome to home you have the token</h1>
      :
      <GetToken />
    }
    </div>
  );
}
