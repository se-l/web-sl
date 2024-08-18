import { articleMicroElectrode } from "./MicroElectrode";
import { articleResources } from "./resources/Resources";
import { articleEarningsRelease } from "./tradeEarningsRelease/TradeEarningsRelease";
import { articleCalibrateSSVI } from "./calibrateSSVI/CalibrateSSVI";
import { articleSSVIStreamlit } from "./calibrateSSVI/SSVIStreamlit";

export const ArticleList = [
  articleSSVIStreamlit,
  articleCalibrateSSVI,
  articleEarningsRelease,
  articleResources,
  articleMicroElectrode, 
];