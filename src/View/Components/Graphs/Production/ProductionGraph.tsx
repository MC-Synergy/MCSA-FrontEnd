import Chart from 'chart.js/auto';
import {ChartConfiguration} from "chart.js";
import { useEffect, useState } from "react";
import { createProductionGraphDataSets, useProductionData } from "../../../../Services/productionService";
import 'chartjs-adapter-moment';
import { BorderColors, DataSet } from "../../../../Models/Types";
import "../../../Styles/GraphStyles.css"

const MINUTES_IN_DAY = 1440

export interface ProductionGraphProps {
    graphTitle: string,
    canvasID: string,
    lineColors: BorderColors,
    mcsSystemID: number,
    accumulated: boolean,
    intervalAsMinutes?: number
}

export function ProductionGraph({canvasID, graphTitle, lineColors, mcsSystemID, accumulated, intervalAsMinutes}: ProductionGraphProps){
    const {data: mcsSystem, loading, refreshData} = useProductionData(mcsSystemID, accumulated, MINUTES_IN_DAY, intervalAsMinutes);
    const [refresh, setRefresh] = useState(true)
    useEffect(() => {
        if (refresh) {
            refreshData()
        }
        setRefresh(false)
        if (loading) {
            return
        }
        const datasets: DataSet[] = createProductionGraphDataSets(mcsSystem.itemsProduced, lineColors)
        const chartConfig : ChartConfiguration = {
            type: 'line',
            data: {
                datasets: datasets
            },
            options: {
                parsing: {
                    xAxisKey: 'timeSent',
                    yAxisKey: 'amountProduced'
                },
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            displayFormats: {
                                hour: 'hh'
                            }
                        },
                        grid: {
                            color: "rgba(170, 207, 209, 0.4)"
                        }
                    },
                    y: {
                        grid: {
                            color: "rgba(170, 207, 209, 0.4)"
                        },
                        min: 0
                    }
                },
                plugins: {
                    legend: { 
                        position: 'top'
                    },
                },

            }
        }

        const systemNameElement = document.getElementById(canvasID + "SystemNameElement") as HTMLDivElement;
        systemNameElement.textContent = mcsSystem.name;

        const canvas = document.getElementById(canvasID) as HTMLCanvasElement;
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

        const myChart = new Chart(ctx, chartConfig)

        return () => {
            myChart.destroy()
        }
        
    }, [loading, mcsSystem, canvasID, lineColors, refresh, refreshData])
    
    function refreshGraph() {
        setRefresh(true)
    }

    return (
        <div className="production-graph">
            <div id={canvasID+"TitleElement"} className='text-center mt-1' onClick={refreshGraph}>{graphTitle}</div>
            <div id={canvasID+"SystemNameElement"} className='text-center text-sm'>Loading...</div>
            <canvas id={canvasID}></canvas>
        </div>
    )
}