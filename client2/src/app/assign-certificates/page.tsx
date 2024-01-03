import { getServerAuthSession } from "~/server/auth";
import { permanentRedirect } from "next/navigation";
import Assign from "../_components/Assign";

export default async function Home() {
  const session = await getServerAuthSession();
  if (session) {
    return (
      <>
        <Assign />
      </>
    );
    // Signed in
  } else {
    // Not Signed in
    permanentRedirect("/");
  }
}