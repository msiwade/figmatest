/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, IconProps, SelectFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { CustomAlertProps } from "./CustomAlert";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PaymentDocumentFormOverridesProps = {
    PaymentDocumentForm?: PrimitiveOverrideProps<FlexProps>;
    "Frame 419"?: PrimitiveOverrideProps<ViewProps>;
    titleDocumentForm?: PrimitiveOverrideProps<TextProps>;
    close?: PrimitiveOverrideProps<ViewProps>;
    "Frame 420"?: PrimitiveOverrideProps<FlexProps>;
    "\u7533\u8ACB\u8005"?: PrimitiveOverrideProps<TextProps>;
    createdBy?: PrimitiveOverrideProps<TextProps>;
    "Frame 438"?: PrimitiveOverrideProps<FlexProps>;
    "\u4F9D\u983C\u30E1\u30FC\u30EB"?: PrimitiveOverrideProps<TextProps>;
    "Frame 4417473078"?: PrimitiveOverrideProps<FlexProps>;
    requestEmailSelect?: PrimitiveOverrideProps<SelectFieldProps>;
    requestEmailSelectAlert?: CustomAlertProps;
    "Frame 437"?: PrimitiveOverrideProps<FlexProps>;
    "\u627F\u8A8D\u30EB\u30FC\u30C8\u9078\u629E"?: PrimitiveOverrideProps<TextProps>;
    "Frame 4411123910"?: PrimitiveOverrideProps<FlexProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
    workflowAlert?: CustomAlertProps;
    "Frame 426"?: PrimitiveOverrideProps<FlexProps>;
    "\u4EF6\u540D"?: PrimitiveOverrideProps<TextProps>;
    "Frame 4411123918"?: PrimitiveOverrideProps<FlexProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    titleAlert?: CustomAlertProps;
    "Frame 436"?: PrimitiveOverrideProps<FlexProps>;
    "\u7533\u8ACB\u65E5"?: PrimitiveOverrideProps<TextProps>;
    "Frame 4411123936"?: PrimitiveOverrideProps<FlexProps>;
    startDateSlot?: PrimitiveOverrideProps<FlexProps>;
    startDate?: PrimitiveOverrideProps<TextFieldProps>;
    startDateAlert?: CustomAlertProps;
    "Frame 432"?: PrimitiveOverrideProps<FlexProps>;
    "\u8CFC\u5165\u5185\u5BB9"?: PrimitiveOverrideProps<TextProps>;
    paymentContentSlot?: PrimitiveOverrideProps<FlexProps>;
    "Frame 431"?: PrimitiveOverrideProps<FlexProps>;
    "\u5408\u8A08\u91D1\u984D"?: PrimitiveOverrideProps<TextProps>;
    "Frame 442"?: PrimitiveOverrideProps<FlexProps>;
    amount?: PrimitiveOverrideProps<TextProps>;
    "\u5186"?: PrimitiveOverrideProps<TextProps>;
    "Frame 430"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 440"?: PrimitiveOverrideProps<FlexProps>;
    "\u8A73\u7D30\u8AAC\u660E"?: PrimitiveOverrideProps<TextProps>;
    attachmentTooltip?: PrimitiveOverrideProps<ViewProps>;
    Vector6192669?: PrimitiveOverrideProps<IconProps>;
    attachment?: PrimitiveOverrideProps<ViewProps>;
    Vector1123979?: PrimitiveOverrideProps<IconProps>;
    attachmentListSlot?: PrimitiveOverrideProps<ViewProps>;
    "Frame 429"?: PrimitiveOverrideProps<FlexProps>;
    SubmitButton?: PrimitiveOverrideProps<ButtonProps>;
    CancelButton?: PrimitiveOverrideProps<ButtonProps>;
    SaveButton?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type PaymentDocumentFormProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "large" | "small";
} & {
    overrides?: PaymentDocumentFormOverridesProps | undefined | null;
}>;
export default function PaymentDocumentForm(props: PaymentDocumentFormProps): React.ReactElement;
