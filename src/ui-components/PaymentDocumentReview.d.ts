/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, ButtonProps, FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PaymentDocumentReviewOverridesProps = {
    PaymentDocumentReview?: PrimitiveOverrideProps<FlexProps>;
    "Frame 419"?: PrimitiveOverrideProps<ViewProps>;
    FileLinkFrame?: PrimitiveOverrideProps<FlexProps>;
    "\u30D5\u30A1\u30A4\u30EB\u9023\u643A\uFF1A"?: PrimitiveOverrideProps<TextProps>;
    fileLinkResult?: PrimitiveOverrideProps<BadgeProps>;
    "Frame 4321712928"?: PrimitiveOverrideProps<FlexProps>;
    "\u627F\u8A8D\u72B6\u6CC1\uFF1A"?: PrimitiveOverrideProps<TextProps>;
    status?: PrimitiveOverrideProps<BadgeProps>;
    close?: PrimitiveOverrideProps<ViewProps>;
    titleDocumentReview?: PrimitiveOverrideProps<TextProps>;
    "Frame 438"?: PrimitiveOverrideProps<FlexProps>;
    "\u4F9D\u983C\u30E1\u30FC\u30EB"?: PrimitiveOverrideProps<TextProps>;
    requestEmailText?: PrimitiveOverrideProps<TextProps>;
    "Frame 4321712933"?: PrimitiveOverrideProps<FlexProps>;
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
    "\u5408\u8A08\u91D1\u984D"?: PrimitiveOverrideProps<TextProps>;
    amount?: PrimitiveOverrideProps<TextProps>;
    "\u5186\uFF08\u7A0E\u8FBC\uFF09"?: PrimitiveOverrideProps<TextProps>;
    "Frame 434"?: PrimitiveOverrideProps<FlexProps>;
    "\u5B9F\u65BD\u6642\u671F"?: PrimitiveOverrideProps<TextProps>;
    startDate?: PrimitiveOverrideProps<TextProps>;
    "Frame 437"?: PrimitiveOverrideProps<FlexProps>;
    "\u8CFC\u5165\u5185\u5BB9"?: PrimitiveOverrideProps<TextProps>;
    paymentContentSlot?: PrimitiveOverrideProps<FlexProps>;
    "Frame 433"?: PrimitiveOverrideProps<FlexProps>;
    "\u6DFB\u4ED8\u8CC7\u6599"?: PrimitiveOverrideProps<TextProps>;
    attachmentListSlot?: PrimitiveOverrideProps<ViewProps>;
    "Frame 429"?: PrimitiveOverrideProps<FlexProps>;
    RejectButton?: PrimitiveOverrideProps<ButtonProps>;
    ModifyButton?: PrimitiveOverrideProps<ButtonProps>;
    CopyButton?: PrimitiveOverrideProps<ButtonProps>;
    AddAttachmentButton?: PrimitiveOverrideProps<ButtonProps>;
    DeleteButton?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type PaymentDocumentReviewProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "large" | "small";
} & {
    overrides?: PaymentDocumentReviewOverridesProps | undefined | null;
}>;
export default function PaymentDocumentReview(props: PaymentDocumentReviewProps): React.ReactElement;
