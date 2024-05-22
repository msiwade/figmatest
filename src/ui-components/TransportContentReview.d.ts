/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TransportContentReviewOverridesProps = {
    TransportContentReview?: PrimitiveOverrideProps<FlexProps>;
    "Frame 494"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 482"?: PrimitiveOverrideProps<FlexProps>;
    transportDate?: PrimitiveOverrideProps<TextProps>;
    "Frame 487"?: PrimitiveOverrideProps<FlexProps>;
    type?: PrimitiveOverrideProps<TextProps>;
    "Frame 483"?: PrimitiveOverrideProps<FlexProps>;
    arrival?: PrimitiveOverrideProps<TextProps>;
    "Frame 484"?: PrimitiveOverrideProps<FlexProps>;
    content?: PrimitiveOverrideProps<TextProps>;
    "Frame 485"?: PrimitiveOverrideProps<FlexProps>;
    ticketType?: PrimitiveOverrideProps<TextProps>;
    "Frame 486"?: PrimitiveOverrideProps<FlexProps>;
    amount?: PrimitiveOverrideProps<TextProps>;
    "Frame 488"?: PrimitiveOverrideProps<FlexProps>;
    attachmentSlot?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type TransportContentReviewProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: TransportContentReviewOverridesProps | undefined | null;
}>;
export default function TransportContentReview(props: TransportContentReviewProps): React.ReactElement;
