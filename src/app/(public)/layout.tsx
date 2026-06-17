import { getAuthToken } from "@/lib/auth.server";
import { redirect } from "next/navigation";

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const token = await getAuthToken();

  if (token) {
    redirect("/chapters");
  }

  return <>{children}</>;
}