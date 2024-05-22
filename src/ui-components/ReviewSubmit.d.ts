/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextAreaFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReviewSubmitOverridesProps = {
    ReviewSubmit?: PrimitiveOverrideProps<FlexProps>;
    "Frame 501"?: PrimitiveOverrideProps<FlexProps>;
    commentTitle?: PrimitiveOverrideProps<TextProps>;
    fixedPhraseSlot?: PrimitiveOverrideProps<ViewProps>;
    comment?: PrimitiveOverrideProps<TextAreaFieldProps>;
    "Frame 429"?: PrimitiveOverrideProps<FlexProps>;
    ApproveButton?: PrimitiveOverrideProps<ButtonProps>;
    RejectButton?: PrimitiveOverrideProps<ButtonProps>;
    CancelButton?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ReviewSubmitProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "large" | "small";
} & {
    overrides?: ReviewSubmitOverridesProps | undefined | null;
}>;
export default function ReviewSubmit(props: ReviewSubmitProps): React.ReactElement;
