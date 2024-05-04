"use client";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { signIn, signOut, useSession } from "next-auth/react";
import { CircleUser } from "lucide-react";
import { Button } from "../ui/button";

export default function User () {
    const { data: session, status } = useSession();
    const initials = session?.user?.name?.split(' ').map((name: string) => name[0]).join('') ?? '';

    return (
        <>
            <div className="flex gap-3 w-full items-center">
                {session? (
                    <>
                        <Avatar>
                            <AvatarImage src={session?.user?.image ?? ''} />
                            <AvatarFallback>{initials}</AvatarFallback>
                        </Avatar>
                        <span className="font-semibold">{session?.user?.name ?? ''}</span>
                    </>
                ) : (
                    <Button variant="secondary" onClick={() => signIn('google')}>
                        Login with Google <CircleUser className="ml-2"></CircleUser>
                    </Button>
                )}
            </div>
        </>
    );
}