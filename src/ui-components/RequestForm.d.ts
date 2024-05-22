/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, IconProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RequestFormOverridesProps = {
    RequestForm?: PrimitiveOverrideProps<FlexProps>;
    "Frame 518"?: PrimitiveOverrideProps<FlexProps>;
    menuSlot?: PrimitiveOverrideProps<ViewProps>;
    "Frame 519"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 507"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 508"?: PrimitiveOverrideProps<FlexProps>;
    filterSlot?: PrimitiveOverrideProps<FlexProps>;
    "Frame 510"?: PrimitiveOverrideProps<FlexProps>;
    "icons8:plus"?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    tableFrame?: PrimitiveOverrideProps<FlexProps>;
    tableSlot?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type RequestFormProps = React.PropsWithChildren<Partial<FlexProps> & {
    filterSlot?: React.ReactNode;
    tableSlot?: React.ReactNode;
    menuSlot?: React.ReactNode;
} & {
    overrides?: RequestFormOverridesProps | undefined | null;
}>;
export default function RequestForm(props: RequestFormProps): React.ReactElement;
