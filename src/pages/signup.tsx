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
          <Input placeholder="enter password"></Input>
          <div className="flex justify-center">
            <div>
              <Button className="mt-3 ml-4 bg-green-700">Signup</Button>
              <p>
                new here{" "}
                <Link href="login" className="hover:text-red-500">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
