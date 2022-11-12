import { CodeBlock } from "./CodeBlock";
import { MyCanvas } from "./MyCanvas";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    components: {
      code: CodeBlock,
      Canvas: MyCanvas,
    },
    
  },
};
