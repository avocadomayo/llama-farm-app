import {
  BlockStack,
  reactExtension,
  TextBlock,
  Banner,
  useApi,
} from "@shopify/ui-extensions-react/customer-account";

export default reactExtension(
  "customer-account.order-index.block.render",
  () => <PromotionBanner />
);

function PromotionBanner() {
  console.log("PromotionBanner");
  const { i18n } = useApi();

  return (
    <Banner>
      <BlockStack inlineAlignment="center">
        <TextBlock>This is rendered on remote ui</TextBlock>
      </BlockStack>
    </Banner>
  );
}
