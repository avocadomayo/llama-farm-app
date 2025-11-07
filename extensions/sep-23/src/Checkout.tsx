import {
  reactExtension,
  DatePicker,
} from "@shopify/ui-extensions-react/checkout";
import * as React from "react";

// 1. Choose an extension target
export default reactExtension(
  "purchase.checkout.shipping-option-list.render-after",
  () => <FlakyRepro />
);

function FlakyRepro() {
  return null;
  const [ym, setYm] = React.useState({ year: 2025, month: 10 });
  const baseSingles = [
    "2025-10-04",
    "2025-10-05",
    "2025-10-06",
    "2025-10-11",
    "2025-10-12",
    "2025-10-13",
    "2025-10-18",
    "2025-10-19",
    "2025-10-20",
    "2025-10-25",
    "2025-10-26",
    "2025-10-27",
  ];
  const [tick, setTick] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 800); // simulate frequent prop churn
    return () => clearInterval(id);
  }, []);

  console.log("tick", tick);

  const disabled = React.useMemo(
    () => [
      { start: "1970-01-01", end: "2025-09-04" },
      { start: "2026-09-05", end: "2999-12-31" },
      ...baseSingles,
    ],
    [tick]
  ); // new identity, same content

  return (
    <DatePicker
      yearMonth={ym}
      selected="2025-10-09"
      disabled={disabled}
      onYearMonthChange={setYm}
      onChange={() => {}}
    />
  );
}
