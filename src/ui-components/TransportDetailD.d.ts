/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { CustomAlertProps } from "./CustomAlert";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TransportDetailDOverridesProps = {
    TransportDetailD?: PrimitiveOverrideProps<FlexProps>;
    "Frame 478"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 471"?: PrimitiveOverrideProps<FlexProps>;
    transportType?: PrimitiveOverrideProps<TextProps>;
    "Frame 446"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 448"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 505"?: PrimitiveOverrideProps<FlexProps>;
    "\u6708\u65E5"?: PrimitiveOverrideProps<TextProps>;
    transportDateTooltip?: PrimitiveOverrideProps<ViewProps>;
    Vector5943888?: PrimitiveOverrideProps<IconProps>;
    "Frame 442"?: PrimitiveOverrideProps<FlexProps>;
    transportDateSlot?: PrimitiveOverrideProps<FlexProps>;
    transportDate?: PrimitiveOverrideProps<TextFieldProps>;
    transportDateAlert?: CustomAlertProps;
    paymentDestinationFrame?: PrimitiveOverrideProps<FlexProps>;
    "\u652F\u6255\u5148"?: PrimitiveOverrideProps<TextProps>;
    "Frame 4415222439"?: PrimitiveOverrideProps<FlexProps>;
    paymentDestination?: PrimitiveOverrideProps<TextFieldProps>;
    paymentDestinationAlert?: CustomAlertProps;
    "Frame 449"?: PrimitiveOverrideProps<FlexProps>;
    "\u5185\u5BB9"?: PrimitiveOverrideProps<TextProps>;
    "Frame 441414773"?: PrimitiveOverrideProps<FlexProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    contentAlert?: CustomAlertProps;
    "Frame 452"?: PrimitiveOverrideProps<FlexProps>;
    "\u91D1\u984D"?: PrimitiveOverrideProps<TextProps>;
    "Frame 456"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 443"?: PrimitiveOverrideProps<FlexProps>;
    amount?: PrimitiveOverrideProps<TextFieldProps>;
    "\u5186"?: PrimitiveOverrideProps<TextProps>;
    amountAlert?: CustomAlertProps;
    "Frame 430"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 440"?: PrimitiveOverrideProps<FlexProps>;
    "\u8A73\u7D30\u8AAC\u660E"?: PrimitiveOverrideProps<TextProps>;
    attachment?: PrimitiveOverrideProps<ViewProps>;
    Vector1744957?: PrimitiveOverrideProps<IconProps>;
    attachmentSlot?: PrimitiveOverrideProps<ViewProps>;
    "Frame 447"?: PrimitiveOverrideProps<FlexProps>;
    add?: PrimitiveOverrideProps<ViewProps>;
    Vector4242574?: PrimitiveOverrideProps<IconProps>;
    copy?: PrimitiveOverrideProps<ViewProps>;
    Vector2984405?: PrimitiveOverrideProps<IconProps>;
    delete?: PrimitiveOverrideProps<ViewProps>;
    Vector6092121?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type TransportDetailDProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "large" | "small";
} & {
    overrides?: TransportDetailDOverridesProps | undefined | null;
}>;
export default function TransportDetailD(props: TransportDetailDProps): React.ReactElement;
