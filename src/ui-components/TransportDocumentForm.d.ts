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
export declare type TransportDocumentFormOverridesProps = {
    TransportDocumentForm?: PrimitiveOverrideProps<FlexProps>;
    "Frame 419"?: PrimitiveOverrideProps<ViewProps>;
    titleDocumentForm?: PrimitiveOverrideProps<TextProps>;
    close?: PrimitiveOverrideProps<ViewProps>;
    "Frame 420"?: PrimitiveOverrideProps<FlexProps>;
    "\u7533\u8ACB\u8005"?: PrimitiveOverrideProps<TextProps>;
    createdBy?: PrimitiveOverrideProps<TextProps>;
    "Frame 437"?: PrimitiveOverrideProps<FlexProps>;
    "\u627F\u8A8D\u30EB\u30FC\u30C8\u9078\u629E"?: PrimitiveOverrideProps<TextProps>;
    "Frame 441423914"?: PrimitiveOverrideProps<FlexProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
    workflowAlert?: CustomAlertProps;
    "Frame 439"?: PrimitiveOverrideProps<FlexProps>;
    "\u5E74\u5EA6"?: PrimitiveOverrideProps<TextProps>;
    "Frame 441874108"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 488"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 497"?: PrimitiveOverrideProps<FlexProps>;
    fiscalYearSlot?: PrimitiveOverrideProps<FlexProps>;
    fiscalYear?: PrimitiveOverrideProps<TextFieldProps>;
    "\u5E74"?: PrimitiveOverrideProps<TextProps>;
    "Frame 498"?: PrimitiveOverrideProps<FlexProps>;
    fiscalMonth?: PrimitiveOverrideProps<SelectFieldProps>;
    "\u5EA6"?: PrimitiveOverrideProps<TextProps>;
    "\u203B\u6CE8\u8A18"?: PrimitiveOverrideProps<TextProps>;
    fiscalYearAlert?: CustomAlertProps;
    "Frame 426"?: PrimitiveOverrideProps<FlexProps>;
    "\u4EF6\u540D"?: PrimitiveOverrideProps<TextProps>;
    "Frame 441423919"?: PrimitiveOverrideProps<FlexProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 436"?: PrimitiveOverrideProps<FlexProps>;
    "\u7533\u8ACB\u65E5"?: PrimitiveOverrideProps<TextProps>;
    "Frame 441423924"?: PrimitiveOverrideProps<FlexProps>;
    startDateSlot?: PrimitiveOverrideProps<FlexProps>;
    startDate?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 438"?: PrimitiveOverrideProps<FlexProps>;
    transportContentSlot?: PrimitiveOverrideProps<FlexProps>;
    "Frame 432"?: PrimitiveOverrideProps<FlexProps>;
    AddButton?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Frame 431"?: PrimitiveOverrideProps<FlexProps>;
    "\u5408\u8A08\u91D1\u984D"?: PrimitiveOverrideProps<TextProps>;
    "Frame 442"?: PrimitiveOverrideProps<FlexProps>;
    amount?: PrimitiveOverrideProps<TextProps>;
    "\u5186"?: PrimitiveOverrideProps<TextProps>;
    "Frame 429"?: PrimitiveOverrideProps<FlexProps>;
    SubmitButton?: PrimitiveOverrideProps<ButtonProps>;
    CancelButton?: PrimitiveOverrideProps<ButtonProps>;
    SaveButton?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type TransportDocumentFormProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "large" | "small";
} & {
    overrides?: TransportDocumentFormOverridesProps | undefined | null;
}>;
export default function TransportDocumentForm(props: TransportDocumentFormProps): React.ReactElement;
