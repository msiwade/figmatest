/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AddAttachmentListOverridesProps = {
    AddAttachmentList?: PrimitiveOverrideProps<FlexProps>;
    "Frame 473"?: PrimitiveOverrideProps<FlexProps>;
    "\u5E33\u7C3F\u756A\u53F7"?: PrimitiveOverrideProps<TextProps>;
    requestDiv?: PrimitiveOverrideProps<TextProps>;
    "Frame 474"?: PrimitiveOverrideProps<FlexProps>;
    "\u30D5\u30A1\u30A4\u30EB\u7A2E\u5225"?: PrimitiveOverrideProps<TextProps>;
    fileTypeName?: PrimitiveOverrideProps<TextProps>;
    fileNameFrame?: PrimitiveOverrideProps<FlexProps>;
    "\u30D5\u30A1\u30A4\u30EB\u540D"?: PrimitiveOverrideProps<TextProps>;
    AddAttachmentSlot?: PrimitiveOverrideProps<ViewProps>;
    "Frame 476"?: PrimitiveOverrideProps<FlexProps>;
    "\u53D6\u5F15\u5E74\u6708\u65E5"?: PrimitiveOverrideProps<TextProps>;
    transactionDate?: PrimitiveOverrideProps<TextProps>;
    "Frame 475"?: PrimitiveOverrideProps<FlexProps>;
    "\u53D6\u5F15\u5148"?: PrimitiveOverrideProps<TextProps>;
    paymentDestination?: PrimitiveOverrideProps<TextProps>;
    "Frame 477"?: PrimitiveOverrideProps<FlexProps>;
    "\u91D1\u984D"?: PrimitiveOverrideProps<TextProps>;
    amount?: PrimitiveOverrideProps<TextProps>;
    "Frame 478"?: PrimitiveOverrideProps<FlexProps>;
    "\u4F5C\u6210\u8005"?: PrimitiveOverrideProps<TextProps>;
    nameOfCreator?: PrimitiveOverrideProps<TextProps>;
    "Frame 479"?: PrimitiveOverrideProps<FlexProps>;
    "\u4F5C\u6210\u65E5"?: PrimitiveOverrideProps<TextProps>;
    createdAt?: PrimitiveOverrideProps<TextProps>;
    "Frame 480"?: PrimitiveOverrideProps<FlexProps>;
    UpdateButton?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type AddAttachmentListProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "large" | "small";
} & {
    overrides?: AddAttachmentListOverridesProps | undefined | null;
}>;
export default function AddAttachmentList(props: AddAttachmentListProps): React.ReactElement;
