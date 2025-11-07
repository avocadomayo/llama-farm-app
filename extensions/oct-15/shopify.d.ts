import '@shopify/ui-extensions';

//@ts-ignore
declare module './src/Checkout.jsx' {
  const shopify: import('@shopify/ui-extensions/purchase.checkout.shipping-option-item.details.render').Api;
  const globalThis: { shopify: typeof shopify };
}
