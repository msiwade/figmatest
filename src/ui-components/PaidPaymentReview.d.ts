/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, FlexProps, SwitchFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PaidPaymentReviewOverridesProps = {
    PaidPaymentReview?: PrimitiveOverrideProps<FlexProps>;
    "Frame 419"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 4323307558"?: PrimitiveOverrideProps<FlexProps>;
    "\u652F\u6255\u72B6\u6CC1\uFF1A"?: PrimitiveOverrideProps<TextProps>;
    paidFlag?: PrimitiveOverrideProps<BadgeProps>;
    close?: PrimitiveOverrideProps<ViewProps>;
    titleDocumentReview?: PrimitiveOverrideProps<TextProps>;
    "Frame 502"?: PrimitiveOverrideProps<FlexProps>;
    "\u4F9D\u983C\u30E1\u30FC\u30EB"?: PrimitiveOverrideProps<TextProps>;
    requestEmailText?: PrimitiveOverrideProps<TextProps>;
    "Frame 4323307563"?: PrimitiveOverrideProps<FlexProps>;
    "\u652F\u6255\u4F9D\u983C\u66F8\u756A\u53F7"?: PrimitiveOverrideProps<TextProps>;
    applicationNo?: PrimitiveOverrideProps<TextProps>;
    "Frame 435"?: PrimitiveOverrideProps<FlexProps>;
    "\u627F\u8A8D\u756A\u53F7"?: PrimitiveOverrideProps<TextProps>;
    approvalNo?: PrimitiveOverrideProps<TextProps>;
    "Frame 420"?: PrimitiveOverrideProps<FlexProps>;
    "\u4F9D\u983C\u8005"?: PrimitiveOverrideProps<TextProps>;
    createdBy?: PrimitiveOverrideProps<TextProps>;
    "Frame 426"?: PrimitiveOverrideProps<FlexProps>;
    "\u4EF6\u540D"?: PrimitiveOverrideProps<TextProps>;
    title?: PrimitiveOverrideProps<TextProps>;
    "Frame 430"?: PrimitiveOverrideProps<FlexProps>;
    "\u7533\u8ACB\u65E5"?: PrimitiveOverrideProps<TextProps>;
    createdAt?: PrimitiveOverrideProps<TextProps>;
    "Frame 436"?: PrimitiveOverrideProps<FlexProps>;
    "\u53D7\u4ED8\u65E5"?: PrimitiveOverrideProps<TextProps>;
    recievedAt?: PrimitiveOverrideProps<TextProps>;
    "Frame 431"?: PrimitiveOverrideProps<FlexProps>;
    titleClosedAt?: PrimitiveOverrideProps<TextProps>;
    closedAt?: PrimitiveOverrideProps<TextProps>;
    "Frame 427"?: PrimitiveOverrideProps<FlexProps>;
    "\u7A1F\u8B70\u91D1\u984D"?: PrimitiveOverrideProps<TextProps>;
    amount?: PrimitiveOverrideProps<TextProps>;
    "\u5186\uFF08\u7A0E\u8FBC\uFF093307587"?: PrimitiveOverrideProps<TextProps>;
    "Frame 501"?: PrimitiveOverrideProps<FlexProps>;
    "\u652F\u6255\u91D1\u984D"?: PrimitiveOverrideProps<TextProps>;
    paymentAmount?: PrimitiveOverrideProps<TextProps>;
    "\u5186\uFF08\u7A0E\u8FBC\uFF097022382"?: PrimitiveOverrideProps<TextProps>;
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
    "Frame 437"?: PrimitiveOverrideProps<FlexProps>;
    "\u8CFC\u5165\u5185\u5BB9"?: PrimitiveOverrideProps<TextProps>;
    paymentContentSlot?: PrimitiveOverrideProps<FlexProps>;
    "Frame 433"?: PrimitiveOverrideProps<FlexProps>;
    "\u6DFB\u4ED8\u8CC7\u6599"?: PrimitiveOverrideProps<TextProps>;
    attachmentListSlot?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type PaidPaymentReviewProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "large" | "small";
} & {
    overrides?: PaidPaymentReviewOverridesProps | undefined | null;
}>;
export default function PaidPaymentReview(props: PaidPaymentReviewProps): React.ReactElement;
