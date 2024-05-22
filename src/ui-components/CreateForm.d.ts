/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateFormOverridesProps = {
    CreateForm?: PrimitiveOverrideProps<FlexProps>;
    "Frame 517"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 515"?: PrimitiveOverrideProps<FlexProps>;
    requestSlot?: PrimitiveOverrideProps<FlexProps>;
    "Frame 516"?: PrimitiveOverrideProps<FlexProps>;
    listSlot?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type CreateFormProps = React.PropsWithChildren<Partial<FlexProps> & {
    requestSlot?: React.ReactNode;
    listSlot?: React.ReactNode;
} & {
    overrides?: CreateFormOverridesProps | undefined | null;
}>;
export default function CreateForm(props: CreateFormProps): React.ReactElement;
