/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarNewOverridesProps = {
    NavBarNew?: PrimitiveOverrideProps<ViewProps>;
    "Frame 436"?: PrimitiveOverrideProps<FlexProps>;
    "\u30C8\u30E9\u30B9\u30C8\u7A1F\u8B70\u66F8\u56DE\u89A7\u30FB\u627F\u8A8D\u30B7\u30B9\u30C6\u30E0"?: PrimitiveOverrideProps<TextProps>;
    "Frame 466"?: PrimitiveOverrideProps<FlexProps>;
    MenuButton?: PrimitiveOverrideProps<ViewProps>;
    Vector4294171?: PrimitiveOverrideProps<IconProps>;
    Vector4294172?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type NavBarNewProps = React.PropsWithChildren<Partial<ViewProps> & {
    breakpoint?: "large" | "small";
} & {
    overrides?: NavBarNewOverridesProps | undefined | null;
}>;
export default function NavBarNew(props: NavBarNewProps): React.ReactElement;
