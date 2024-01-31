import Appbar from "@/components/custom/Appbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function () {
  return (
    <>
      <Appbar />
      <div className="flex mt-10 justify-center items-center">
        <div className="w-1/2 flex-col justify-around ">
          <h1>Fill the detials to Login</h1>
          <br></br>
          <Input placeholder="enter username"></Input>
          <br></br>
          <Input placeholder="enter password"></Input>
          <Button className="mt-3 bg-green-700">LOGIN</Button>
        </div>
      </div>
    </>
  );
}
