declare type Define = (params: { html: string }) => CustomElementConstructor;

declare type DefineComponentParams = {
  // path to the PATH.html file for the component
  templatePath: string;
  define: Define;
};
