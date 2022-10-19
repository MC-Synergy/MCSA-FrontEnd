import { BorderColors, DataSet, ItemsProduced, MCSSystem } from "../Models/Types";
import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = process.env.REACT_APP_MCSA_API_URL + '/production'
const SYSTEMS_API_URL = process.env.REACT_APP_SYSTEMS_API_URL

export function createProductionGraphDataSets(itemsProduced: ItemsProduced, borderColors: BorderColors): DataSet[] {
  let datasets: DataSet[] = []
  for (const [key, value] of Object.entries(itemsProduced)) {
    let borderColor = 'rgba(57, 89, 255, 0.8)'

    if (borderColors[key] != null) {
      borderColor = borderColors[key]
    } else {
      console.log("could not find bordercolor: " + borderColors[key] + " for key: " + key)
    }

    const dataset: DataSet = {
      label: key,
      data: value,
      borderColor: borderColor,
      parsing: {
        xAxisKey: 'timeSent',
        yAxisKey: 'amountProduced'
      }
    }
    datasets.push(dataset)
  }
  return datasets;
}

export function useProductionData(mcsSystemID: number, accumulated: boolean, timeSpanAsMinutes?: number): {data: MCSSystem, loading: boolean} {
  const [data, setData] = useState({} as MCSSystem);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let params: any = {
          mcssystemid: mcsSystemID,
          accumulated: accumulated,
        }

        if (timeSpanAsMinutes !== undefined) {
          params["datatimespan"] = timeSpanAsMinutes
        }

        const { data: mcsaResponse } = await axios.get(BASE_URL + '/get-by-system-id', {params: params})
        const { data: systemDataResponse } = await axios.get(SYSTEMS_API_URL + '/get-system', {params: {SystemID: mcsSystemID}}) 
        setData({
          id: mcsSystemID,
          name: systemDataResponse.Name,
          itemsProduced: mcsaResponse
        } as MCSSystem);
        setLoading(false);
      } catch (err) {
        console.error(err)
      }
    };

    fetchData();
  }, [mcsSystemID, accumulated, timeSpanAsMinutes]);

  return {
    data,
    loading,
  };
};