import AppBar from "@/components/Appbar";
import { useSession } from "next-auth/react";
function Home() {
  const { data, status } = useSession();
  if (status === "authenticated") {
    return;
  }
  return (
    <>
      <main className="text-center">This home page</main>
    </>
  );
}

export default Home;
