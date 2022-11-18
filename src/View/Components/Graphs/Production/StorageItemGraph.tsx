import { Chart } from "chart.js/auto";
import { useEffect } from "react";
import useStorageData from "../../../../Services/storageService";

export interface StorageItemGraphProps {
    canvasID: string
}

export function StorageItemGraph({canvasID}: StorageItemGraphProps) {
    const { data: storage, loading} = useStorageData();
    useEffect(() => {
        if (loading) {
            return
        }
        console.log(storage)

        const systemNameElement = document.getElementById(canvasID + "SystemNameElement") as HTMLDivElement;
        systemNameElement.textContent = storage.name;

        const canvas = document.getElementById(canvasID) as HTMLCanvasElement;
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

        //const myChart = new Chart(ctx, chartConfig)

        return () => {
            //myChart.destroy()
        }
    }, [storage, loading, canvasID])
    return (
        <div className="production-graph relative">
            <div id={canvasID + "TitleElement"} className='text-center mt-1'>Iemand bedenk een naam</div>
            <div id={canvasID + "SystemNameElement"} className='text-center text-sm'>Loading...</div>
            <canvas id={canvasID}></canvas>
        </div>
    )
}