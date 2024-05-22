/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NoDataFormOverridesProps = {
    NoDataForm?: PrimitiveOverrideProps<FlexProps>;
    "Frame 419"?: PrimitiveOverrideProps<ViewProps>;
    titleText?: PrimitiveOverrideProps<TextProps>;
    close?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type NoDataFormProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "large" | "small";
} & {
    overrides?: NoDataFormOverridesProps | undefined | null;
}>;
export default function NoDataForm(props: NoDataFormProps): React.ReactElement;
