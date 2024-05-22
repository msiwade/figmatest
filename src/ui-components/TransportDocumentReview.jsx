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
  Badge,
  Button,
  Flex,
  Text,
  View,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
export default function TransportDocumentReview(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        "\u30D5\u30A1\u30A4\u30EB\u9023\u643A\uFF1A": {},
        fileLinkResult: {},
        FileLinkFrame: {},
        "\u627F\u8A8D\u72B6\u6CC1\uFF1A": {},
        status: {},
        "Frame 432944164": {},
        close: {},
        titleDocumentReview: {},
        "Frame 419": {},
        "\u4EA4\u901A\u8CBB\u7B49\u7CBE\u7B97\u66F8\u756A\u53F7": {},
        applicationNo: {},
        "Frame 432944169": {},
        "\u627F\u8A8D\u756A\u53F7": {},
        approvalNo: {},
        "Frame 435": {},
        "\u4F9D\u983C\u8005": {},
        createdBy: {},
        "Frame 420": {},
        "\u4EF6\u540D": {},
        title: {},
        "Frame 426": {},
        "\u7533\u8ACB\u65E5": {},
        createdAt: {},
        "Frame 430": {},
        "\u53D7\u4ED8\u65E5": {},
        recievedAt: {},
        "Frame 436": {},
        titleClosedAt: {},
        closedAt: {},
        "Frame 431": {},
        "\u5408\u8A08\u91D1\u984D": {},
        amount: {},
        "\u5186\uFF08\u7A0E\u8FBC\uFF09": {},
        "Frame 427": {},
        "\u5B9F\u65BD\u6642\u671F": {},
        startDate: {},
        "Frame 434": {},
        "\u8A73\u7D30": {},
        transportContentSlot: {},
        transportContentFrame: {},
        RejectButton: {},
        ModifyButton: {},
        CopyButton: {},
        DeleteButton: {},
        "Frame 429": {},
        TransportDocumentReview: {},
      },
      variantValues: { breakpoint: "large" },
    },
    {
      overrides: {
        "\u30D5\u30A1\u30A4\u30EB\u9023\u643A\uFF1A": {},
        fileLinkResult: {},
        FileLinkFrame: { left: "105px", display: "none" },
        "\u627F\u8A8D\u72B6\u6CC1\uFF1A": {},
        status: {},
        "Frame 432944164": { right: "72px" },
        close: {},
        titleDocumentReview: { top: "0px", left: "20px" },
        "Frame 419": {},
        "\u4EA4\u901A\u8CBB\u7B49\u7CBE\u7B97\u66F8\u756A\u53F7": {},
        applicationNo: { width: "unset", shrink: "1", grow: "1", basis: "0" },
        "Frame 432944169": {},
        "\u627F\u8A8D\u756A\u53F7": {},
        approvalNo: { width: "unset", shrink: "1", grow: "1", basis: "0" },
        "Frame 435": {},
        "\u4F9D\u983C\u8005": {},
        createdBy: { width: "unset", shrink: "1", grow: "1", basis: "0" },
        "Frame 420": {},
        "\u4EF6\u540D": {},
        title: { width: "unset", shrink: "1", grow: "1", basis: "0" },
        "Frame 426": {},
        "\u7533\u8ACB\u65E5": {},
        createdAt: { width: "unset", shrink: "1", grow: "1", basis: "0" },
        "Frame 430": {},
        "\u53D7\u4ED8\u65E5": {},
        recievedAt: { width: "unset", shrink: "1", grow: "1", basis: "0" },
        "Frame 436": {},
        titleClosedAt: {},
        closedAt: { width: "unset", shrink: "1", grow: "1", basis: "0" },
        "Frame 431": {},
        "\u5408\u8A08\u91D1\u984D": {},
        amount: {},
        "\u5186\uFF08\u7A0E\u8FBC\uFF09": {},
        "Frame 427": {},
        "\u5B9F\u65BD\u6642\u671F": {},
        startDate: {},
        "Frame 434": {},
        "\u8A73\u7D30": {},
        transportContentSlot: {},
        transportContentFrame: {},
        RejectButton: {},
        ModifyButton: { width: "unset" },
        CopyButton: { width: "unset" },
        DeleteButton: { width: "unset" },
        "Frame 429": { justifyContent: "center" },
        TransportDocumentReview: { width: "390px" },
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
      width="1450px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="5px"
      padding="5px 0px 5px 0px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "TransportDocumentReview")}
      {...rest}
    >
      <View
        width="unset"
        height="30px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 419")}
      >
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          position="absolute"
          top="0px"
          left="980px"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "FileLinkFrame")}
        >
          <Text
            fontFamily="Noto Sans JP"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="23.167999267578125px"
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
            children="ファイル連携："
            {...getOverrideProps(
              overrides,
              "\u30D5\u30A1\u30A4\u30EB\u9023\u643A\uFF1A"
            )}
          ></Text>
          <Badge
            width="unset"
            height="unset"
            shrink="0"
            size="default"
            variation="success"
            children="Badge"
            {...getOverrideProps(overrides, "fileLinkResult")}
          ></Badge>
        </Flex>
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          position="absolute"
          top="calc(50% - 15px - 0px)"
          right="119px"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 432944164")}
        >
          <Text
            fontFamily="Noto Sans JP"
            fontSize="16px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="23.167999267578125px"
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
            children="承認状況："
            {...getOverrideProps(overrides, "\u627F\u8A8D\u72B6\u6CC1\uFF1A")}
          ></Text>
          <Badge
            width="unset"
            height="unset"
            shrink="0"
            size="default"
            variation="success"
            children="Badge"
            {...getOverrideProps(overrides, "status")}
          ></Badge>
        </Flex>
        <View
          width="24px"
          height="24px"
          {...getOverrideProps(overrides, "close")}
        ></View>
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
          top="calc(50% - 14.5px - 0px)"
          left="37px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="交通費等申請"
          {...getOverrideProps(overrides, "titleDocumentReview")}
        ></Text>
      </View>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 10px 10px 10px"
        backgroundColor="rgba(250,250,250,1)"
        display="flex"
        {...getOverrideProps(overrides, "Frame 432944169")}
      >
        <Text
          fontFamily="Noto Sans JP"
          fontSize="13px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18.823999404907227px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="139px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="交通費等精算書番号"
          {...getOverrideProps(
            overrides,
            "\u4EA4\u901A\u8CBB\u7B49\u7CBE\u7B97\u66F8\u756A\u53F7"
          )}
        ></Text>
        <Text
          fontFamily="Noto Sans JP"
          fontSize="13px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18.823999404907227px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="274px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="applicationNo"
          {...getOverrideProps(overrides, "applicationNo")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 10px 10px 10px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 435")}
      >
        <Text
          fontFamily="Noto Sans JP"
          fontSize="13px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18.823999404907227px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="139px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="承認番号"
          {...getOverrideProps(overrides, "\u627F\u8A8D\u756A\u53F7")}
        ></Text>
        <Text
          fontFamily="Noto Sans JP"
          fontSize="13px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18.823999404907227px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="274px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="approvalNo"
          {...getOverrideProps(overrides, "approvalNo")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 10px 10px 10px"
        backgroundColor="rgba(250,250,250,1)"
        display="flex"
        {...getOverrideProps(overrides, "Frame 420")}
      >
        <Text
          fontFamily="Noto Sans JP"
          fontSize="13px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18.823999404907227px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="139px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="依頼者"
          {...getOverrideProps(overrides, "\u4F9D\u983C\u8005")}
        ></Text>
        <Text
          fontFamily="Noto Sans JP"
          fontSize="13px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18.823999404907227px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="274px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="createdBy"
          {...getOverrideProps(overrides, "createdBy")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 10px 10px 10px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 426")}
      >
        <Text
          fontFamily="Noto Sans JP"
          fontSize="13px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18.823999404907227px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="139px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="件名"
          {...getOverrideProps(overrides, "\u4EF6\u540D")}
        ></Text>
        <Text
          fontFamily="Noto Sans JP"
          fontSize="13px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18.823999404907227px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="900px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="title"
          {...getOverrideProps(overrides, "title")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 10px 10px 10px"
        backgroundColor="rgba(250,250,250,1)"
        display="flex"
        {...getOverrideProps(overrides, "Frame 430")}
      >
        <Text
          fontFamily="Noto Sans JP"
          fontSize="13px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18.823999404907227px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="139px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="申請日"
          {...getOverrideProps(overrides, "\u7533\u8ACB\u65E5")}
        ></Text>
        <Text
          fontFamily="Noto Sans JP"
          fontSize="13px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18.823999404907227px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="900px"
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
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 10px 10px 10px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 436")}
      >
        <Text
          fontFamily="Noto Sans JP"
          fontSize="13px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18.823999404907227px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="139px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="受付日"
          {...getOverrideProps(overrides, "\u53D7\u4ED8\u65E5")}
        ></Text>
        <Text
          fontFamily="Noto Sans JP"
          fontSize="13px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18.823999404907227px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="900px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="recievedAt"
          {...getOverrideProps(overrides, "recievedAt")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 10px 10px 10px"
        backgroundColor="rgba(250,250,250,1)"
        display="flex"
        {...getOverrideProps(overrides, "Frame 431")}
      >
        <Text
          fontFamily="Noto Sans JP"
          fontSize="13px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18.823999404907227px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="139px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="承認日"
          {...getOverrideProps(overrides, "titleClosedAt")}
        ></Text>
        <Text
          fontFamily="Noto Sans JP"
          fontSize="13px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18.823999404907227px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="900px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="closedAt"
          {...getOverrideProps(overrides, "closedAt")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 10px 10px 10px"
        display="none"
        {...getOverrideProps(overrides, "Frame 427")}
      >
        <Text
          fontFamily="Noto Sans JP"
          fontSize="13px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18.823999404907227px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="139px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="合計金額"
          {...getOverrideProps(overrides, "\u5408\u8A08\u91D1\u984D")}
        ></Text>
        <Text
          fontFamily="Noto Sans JP"
          fontSize="13px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18.823999404907227px"
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
          children="amount"
          {...getOverrideProps(overrides, "amount")}
        ></Text>
        <Text
          fontFamily="Noto Sans JP"
          fontSize="13px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18.823999404907227px"
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
          children="円（税込）"
          {...getOverrideProps(overrides, "\u5186\uFF08\u7A0E\u8FBC\uFF09")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 10px 10px 10px"
        backgroundColor="rgba(250,250,250,1)"
        display="flex"
        {...getOverrideProps(overrides, "Frame 434")}
      >
        <Text
          fontFamily="Noto Sans JP"
          fontSize="13px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18.823999404907227px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="139px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="実施時期"
          {...getOverrideProps(overrides, "\u5B9F\u65BD\u6642\u671F")}
        ></Text>
        <Text
          fontFamily="Noto Sans JP"
          fontSize="13px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18.823999404907227px"
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
          children="startDate"
          {...getOverrideProps(overrides, "startDate")}
        ></Text>
      </Flex>
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 10px 10px 10px"
        display="flex"
        {...getOverrideProps(overrides, "transportContentFrame")}
      >
        <Text
          fontFamily="Noto Sans JP"
          fontSize="13px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18.823999404907227px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="139px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="詳細"
          {...getOverrideProps(overrides, "\u8A73\u7D30")}
        ></Text>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "transportContentSlot")}
        ></Flex>
      </Flex>
      <Flex
        gap="30px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 50px 10px 50px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 429")}
      >
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="small"
          isDisabled={false}
          variation="primary"
          children="差し戻し"
          {...getOverrideProps(overrides, "RejectButton")}
        ></Button>
        <Button
          width="80px"
          height="unset"
          shrink="0"
          size="small"
          isDisabled={false}
          variation="primary"
          children="編集"
          {...getOverrideProps(overrides, "ModifyButton")}
        ></Button>
        <Button
          width="80px"
          height="unset"
          shrink="0"
          size="small"
          isDisabled={false}
          variation="primary"
          children="コピー"
          {...getOverrideProps(overrides, "CopyButton")}
        ></Button>
        <Button
          width="80px"
          height="unset"
          shrink="0"
          size="small"
          isDisabled={false}
          variation="destructive"
          children="削除"
          {...getOverrideProps(overrides, "DeleteButton")}
        ></Button>
      </Flex>
    </Flex>
  );
}
