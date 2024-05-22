/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AttachmentCardOverridesProps = {
    AttachmentCard?: PrimitiveOverrideProps<FlexProps>;
    "Frame 438"?: PrimitiveOverrideProps<FlexProps>;
    filename?: PrimitiveOverrideProps<TextProps>;
    preview?: PrimitiveOverrideProps<ViewProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector7192410?: PrimitiveOverrideProps<IconProps>;
    Vector7192411?: PrimitiveOverrideProps<IconProps>;
    Vector7192412?: PrimitiveOverrideProps<IconProps>;
    download?: PrimitiveOverrideProps<ViewProps>;
    Vector37302762?: PrimitiveOverrideProps<IconProps>;
    comment?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type AttachmentCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "large" | "small";
} & {
    overrides?: AttachmentCardOverridesProps | undefined | null;
}>;
export default function AttachmentCard(props: AttachmentCardProps): React.ReactElement;
