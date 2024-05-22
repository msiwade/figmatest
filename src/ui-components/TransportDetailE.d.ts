/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CheckboxFieldProps, FlexProps, IconProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { CustomAlertProps } from "./CustomAlert";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TransportDetailEOverridesProps = {
    TransportDetailE?: PrimitiveOverrideProps<FlexProps>;
    "Frame 479"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 471"?: PrimitiveOverrideProps<FlexProps>;
    transportType?: PrimitiveOverrideProps<TextProps>;
    "Frame 446"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 448"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 505"?: PrimitiveOverrideProps<FlexProps>;
    "\u6708\u65E5"?: PrimitiveOverrideProps<TextProps>;
    transportDateTooltip?: PrimitiveOverrideProps<ViewProps>;
    Vector5943896?: PrimitiveOverrideProps<IconProps>;
    "Frame 442414878"?: PrimitiveOverrideProps<FlexProps>;
    transportDateSlot?: PrimitiveOverrideProps<FlexProps>;
    transportDate?: PrimitiveOverrideProps<TextFieldProps>;
    transportDateAlert?: CustomAlertProps;
    "Frame 449"?: PrimitiveOverrideProps<FlexProps>;
    "\u884C\u304D\u5148"?: PrimitiveOverrideProps<TextProps>;
    "Frame 441414884"?: PrimitiveOverrideProps<FlexProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    contentAlert?: CustomAlertProps;
    "Frame 454"?: PrimitiveOverrideProps<FlexProps>;
    "\u8D70\u884C\u8DDD\u96E2"?: PrimitiveOverrideProps<TextProps>;
    "Frame 441414889"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 442414890"?: PrimitiveOverrideProps<FlexProps>;
    "\u7247\u9053"?: PrimitiveOverrideProps<TextProps>;
    mileage?: PrimitiveOverrideProps<TextFieldProps>;
    Km?: PrimitiveOverrideProps<TextProps>;
    mileageAlert?: CustomAlertProps;
    "Frame 452"?: PrimitiveOverrideProps<FlexProps>;
    "\u91D1\u984D"?: PrimitiveOverrideProps<TextProps>;
    "Frame 456"?: PrimitiveOverrideProps<FlexProps>;
    "\u8A73\u7D30"?: PrimitiveOverrideProps<TextProps>;
    "Frame 443"?: PrimitiveOverrideProps<FlexProps>;
    amount?: PrimitiveOverrideProps<TextFieldProps>;
    "\u5186"?: PrimitiveOverrideProps<TextProps>;
    roundTripFlag?: PrimitiveOverrideProps<CheckboxFieldProps>;
    amountAlert?: CustomAlertProps;
    "Frame 455"?: PrimitiveOverrideProps<FlexProps>;
    "\u7406\u7531"?: PrimitiveOverrideProps<TextProps>;
    "Frame 4417382381"?: PrimitiveOverrideProps<FlexProps>;
    businessTripReason?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 430"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 440"?: PrimitiveOverrideProps<FlexProps>;
    "\u8A73\u7D30\u8AAC\u660E"?: PrimitiveOverrideProps<TextProps>;
    attachment?: PrimitiveOverrideProps<ViewProps>;
    Vector1744969?: PrimitiveOverrideProps<IconProps>;
    attachmentSlot?: PrimitiveOverrideProps<ViewProps>;
    "Frame 447"?: PrimitiveOverrideProps<FlexProps>;
    add?: PrimitiveOverrideProps<ViewProps>;
    Vector4242578?: PrimitiveOverrideProps<IconProps>;
    copy?: PrimitiveOverrideProps<ViewProps>;
    Vector2984409?: PrimitiveOverrideProps<IconProps>;
    delete?: PrimitiveOverrideProps<ViewProps>;
    Vector6092125?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type TransportDetailEProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "large" | "small";
} & {
    overrides?: TransportDetailEOverridesProps | undefined | null;
}>;
export default function TransportDetailE(props: TransportDetailEProps): React.ReactElement;
