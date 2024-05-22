/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AttachmentCardCreateOverridesProps = {
    AttachmentCardCreate?: PrimitiveOverrideProps<FlexProps>;
    "Frame 438"?: PrimitiveOverrideProps<FlexProps>;
    filename?: PrimitiveOverrideProps<TextProps>;
    Trash?: PrimitiveOverrideProps<ViewProps>;
    comment?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type AttachmentCardCreateProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "large" | "small";
} & {
    overrides?: AttachmentCardCreateOverridesProps | undefined | null;
}>;
export default function AttachmentCardCreate(props: AttachmentCardCreateProps): React.ReactElement;
