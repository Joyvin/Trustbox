import Navbar from "../_components/Navbar";
import Verify from "../_components/Verify";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <Navbar />
      <div className="flex w-full flex-col items-center  justify-center text-center">
        <h2 className="pb-20 pt-8 text-5xl font-bold ">
          Successfully saved Template!
        </h2>
        <Link
          className="rounded-lg border-2 border-double border-blue-800 bg-blue-300 p-6  text-4xl font-bold "
          href="/assign-certificates"
        >
          Assign Certificates
        </Link>
      </div>
    </>
  );
}
