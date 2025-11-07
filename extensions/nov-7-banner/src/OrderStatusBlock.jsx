import {
  reactExtension,
  Banner,
} from "@shopify/ui-extensions-react/customer-account";

export default reactExtension(
  "customer-account.order-index.block.render",
  () => <Extension />
);

function Extension() {
  return <Banner>This is rendered on remote ui</Banner>;
}
