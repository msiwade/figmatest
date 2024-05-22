/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TransportContentReviewHeaderOverridesProps = {
    TransportContentReviewHeader?: PrimitiveOverrideProps<FlexProps>;
    "Frame 482"?: PrimitiveOverrideProps<FlexProps>;
    "\u6708\u65E5"?: PrimitiveOverrideProps<TextProps>;
    "Frame 4881884298"?: PrimitiveOverrideProps<FlexProps>;
    "\u7533\u8ACB\u30BF\u30A4\u30D7"?: PrimitiveOverrideProps<TextProps>;
    "Frame 491"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 483"?: PrimitiveOverrideProps<FlexProps>;
    "\u884C\u304D\u5148"?: PrimitiveOverrideProps<TextProps>;
    "Frame 484"?: PrimitiveOverrideProps<FlexProps>;
    "\u5185\u5BB9"?: PrimitiveOverrideProps<TextProps>;
    "Frame 486"?: PrimitiveOverrideProps<FlexProps>;
    "\u6458\u8981"?: PrimitiveOverrideProps<TextProps>;
    "Frame 487"?: PrimitiveOverrideProps<FlexProps>;
    "\u91D1\u984D\uFF08\u7A0E\u8FBC\uFF09"?: PrimitiveOverrideProps<TextProps>;
    "Frame 4882644393"?: PrimitiveOverrideProps<FlexProps>;
    "\u6DFB\u4ED8\u8CC7\u6599"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TransportContentReviewHeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TransportContentReviewHeaderOverridesProps | undefined | null;
}>;
export default function TransportContentReviewHeader(props: TransportContentReviewHeaderProps): React.ReactElement;
