/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, SelectFieldProps, TextAreaFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AttachmentFormOverridesProps = {
    AttachmentForm?: PrimitiveOverrideProps<FlexProps>;
    "Frame 438"?: PrimitiveOverrideProps<FlexProps>;
    SelectFileButton?: PrimitiveOverrideProps<ButtonProps>;
    filename?: PrimitiveOverrideProps<TextProps>;
    previewSlot?: PrimitiveOverrideProps<ViewProps>;
    close?: PrimitiveOverrideProps<ViewProps>;
    "Frame 405"?: PrimitiveOverrideProps<FlexProps>;
    "\u30B9\u30AF\u30B7\u30E7\u6CE8\u8A18\uFF11"?: PrimitiveOverrideProps<TextProps>;
    "\u30C9\u30E9\u30C3\u30B0\u30A2\u30F3\u30C9\u30C9\u30ED\u30C3\u30D7\u6CE8\u8A18\uFF11"?: PrimitiveOverrideProps<TextProps>;
    notesFrame?: PrimitiveOverrideProps<FlexProps>;
    "\u6CE8\u8A18\uFF11"?: PrimitiveOverrideProps<TextProps>;
    "\u6CE8\u8A18\uFF12"?: PrimitiveOverrideProps<TextProps>;
    comment?: PrimitiveOverrideProps<TextAreaFieldProps>;
    fileType?: PrimitiveOverrideProps<SelectFieldProps>;
    "Frame 439"?: PrimitiveOverrideProps<FlexProps>;
    UploadButton?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type AttachmentFormProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "large" | "small";
} & {
    overrides?: AttachmentFormOverridesProps | undefined | null;
}>;
export default function AttachmentForm(props: AttachmentFormProps): React.ReactElement;
