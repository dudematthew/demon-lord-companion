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
import CalculatorTable from "../calculatorTable";
import { title } from "process";
import { Dumbbell } from "lucide-react";


export default function Misc () {

    const data = {
        strength: [],
        normal: [],
        success: []
    } as {
        strength: number[];
        normal: number[];
        success: number[];
    };

    for (let i = 1; i <= 20; i++) {
        data.strength.push(i);
    }

    data.normal = [
        1, 2, 5, 10, 20, 30, 40, 50, 75, 100, 150, 200, 250, 350, 500, 1000, 2000, 4000, 8000, 16000
    ];

    // Twice the normal amount
    data.success = data.normal.map((value) => value * 2);

    const title = (
        <CardTitle className="flex gap-3">Lifting Weights by Strength <Dumbbell></Dumbbell></CardTitle>
    );

    return (
        <>
            <CalculatorTable
                title={title}
                description="How much can you lift?"
                footer="Data from main rulebook page 33."
                data={[
                    {
                        columnName: "Strength",
                        isBold: true,
                        rows: data.strength
                    },
                    {
                        columnName: "Normal",
                        rows: data.normal.map((value) => value.toString() + ' lb.')
                    },
                    {
                        columnName: "Success",
                        rows: data.success.map((value) => value.toString() + ' lb.')
                    }
                ]}
            />
        </>
    )
}