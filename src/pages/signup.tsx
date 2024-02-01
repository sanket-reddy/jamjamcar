import Appbar from "@/components/custom/Appbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function () {
  const [username, setusername] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [email, setemail] = useState<string>("");

  const handleSignup = async () => {
    try {
      let resp = await axios.post("./api/user/route", {
        username,
        email,
        password,
      });
      resp = resp.data;
      console.log(resp);
    } catch (error) {
      console.log("error has occured", error);
    }
  };

  return (
    <>
      <Appbar />
      <div className="flex mt-10 justify-center items-center">
        <div className="w-1/2 flex-col justify-around ">
          <h1>Fill the detials to Signup</h1>
          <br></br>
          <Input
            placeholder="enter username"
            onChange={(e) => {
              setusername(e.target.value);
            }}
          ></Input>
          <br></br>
          <Input
            placeholder="enter email id"
            type="email"
            onChange={(e) => {
              setemail(e.target.value);
            }}
          ></Input>
          <br></br>
          <Input
            placeholder="enter password"
            type="password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          ></Input>
          <div className="flex justify-center ">
            <div className="flex flex-col  items-center">
              <Button
                className="mt-3 bg-green-700 hover:bg-green-900"
                onClick={handleSignup}
              >
                SignUp
              </Button>
              <p> have an account already ? </p>
              <Link href="login" className="hover:text-red-600">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
