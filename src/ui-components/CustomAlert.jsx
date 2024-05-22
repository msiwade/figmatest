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
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function CustomAlert(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Vector: {
          width: "0.83px",
          height: "0.83px",
          viewBox: {
            minX: 0,
            minY: 0,
            width: 0.8333333134651184,
            height: 0.8333333134651184,
          },
          paths: [
            {
              d: "M0.416667 0C0.186667 0 0 0.186667 0 0.416667C0 0.646667 0.186667 0.833333 0.416667 0.833333C0.646667 0.833333 0.833333 0.646667 0.833333 0.416667C0.833333 0.186667 0.646667 0 0.416667 0ZM0.458333 0.625L0.375 0.625L0.375 0.541667L0.458333 0.541667L0.458333 0.625ZM0.458333 0.458333L0.375 0.458333L0.375 0.208333L0.458333 0.208333L0.458333 0.458333Z",
              fill: "rgba(191,64,64,1)",
              fillRule: "nonzero",
            },
          ],
        },
        MyIcon: { width: "1px", height: "1px", display: "none" },
        alertText: { display: "none", width: "1px", alignSelf: "stretch" },
        CustomAlert: { height: "1px" },
      },
      variantValues: { isshow: "false" },
    },
    {
      overrides: { Vector: {}, MyIcon: {}, alertText: {}, CustomAlert: {} },
      variantValues: { isshow: "true" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="row"
      width="258px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "CustomAlert")}
      {...rest}
    >
      <View
        width="17px"
        height="17px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "MyIcon")}
      >
        <Icon
          width="14.17px"
          height="14.17px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 14.166666030883789,
            height: 14.166666030883789,
          }}
          paths={[
            {
              d: "M7.08333 0C3.17333 0 0 3.17333 0 7.08333C0 10.9933 3.17333 14.1667 7.08333 14.1667C10.9933 14.1667 14.1667 10.9933 14.1667 7.08333C14.1667 3.17333 10.9933 0 7.08333 0ZM7.79167 10.625L6.375 10.625L6.375 9.20833L7.79167 9.20833L7.79167 10.625ZM7.79167 7.79167L6.375 7.79167L6.375 3.54167L7.79167 3.54167L7.79167 7.79167Z",
              fill: "rgba(191,64,64,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="8.33%"
          bottom="8.33%"
          left="8.33%"
          right="8.33%"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </View>
      <Text
        fontFamily="Noto Sans JP"
        fontSize="12px"
        fontWeight="400"
        color="rgba(191,64,64,1)"
        lineHeight="17.375999450683594px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="必須項目を入力してください"
        {...getOverrideProps(overrides, "alertText")}
      ></Text>
    </Flex>
  );
}
