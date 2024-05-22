/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, ButtonProps, FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DocumentReviewOverridesProps = {
    DocumentReview?: PrimitiveOverrideProps<FlexProps>;
    "Frame 419"?: PrimitiveOverrideProps<ViewProps>;
    FileLinkFrame?: PrimitiveOverrideProps<FlexProps>;
    "\u30D5\u30A1\u30A4\u30EB\u9023\u643A\uFF1A"?: PrimitiveOverrideProps<TextProps>;
    fileLinkResult?: PrimitiveOverrideProps<BadgeProps>;
    "Frame 43236692857"?: PrimitiveOverrideProps<FlexProps>;
    "\u627F\u8A8D\u72B6\u6CC1\uFF1A"?: PrimitiveOverrideProps<TextProps>;
    status?: PrimitiveOverrideProps<BadgeProps>;
    close?: PrimitiveOverrideProps<ViewProps>;
    titleDocumentReview?: PrimitiveOverrideProps<TextProps>;
    "Frame 437"?: PrimitiveOverrideProps<FlexProps>;
    "\u4F9D\u983C\u30E1\u30FC\u30EB"?: PrimitiveOverrideProps<TextProps>;
    requestEmailText?: PrimitiveOverrideProps<TextProps>;
    "Frame 43236822743"?: PrimitiveOverrideProps<FlexProps>;
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
    "\u91D1\u984D"?: PrimitiveOverrideProps<TextProps>;
    amount?: PrimitiveOverrideProps<TextProps>;
    "\u5186\uFF08\u7A0E\u8FBC\uFF09"?: PrimitiveOverrideProps<TextProps>;
    "Frame 434"?: PrimitiveOverrideProps<ViewProps>;
    "\u5B9F\u65BD\u6642\u671F"?: PrimitiveOverrideProps<TextProps>;
    startDate?: PrimitiveOverrideProps<TextProps>;
    contentSlot?: PrimitiveOverrideProps<FlexProps>;
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
export declare type DocumentReviewProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "large" | "small";
} & {
    overrides?: DocumentReviewOverridesProps | undefined | null;
}>;
export default function DocumentReview(props: DocumentReviewProps): React.ReactElement;
