/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CheckboxFieldProps, FlexProps, IconProps, SelectFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { CustomAlertProps } from "./CustomAlert";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TransportDetailCOverridesProps = {
    TransportDetailC?: PrimitiveOverrideProps<FlexProps>;
    "Frame 476"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 471"?: PrimitiveOverrideProps<FlexProps>;
    transportType?: PrimitiveOverrideProps<TextProps>;
    "Frame 446"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 448"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 505"?: PrimitiveOverrideProps<FlexProps>;
    "\u6708\u65E5"?: PrimitiveOverrideProps<TextProps>;
    transportDateTooltip?: PrimitiveOverrideProps<ViewProps>;
    Vector5943879?: PrimitiveOverrideProps<IconProps>;
    "Frame 442414592"?: PrimitiveOverrideProps<FlexProps>;
    transportDateSlot?: PrimitiveOverrideProps<FlexProps>;
    transportDate?: PrimitiveOverrideProps<TextFieldProps>;
    transportDateAlert?: CustomAlertProps;
    "Frame 454"?: PrimitiveOverrideProps<FlexProps>;
    "\u652F\u6255\u5148"?: PrimitiveOverrideProps<TextProps>;
    "Frame 441984151"?: PrimitiveOverrideProps<FlexProps>;
    paymentDestination?: PrimitiveOverrideProps<TextFieldProps>;
    paymentDestinationAlert?: CustomAlertProps;
    "Frame 4565222409"?: PrimitiveOverrideProps<FlexProps>;
    "\u884C\u304D\u5148"?: PrimitiveOverrideProps<TextProps>;
    "Frame 4415222411"?: PrimitiveOverrideProps<FlexProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    contentAlert?: CustomAlertProps;
    "Frame 449"?: PrimitiveOverrideProps<FlexProps>;
    "\u7D4C\u8DEF"?: PrimitiveOverrideProps<TextProps>;
    "Frame 441414598"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 468"?: PrimitiveOverrideProps<FlexProps>;
    departure?: PrimitiveOverrideProps<TextFieldProps>;
    replace?: PrimitiveOverrideProps<ViewProps>;
    Vector414602?: PrimitiveOverrideProps<IconProps>;
    arrival?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 469"?: PrimitiveOverrideProps<FlexProps>;
    "\u7D4C\u7531"?: PrimitiveOverrideProps<TextProps>;
    transitPointSlot?: PrimitiveOverrideProps<FlexProps>;
    transitPoint?: PrimitiveOverrideProps<TextFieldProps>;
    addTransitPoint?: PrimitiveOverrideProps<ViewProps>;
    Vector414609?: PrimitiveOverrideProps<IconProps>;
    "Frame 470"?: PrimitiveOverrideProps<FlexProps>;
    routeAlert?: CustomAlertProps;
    "Frame 453"?: PrimitiveOverrideProps<FlexProps>;
    "\u5229\u7528\u6A5F\u95A2"?: PrimitiveOverrideProps<TextProps>;
    "Frame 442894129"?: PrimitiveOverrideProps<FlexProps>;
    userInstitution?: PrimitiveOverrideProps<SelectFieldProps>;
    userInstitutionAlert?: CustomAlertProps;
    "Frame 455"?: PrimitiveOverrideProps<FlexProps>;
    "\u652F\u6255\u65B9\u6CD5"?: PrimitiveOverrideProps<TextProps>;
    "Frame 442984179"?: PrimitiveOverrideProps<FlexProps>;
    ticketType?: PrimitiveOverrideProps<SelectFieldProps>;
    ticketTypeAlert?: CustomAlertProps;
    "Frame 452"?: PrimitiveOverrideProps<FlexProps>;
    "\u91D1\u984D"?: PrimitiveOverrideProps<TextProps>;
    "Frame 456414614"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 443"?: PrimitiveOverrideProps<FlexProps>;
    amount?: PrimitiveOverrideProps<TextFieldProps>;
    "\u5186"?: PrimitiveOverrideProps<TextProps>;
    roundTripFlag?: PrimitiveOverrideProps<CheckboxFieldProps>;
    amountAlert?: CustomAlertProps;
    "Frame 430"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 440"?: PrimitiveOverrideProps<FlexProps>;
    "\u8A73\u7D30\u8AAC\u660E"?: PrimitiveOverrideProps<TextProps>;
    attachment?: PrimitiveOverrideProps<ViewProps>;
    Vector1744939?: PrimitiveOverrideProps<IconProps>;
    attachmentSlot?: PrimitiveOverrideProps<ViewProps>;
    "Frame 447"?: PrimitiveOverrideProps<FlexProps>;
    add?: PrimitiveOverrideProps<ViewProps>;
    Vector4242570?: PrimitiveOverrideProps<IconProps>;
    copy?: PrimitiveOverrideProps<ViewProps>;
    Vector2984401?: PrimitiveOverrideProps<IconProps>;
    delete?: PrimitiveOverrideProps<ViewProps>;
    Vector6092117?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type TransportDetailCProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "large" | "small";
} & {
    overrides?: TransportDetailCOverridesProps | undefined | null;
}>;
export default function TransportDetailC(props: TransportDetailCProps): React.ReactElement;
