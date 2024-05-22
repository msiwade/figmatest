/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReviewCardOverridesProps = {
    ReviewCard?: PrimitiveOverrideProps<FlexProps>;
    "Frame 467"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 444"?: PrimitiveOverrideProps<FlexProps>;
    orderAndRole?: PrimitiveOverrideProps<TextProps>;
    "Frame 445"?: PrimitiveOverrideProps<FlexProps>;
    status?: PrimitiveOverrideProps<BadgeProps>;
    "Frame 434"?: PrimitiveOverrideProps<FlexProps>;
    cell36722870?: PrimitiveOverrideProps<FlexProps>;
    title?: PrimitiveOverrideProps<TextProps>;
    ":"?: PrimitiveOverrideProps<TextProps>;
    reviewedBy?: PrimitiveOverrideProps<TextProps>;
    cell37623146?: PrimitiveOverrideProps<FlexProps>;
    "\u30B3\u30E1\u30F3\u30C8"?: PrimitiveOverrideProps<TextProps>;
    comment?: PrimitiveOverrideProps<TextProps>;
    "Frame 435"?: PrimitiveOverrideProps<FlexProps>;
    "\u627F\u8A8D\u65E5"?: PrimitiveOverrideProps<TextProps>;
    createdAt?: PrimitiveOverrideProps<TextProps>;
    "Frame 433"?: PrimitiveOverrideProps<FlexProps>;
    ReviewButton?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ReviewCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "large" | "small";
} & {
    overrides?: ReviewCardOverridesProps | undefined | null;
}>;
export default function ReviewCard(props: ReviewCardProps): React.ReactElement;
