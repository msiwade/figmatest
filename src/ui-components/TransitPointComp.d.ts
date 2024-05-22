/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextFieldProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TransitPointCompOverridesProps = {
    TransitPointComp?: PrimitiveOverrideProps<FlexProps>;
    transitPoint?: PrimitiveOverrideProps<TextFieldProps>;
    transitPointDelete?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type TransitPointCompProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "large" | "small";
} & {
    overrides?: TransitPointCompOverridesProps | undefined | null;
}>;
export default function TransitPointComp(props: TransitPointCompProps): React.ReactElement;
