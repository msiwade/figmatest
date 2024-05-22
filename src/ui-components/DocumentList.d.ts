/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DocumentListOverridesProps = {
    DocumentList?: PrimitiveOverrideProps<FlexProps>;
    cell1253089?: PrimitiveOverrideProps<FlexProps>;
    applicationNoText?: PrimitiveOverrideProps<TextProps>;
    documentId?: PrimitiveOverrideProps<TextProps>;
    cell1253092?: PrimitiveOverrideProps<FlexProps>;
    "\u627F\u8A8D\u756A\u53F7"?: PrimitiveOverrideProps<TextProps>;
    approvalNo?: PrimitiveOverrideProps<TextProps>;
    cell1253095?: PrimitiveOverrideProps<FlexProps>;
    "\u4EF6\u540D"?: PrimitiveOverrideProps<TextProps>;
    titel?: PrimitiveOverrideProps<TextProps>;
    cell1253098?: PrimitiveOverrideProps<FlexProps>;
    "\u4F5C\u6210\u65E5"?: PrimitiveOverrideProps<TextProps>;
    createdAt?: PrimitiveOverrideProps<TextProps>;
    cell1253101?: PrimitiveOverrideProps<FlexProps>;
    "\u8D77\u6848\u8005"?: PrimitiveOverrideProps<TextProps>;
    createdBy?: PrimitiveOverrideProps<TextProps>;
    cell1253104?: PrimitiveOverrideProps<FlexProps>;
    "\u73FE\u5728\u306E\u30EC\u30D3\u30E5\u30A2\u30FC"?: PrimitiveOverrideProps<TextProps>;
    reviewer?: PrimitiveOverrideProps<TextProps>;
    cell1253107?: PrimitiveOverrideProps<FlexProps>;
    "\u627F\u8A8D\u72B6\u6CC1"?: PrimitiveOverrideProps<TextProps>;
    status?: PrimitiveOverrideProps<BadgeProps>;
    "Frame 433"?: PrimitiveOverrideProps<FlexProps>;
    ReviewButton?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type DocumentListProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "large" | "small";
} & {
    overrides?: DocumentListOverridesProps | undefined | null;
}>;
export default function DocumentList(props: DocumentListProps): React.ReactElement;
