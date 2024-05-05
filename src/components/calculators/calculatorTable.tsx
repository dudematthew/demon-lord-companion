import React from "react";
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

type CalculatorTableColumn = {
    columnName: string;
    isBold?: boolean;
    rows: (string | number)[];
}

export type CalculatorTableProps = {
    data: CalculatorTableColumn[];
    title: React.ReactNode | string;
    description: React.ReactNode | string;
    caption?: React.ReactNode | string;
    footer: React.ReactNode | string;
}

export default function CalculatorTable(props: CalculatorTableProps) {
    return (
        <Card className="w-1/4 text-sm">
            <CardHeader>
                <CardTitle>{props.title}</CardTitle>
                <CardDescription>{props.description}</CardDescription>
            </CardHeader>
            <CardContent>
            <Table>
                {/* <TableCaption>{props.caption}</TableCaption> */}
                {props.caption && <TableCaption>{props.caption}</TableCaption>}
                <TableHeader>
                    <TableRow>
                        {props.data.map((column, index) => (
                            <TableHead key={index} className={column.isBold ? "font-bold" : ""}>{column.columnName}</TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {props.data[0].rows.map((_, index) => (
                        <TableRow key={index}>
                            {props.data.map((column, columnIndex) => (
                                <TableCell key={columnIndex} className={column.isBold ? 'font-bold' : ''}>{column.rows[index]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            </CardContent>
            <CardFooter className="text-xs mt-2">
                <p>Data from main rulebook page 33.</p>
            </CardFooter>
        </Card>
    );
}