/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, FlexProps, SwitchFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PaidDocumentReviewOverridesProps = {
    PaidDocumentReview?: PrimitiveOverrideProps<FlexProps>;
    "Frame 419"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 4323307693"?: PrimitiveOverrideProps<FlexProps>;
    "\u652F\u6255\u72B6\u6CC1\uFF1A"?: PrimitiveOverrideProps<TextProps>;
    paidFlag?: PrimitiveOverrideProps<BadgeProps>;
    close?: PrimitiveOverrideProps<ViewProps>;
    titleDocumentReview?: PrimitiveOverrideProps<TextProps>;
    "Frame 502"?: PrimitiveOverrideProps<FlexProps>;
    "\u4F9D\u983C\u30E1\u30FC\u30EB"?: PrimitiveOverrideProps<TextProps>;
    requestEmailText?: PrimitiveOverrideProps<TextProps>;
    "Frame 4323307698"?: PrimitiveOverrideProps<FlexProps>;
    "\u7A1F\u8B70\u66F8\u756A\u53F7"?: PrimitiveOverrideProps<TextProps>;
    applicationNo?: PrimitiveOverrideProps<TextProps>;
    "Frame 435"?: PrimitiveOverrideProps<ViewProps>;
    "\u627F\u8A8D\u756A\u53F7"?: PrimitiveOverrideProps<TextProps>;
    approvalNo?: PrimitiveOverrideProps<TextProps>;
    "Frame 420"?: PrimitiveOverrideProps<ViewProps>;
    "\u7A1F\u8B70\u8005"?: PrimitiveOverrideProps<TextProps>;
    createdBy?: PrimitiveOverrideProps<TextProps>;
    "Frame 426"?: PrimitiveOverrideProps<FlexProps>;
    "\u4EF6\u540D"?: PrimitiveOverrideProps<TextProps>;
    title?: PrimitiveOverrideProps<TextProps>;
    "Frame 430"?: PrimitiveOverrideProps<ViewProps>;
    "\u7533\u8ACB\u65E5"?: PrimitiveOverrideProps<TextProps>;
    createdAt?: PrimitiveOverrideProps<TextProps>;
    "Frame 436"?: PrimitiveOverrideProps<ViewProps>;
    "\u53D7\u4ED8\u65E5"?: PrimitiveOverrideProps<TextProps>;
    recievedAt?: PrimitiveOverrideProps<TextProps>;
    "Frame 431"?: PrimitiveOverrideProps<ViewProps>;
    titleClosedAt?: PrimitiveOverrideProps<TextProps>;
    closedAt?: PrimitiveOverrideProps<TextProps>;
    "Frame 427"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 5076994467"?: PrimitiveOverrideProps<FlexProps>;
    amount?: PrimitiveOverrideProps<TextProps>;
    "\u5186\uFF08\u7A0E\u8FBC\uFF093307722"?: PrimitiveOverrideProps<TextProps>;
    "\u7A1F\u8B70\u91D1\u984D"?: PrimitiveOverrideProps<TextProps>;
    "Frame 501"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 5076994474"?: PrimitiveOverrideProps<FlexProps>;
    paymentAmount?: PrimitiveOverrideProps<TextProps>;
    "\u5186\uFF08\u7A0E\u8FBC\uFF096994476"?: PrimitiveOverrideProps<TextProps>;
    "\u652F\u6255\u91D1\u984D"?: PrimitiveOverrideProps<TextProps>;
    paidFlagFrame?: PrimitiveOverrideProps<FlexProps>;
    "\u652F\u6255\u72B6\u6CC1"?: PrimitiveOverrideProps<TextProps>;
    "Frame 496"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 441"?: PrimitiveOverrideProps<FlexProps>;
    "\u652F\u6255\u65E5"?: PrimitiveOverrideProps<TextProps>;
    paidDateSlot?: PrimitiveOverrideProps<FlexProps>;
    paidDate?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 442"?: PrimitiveOverrideProps<FlexProps>;
    paidFlagSwitch?: PrimitiveOverrideProps<SwitchFieldProps>;
    paidText?: PrimitiveOverrideProps<TextProps>;
    "Frame 499"?: PrimitiveOverrideProps<FlexProps>;
    titlePaidFlagUpdatedBy?: PrimitiveOverrideProps<TextProps>;
    paidFlagUpdatedBy?: PrimitiveOverrideProps<TextProps>;
    "Frame 500"?: PrimitiveOverrideProps<FlexProps>;
    titlePaidFlagUpdatedAt?: PrimitiveOverrideProps<TextProps>;
    paidFlagUpdatedAt?: PrimitiveOverrideProps<TextProps>;
    contentSlot?: PrimitiveOverrideProps<FlexProps>;
    "Frame 433"?: PrimitiveOverrideProps<FlexProps>;
    "\u6DFB\u4ED8\u8CC7\u6599"?: PrimitiveOverrideProps<TextProps>;
    attachmentListSlot?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type PaidDocumentReviewProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "large" | "small";
} & {
    overrides?: PaidDocumentReviewOverridesProps | undefined | null;
}>;
export default function PaidDocumentReview(props: PaidDocumentReviewProps): React.ReactElement;
