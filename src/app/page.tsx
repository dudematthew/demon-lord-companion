
import ClientComponent from "~/components/ClientComponent";
import ServerComponent from "~/components/ServerComponent";
import { ModeToggle } from "~/components/ui/mode-toggle";
import { Button } from "~/components/ui/button";
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { getServerSession } from "next-auth";
import { auth, authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen gap-y-5">
      {/* <h1 className="font-bold text-xl">Welcome {session?.user?.name ?? 'Guest'}.</h1> */}
      <code>{JSON.stringify(session)}</code>
      <ClientComponent/>
      <ServerComponent />
      <ModeToggle />
    </main>
  );
}