declare interface IHelloWorldStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'helloWorldStrings' {
  const helloWorldStrings: IHelloWorldStrings;
  export = helloWorldStrings;
}
