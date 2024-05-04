import { Separator } from "~/components/ui/separator";
import User from "./user/user";
import { ModeToggle } from "./ui/mode-toggle";
import { Button } from "./ui/button";
import { Settings } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

export default async function Navbar () {
    return (
        <>
            <div className="flex flex-col gap-2 h-full p-2 justify-between">
                <div></div>
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