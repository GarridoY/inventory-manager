import type { Metadata } from 'next'
import DashboardTable from '@/components/DashboardTable'
import { Data } from '@/types/data';

export const metadata: Metadata = {
    title: 'Dashboard',
}

async function getData(): Promise<Data[]> {
    return [
        {
            "name": "Name",
            "category": "Category"
        },
        {
            "name": "Name",
            "category": "Category"
        }
    ];
}

export default async function Dashboard() {
    const data = await getData(); 
    return (
        <>
            <DashboardTable data={data}/>
        </>
    )
}