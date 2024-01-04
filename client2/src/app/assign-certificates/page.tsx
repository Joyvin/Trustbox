import { getServerAuthSession } from "~/server/auth";
import { permanentRedirect } from "next/navigation";
import Assign from "../_components/Assign";
import Navbar from "../_components/Navbar";

export default async function Home() {
  const session = await getServerAuthSession();
  if (session) {
    return (
      <>
      <Navbar/>
        <Assign />
      </>
    );
    // Signed in
  } else {
    // Not Signed in
    permanentRedirect("/");
  }
}
