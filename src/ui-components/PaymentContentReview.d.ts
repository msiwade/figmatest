/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PaymentContentReviewOverridesProps = {
    PaymentContentReview?: PrimitiveOverrideProps<FlexProps>;
    "Frame 428"?: PrimitiveOverrideProps<FlexProps>;
    "\u8CFC\u5165\u65E5"?: PrimitiveOverrideProps<TextProps>;
    paymentDate?: PrimitiveOverrideProps<TextProps>;
    "Frame 429"?: PrimitiveOverrideProps<FlexProps>;
    "\u652F\u6255\u5148"?: PrimitiveOverrideProps<TextProps>;
    paymentDestination?: PrimitiveOverrideProps<TextProps>;
    "Frame 424"?: PrimitiveOverrideProps<FlexProps>;
    "\u5185\u5BB9"?: PrimitiveOverrideProps<TextProps>;
    content?: PrimitiveOverrideProps<TextProps>;
    "Frame 427"?: PrimitiveOverrideProps<FlexProps>;
    "\u91D1\u984D"?: PrimitiveOverrideProps<TextProps>;
    paymentAmount?: PrimitiveOverrideProps<TextProps>;
    "\u5186\uFF08\u7A0E\u8FBC\uFF09"?: PrimitiveOverrideProps<TextProps>;
    "Frame 431"?: PrimitiveOverrideProps<FlexProps>;
    "\u4E8B\u7531"?: PrimitiveOverrideProps<TextProps>;
    reason?: PrimitiveOverrideProps<TextProps>;
    "Frame 432"?: PrimitiveOverrideProps<FlexProps>;
    "\u6DFB\u4ED8\u8CC7\u6599"?: PrimitiveOverrideProps<TextProps>;
    paymentAttachmentListSlot?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type PaymentContentReviewProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "large" | "small";
} & {
    overrides?: PaymentContentReviewOverridesProps | undefined | null;
}>;
export default function PaymentContentReview(props: PaymentContentReviewProps): React.ReactElement;
