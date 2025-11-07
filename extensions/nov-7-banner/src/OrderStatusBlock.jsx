import {
  Banner,
  Button,
  BlockStack,
  reactExtension,
} from "@shopify/ui-extensions-react/customer-account";
import { useState } from "react";

export default reactExtension(
  "customer-account.order-index.block.render",
  () => <Extension />
);

function Extension() {
  const [showBanner, setShowBanner] = useState(false);
  return (
    <BlockStack>
      <Button onPress={() => setShowBanner(true)}>Show banner</Button>
      {showBanner && (
        <Banner>I'm broken in Chrome and break everything in the screen</Banner>
      )}
    </BlockStack>
  );
}
