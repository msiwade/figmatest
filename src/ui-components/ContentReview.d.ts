/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContentReviewOverridesProps = {
    ContentReview?: PrimitiveOverrideProps<FlexProps>;
    "Frame 431"?: PrimitiveOverrideProps<FlexProps>;
    "\u652F\u6255\u5148"?: PrimitiveOverrideProps<TextProps>;
    paymentDestination?: PrimitiveOverrideProps<TextProps>;
    "Frame 428"?: PrimitiveOverrideProps<FlexProps>;
    "\u76EE\u7684"?: PrimitiveOverrideProps<TextProps>;
    purpose?: PrimitiveOverrideProps<TextProps>;
    "Frame 429"?: PrimitiveOverrideProps<FlexProps>;
    "\u52B9\u679C"?: PrimitiveOverrideProps<TextProps>;
    effect?: PrimitiveOverrideProps<TextProps>;
    "Frame 424"?: PrimitiveOverrideProps<FlexProps>;
    "\u8A73\u7D30\u8AAC\u660E"?: PrimitiveOverrideProps<TextProps>;
    description?: PrimitiveOverrideProps<TextProps>;
    "Frame 430"?: PrimitiveOverrideProps<FlexProps>;
    "\u6295\u8CC7\u52B9\u679C"?: PrimitiveOverrideProps<TextProps>;
    roi?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ContentReviewProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "large" | "small";
} & {
    overrides?: ContentReviewOverridesProps | undefined | null;
}>;
export default function ContentReview(props: ContentReviewProps): React.ReactElement;
