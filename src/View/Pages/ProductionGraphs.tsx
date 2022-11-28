import { ProductionGraph, ProductionGraphProps } from "../Components/Graphs/Production/ProductionGraph";

function ProductionGraphs() {
  const MelonPumpkinAccumulatedProps: ProductionGraphProps = {
    graphTitle: "Total Harvested Melons and Pumpkins",
    canvasID: "MelonPumpkinAccumulatedGraph",
    lineColors: {
      "minecraft:melon": "rgba(133, 139, 28, 1)",
      "minecraft:pumpkin": "rgba(220, 136, 30, 1)"
    },
    mcsSystemID: 12,
    accumulated: true
  }

  const MelonPumpkinAverageProps: ProductionGraphProps = {
    graphTitle: "Average Harvested Melons and Pumpkins",
    canvasID: "MelonPumpkinAverageGraph",
    lineColors: {
      "minecraft:melon": "rgba(133, 139, 28, 1)",
      "minecraft:pumpkin": "rgba(220, 136, 30, 1)"
    },
    mcsSystemID: 12,
    accumulated: false,
    intervalAsMinutes: 60
  }

  const MelonPumpkinProps: ProductionGraphProps = {
    graphTitle: "Harvested Melons and Pumpkins per Round",
    canvasID: "MelonPumpkinGraph",
    lineColors: {
      "minecraft:melon": "rgba(133, 139, 28, 1)",
      "minecraft:pumpkin": "rgba(220, 136, 30, 1)"
    },
    mcsSystemID: 12,
    accumulated: false
  }

  const WoolAccumulatedProps: ProductionGraphProps = {
    graphTitle: "Total Harvested Wool",
    canvasID: "WoolGraphAccumulated",
    lineColors: {
      "minecraft:white_wool": "rgba(247, 250, 250, 1)",
      "minecraft:orange_wool": "rgba(254, 125, 20, 1)",
      "minecraft:magenta_wool": "rgba(200, 72, 190, 1)",
      "minecraft:light_blue_wool": "rgba(61, 186, 230, 1)",
      "minecraft:yellow_wool": "rgba(255, 209, 41, 1)",
      "minecraft:lime_wool": "rgba(119, 196, 26, 1)",
      "minecraft:pink_wool": "rgba(251, 149, 182, 1)",
      "minecraft:gray_wool": "rgba(66, 72, 75, 1)",
      "minecraft:light_gray_wool": "rgba(151, 151, 142, 1)",
      "minecraft:cyan_wool": "rgba(22, 145, 154, 1)",
      "minecraft:purple_wool": "rgba(128, 45, 182, 1)",
      "minecraft:blue_wool": "rgba(56, 60, 166, 1)",
      "minecraft:brown_wool": "rgba(121, 75, 42, 1)",
      "minecraft:green_wool": "rgba(89, 116, 29, 1)",
      "minecraft:red_wool": "rgba(170, 41, 36, 1)",
      "minecraft:black_wool": "rgba(21, 22, 26, 1)"
    },
    mcsSystemID: 10,
    accumulated: true
  }

  const WoolProps: ProductionGraphProps = {
    graphTitle: "Harvested Wool per Round",
    canvasID: "WoolGraph",
    lineColors: {
      "minecraft:white_wool": "rgba(247, 250, 250, 1)",
      "minecraft:orange_wool": "rgba(254, 125, 20, 1)",
      "minecraft:magenta_wool": "rgba(200, 72, 190, 1)",
      "minecraft:light_blue_wool": "rgba(61, 186, 230, 1)",
      "minecraft:yellow_wool": "rgba(255, 209, 41, 1)",
      "minecraft:lime_wool": "rgba(119, 196, 26, 1)",
      "minecraft:pink_wool": "rgba(251, 149, 182, 1)",
      "minecraft:gray_wool": "rgba(66, 72, 75, 1)",
      "minecraft:light_gray_wool": "rgba(151, 151, 142, 1)",
      "minecraft:cyan_wool": "rgba(22, 145, 154, 1)",
      "minecraft:purple_wool": "rgba(128, 45, 182, 1)",
      "minecraft:blue_wool": "rgba(56, 60, 166, 1)",
      "minecraft:brown_wool": "rgba(121, 75, 42, 1)",
      "minecraft:green_wool": "rgba(89, 116, 29, 1)",
      "minecraft:red_wool": "rgba(170, 41, 36, 1)",
      "minecraft:black_wool": "rgba(21, 22, 26, 1)"
    },
    mcsSystemID: 10,
    accumulated: false,
  }

  const KelpHarvestedProps: ProductionGraphProps = {
    graphTitle: "Harvested Kelp per Round",
    canvasID: "HarvestedKelpPerRoundGraph",
    lineColors: {
      "minecraft:kelp": "rgba(91, 170, 48)"
    },
    mcsSystemID: 6,
    accumulated: false
  }

  const KelpHarvestedAccumulatedProps: ProductionGraphProps = {
    graphTitle: "Total Harvested Kelp",
    canvasID: "TotalHarvestedKelpGraph",
    lineColors: {
      "minecraft:kelp": "rgba(91, 170, 48)"
    },
    mcsSystemID: 6,
    accumulated: true
  }

  return (
    <div id="staticGraphs">
      <ProductionGraph {...MelonPumpkinAccumulatedProps}></ProductionGraph>
      <ProductionGraph {...MelonPumpkinAverageProps}></ProductionGraph>
      <ProductionGraph {...MelonPumpkinProps}></ProductionGraph>
      <ProductionGraph {...WoolAccumulatedProps}></ProductionGraph>
      <ProductionGraph {...KelpHarvestedAccumulatedProps}></ProductionGraph>
      <ProductionGraph {...KelpHarvestedProps}></ProductionGraph>
      {/* <ProductionGraph {...WoolProps}></ProductionGraph> */}
    </div>
  )
}

export default ProductionGraphs;
