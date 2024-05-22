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
export declare type TransportDetailBOverridesProps = {
    TransportDetailB?: PrimitiveOverrideProps<FlexProps>;
    "Frame 474"?: PrimitiveOverrideProps<FlexProps>;
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
    "Frame 4413854113"?: PrimitiveOverrideProps<FlexProps>;
    businessTripReason?: PrimitiveOverrideProps<TextFieldProps>;
    businessTripReasonAlert?: CustomAlertProps;
    "Frame 453"?: PrimitiveOverrideProps<FlexProps>;
    "\u6EDE\u5728\u671F\u9593"?: PrimitiveOverrideProps<TextProps>;
    "Frame 4411454317"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 4681454318"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 489"?: PrimitiveOverrideProps<FlexProps>;
    "\u6EDE\u5728\u671F\u9593\uFF08\u958B\u59CB\uFF09"?: PrimitiveOverrideProps<TextProps>;
    stayStartDateSlot?: PrimitiveOverrideProps<FlexProps>;
    stayStartDate?: PrimitiveOverrideProps<TextFieldProps>;
    "\uFF5E"?: PrimitiveOverrideProps<TextProps>;
    "Frame 490"?: PrimitiveOverrideProps<FlexProps>;
    "\u6EDE\u5728\u671F\u9593\uFF08\u7D42\u4E86\uFF09"?: PrimitiveOverrideProps<TextProps>;
    stayEndDateSlot?: PrimitiveOverrideProps<FlexProps>;
    stayEndDate?: PrimitiveOverrideProps<TextFieldProps>;
    stayDateAlert?: CustomAlertProps;
    "Frame 449"?: PrimitiveOverrideProps<FlexProps>;
    "\u6EDE\u5728\u65E5\u6570"?: PrimitiveOverrideProps<TextProps>;
    "Frame 441414482"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 468414483"?: PrimitiveOverrideProps<FlexProps>;
    stayDuration?: PrimitiveOverrideProps<TextFieldProps>;
    "\u65E5"?: PrimitiveOverrideProps<TextProps>;
    stayDurationAlert?: CustomAlertProps;
    "Frame 452"?: PrimitiveOverrideProps<FlexProps>;
    "\u91D1\u984D"?: PrimitiveOverrideProps<TextProps>;
    "Frame 441414489"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 443"?: PrimitiveOverrideProps<FlexProps>;
    amount?: PrimitiveOverrideProps<TextFieldProps>;
    "\u5186"?: PrimitiveOverrideProps<TextProps>;
    amountAlert?: CustomAlertProps;
    "Frame 447"?: PrimitiveOverrideProps<FlexProps>;
    add?: PrimitiveOverrideProps<ViewProps>;
    Vector4242566?: PrimitiveOverrideProps<IconProps>;
    copy?: PrimitiveOverrideProps<ViewProps>;
    Vector2984397?: PrimitiveOverrideProps<IconProps>;
    delete?: PrimitiveOverrideProps<ViewProps>;
    Vector6092113?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type TransportDetailBProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "large" | "small";
} & {
    overrides?: TransportDetailBOverridesProps | undefined | null;
}>;
export default function TransportDetailB(props: TransportDetailBProps): React.ReactElement;
