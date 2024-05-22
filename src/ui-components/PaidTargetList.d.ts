/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PaidTargetListOverridesProps = {
    PaidTargetList?: PrimitiveOverrideProps<FlexProps>;
    cell2074441?: PrimitiveOverrideProps<FlexProps>;
    applicationNoText?: PrimitiveOverrideProps<TextProps>;
    documentId?: PrimitiveOverrideProps<TextProps>;
    cell2074444?: PrimitiveOverrideProps<FlexProps>;
    "\u627F\u8A8D\u756A\u53F7"?: PrimitiveOverrideProps<TextProps>;
    approvalNo?: PrimitiveOverrideProps<TextProps>;
    cell2074447?: PrimitiveOverrideProps<FlexProps>;
    "\u4EF6\u540D"?: PrimitiveOverrideProps<TextProps>;
    title?: PrimitiveOverrideProps<TextProps>;
    cell2074450?: PrimitiveOverrideProps<FlexProps>;
    "\u7533\u8ACB\u65E5"?: PrimitiveOverrideProps<TextProps>;
    startDate?: PrimitiveOverrideProps<TextProps>;
    cell2074453?: PrimitiveOverrideProps<FlexProps>;
    "\u8D77\u6848\u8005"?: PrimitiveOverrideProps<TextProps>;
    createdBy?: PrimitiveOverrideProps<TextProps>;
    cell2074456?: PrimitiveOverrideProps<FlexProps>;
    "\u91D1\u984D"?: PrimitiveOverrideProps<TextProps>;
    amount?: PrimitiveOverrideProps<TextProps>;
    cell4122095?: PrimitiveOverrideProps<FlexProps>;
    "\u652F\u6255\u65E5"?: PrimitiveOverrideProps<TextProps>;
    paidDate?: PrimitiveOverrideProps<TextProps>;
    cell2074459?: PrimitiveOverrideProps<FlexProps>;
    "\u652F\u6255\u72B6\u6CC1"?: PrimitiveOverrideProps<TextProps>;
    paidFlag?: PrimitiveOverrideProps<BadgeProps>;
    "Frame 433"?: PrimitiveOverrideProps<FlexProps>;
    ReviewButton?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type PaidTargetListProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "large" | "small";
} & {
    overrides?: PaidTargetListOverridesProps | undefined | null;
}>;
export default function PaidTargetList(props: PaidTargetListProps): React.ReactElement;
