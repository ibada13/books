'use client';

import { FormEvent } from "react";

const GetToken = () => { 
    const getToken = (formData :FormEvent<HTMLFormElement>) => { }
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <form onSubmit={getToken} className="w-2/3 h-1/2 flex flex-col items-center border-2 border-red-500 rounded-lg">
                <h1>
                    insert you auth token here 
                </h1>  
                <input type="text" className="w-1/3"/>
                
                <button type="submit" >
                    submit
                </button>
            </form>
        </div>
    );
}


export default GetToken;