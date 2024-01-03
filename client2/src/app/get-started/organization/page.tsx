import React from "react";
import { Building, User } from "lucide-react";

export default function Page() {
  return (
    <div className="flex justify-around p-10">
      <div className="flex w-1/3 flex-col items-center justify-center rounded-xl bg-blue-200 p-10">
        <Building size={48} />
        <h2 className="mt-4 text-2xl font-bold">Organization</h2>
      </div>
      <div className="flex w-1/3 flex-col items-center justify-center rounded-xl bg-green-200 p-10">
        <User size={48} />
        <h2 className="mt-4 text-2xl font-bold">Personal</h2>
      </div>
    </div>
  );
}
