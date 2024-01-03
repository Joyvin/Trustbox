import Verify from "../_components/Verify";

import { getServerAuthSession } from "~/server/auth";
import { permanentRedirect } from "next/navigation";

export default async function Home() {
  const session = await getServerAuthSession();
  if (session) {
    return (
      <>
        <Verify />
      </>
    );
    // Signed in
  } else {
    // Not Signed in
    permanentRedirect("/");
  }
}