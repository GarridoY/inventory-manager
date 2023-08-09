'use client'

import { Data } from "@/types/data";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Props {
    data: Data[]
}

export default function DashboardTable({data}: Props) {
    return (
        <Table>
            <TableCaption>Caption</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Product name</TableHead>
                    <TableHead>Category</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((product, index) =>
                    <TableRow key={index}>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.category}</TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}