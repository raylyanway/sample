// eslint-disable-next-line  import/no-extraneous-dependencies
import { ReportHandler } from "web-vitals";

type ReportWebVitals = (onPerfEntry?: ReportHandler | undefined) => void;

const reportWebVitals: ReportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // eslint-disable-next-line  import/no-extraneous-dependencies
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
