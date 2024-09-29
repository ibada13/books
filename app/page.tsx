'use client';
import Image from "next/image";
import GetToken from "./components/GetToken";
import withAuth from "./auth/Auth";
const  Home=()=> {
  const token = localStorage.getItem("token");
  return (
    <div className="w-full h-full">

    welcome hoome
    </div>
  );
}
export default withAuth(Home)
