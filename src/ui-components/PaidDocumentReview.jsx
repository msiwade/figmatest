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
  Flex,
  SwitchField,
  Text,
  TextField,
  View,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
export default function PaidDocumentReview(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        "\u652F\u6255\u72B6\u6CC1\uFF1A": {},
        paidFlag: {},
        "Frame 4323307693": {},
        close: {},
        titleDocumentReview: {},
        "Frame 419": {},
        "\u4F9D\u983C\u30E1\u30FC\u30EB": {},
        requestEmailText: {},
        "Frame 502": {},
        "\u7A1F\u8B70\u66F8\u756A\u53F7": {},
        applicationNo: {},
        "Frame 4323307698": {},
        "\u627F\u8A8D\u756A\u53F7": {},
        approvalNo: {},
        "Frame 435": {},
        "\u7A1F\u8B70\u8005": {},
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
        amount: {},
        "\u5186\uFF08\u7A0E\u8FBC\uFF093307722": {},
        "Frame 5076994467": {},
        "\u7A1F\u8B70\u91D1\u984D": {},
        "Frame 427": {},
        paymentAmount: {},
        "\u5186\uFF08\u7A0E\u8FBC\uFF096994476": {},
        "Frame 5076994474": {},
        "\u652F\u6255\u91D1\u984D": {},
        "Frame 501": {},
        "\u652F\u6255\u72B6\u6CC1": {},
        "\u652F\u6255\u65E5": {},
        paidDate: {},
        paidDateSlot: {},
        "Frame 441": {},
        paidFlagSwitch: {},
        paidText: {},
        "Frame 442": {},
        "Frame 496": {},
        paidFlagFrame: {},
        titlePaidFlagUpdatedBy: {},
        paidFlagUpdatedBy: {},
        "Frame 499": {},
        titlePaidFlagUpdatedAt: {},
        paidFlagUpdatedAt: {},
        "Frame 500": {},
        contentSlot: {},
        "\u6DFB\u4ED8\u8CC7\u6599": {},
        attachmentListSlot: {},
        "Frame 433": {},
        PaidDocumentReview: {},
      },
      variantValues: { breakpoint: "large" },
    },
    {
      overrides: {
        "\u652F\u6255\u72B6\u6CC1\uFF1A": {},
        paidFlag: {},
        "Frame 4323307693": { top: "calc(50% - 15px - 1px)", right: "50px" },
        close: {},
        titleDocumentReview: {},
        "Frame 419": { height: "40px" },
        "\u4F9D\u983C\u30E1\u30FC\u30EB": { width: "125px" },
        requestEmailText: {},
        "Frame 502": { gap: "20px" },
        "\u7A1F\u8B70\u66F8\u756A\u53F7": {},
        applicationNo: {},
        "Frame 4323307698": {},
        "\u627F\u8A8D\u756A\u53F7": {},
        approvalNo: { width: "230px" },
        "Frame 435": {},
        "\u7A1F\u8B70\u8005": {},
        createdBy: { width: "230px", height: "19px" },
        "Frame 420": {},
        "\u4EF6\u540D": {},
        title: { width: "230px" },
        "Frame 426": {},
        "\u7533\u8ACB\u65E5": {},
        createdAt: { width: "230px" },
        "Frame 430": {},
        "\u53D7\u4ED8\u65E5": {},
        recievedAt: { width: "230px" },
        "Frame 436": {},
        titleClosedAt: {},
        closedAt: { width: "230px" },
        "Frame 431": {},
        amount: {},
        "\u5186\uFF08\u7A0E\u8FBC\uFF093307722": {},
        "Frame 5076994467": { top: "10.5px" },
        "\u7A1F\u8B70\u91D1\u984D": {},
        "Frame 427": {},
        paymentAmount: {},
        "\u5186\uFF08\u7A0E\u8FBC\uFF096994476": {},
        "Frame 5076994474": {},
        "\u652F\u6255\u91D1\u984D": {},
        "Frame 501": {},
        "\u652F\u6255\u72B6\u6CC1": { width: "115px" },
        "\u652F\u6255\u65E5": {},
        paidDate: { shrink: "1", grow: "1", basis: "0" },
        paidDateSlot: { shrink: "1", grow: "1", basis: "0" },
        "Frame 441": {},
        paidFlagSwitch: {},
        paidText: {},
        "Frame 442": {},
        "Frame 496": { padding: "0px 2px 0px 2px" },
        paidFlagFrame: {},
        titlePaidFlagUpdatedBy: {},
        paidFlagUpdatedBy: { width: "230px" },
        "Frame 499": { height: "39px" },
        titlePaidFlagUpdatedAt: {},
        paidFlagUpdatedAt: { width: "230px" },
        "Frame 500": { height: "39px" },
        contentSlot: {},
        "\u6DFB\u4ED8\u8CC7\u6599": {},
        attachmentListSlot: {},
        "Frame 433": {},
        PaidDocumentReview: { width: "390px" },
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
      {...getOverrideProps(overrides, "PaidDocumentReview")}
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
          top="calc(50% - 15px - 0px)"
          right="119px"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 4323307693")}
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
            children="支払状況："
            {...getOverrideProps(overrides, "\u652F\u6255\u72B6\u6CC1\uFF1A")}
          ></Text>
          <Badge
            width="unset"
            height="unset"
            shrink="0"
            size="default"
            variation="success"
            children="Badge"
            {...getOverrideProps(overrides, "paidFlag")}
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
          children="決裁伺"
          {...getOverrideProps(overrides, "titleDocumentReview")}
        ></Text>
      </View>
      <Flex
        gap="25px"
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
        {...getOverrideProps(overrides, "Frame 502")}
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
          width="120px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="依頼メール"
          {...getOverrideProps(overrides, "\u4F9D\u983C\u30E1\u30FC\u30EB")}
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
          children="requestEmailText"
          {...getOverrideProps(overrides, "requestEmailText")}
        ></Text>
      </Flex>
      <Flex
        gap="50px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 10px 10px 40px"
        backgroundColor="rgba(250,250,250,1)"
        display="flex"
        {...getOverrideProps(overrides, "Frame 4323307698")}
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
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="稟議書番号"
          {...getOverrideProps(overrides, "\u7A1F\u8B70\u66F8\u756A\u53F7")}
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
          width="92px"
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
      <View
        width="unset"
        height="39px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 435")}
      >
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
          position="absolute"
          top="10px"
          left="46px"
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
          width="1182px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="10.5px"
          left="155px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="approvalNo"
          {...getOverrideProps(overrides, "approvalNo")}
        ></Text>
      </View>
      <View
        width="unset"
        height="39px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(250,250,250,1)"
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
          width="125px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="10.5px"
          left="10px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="稟議者"
          {...getOverrideProps(overrides, "\u7A1F\u8B70\u8005")}
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
          width="1177px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="10.5px"
          left="157px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="createdBy"
          {...getOverrideProps(overrides, "createdBy")}
        ></Text>
      </View>
      <Flex
        gap="23px"
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
          width="125px"
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
          width="1168px"
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
      <View
        width="unset"
        height="39px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(250,250,250,1)"
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
          width="140px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="10.5px"
          left="0px"
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
          width="1167px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="10.5px"
          left="158px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="createdAt"
          {...getOverrideProps(overrides, "createdAt")}
        ></Text>
      </View>
      <View
        width="unset"
        height="39px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
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
          width="121px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="10.5px"
          left="10px"
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
          width="1176px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="10.5px"
          left="158px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="recievedAt"
          {...getOverrideProps(overrides, "recievedAt")}
        ></Text>
      </View>
      <View
        width="unset"
        height="39px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(250,250,250,1)"
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
          width="119px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="10px"
          left="10px"
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
          width="1159px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="10.5px"
          left="158px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="closedAt"
          {...getOverrideProps(overrides, "closedAt")}
        ></Text>
      </View>
      <View
        width="unset"
        height="39px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 427")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          position="absolute"
          top="10px"
          left="158px"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 5076994467")}
        >
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
            {...getOverrideProps(
              overrides,
              "\u5186\uFF08\u7A0E\u8FBC\uFF093307722"
            )}
          ></Text>
        </Flex>
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
          width="115px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="10.5px"
          left="10px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="稟議金額"
          {...getOverrideProps(overrides, "\u7A1F\u8B70\u91D1\u984D")}
        ></Text>
      </View>
      <View
        width="unset"
        height="39px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(250,250,250,1)"
        {...getOverrideProps(overrides, "Frame 501")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          position="absolute"
          top="10px"
          left="158px"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 5076994474")}
        >
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
            children="paymentAmount"
            {...getOverrideProps(overrides, "paymentAmount")}
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
            {...getOverrideProps(
              overrides,
              "\u5186\uFF08\u7A0E\u8FBC\uFF096994476"
            )}
          ></Text>
        </Flex>
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
          width="115px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="10.5px"
          left="10px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="支払金額"
          {...getOverrideProps(overrides, "\u652F\u6255\u91D1\u984D")}
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
        padding="5px 10px 5px 10px"
        backgroundColor="rgba(250,250,250,1)"
        display="flex"
        {...getOverrideProps(overrides, "paidFlagFrame")}
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
          width="120px"
          height="25px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="支払状況"
          {...getOverrideProps(overrides, "\u652F\u6255\u72B6\u6CC1")}
        ></Text>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 496")}
        >
          <Flex
            gap="2px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="5px 5px 5px 5px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 441")}
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
              width="66px"
              height="25px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="支払日"
              {...getOverrideProps(overrides, "\u652F\u6255\u65E5")}
            ></Text>
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              display="flex"
              {...getOverrideProps(overrides, "paidDateSlot")}
            >
              <TextField
                width="unset"
                height="unset"
                placeholder="必須"
                shrink="0"
                size="small"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "paidDate")}
              ></TextField>
            </Flex>
          </Flex>
          <Flex
            gap="2px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="5px 3px 5px 3px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 442")}
          >
            <SwitchField
              width="unset"
              height="unset"
              label="    未払い"
              padding="8px 8px 8px 2px"
              shrink="0"
              size="small"
              defaultChecked={false}
              isDisabled={false}
              labelPosition="start"
              {...getOverrideProps(overrides, "paidFlagSwitch")}
            ></SwitchField>
            <Text
              fontFamily="Noto Sans JP"
              fontSize="14px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="20.27199935913086px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="80px"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="支払済み"
              {...getOverrideProps(overrides, "paidText")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="25px"
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
        {...getOverrideProps(overrides, "Frame 499")}
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
          width="120px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="支払状況更新者"
          {...getOverrideProps(overrides, "titlePaidFlagUpdatedBy")}
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
          width="1159px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="updatedBy"
          {...getOverrideProps(overrides, "paidFlagUpdatedBy")}
        ></Text>
      </Flex>
      <Flex
        gap="25px"
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
        {...getOverrideProps(overrides, "Frame 500")}
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
          width="120px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="支払状況更新日"
          {...getOverrideProps(overrides, "titlePaidFlagUpdatedAt")}
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
          width="1167px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="updatedAt"
          {...getOverrideProps(overrides, "paidFlagUpdatedAt")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "contentSlot")}
      ></Flex>
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
        {...getOverrideProps(overrides, "Frame 433")}
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
          children="添付資料"
          {...getOverrideProps(overrides, "\u6DFB\u4ED8\u8CC7\u6599")}
        ></Text>
        <View
          width="unset"
          height="unset"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "attachmentListSlot")}
        ></View>
      </Flex>
    </Flex>
  );
}
