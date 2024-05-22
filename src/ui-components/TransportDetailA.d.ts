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
export declare type TransportDetailAOverridesProps = {
    TransportDetailA?: PrimitiveOverrideProps<FlexProps>;
    "Frame 472"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 471"?: PrimitiveOverrideProps<FlexProps>;
    transportType?: PrimitiveOverrideProps<TextProps>;
    "Frame 446"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 448"?: PrimitiveOverrideProps<FlexProps>;
    "\u6708\u65E5"?: PrimitiveOverrideProps<TextProps>;
    "Frame 442"?: PrimitiveOverrideProps<FlexProps>;
    transportDateSlot?: PrimitiveOverrideProps<FlexProps>;
    transportDate?: PrimitiveOverrideProps<TextFieldProps>;
    transportDateAlert?: CustomAlertProps;
    "Frame 454"?: PrimitiveOverrideProps<FlexProps>;
    "\u51FA\u5F35\u7406\u7531"?: PrimitiveOverrideProps<TextProps>;
    "Frame 4413854085"?: PrimitiveOverrideProps<FlexProps>;
    businessTripReason?: PrimitiveOverrideProps<TextFieldProps>;
    businessTripReasonAlert?: CustomAlertProps;
    "Frame 449"?: PrimitiveOverrideProps<FlexProps>;
    "\u6EDE\u5728\u6642\u9593"?: PrimitiveOverrideProps<TextProps>;
    "Frame 441414143"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 468"?: PrimitiveOverrideProps<FlexProps>;
    stayStartTimeSlot?: PrimitiveOverrideProps<FlexProps>;
    stayStartTime?: PrimitiveOverrideProps<TextFieldProps>;
    "\uFF5E"?: PrimitiveOverrideProps<TextProps>;
    stayEndTimeSlot?: PrimitiveOverrideProps<FlexProps>;
    stayEndTime?: PrimitiveOverrideProps<TextFieldProps>;
    stayTimeAlert?: CustomAlertProps;
    "Frame 452"?: PrimitiveOverrideProps<FlexProps>;
    "\u91D1\u984D"?: PrimitiveOverrideProps<TextProps>;
    "Frame 456"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 443"?: PrimitiveOverrideProps<FlexProps>;
    amount?: PrimitiveOverrideProps<TextFieldProps>;
    "\u5186"?: PrimitiveOverrideProps<TextProps>;
    amountAlert?: CustomAlertProps;
    "Frame 447"?: PrimitiveOverrideProps<FlexProps>;
    add?: PrimitiveOverrideProps<ViewProps>;
    Vector4242562?: PrimitiveOverrideProps<IconProps>;
    copy?: PrimitiveOverrideProps<ViewProps>;
    Vector2984393?: PrimitiveOverrideProps<IconProps>;
    delete?: PrimitiveOverrideProps<ViewProps>;
    Vector6092109?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type TransportDetailAProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "large" | "small";
} & {
    overrides?: TransportDetailAOverridesProps | undefined | null;
}>;
export default function TransportDetailA(props: TransportDetailAProps): React.ReactElement;
