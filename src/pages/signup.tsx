import Appbar from "@/components/custom/Appbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function () {
  return (
    <>
      <Appbar />
      <div className="flex mt-10 justify-center items-center">
        <div className="w-1/2 flex-col justify-around ">
          <h1>Fill the detials to Signup</h1>
          <br></br>
          <Input placeholder="enter username"></Input>
          <br></br>
          <Input placeholder="enter password" type="password"></Input>
          <div className="flex justify-center ">
            <div className="flex flex-col  items-center">
              <Button className="mt-3 bg-green-700 hover:bg-green-900">
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
