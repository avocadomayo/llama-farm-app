import "@shopify/ui-extensions/preact";
import { render } from "preact";

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  return (
    <s-banner>
      <s-text>This is renderd on remote dom</s-text>
    </s-banner>
  );
}
