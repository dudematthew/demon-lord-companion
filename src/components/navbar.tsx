import { Separator } from "~/components/ui/separator";
import User from "./user/user";
import { ModeToggle } from "./ui/mode-toggle";
import { Button } from "./ui/button";
import { Settings } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

export default async function Navbar () {
    return (
        <>
            <div className="flex flex-col gap-2 h-full p-3 justify-between text-sm">
                <div className="flex flex-col gap-1">
                    <div className="flex gap-2 w-full items-center my-1">
                        <img src="/logoBlack.png" alt="Logo" className="h-12 w-auto block dark:hidden" />
                        <img src="/logoWhite.png" alt="Logo" className="h-12 w-auto hidden dark:block" />
                        <span className="font-semibold text-ellipsis">Demon Lord Companion</span>
                    </div>
                    <Separator></Separator>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex gap-3 w-full">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button variant="outline" size="icon">
                                        <Settings className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Options</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <ModeToggle />
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Theme</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <Separator></Separator>
                    <User></User>
                </div>
            </div>
        </>
    );
}