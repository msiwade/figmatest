/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CustomAlertOverridesProps = {
    CustomAlert?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    alertText?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CustomAlertProps = React.PropsWithChildren<Partial<FlexProps> & {
    isshow?: "false" | "true";
} & {
    overrides?: CustomAlertOverridesProps | undefined | null;
}>;
export default function CustomAlert(props: CustomAlertProps): React.ReactElement;
