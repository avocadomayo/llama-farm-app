import { reactExtension, Banner } from "@shopify/ui-extensions-react/checkout";

export default reactExtension("purchase.checkout.block.render", () => (
  <Extension />
));

function Extension() {
  return <Banner title="WALLETS1"></Banner>;
}
