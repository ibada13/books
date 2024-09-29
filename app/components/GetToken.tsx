'use client';

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const GetToken = () => { 
    const router = useRouter();
    const [Token, SetToken] = useState<string>("");
    const [Error, SetError] = useState<string | null>();
    const getToken = (formData: FormEvent<HTMLFormElement>) => { 
        formData.preventDefault()
        console.log(Token)
        if (Token?.length === 0) { 
            SetError("invalid token ");   
            return;
        }
        localStorage.setItem("token", Token);
        SetError(null);
        router.push("/")

    }
    return (
        <div className="w-screen h-screen flex justify-center items-center dark:bg-dbg">
            <div className="w-2/3 h-2/5 flex flex-col items-center rounded-lg shadow-lg dark:bg-dsbg ">
                <h1 className="text-center flex-grow flex justify-center items-center text-4xl dark:text-dp uppercase">
                    insert you auth token here 
                </h1>  
            <form onSubmit={getToken} className="p-2  w-3/4 flex justify-around items-center flex-grow ">
                    <input type="text" className="text-dt p-2 w-2/3 outline-none rounded-md border-2 border-ds dark:focus:border-2 dark:focus:border-da
                    bg-dbg 
                    transition-all duration-300
                "
                        name="token"
                        onChange={(e)=>SetToken(e.target.value)}
                    />
                
                <button type="submit" className="p-2 dark:text-dbg dark:bg-dp dark:hover:bg-da dark:hover:shadow-lg dark:hover:shadow-dp transition-all duration-500 rounded-md uppercase ">
                    submit
                    </button>
            </form>
                    <p className="text-lg dark:text-da">{ Error??Error}</p>
            </div>
        </div>
    );
}

//https://www.realtimecolors.com/?colors=f4ecee-180a0e-e497ac-931538-f40f4e&fonts=Inter-Inter
export default GetToken;