"use client";

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

export default function Fight() {
  return (
	<>
	  <Card className="w-1/4">
		<CardHeader>
		  <CardTitle>Hit Location</CardTitle>
		  <CardDescription>Where does it hurt?</CardDescription>
		</CardHeader>
		<CardContent>
		  <Table>
			<TableCaption>
			  Yes, I know there isn&apos;t any in SotDL.
			</TableCaption>
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
	</>
  );
}
