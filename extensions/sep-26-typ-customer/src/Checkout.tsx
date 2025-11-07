import {
  reactExtension,
  BlockStack,
  Text,
  useApi,
  useCustomer,
  useEmail,
  useSubscription,
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension("purchase.thank-you.block.render", () => (
  <Extension />
));

function Extension() {
  const customer = useCustomer();
  const email = useEmail();
  const buyerIdentity = useApi().buyerIdentity;
  const buyerIdentityEmail = useSubscription(buyerIdentity.email);
  const buyerIdentityCustomer = useSubscription(buyerIdentity.customer);

  return (
    <BlockStack>
      <Text>Email from useCustomer(): {customer?.email}</Text>
      <Text>First Name from useCustomer(): {customer?.firstName}</Text>
      <Text>Last Name from useCustomer(): {customer?.lastName}</Text>
      <Text>Email from useEmail(): {email}</Text>
      <Text>Email from buyerIdentity.email: {buyerIdentityEmail}</Text>
      <Text>
        First Name from buyerIdentity.customer.firstName:{" "}
        {buyerIdentityCustomer?.firstName}
      </Text>
      <Text>
        Last Name from buyerIdentity.customer.lastName:{" "}
        {buyerIdentityCustomer?.lastName}
      </Text>
    </BlockStack>
  );
}
