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
export declare type DocumentFormOverridesProps = {
    DocumentForm?: PrimitiveOverrideProps<FlexProps>;
    "Frame 419"?: PrimitiveOverrideProps<ViewProps>;
    titleDocumentForm?: PrimitiveOverrideProps<TextProps>;
    close?: PrimitiveOverrideProps<ViewProps>;
    "Frame 420"?: PrimitiveOverrideProps<FlexProps>;
    "\u8D77\u6848\u8005"?: PrimitiveOverrideProps<TextProps>;
    createdBy?: PrimitiveOverrideProps<TextProps>;
    "Frame 439"?: PrimitiveOverrideProps<FlexProps>;
    "\u4F9D\u983C\u30E1\u30FC\u30EB"?: PrimitiveOverrideProps<TextProps>;
    "Frame 44137942772"?: PrimitiveOverrideProps<FlexProps>;
    requestEmailSelect?: PrimitiveOverrideProps<SelectFieldProps>;
    requestEmailSelectAlert?: CustomAlertProps;
    "Frame 437"?: PrimitiveOverrideProps<FlexProps>;
    "\u627F\u8A8D\u30EB\u30FC\u30C8\u9078\u629E"?: PrimitiveOverrideProps<TextProps>;
    "Frame 4417462405"?: PrimitiveOverrideProps<FlexProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
    workflowAlert?: CustomAlertProps;
    "Frame 426"?: PrimitiveOverrideProps<FlexProps>;
    "\u4EF6\u540D"?: PrimitiveOverrideProps<TextProps>;
    "Frame 44137502844"?: PrimitiveOverrideProps<FlexProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    titleAlert?: CustomAlertProps;
    "Frame 431"?: PrimitiveOverrideProps<FlexProps>;
    "\u91D1\u984D"?: PrimitiveOverrideProps<TextProps>;
    "Frame 44137532863"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 442"?: PrimitiveOverrideProps<FlexProps>;
    amount?: PrimitiveOverrideProps<TextFieldProps>;
    "\u5186"?: PrimitiveOverrideProps<TextProps>;
    amountAlert?: CustomAlertProps;
    "Frame 436"?: PrimitiveOverrideProps<FlexProps>;
    "\u5B9F\u65BD\u6642\u671F"?: PrimitiveOverrideProps<TextProps>;
    "Frame 44137672776"?: PrimitiveOverrideProps<FlexProps>;
    startDateSlot?: PrimitiveOverrideProps<FlexProps>;
    startDate?: PrimitiveOverrideProps<TextFieldProps>;
    startDateAlert?: CustomAlertProps;
    "Frame 432"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 508"?: PrimitiveOverrideProps<FlexProps>;
    "\u652F\u6255\u5148"?: PrimitiveOverrideProps<TextProps>;
    paymentDestinationTooltip?: PrimitiveOverrideProps<ViewProps>;
    Vector7722420?: PrimitiveOverrideProps<IconProps>;
    "Frame 44137532877"?: PrimitiveOverrideProps<FlexProps>;
    paymentDestination?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 438"?: PrimitiveOverrideProps<FlexProps>;
    "\u76EE\u7684"?: PrimitiveOverrideProps<TextProps>;
    "Frame 4416315021"?: PrimitiveOverrideProps<FlexProps>;
    purpose?: PrimitiveOverrideProps<TextFieldProps>;
    purposeAlert?: CustomAlertProps;
    "Frame 434"?: PrimitiveOverrideProps<FlexProps>;
    "\u52B9\u679C"?: PrimitiveOverrideProps<TextProps>;
    "Frame 44137672748"?: PrimitiveOverrideProps<FlexProps>;
    effect?: PrimitiveOverrideProps<TextAreaFieldProps>;
    effectAlert?: CustomAlertProps;
    "Frame 433"?: PrimitiveOverrideProps<FlexProps>;
    "\u8A73\u7D30"?: PrimitiveOverrideProps<TextProps>;
    "Frame 44137532891"?: PrimitiveOverrideProps<FlexProps>;
    description?: PrimitiveOverrideProps<TextAreaFieldProps>;
    descriptionAlert?: CustomAlertProps;
    "Frame 435"?: PrimitiveOverrideProps<FlexProps>;
    "\u6295\u8CC7\u52B9\u679C"?: PrimitiveOverrideProps<TextProps>;
    "Frame 44137672762"?: PrimitiveOverrideProps<FlexProps>;
    roi?: PrimitiveOverrideProps<TextAreaFieldProps>;
    roiAlert?: CustomAlertProps;
    "Frame 430"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 440"?: PrimitiveOverrideProps<FlexProps>;
    "\u8A73\u7D30\u8AAC\u660E"?: PrimitiveOverrideProps<TextProps>;
    attachment?: PrimitiveOverrideProps<ViewProps>;
    Vector37242824?: PrimitiveOverrideProps<IconProps>;
    attachmentListSlot?: PrimitiveOverrideProps<ViewProps>;
    "Frame 429"?: PrimitiveOverrideProps<FlexProps>;
    SubmitButton?: PrimitiveOverrideProps<ButtonProps>;
    CancelButton?: PrimitiveOverrideProps<ButtonProps>;
    SaveButton?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type DocumentFormProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "large" | "small";
} & {
    overrides?: DocumentFormOverridesProps | undefined | null;
}>;
export default function DocumentForm(props: DocumentFormProps): React.ReactElement;
