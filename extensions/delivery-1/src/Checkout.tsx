import { reactExtension, Banner } from "@shopify/ui-extensions-react/checkout";

export default reactExtension("purchase.checkout.block.render", () => (
  <Extension />
));

function Extension() {
  return <Banner title="DELIVERY1"></Banner>;
}
