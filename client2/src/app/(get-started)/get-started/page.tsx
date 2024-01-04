import React from "react";
import { Building, User } from "lucide-react";
import Link from "next/link";

export default async function Page() {
  return (
    <div className="flex justify-around p-10">
      <div className="flex w-1/3 flex-col items-center justify-center rounded-xl bg-blue-200 p-10">
        <Link href="/get-started/organization">
          <Building size={48} />

          <h2 className="mt-4 text-2xl font-bold">Organization</h2>
        </Link>
      </div>
      <div className="flex w-1/3 flex-col items-center justify-center rounded-xl bg-green-200 p-10">
        <Link href="/">
          <User size={48} />

          <h2 className="mt-4 text-2xl font-bold">Personal</h2>
        </Link>
      </div>
    </div>
  );
}
