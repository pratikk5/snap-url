"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation"
// import clientPromise from "@/lib/mongodb"


export default function Page({ params }) {
    const shorturl = params.shorturl;

    useEffect(() => {
        const doc = localStorage.getItem(shorturl);
        if(doc){
             window.location.href = doc;
        }
        else{
            window.location.href = `${window.location.origin}`;
        }
    }, [shorturl]);

    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }