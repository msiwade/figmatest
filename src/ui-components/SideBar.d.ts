/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Todo } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SideBarOverridesProps = {
    SideBar?: PrimitiveOverrideProps<FlexProps>;
    "Frame 32136472691"?: PrimitiveOverrideProps<ViewProps>;
    "Frame 32136472692"?: PrimitiveOverrideProps<FlexProps>;
    myDocument?: PrimitiveOverrideProps<FlexProps>;
    myDocumentText?: PrimitiveOverrideProps<TextProps>;
    myTask?: PrimitiveOverrideProps<FlexProps>;
    myTaskText?: PrimitiveOverrideProps<TextProps>;
    findDocument?: PrimitiveOverrideProps<FlexProps>;
    findDocumentText?: PrimitiveOverrideProps<TextProps>;
    paidSearch?: PrimitiveOverrideProps<FlexProps>;
    paidSearchText?: PrimitiveOverrideProps<TextProps>;
    createDocument?: PrimitiveOverrideProps<FlexProps>;
    createDocumentSlot?: PrimitiveOverrideProps<FlexProps>;
    close?: PrimitiveOverrideProps<ViewProps>;
    SignOutButton?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 443"?: PrimitiveOverrideProps<FlexProps>;
    name?: PrimitiveOverrideProps<TextProps>;
    email?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SideBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    todo?: Todo;
} & {
    breakpoint?: "large" | "small";
} & {
    overrides?: SideBarOverridesProps | undefined | null;
}>;
export default function SideBar(props: SideBarProps): React.ReactElement;
