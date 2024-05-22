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
  Button,
  Flex,
  Text,
  View,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
export default function AddAttachmentList(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        "\u5E33\u7C3F\u756A\u53F7": {},
        requestDiv: {},
        "Frame 473": {},
        "\u30D5\u30A1\u30A4\u30EB\u7A2E\u5225": {},
        fileTypeName: {},
        "Frame 474": {},
        "\u30D5\u30A1\u30A4\u30EB\u540D": {},
        AddAttachmentSlot: {},
        fileNameFrame: {},
        "\u53D6\u5F15\u5E74\u6708\u65E5": {},
        transactionDate: {},
        "Frame 476": {},
        "\u53D6\u5F15\u5148": {},
        paymentDestination: {},
        "Frame 475": {},
        "\u91D1\u984D": {},
        amount: {},
        "Frame 477": {},
        "\u4F5C\u6210\u8005": {},
        nameOfCreator: {},
        "Frame 478": {},
        "\u4F5C\u6210\u65E5": {},
        createdAt: {},
        "Frame 479": {},
        UpdateButton: {},
        "Frame 480": {},
        AddAttachmentList: {},
      },
      variantValues: { breakpoint: "large" },
    },
    {
      overrides: {
        "\u5E33\u7C3F\u756A\u53F7": {},
        requestDiv: {},
        "Frame 473": { display: "none" },
        "\u30D5\u30A1\u30A4\u30EB\u7A2E\u5225": {},
        fileTypeName: {},
        "Frame 474": { width: "100px", overflow: "hidden" },
        "\u30D5\u30A1\u30A4\u30EB\u540D": {},
        AddAttachmentSlot: {},
        fileNameFrame: {
          width: "unset",
          shrink: "1",
          overflow: "hidden",
          grow: "1",
          basis: "0",
        },
        "\u53D6\u5F15\u5E74\u6708\u65E5": {},
        transactionDate: {},
        "Frame 476": { display: "none" },
        "\u53D6\u5F15\u5148": {},
        paymentDestination: {},
        "Frame 475": { display: "none" },
        "\u91D1\u984D": {},
        amount: {},
        "Frame 477": { display: "none" },
        "\u4F5C\u6210\u8005": {},
        nameOfCreator: {},
        "Frame 478": { display: "none" },
        "\u4F5C\u6210\u65E5": {},
        createdAt: {},
        "Frame 479": { display: "none" },
        UpdateButton: {},
        "Frame 480": {},
        AddAttachmentList: { width: "375px" },
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
      gap="10px"
      direction="row"
      width="1450px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="5px"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "AddAttachmentList")}
      {...rest}
    >
      <Flex
        gap="15px"
        direction="column"
        width="100px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 473")}
      >
        <Text
          fontFamily="Inter"
          fontSize="13px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="15.732954025268555px"
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
          children="依頼区分"
          {...getOverrideProps(overrides, "\u5E33\u7C3F\u756A\u53F7")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="13px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="15.732954025268555px"
          textAlign="center"
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
          children="requestDiv"
          {...getOverrideProps(overrides, "requestDiv")}
        ></Text>
      </Flex>
      <Flex
        gap="19px"
        direction="column"
        width="150px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 474")}
      >
        <Text
          fontFamily="Inter"
          fontSize="13px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="15.732954025268555px"
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
          children="ファイル種別"
          {...getOverrideProps(
            overrides,
            "\u30D5\u30A1\u30A4\u30EB\u7A2E\u5225"
          )}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="13px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="15.732954025268555px"
          textAlign="center"
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
          children="fileTypeName"
          {...getOverrideProps(overrides, "fileTypeName")}
        ></Text>
      </Flex>
      <Flex
        gap="19px"
        direction="column"
        width="330px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "fileNameFrame")}
      >
        <Text
          fontFamily="Inter"
          fontSize="13px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="15.732954025268555px"
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
          children="ファイル名"
          {...getOverrideProps(overrides, "\u30D5\u30A1\u30A4\u30EB\u540D")}
        ></Text>
        <View
          width="unset"
          height="unset"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "AddAttachmentSlot")}
        ></View>
      </Flex>
      <Flex
        gap="19px"
        direction="column"
        width="100px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 476")}
      >
        <Text
          fontFamily="Inter"
          fontSize="13px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="15.732954025268555px"
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
          children="取引年月日"
          {...getOverrideProps(overrides, "\u53D6\u5F15\u5E74\u6708\u65E5")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="13px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="15.732954025268555px"
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
          children="transactionDate"
          {...getOverrideProps(overrides, "transactionDate")}
        ></Text>
      </Flex>
      <Flex
        gap="19px"
        direction="column"
        width="220px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 475")}
      >
        <Text
          fontFamily="Inter"
          fontSize="13px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="15.732954025268555px"
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
          children="取引先"
          {...getOverrideProps(overrides, "\u53D6\u5F15\u5148")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="13px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="15.732954025268555px"
          textAlign="center"
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
          children="paymentDestination"
          {...getOverrideProps(overrides, "paymentDestination")}
        ></Text>
      </Flex>
      <Flex
        gap="19px"
        direction="column"
        width="120px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 477")}
      >
        <Text
          fontFamily="Inter"
          fontSize="13px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="15.732954025268555px"
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
          children="金額"
          {...getOverrideProps(overrides, "\u91D1\u984D")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="13px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="15.732954025268555px"
          textAlign="center"
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
          children="amount"
          {...getOverrideProps(overrides, "amount")}
        ></Text>
      </Flex>
      <Flex
        gap="19px"
        direction="column"
        width="100px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 478")}
      >
        <Text
          fontFamily="Inter"
          fontSize="13px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="15.732954025268555px"
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
          children="作成者"
          {...getOverrideProps(overrides, "\u4F5C\u6210\u8005")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="13px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="15.732954025268555px"
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
          children="nameOfCreator"
          {...getOverrideProps(overrides, "nameOfCreator")}
        ></Text>
      </Flex>
      <Flex
        gap="19px"
        direction="column"
        width="150px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 479")}
      >
        <Text
          fontFamily="Inter"
          fontSize="13px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="15.732954025268555px"
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
          children="作成日"
          {...getOverrideProps(overrides, "\u4F5C\u6210\u65E5")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="13px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="15.732954025268555px"
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
          children="createdAt"
          {...getOverrideProps(overrides, "createdAt")}
        ></Text>
      </Flex>
      <Flex
        gap="5px"
        direction="column"
        width="70px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 480")}
      >
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="small"
          isDisabled={false}
          variation="primary"
          children="更新"
          {...getOverrideProps(overrides, "UpdateButton")}
        ></Button>
      </Flex>
    </Flex>
  );
}
