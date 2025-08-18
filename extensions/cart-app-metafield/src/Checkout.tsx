import {
  reactExtension,
  Banner,
  TextBlock,
  useAppMetafields,
  useApplyMetafieldsChange,
  View,
  Button,
} from "@shopify/ui-extensions-react/checkout";
import type { MetafieldChange } from "@shopify/ui-extensions/checkout";

import { useCallback, useState } from "react";

export default reactExtension("purchase.checkout.block.render", () => (
  <Extension />
));

function Extension() {
  const metafields = useAppMetafields();
  const applyMetafieldsChange = useApplyMetafieldsChange();
  const [cartMetafieldValueSuffix, setCartMetafieldValueSuffix] = useState(0);

  const cartMetafields = metafields.filter(
    (metafield) => metafield.target.type === "cart"
  );

  const updateCartMetafield = useCallback(
    ({
      key,
      value,
      namespace,
    }: {
      key: string;
      value: string;
      namespace: string;
    }) => {
      const metafieldUpdateCartChangePayload: MetafieldChange = {
        type: "updateCartMetafield",
        metafield: {
          namespace,
          key,
          value,
          type: "string",
        },
      };
      applyMetafieldsChange(metafieldUpdateCartChangePayload);
    },
    [applyMetafieldsChange]
  );

  const handleUpdateCartMetafield = useCallback(() => {
    const nextValue = cartMetafieldValueSuffix + 1;
    updateCartMetafield({
      value: `test value ${nextValue}`,
      key: "my-product-metafield",
      namespace: "$app",
    });

    setCartMetafieldValueSuffix((prev) => prev + 1);
  }, [cartMetafieldValueSuffix, updateCartMetafield]);

  const handleDeleteCartMetafield = () => {
    applyMetafieldsChange({
      type: "removeCartMetafield",
      namespace: "my-product-metafield",
      key: "$app",
    });

    setCartMetafieldValueSuffix(0);
  };

  return (
    <View accessibilityRole="alert" accessibilityLabel="cart-metafields-view">
      <Banner>
        <TextBlock>Cart metafields</TextBlock>
        {cartMetafields.length === 0 && (
          <TextBlock>No cart metafields found</TextBlock>
        )}
        {cartMetafields.map((cartMetafield) => (
          <View key={cartMetafield.metafield.key}>
            <TextBlock>
              Namespace: {cartMetafield.metafield.namespace}
            </TextBlock>
            <TextBlock>Key: {cartMetafield.metafield.key}</TextBlock>
            <TextBlock>Value: {cartMetafield.metafield.value}</TextBlock>
          </View>
        ))}
        <View padding="base" inlineAlignment="start">
          <Button
            accessibilityRole="button"
            accessibilityLabel="update-cart-metafield-value"
            onPress={handleUpdateCartMetafield}
          >
            Update cart metafield value
          </Button>
          <Button
            accessibilityRole="button"
            accessibilityLabel="delete-cart-metafield-value"
            onPress={handleDeleteCartMetafield}
          >
            Delete cart metafield value
          </Button>
        </View>
      </Banner>
    </View>
  );
}
