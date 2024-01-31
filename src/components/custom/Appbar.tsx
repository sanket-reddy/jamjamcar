import React from "react";
import { Button } from "../ui/button";
import Router from "next/router";

const Appbar = () => {
  return (
    <div className="flex bg-yellow-500 p-2 justify-between items-center">
      <div>
        <h1 className="text-bold text-2xl font-bold mt-1">JAMJAMCARS</h1>
      </div>
      <div>
        <Button
          onClick={() => {
            Router.push("/login");
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Appbar;
