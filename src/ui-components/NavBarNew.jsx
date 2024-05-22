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
import {
  Flex,
  Icon,
  Text,
  View,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
export default function NavBarNew(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        "\u30C8\u30E9\u30B9\u30C8\u7A1F\u8B70\u66F8\u56DE\u89A7\u30FB\u627F\u8A8D\u30B7\u30B9\u30C6\u30E0":
          {},
        "Frame 436": {},
        Vector4294171: {},
        Vector4294172: {},
        MenuButton: {},
        "Frame 466": {},
        NavBarNew: {},
      },
      variantValues: { breakpoint: "large" },
    },
    {
      overrides: {
        "\u30C8\u30E9\u30B9\u30C8\u7A1F\u8B70\u66F8\u56DE\u89A7\u30FB\u627F\u8A8D\u30B7\u30B9\u30C6\u30E0":
          { fontSize: "18px", lineHeight: "30px", letterSpacing: "0.03px" },
        "Frame 436": { top: "calc(50% - 15px - -0.5px)", left: "74px" },
        Vector4294171: {
          width: "40px",
          height: "40px",
          viewBox: { minX: 0, minY: 0, width: 40, height: 40 },
        },
        Vector4294172: {
          width: "30px",
          height: "20px",
          viewBox: { minX: 0, minY: 0, width: 30, height: 20 },
          paths: [
            {
              d: "M0 20L30 20L30 16.6667L0 16.6667L0 20ZM0 11.6667L30 11.6667L30 8.33333L0 8.33333L0 11.6667ZM0 0L0 3.33333L30 3.33333L30 0L0 0Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ],
        },
        MenuButton: { width: "40px", height: "40px" },
        "Frame 466": { top: "21px" },
        NavBarNew: { width: "500px" },
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
    <View
      width="1440px"
      height="81px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(0,85,102,1)"
      {...getOverrideProps(overrides, "NavBarNew")}
      {...rest}
    >
      <Flex
        gap="46px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="calc(50% - 12px - -1.5px)"
        left="77px"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 436")}
      >
        <Text
          fontFamily="Noto Sans JP"
          fontSize="20px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.05px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="トラスト稟議書回覧・承認システム"
          {...getOverrideProps(
            overrides,
            "\u30C8\u30E9\u30B9\u30C8\u7A1F\u8B70\u66F8\u56DE\u89A7\u30FB\u627F\u8A8D\u30B7\u30B9\u30C6\u30E0"
          )}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        position="absolute"
        top="20px"
        left="14px"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 466")}
      >
        <View
          width="45px"
          height="45px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "MenuButton")}
        >
          <Icon
            width="45px"
            height="45px"
            viewBox={{ minX: 0, minY: 0, width: 45, height: 45 }}
            paths={[]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Vector4294171")}
          ></Icon>
          <Icon
            width="33.75px"
            height="22.5px"
            viewBox={{ minX: 0, minY: 0, width: 33.75, height: 22.5 }}
            paths={[
              {
                d: "M0 22.5L33.75 22.5L33.75 18.75L0 18.75L0 22.5ZM0 13.125L33.75 13.125L33.75 9.375L0 9.375L0 13.125ZM0 0L0 3.75L33.75 3.75L33.75 0L0 0Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="25%"
            bottom="25%"
            left="12.5%"
            right="12.5%"
            {...getOverrideProps(overrides, "Vector4294172")}
          ></Icon>
        </View>
      </Flex>
    </View>
  );
}
