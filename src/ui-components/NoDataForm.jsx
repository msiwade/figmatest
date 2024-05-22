/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text, View, useBreakpointValue } from "@aws-amplify/ui-react";
export default function NoDataForm(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: { titleText: {}, close: {}, "Frame 419": {}, NoDataForm: {} },
      variantValues: { breakpoint: "large" },
    },
    {
      overrides: {
        titleText: {},
        close: {},
        "Frame 419": { width: "390px" },
        NoDataForm: { width: "390px" },
      },
      variantValues: { breakpoint: "small" },
    },
  ];
  const breakpointHook = useBreakpointValue({
    base: "small",
    small: "small",
    large: "large",
  });
  const rest = { style: { transition: "all 0.25s" }, ...restProp };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, {
      breakpoint: breakpointHook,
      ...props,
    }),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="column"
      width="1160px"
      height="60px"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="5px 10px 5px 0px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "NoDataForm")}
      {...rest}
    >
      <View
        width="1150px"
        height="49px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 419")}
      >
        <Text
          fontFamily="Noto Sans JP"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="28.959999084472656px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="10px"
          left="32.5px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="データ取得中"
          {...getOverrideProps(overrides, "titleText")}
        ></Text>
        <View
          width="24px"
          height="24px"
          {...getOverrideProps(overrides, "close")}
        ></View>
      </View>
    </Flex>
  );
}
