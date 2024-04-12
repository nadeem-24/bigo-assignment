"use client";
import Link from "next/link";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export default function Home({ children }) {
  // Initialze the client
  const [client] = useState(new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <div className="p-5 flex-row">
        <div className="w-1/12  flex justify-center items-center mb-3 bg-blue-500 hover:bg-blue-700 text-white font-bold  rounded">
          <Link className="py-2 px-4" href="/personal-info">
            Question 1
          </Link>
        </div>
        <div className=" w-1/12 flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
          <Link className=" py-2 px-4" href="/products">
            Question 2
          </Link>
        </div>
      </div>
      {children}
    </QueryClientProvider>
  );
}
