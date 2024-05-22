/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RequestListOverridesProps = {
    RequestList?: PrimitiveOverrideProps<FlexProps>;
    listTitle?: PrimitiveOverrideProps<FlexProps>;
    "Frame 495"?: PrimitiveOverrideProps<FlexProps>;
    "\u8A18\u5165\u65E5"?: PrimitiveOverrideProps<TextProps>;
    "Frame 496"?: PrimitiveOverrideProps<FlexProps>;
    "\u88FD\u54C1\u540D"?: PrimitiveOverrideProps<TextProps>;
    "Frame 497"?: PrimitiveOverrideProps<FlexProps>;
    "\u898F\u683C"?: PrimitiveOverrideProps<TextProps>;
    "Frame 498"?: PrimitiveOverrideProps<FlexProps>;
    "\u6570\u91CF"?: PrimitiveOverrideProps<TextProps>;
    "Frame 499"?: PrimitiveOverrideProps<FlexProps>;
    "\u5305\u6750"?: PrimitiveOverrideProps<TextProps>;
    "Frame 500"?: PrimitiveOverrideProps<FlexProps>;
    "\u4F5C\u696D\u30EB\u30FC\u30C8"?: PrimitiveOverrideProps<TextProps>;
    "Frame 501"?: PrimitiveOverrideProps<FlexProps>;
    "\u51FA\u8377\u4E88\u5B9A\u65E5"?: PrimitiveOverrideProps<TextProps>;
    "Frame 502"?: PrimitiveOverrideProps<FlexProps>;
    "\u5E0C\u671B\u88FD\u9020\u5B8C\u4E86\u4E88\u5B9A\u65E5"?: PrimitiveOverrideProps<TextProps>;
    "Frame 503"?: PrimitiveOverrideProps<FlexProps>;
    "\u88FD\u9020\u5B8C\u4E86\u4E88\u5B9A\u65E5"?: PrimitiveOverrideProps<TextProps>;
    "Frame 504"?: PrimitiveOverrideProps<FlexProps>;
    "\u305D\u306E\u4ED6"?: PrimitiveOverrideProps<TextProps>;
    "Frame 505"?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type RequestListProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: RequestListOverridesProps | undefined | null;
}>;
export default function RequestList(props: RequestListProps): React.ReactElement;
