import ClientComponent from "~/components/ClientComponent";
import ServerComponent from "~/components/ServerComponent";
import { ModeToggle } from "~/components/mode-toggle";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen gap-y-5">
      <h1 className="font-bold text-xl">Welcome motherfucker.</h1>
      <ClientComponent />
      <ServerComponent />
      <ModeToggle></ModeToggle>
    </main>
  );
}
