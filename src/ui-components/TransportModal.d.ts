/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, RadioProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TransportModalOverridesProps = {
    TransportModal?: PrimitiveOverrideProps<FlexProps>;
    "Frame 446"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 448"?: PrimitiveOverrideProps<FlexProps>;
    "\u30BF\u30A4\u30C8\u30EB"?: PrimitiveOverrideProps<TextProps>;
    close?: PrimitiveOverrideProps<ViewProps>;
    "Frame 450243439"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 449"?: PrimitiveOverrideProps<FlexProps>;
    "\u51FA\u5F35"?: PrimitiveOverrideProps<TextProps>;
    Radio1?: PrimitiveOverrideProps<RadioProps>;
    Radio2?: PrimitiveOverrideProps<RadioProps>;
    "Frame 452"?: PrimitiveOverrideProps<FlexProps>;
    "\u904B\u8CC3"?: PrimitiveOverrideProps<TextProps>;
    Radio3?: PrimitiveOverrideProps<RadioProps>;
    Radio4?: PrimitiveOverrideProps<RadioProps>;
    "Frame 450243453"?: PrimitiveOverrideProps<FlexProps>;
    "\u65C5\u8CBB"?: PrimitiveOverrideProps<TextProps>;
    Radio5?: PrimitiveOverrideProps<RadioProps>;
    bk313212?: PrimitiveOverrideProps<ViewProps>;
    bk313214?: PrimitiveOverrideProps<ViewProps>;
    "Frame 451"?: PrimitiveOverrideProps<FlexProps>;
    "\u305D\u306E\u4ED6"?: PrimitiveOverrideProps<TextProps>;
    Radio10?: PrimitiveOverrideProps<RadioProps>;
    Radio6?: PrimitiveOverrideProps<RadioProps>;
    Radio7?: PrimitiveOverrideProps<RadioProps>;
    Radio8?: PrimitiveOverrideProps<RadioProps>;
    Radio9?: PrimitiveOverrideProps<RadioProps>;
    "Frame 480"?: PrimitiveOverrideProps<FlexProps>;
    AddButton?: PrimitiveOverrideProps<ButtonProps>;
    CancelButton?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type TransportModalProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "large" | "small";
} & {
    overrides?: TransportModalOverridesProps | undefined | null;
}>;
export default function TransportModal(props: TransportModalProps): React.ReactElement;
