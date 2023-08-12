/* eslint-disable @typescript-eslint/no-explicit-any */

// declare module "*.svg" {
//     import { ReactElement, SVGProps } from "react";
//     const ReactComponent: (props: SVGProps<SVGElement>) => ReactElement;
//     export { ReactComponent };
//   }
    
declare module "*.svg" {
        const content: any;
        export default content;
      }
  
  
declare module "*.png" {
    const value: any;
    export default value;
  }
  