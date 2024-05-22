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
export default function AttachmentCard(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        filename: {},
        Vector7192410: {},
        Vector7192411: {},
        Vector7192412: {},
        Group: {},
        preview: {},
        Vector37302762: {},
        download: {},
        "Frame 438": {},
        comment: {},
        AttachmentCard: {},
      },
      variantValues: { breakpoint: "large" },
    },
    {
      overrides: {
        filename: {},
        Vector7192410: {},
        Vector7192411: {},
        Vector7192412: {},
        Group: {},
        preview: {},
        Vector37302762: {},
        download: {},
        "Frame 438": { gap: "0", padding: "0px 0px 0px 0px" },
        comment: {},
        AttachmentCard: {},
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
      {...getOverrideProps(overrides, "AttachmentCard")}
      {...rest}
    >
      <Flex
        gap="5px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 5px 0px 0px"
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
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "preview")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="16px"
            height="20px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="8.33%"
            bottom="8.33%"
            left="16.67%"
            right="16.67%"
            {...getOverrideProps(overrides, "Group")}
          >
            <Icon
              width="7px"
              height="7px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 6.999999523162842,
                height: 6.999999523162842,
              }}
              paths={[
                {
                  d: "M5.94194 5.05806C5.69786 4.81398 5.30214 4.81398 5.05806 5.05806C4.81398 5.30214 4.81398 5.69786 5.05806 5.94194L5.94194 5.05806ZM6.55806 7.44194C6.80214 7.68602 7.19786 7.68602 7.44194 7.44194C7.68602 7.19786 7.68602 6.80214 7.44194 6.55806L6.55806 7.44194ZM5.05806 5.94194L6.55806 7.44194L7.44194 6.55806L5.94194 5.05806L5.05806 5.94194ZM-0.625 3C-0.625 3.96141 -0.243082 4.88344 0.436737 5.56326L1.32062 4.67938C0.875222 4.23398 0.625 3.62989 0.625 3L-0.625 3ZM0.436737 5.56326C1.11656 6.24308 2.03859 6.625 3 6.625L3 5.375C2.37011 5.375 1.76602 5.12478 1.32062 4.67938L0.436737 5.56326ZM3 6.625C3.96141 6.625 4.88344 6.24308 5.56326 5.56326L4.67938 4.67938C4.23398 5.12478 3.62989 5.375 3 5.375L3 6.625ZM5.56326 5.56326C6.24308 4.88344 6.625 3.96141 6.625 3L5.375 3C5.375 3.62989 5.12478 4.23398 4.67938 4.67938L5.56326 5.56326ZM6.625 3C6.625 2.03859 6.24308 1.11656 5.56326 0.436737L4.67938 1.32062C5.12478 1.76602 5.375 2.37011 5.375 3L6.625 3ZM5.56326 0.436737C4.88344 -0.243082 3.96141 -0.625 3 -0.625L3 0.625C3.62989 0.625 4.23398 0.875222 4.67938 1.32062L5.56326 0.436737ZM3 -0.625C2.03859 -0.625 1.11656 -0.243082 0.436737 0.436737L1.32062 1.32062C1.76602 0.875222 2.37011 0.625 3 0.625L3 -0.625ZM0.436737 0.436737C-0.243082 1.11656 -0.625 2.03859 -0.625 3L0.625 3C0.625 2.37011 0.875222 1.76602 1.32062 1.32062L0.436737 0.436737Z",
                  stroke: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 1,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="37.5%"
              bottom="27.5%"
              left="28.12%"
              right="28.13%"
              {...getOverrideProps(overrides, "Vector7192410")}
            ></Icon>
            <Icon
              width="16px"
              height="20px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 16.000001907348633,
                height: 20,
              }}
              paths={[
                {
                  d: "M0 19.4L0.625 19.4L0 19.4ZM0 0.6L0.625 0.6L0 0.6ZM12.252 0L12.2526 -0.625L12.252 -0.625L12.252 0ZM12.676 0.176L12.2338 0.617667L12.2341 0.617942L12.676 0.176ZM15.824 3.324L15.3821 3.76594L15.3823 3.76622L15.824 3.324ZM16 3.75L15.375 3.74847L15.375 3.75L16 3.75ZM15.4 20L15.4 20.625L15.4 20ZM0.6 20L0.6 20.625L0.6 20ZM0.625 19.4L0.625 0.6L-0.625 0.6L-0.625 19.4L0.625 19.4ZM0.625 0.6C0.625 0.606631 0.622366 0.612989 0.617678 0.617678L-0.266206 -0.266206C-0.495938 -0.0364738 -0.625 0.27511 -0.625 0.6L0.625 0.6ZM0.617678 0.617678C0.612989 0.622366 0.606631 0.625 0.6 0.625L0.6 -0.625C0.27511 -0.625 -0.0364738 -0.495938 -0.266206 -0.266206L0.617678 0.617678ZM0.6 0.625L12.252 0.625L12.252 -0.625L0.6 -0.625L0.6 0.625ZM12.2515 0.625C12.2448 0.624994 12.2385 0.622356 12.2338 0.617667L13.1182 -0.265666C12.8887 -0.495464 12.5773 -0.624714 12.2526 -0.625L12.2515 0.625ZM12.2341 0.617942L15.3821 3.76594L16.2659 2.88206L13.1179 -0.265942L12.2341 0.617942ZM15.3823 3.76622C15.38 3.76389 15.3782 3.76112 15.3769 3.75808L16.5322 3.28077C16.4705 3.13151 16.3799 2.99591 16.2657 2.88178L15.3823 3.76622ZM15.3769 3.75808C15.3756 3.75503 15.375 3.75177 15.375 3.74847L16.625 3.75153C16.6254 3.59003 16.5938 3.43004 16.5322 3.28077L15.3769 3.75808ZM15.375 3.75L15.375 19.4L16.625 19.4L16.625 3.75L15.375 3.75ZM15.375 19.4C15.375 19.3967 15.3756 19.3935 15.3769 19.3904L16.5318 19.8688C16.5933 19.7202 16.625 19.5609 16.625 19.4L15.375 19.4ZM15.3769 19.3904C15.3782 19.3874 15.38 19.3846 15.3823 19.3823L16.2662 20.2662C16.38 20.1525 16.4702 20.0174 16.5318 19.8688L15.3769 19.3904ZM15.3823 19.3823C15.3846 19.38 15.3874 19.3782 15.3904 19.3769L15.8688 20.5318C16.0174 20.4702 16.1525 20.38 16.2662 20.2662L15.3823 19.3823ZM15.3904 19.3769C15.3935 19.3756 15.3967 19.375 15.4 19.375L15.4 20.625C15.5609 20.625 15.7202 20.5933 15.8688 20.5318L15.3904 19.3769ZM15.4 19.375L0.6 19.375L0.6 20.625L15.4 20.625L15.4 19.375ZM0.6 19.375C0.603279 19.375 0.60653 19.3756 0.609567 19.3769L0.131213 20.5318C0.279841 20.5933 0.439135 20.625 0.6 20.625L0.6 19.375ZM0.609567 19.3769C0.612602 19.3782 0.615357 19.38 0.617678 19.3823L-0.266206 20.2662C-0.152455 20.38 -0.0174126 20.4702 0.131213 20.5318L0.609567 19.3769ZM0.617678 19.3823C0.62 19.3846 0.621841 19.3874 0.623097 19.3904L-0.531752 19.8688C-0.470191 20.0174 -0.379959 20.1525 -0.266206 20.2662L0.617678 19.3823ZM0.623097 19.3904C0.624353 19.3935 0.625 19.3967 0.625 19.4L-0.625 19.4C-0.625 19.5609 -0.593314 19.7202 -0.531752 19.8688L0.623097 19.3904Z",
                  stroke: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 1,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Vector7192411")}
            ></Icon>
            <Icon
              width="4px"
              height="4px"
              viewBox={{ minX: 0, minY: 0, width: 4, height: 4 }}
              paths={[
                {
                  d: "M0.625 0C0.625 -0.345178 0.345178 -0.625 0 -0.625C-0.345178 -0.625 -0.625 -0.345178 -0.625 0L0.625 0ZM0 3.4L0.625 3.4L0 3.4ZM4 4.625C4.34518 4.625 4.625 4.34518 4.625 4C4.625 3.65482 4.34518 3.375 4 3.375L4 4.625ZM-0.625 0L-0.625 3.4L0.625 3.4L0.625 0L-0.625 0ZM-0.625 3.4C-0.625 3.72489 -0.495939 4.03647 -0.266206 4.26621L0.617677 3.38232C0.622366 3.38701 0.625 3.39337 0.625 3.4L-0.625 3.4ZM-0.266206 4.26621C-0.0364736 4.49594 0.275111 4.625 0.6 4.625L0.6 3.375C0.60663 3.375 0.612988 3.37763 0.617677 3.38232L-0.266206 4.26621ZM0.6 4.625L4 4.625L4 3.375L0.6 3.375L0.6 4.625Z",
                  stroke: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 1,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="80%"
              left="75%"
              right="0%"
              {...getOverrideProps(overrides, "Vector7192412")}
            ></Icon>
          </View>
        </View>
        <View
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "download")}
        >
          <Icon
            width="14px"
            height="17px"
            viewBox={{ minX: 0, minY: 0, width: 14, height: 17 }}
            paths={[
              {
                d: "M14 6L10 6L10 0L4 0L4 6L0 6L7 13L14 6ZM6 8L6 2L8 2L8 8L9.17 8L7 10.17L4.83 8L6 8ZM0 15L14 15L14 17L0 17L0 15Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="14.58%"
            bottom="14.58%"
            left="20.83%"
            right="20.83%"
            {...getOverrideProps(overrides, "Vector37302762")}
          ></Icon>
        </View>
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
