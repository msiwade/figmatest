/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextAreaFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { CustomAlertProps } from "./CustomAlert";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PaymentContentCardOverridesProps = {
    PaymentContentCard?: PrimitiveOverrideProps<FlexProps>;
    "Frame 446"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 448"?: PrimitiveOverrideProps<FlexProps>;
    "\u8CFC\u5165\u65E5"?: PrimitiveOverrideProps<TextProps>;
    "Frame 4411132889"?: PrimitiveOverrideProps<FlexProps>;
    paymentDateSlot?: PrimitiveOverrideProps<FlexProps>;
    paymentDate?: PrimitiveOverrideProps<TextFieldProps>;
    paymentDateAlert?: CustomAlertProps;
    "Frame 449"?: PrimitiveOverrideProps<FlexProps>;
    "\u652F\u6255\u5148"?: PrimitiveOverrideProps<TextProps>;
    "Frame 4411532904"?: PrimitiveOverrideProps<FlexProps>;
    paymentDestination?: PrimitiveOverrideProps<TextFieldProps>;
    paymentDestinationAlert?: CustomAlertProps;
    "Frame 450"?: PrimitiveOverrideProps<FlexProps>;
    "\u5185\u5BB9"?: PrimitiveOverrideProps<TextProps>;
    "Frame 455"?: PrimitiveOverrideProps<FlexProps>;
    content?: PrimitiveOverrideProps<TextAreaFieldProps>;
    contentAlert?: CustomAlertProps;
    "Frame 451"?: PrimitiveOverrideProps<FlexProps>;
    "\u91D1\u984D"?: PrimitiveOverrideProps<TextProps>;
    "Frame 456"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 442"?: PrimitiveOverrideProps<FlexProps>;
    paymentAmount?: PrimitiveOverrideProps<TextFieldProps>;
    "\u5186"?: PrimitiveOverrideProps<TextProps>;
    paymentAmountAlert?: CustomAlertProps;
    "Frame 452"?: PrimitiveOverrideProps<FlexProps>;
    "\u4E8B\u7531"?: PrimitiveOverrideProps<TextProps>;
    "Frame 457"?: PrimitiveOverrideProps<FlexProps>;
    reason?: PrimitiveOverrideProps<TextFieldProps>;
    reasonAlert?: CustomAlertProps;
    "Frame 430"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 440"?: PrimitiveOverrideProps<FlexProps>;
    "\u8A73\u7D30\u8AAC\u660E"?: PrimitiveOverrideProps<TextProps>;
    attachmentTooltip?: PrimitiveOverrideProps<ViewProps>;
    Vector6192665?: PrimitiveOverrideProps<IconProps>;
    attachment?: PrimitiveOverrideProps<ViewProps>;
    Vector6052074?: PrimitiveOverrideProps<IconProps>;
    attachmentSlot?: PrimitiveOverrideProps<ViewProps>;
    "Frame 447"?: PrimitiveOverrideProps<FlexProps>;
    add?: PrimitiveOverrideProps<ViewProps>;
    Vector6092087?: PrimitiveOverrideProps<IconProps>;
    copy?: PrimitiveOverrideProps<ViewProps>;
    Vector6052077?: PrimitiveOverrideProps<IconProps>;
    delete?: PrimitiveOverrideProps<ViewProps>;
    Vector6092135?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type PaymentContentCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "large" | "small";
} & {
    overrides?: PaymentContentCardOverridesProps | undefined | null;
}>;
export default function PaymentContentCard(props: PaymentContentCardProps): React.ReactElement;
