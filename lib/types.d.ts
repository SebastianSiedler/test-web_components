type Define = (params: { html: string }) => CustomElementConstructor;

type DefineComponentArgs = {
  // path to the PATH.html file for the component
  templatePath: string;
  define: Define;
};

declare type DefineComponent = (args: DefineComponentArgs) => Promise<void>;
