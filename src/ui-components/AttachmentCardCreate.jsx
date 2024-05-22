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
export default function AttachmentCardCreate(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        filename: {},
        Trash: {},
        "Frame 438": {},
        comment: {},
        AttachmentCardCreate: {},
      },
      variantValues: { breakpoint: "large" },
    },
    {
      overrides: {
        filename: {},
        Trash: {},
        "Frame 438": {},
        comment: {},
        AttachmentCardCreate: {},
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
      gap="5px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(239,240,240,1)"
      borderRadius="5px"
      padding="4px 4px 4px 4px"
      backgroundColor="rgba(250,250,250,1)"
      display="flex"
      {...getOverrideProps(overrides, "AttachmentCardCreate")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 438")}
      >
        <Text
          fontFamily="Noto Sans JP"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="21px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="filename"
          {...getOverrideProps(overrides, "filename")}
        ></Text>
        <View
          width="24px"
          height="24px"
          {...getOverrideProps(overrides, "Trash")}
        ></View>
      </Flex>
      <Text
        fontFamily="Noto Sans JP"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="21px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="comment"
        {...getOverrideProps(overrides, "comment")}
      ></Text>
    </Flex>
  );
}
