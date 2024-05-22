/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, CheckboxFieldProps, FlexProps, IconProps, SelectFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PaidSearchOverridesProps = {
    PaidSearch?: PrimitiveOverrideProps<FlexProps>;
    "Frame 447"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 444"?: PrimitiveOverrideProps<FlexProps>;
    searchTitle?: PrimitiveOverrideProps<TextProps>;
    "Frame 445"?: PrimitiveOverrideProps<FlexProps>;
    statusSearchFrame?: PrimitiveOverrideProps<FlexProps>;
    "\u30B9\u30C6\u30FC\u30BF\u30B9"?: PrimitiveOverrideProps<TextProps>;
    "Frame 4683347827"?: PrimitiveOverrideProps<FlexProps>;
    approved?: PrimitiveOverrideProps<CheckboxFieldProps>;
    "Frame 459"?: PrimitiveOverrideProps<FlexProps>;
    "\u7533\u8ACB\u7A2E\u5225"?: PrimitiveOverrideProps<TextProps>;
    "Frame 4685081974"?: PrimitiveOverrideProps<FlexProps>;
    document?: PrimitiveOverrideProps<CheckboxFieldProps>;
    payment?: PrimitiveOverrideProps<CheckboxFieldProps>;
    transport?: PrimitiveOverrideProps<CheckboxFieldProps>;
    "Frame 439"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 500"?: PrimitiveOverrideProps<FlexProps>;
    "\u5E74\u5EA6"?: PrimitiveOverrideProps<TextProps>;
    fiscalTooltip?: PrimitiveOverrideProps<ViewProps>;
    Vector5082017?: PrimitiveOverrideProps<IconProps>;
    "Frame 495"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 488"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 492"?: PrimitiveOverrideProps<FlexProps>;
    fiscalYearSlot?: PrimitiveOverrideProps<FlexProps>;
    fiscalYear?: PrimitiveOverrideProps<TextFieldProps>;
    "\u5E74"?: PrimitiveOverrideProps<TextProps>;
    "Frame 493"?: PrimitiveOverrideProps<FlexProps>;
    fiscalMonth?: PrimitiveOverrideProps<SelectFieldProps>;
    "\u5EA6"?: PrimitiveOverrideProps<TextProps>;
    "Frame 453"?: PrimitiveOverrideProps<FlexProps>;
    "\u7533\u8ACB\u65E5"?: PrimitiveOverrideProps<TextProps>;
    "Frame 4681894389"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 489"?: PrimitiveOverrideProps<FlexProps>;
    startDateSlot?: PrimitiveOverrideProps<FlexProps>;
    startDate1894392?: PrimitiveOverrideProps<TextFieldProps>;
    "\uFF5E1894393"?: PrimitiveOverrideProps<TextProps>;
    "Frame 490"?: PrimitiveOverrideProps<FlexProps>;
    endDateSlot?: PrimitiveOverrideProps<FlexProps>;
    endDate1894396?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 460"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 501"?: PrimitiveOverrideProps<FlexProps>;
    "\u6708\u65E5"?: PrimitiveOverrideProps<TextProps>;
    transportDateTooltip?: PrimitiveOverrideProps<ViewProps>;
    Vector5082044?: PrimitiveOverrideProps<IconProps>;
    "Frame 502"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 503"?: PrimitiveOverrideProps<FlexProps>;
    startTransportDateSlot?: PrimitiveOverrideProps<FlexProps>;
    startDate5082024?: PrimitiveOverrideProps<TextFieldProps>;
    "\uFF5E5082025"?: PrimitiveOverrideProps<TextProps>;
    "Frame 504"?: PrimitiveOverrideProps<FlexProps>;
    endTransportDateSlot?: PrimitiveOverrideProps<FlexProps>;
    endDate5082028?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 457"?: PrimitiveOverrideProps<FlexProps>;
    "\u8D77\u6848\u8005"?: PrimitiveOverrideProps<TextProps>;
    "Frame 4684531962"?: PrimitiveOverrideProps<FlexProps>;
    nameOfCreator?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 458"?: PrimitiveOverrideProps<FlexProps>;
    "\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u540D"?: PrimitiveOverrideProps<TextProps>;
    "Frame 4684532582"?: PrimitiveOverrideProps<FlexProps>;
    fileName?: PrimitiveOverrideProps<TextFieldProps>;
    paidFlagFrame?: PrimitiveOverrideProps<FlexProps>;
    "\u5165\u91D1\u72B6\u6CC1"?: PrimitiveOverrideProps<TextProps>;
    "Frame 4681894369"?: PrimitiveOverrideProps<FlexProps>;
    unpaid?: PrimitiveOverrideProps<CheckboxFieldProps>;
    paid?: PrimitiveOverrideProps<CheckboxFieldProps>;
    searchFrame?: PrimitiveOverrideProps<FlexProps>;
    "Frame 4681894427"?: PrimitiveOverrideProps<FlexProps>;
    csvExport?: PrimitiveOverrideProps<ButtonProps>;
    indexBookExport?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 469"?: PrimitiveOverrideProps<FlexProps>;
    searchButton?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type PaidSearchProps = React.PropsWithChildren<Partial<FlexProps> & {
    breakpoint?: "large" | "small";
} & {
    overrides?: PaidSearchOverridesProps | undefined | null;
}>;
export default function PaidSearch(props: PaidSearchProps): React.ReactElement;
