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

  import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "~/components/ui/table";


export default function Calculators () {

    return (
        <Drawer>
            <DrawerTrigger>Open</DrawerTrigger>
            <DrawerContent className="h-[90%]">

                <DrawerHeader>
                    <DrawerTitle>Other tools and random tables</DrawerTitle>
                    <DrawerDescription>Above initiative tracker, you can find other tools and random tables that can help you during your game.</DrawerDescription>
                </DrawerHeader>
              
                <Tabs defaultValue="account" className="w-full my-2">
                    <TabsList className="w-full">
                        <TabsTrigger value="account">Fight</TabsTrigger>
                        <TabsTrigger value="adventure">Adventure</TabsTrigger>
                        <TabsTrigger value="misc">Misc</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account" className="flex gap-3">
                        <Card className="w-1/4">
                            <CardHeader>
                                <CardTitle>Hit Location</CardTitle>
                                <CardDescription>Where does it hurt?</CardDescription>
                            </CardHeader>
                            <CardContent>
                            <Table>
                                <TableCaption>Yes, I know there isn't any in SotDL.</TableCaption>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px]">d6</TableHead>
                                        <TableHead>Location</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="font-medium">1</TableCell>
                                        <TableCell>Head</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">2</TableCell>
                                        <TableCell>Chest</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">3</TableCell>
                                        <TableCell>Right Hand</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">4</TableCell>
                                        <TableCell>Left Hand</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">5</TableCell>
                                        <TableCell>Left Leg</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">6</TableCell>
                                        <TableCell>Right Leg</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            </CardContent>
                            <CardFooter className="text-xs mt-2">
                                <p>Data from main rulebook page 167.</p>
                            </CardFooter>
                        </Card>
                        <Card className="w-1/4">
                            <CardHeader>
                                <CardTitle>Wound Type</CardTitle>
                                <CardDescription>Where does it hurt?</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableCaption>Fuck off.</TableCaption>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[100px]">d6</TableHead>
                                            <TableHead>Wound</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="font-medium">1</TableCell>
                                            <TableCell>Light</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">2</TableCell>
                                            <TableCell>Normal</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">3</TableCell>
                                            <TableCell>Minor</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">4</TableCell>
                                            <TableCell>Great</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">5</TableCell>
                                            <TableCell>Super</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell className="font-medium">6</TableCell>
                                            <TableCell>Fucking Brutal</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                            <CardFooter className="text-xs mt-2">
                                <p>Data from main rulebook page 121.</p>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="adventure">
                        <Card>
                            <CardHeader>
                                <CardTitle>Card Title</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Card Content</p>
                            </CardContent>
                            <CardFooter>
                                <p>Card Footer</p>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="misc">
                        <Card>
                            <CardHeader>
                                <CardTitle>Card Title</CardTitle>
                                <CardDescription>Card Description</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>Card Content</p>
                            </CardContent>
                            <CardFooter>
                                <p>Card Footer</p>
                            </CardFooter>
                        </Card>
                    </TabsContent>
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