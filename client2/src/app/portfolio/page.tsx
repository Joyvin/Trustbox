import { getServerAuthSession } from "~/server/auth";
import { permanentRedirect } from "next/navigation";
import Portfolio from "../_components/Portfolio";
import Navbar from "../_components/Navbar";

export default async function Home() {
  const session = await getServerAuthSession();
  if (session) {
    return (
      <>
      <Navbar/>
        <Portfolio />
      </>
    );
    // Signed in
  } else {
    // Not Signed in
    permanentRedirect("/");
  }
}