export {};
declare global {
  declare namespace CustomTypes {
    interface ElementMap {
      div: HTMLDivElement;
      span: HTMLSpanElement;
      p: HTMLParagraphElement;
      pre: HTMLPreElement;
      [(K in "h1") | "h2" | "h3" | "h4" | "h5" | "h6"]: HTMLHeadingElement;
      li: HTMLLIElement;
    }
    type HtmlTag =
      | "div"
      | "span"
      | "p"
      | "pre"
      | "h1"
      | "h2"
      | "h3"
      | "h4"
      | "h5"
      | "h6"
      | "li"
      | "ul"
      | "ol"
      | "code";
  }
}
