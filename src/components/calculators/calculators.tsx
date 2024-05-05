import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "~/components/ui/drawer";
import { Button } from "../ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "~/components/ui/card";

import { ScrollArea } from "~/components/ui/scroll-area";

import CalculatorTab from "./calculatorTab";
import Fight from "./fight/fight";
import { Dices } from "lucide-react";
import Misc from "./misc/misc";
import { useState } from "react";

export default function Calculators () {

    const [snap, setSnap] = useState<number | string | null>(1);

    return (
        <Drawer
            snapPoints={[0.5, 1]}
            activeSnapPoint={snap}
            setActiveSnapPoint={setSnap}
        >
            <DrawerTrigger>Open</DrawerTrigger>
            <DrawerContent data-vaul-no-drag className="h-[96vh]">

                <DrawerHeader>
                    <DrawerTitle className="flex gap-3 items-center">Other tools and random tables <Dices></Dices></DrawerTitle>
                    <DrawerDescription>Apart from initiative tracker, you can find other tools and random tables that can help you during your game.</DrawerDescription>
                </DrawerHeader>
              
                <Tabs defaultValue="fights" className="h-full w-full my-2">
                    <>
                    <TabsList className="w-full">
                        <TabsTrigger value="fights">Fight</TabsTrigger>
                        <TabsTrigger value="adventure">Adventure</TabsTrigger>
                        <TabsTrigger value="misc">Misc</TabsTrigger>
                    </TabsList>
                    <ScrollArea className="h-full overflow-auto w-full">


                        <TabsContent value="fights">
                            <CalculatorTab>
                                <Fight></Fight>
                            </CalculatorTab>
                        </TabsContent>

                        <TabsContent value="adventure">
                            <Card>
                                <CalculatorTab>
                                    <Misc></Misc>
                                </CalculatorTab>
                            </Card>
                        </TabsContent>

                        <TabsContent value="misc">
                            <CalculatorTab>
                                <Misc></Misc>
                            </CalculatorTab>
                        </TabsContent>
                    </ScrollArea>
                    </>
                </Tabs>

                {/* <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter> */}

            </DrawerContent>
        </Drawer>
    );
}