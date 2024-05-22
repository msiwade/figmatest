/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MenuBarOverridesProps = {
    MenuBar?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32120212895"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32120212896"?: PrimitiveOverrideProps<FlexProps>;
    page1?: PrimitiveOverrideProps<FlexProps>;
    pageName1?: PrimitiveOverrideProps<TextProps>;
    page2?: PrimitiveOverrideProps<FlexProps>;
    pageName2?: PrimitiveOverrideProps<TextProps>;
    page3?: PrimitiveOverrideProps<FlexProps>;
    pageName3?: PrimitiveOverrideProps<TextProps>;
    "Frame 443"?: PrimitiveOverrideProps<FlexProps>;
    name?: PrimitiveOverrideProps<TextProps>;
    email?: PrimitiveOverrideProps<TextProps>;
    SignOutButton?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type MenuBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MenuBarOverridesProps | undefined | null;
}>;
export default function MenuBar(props: MenuBarProps): React.ReactElement;
