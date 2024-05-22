/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, IconProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { CustomAlertProps } from "./CustomAlert";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UpdateAttachmentFormOverridesProps = {
    UpdateAttachmentForm?: PrimitiveOverrideProps<FlexProps>;
    "Frame 466"?: PrimitiveOverrideProps<ViewProps>;
    close?: PrimitiveOverrideProps<ViewProps>;
    Vector6833712?: PrimitiveOverrideProps<IconProps>;
    title?: PrimitiveOverrideProps<TextProps>;
    "Frame 488"?: PrimitiveOverrideProps<FlexProps>;
    "\u4F5C\u6210\u8005"?: PrimitiveOverrideProps<TextProps>;
    nameOfCreator?: PrimitiveOverrideProps<TextProps>;
    "Frame 489"?: PrimitiveOverrideProps<FlexProps>;
    "\u4F9D\u983C\u533A\u5206"?: PrimitiveOverrideProps<TextProps>;
    "Frame 506"?: PrimitiveOverrideProps<FlexProps>;
    requestDiv?: PrimitiveOverrideProps<SelectFieldProps>;
    requestDivText?: PrimitiveOverrideProps<TextProps>;
    "Frame 495"?: PrimitiveOverrideProps<FlexProps>;
    "\u30D5\u30A1\u30A4\u30EB\u7A2E\u5225"?: PrimitiveOverrideProps<TextProps>;
    fileType?: PrimitiveOverrideProps<SelectFieldProps>;
    "Frame 490"?: PrimitiveOverrideProps<FlexProps>;
    "\u53D6\u5F15\u5E74\u6708\u65E5"?: PrimitiveOverrideProps<TextProps>;
    "Frame 4926833727"?: PrimitiveOverrideProps<FlexProps>;
    transactionDateSlot?: PrimitiveOverrideProps<FlexProps>;
    transactionDate?: PrimitiveOverrideProps<TextFieldProps>;
    transactionDateAlert?: CustomAlertProps;
    "Frame 491"?: PrimitiveOverrideProps<FlexProps>;
    "\u53D6\u5F15\u5148"?: PrimitiveOverrideProps<TextProps>;
    "Frame 4936833733"?: PrimitiveOverrideProps<FlexProps>;
    paymentDestination?: PrimitiveOverrideProps<TextFieldProps>;
    paymentDestinationAlert?: CustomAlertProps;
    "Frame 4926833736"?: PrimitiveOverrideProps<FlexProps>;
    "\u91D1\u984D"?: PrimitiveOverrideProps<TextProps>;
    "Frame 4936833738"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 4946833739"?: PrimitiveOverrideProps<FlexProps>;
    amount?: PrimitiveOverrideProps<TextFieldProps>;
    "\u5186"?: PrimitiveOverrideProps<TextProps>;
    amountAlert?: CustomAlertProps;
    "Frame 496"?: PrimitiveOverrideProps<FlexProps>;
    "\u6539\u8A02\u7406\u7531"?: PrimitiveOverrideProps<TextProps>;
    "Frame 4936833950"?: PrimitiveOverrideProps<FlexProps>;
    reason?: PrimitiveOverrideProps<TextAreaFieldProps>;
    reasonAlert?: CustomAlertProps;
    "Frame 4936833743"?: PrimitiveOverrideProps<FlexProps>;
    "\u5099\u8003"?: PrimitiveOverrideProps<TextProps>;
    remarks?: PrimitiveOverrideProps<TextAreaFieldProps>;
    "Frame 430"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 440"?: PrimitiveOverrideProps<FlexProps>;
    "\u6DFB\u4ED8\u8CC7\u6599"?: PrimitiveOverrideProps<TextProps>;
    attachment?: PrimitiveOverrideProps<ViewProps>;
    Vector6833750?: PrimitiveOverrideProps<IconProps>;
    "Frame 498"?: PrimitiveOverrideProps<FlexProps>;
    attachmentListSlot?: PrimitiveOverrideProps<ViewProps>;
    attachmentAlert?: CustomAlertProps;
    "Frame 4946833754"?: PrimitiveOverrideProps<FlexProps>;
    SubmitButton?: PrimitiveOverrideProps<ButtonProps>;
    CancelButton?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type UpdateAttachmentFormProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "large" | "small";
} & {
    overrides?: UpdateAttachmentFormOverridesProps | undefined | null;
}>;
export default function UpdateAttachmentForm(props: UpdateAttachmentFormProps): React.ReactElement;
