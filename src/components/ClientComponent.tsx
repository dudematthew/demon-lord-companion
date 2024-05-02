"use client";

import { trpc } from "~/app/_trpc/client";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

export default function ClientComponent() {
  const [helloResult] = trpc.useQueries((t) => [
    t.getHello(),
  ]);

  return (
    <div className="flex flex-row justify-center w-full">
      <h1>
        {helloResult.isLoading ? "Loading..." : helloResult.data}
        <Button onClick={() => signIn('google')}>Zaloguj się przez Google</Button>
        </h1>
    </div>
  );
}
