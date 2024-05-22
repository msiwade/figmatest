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
export default function PaidTransportReview(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        "\u652F\u6255\u72B6\u6CC1\uFF1A": {},
        paidFlag: {},
        "Frame 4322874386": {},
        close: {},
        "\u4EA4\u901A\u8CBB\u7B49\u7533\u8ACB": {},
        "Frame 419": {},
        "\u4EA4\u901A\u8CBB\u7B49\u7CBE\u7B97\u66F8\u756A\u53F7": {},
        applicationNo: {},
        "Frame 4322874391": {},
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
        "\u8A73\u7D30": {},
        transportContentSlot: {},
        transportContentFrame: {},
        PaidTransportReview: {},
      },
      variantValues: { breakpoint: "large" },
    },
    {
      overrides: {
        "\u652F\u6255\u72B6\u6CC1\uFF1A": {},
        paidFlag: {},
        "Frame 4322874386": { top: "calc(50% - 15px - 1px)", right: "50px" },
        close: {},
        "\u4EA4\u901A\u8CBB\u7B49\u7533\u8ACB": {
          top: "calc(50% - 14.5px - 1.5px)",
          left: "20px",
        },
        "Frame 419": { height: "40px" },
        "\u4EA4\u901A\u8CBB\u7B49\u7CBE\u7B97\u66F8\u756A\u53F7": {
          width: "120px",
        },
        applicationNo: { width: "unset", shrink: "1", grow: "1", basis: "0" },
        "Frame 4322874391": {},
        "\u627F\u8A8D\u756A\u53F7": { width: "120px" },
        approvalNo: { width: "unset", shrink: "1", grow: "1", basis: "0" },
        "Frame 435": {},
        "\u4F9D\u983C\u8005": { width: "120px" },
        createdBy: { width: "unset", shrink: "1", grow: "1", basis: "0" },
        "Frame 420": {},
        "\u4EF6\u540D": { width: "120px" },
        title: { width: "unset", shrink: "1", grow: "1", basis: "0" },
        "Frame 426": {},
        "\u7533\u8ACB\u65E5": { width: "120px" },
        createdAt: { width: "unset", shrink: "1", grow: "1", basis: "0" },
        "Frame 430": {},
        "\u53D7\u4ED8\u65E5": { width: "120px" },
        recievedAt: { width: "unset", shrink: "1", grow: "1", basis: "0" },
        "Frame 436": {},
        titleClosedAt: { width: "120px" },
        closedAt: { width: "unset", shrink: "1", grow: "1", basis: "0" },
        "Frame 431": {},
        "\u652F\u6255\u72B6\u6CC1": { width: "118px" },
        "\u652F\u6255\u65E5": { width: "60px", height: "19px" },
        paidDate: { shrink: "1", grow: "1", basis: "0" },
        paidDateSlot: { width: "175px" },
        "Frame 441": {},
        paidFlagSwitch: {
          label: "   \u672A\u6255\u3044",
          padding: "8px 8px 8px 0px",
        },
        paidText: {},
        "Frame 442": {},
        "Frame 496": {},
        paidFlagFrame: { gap: "5px" },
        titlePaidFlagUpdatedBy: { width: "120px" },
        paidFlagUpdatedBy: { width: "230px" },
        "Frame 499": { gap: "10px" },
        titlePaidFlagUpdatedAt: { width: "120px" },
        paidFlagUpdatedAt: { width: "230px" },
        "Frame 500": { gap: "10px" },
        "\u8A73\u7D30": {},
        transportContentSlot: {},
        transportContentFrame: {},
        PaidTransportReview: { width: "390px" },
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
      {...getOverrideProps(overrides, "PaidTransportReview")}
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
          {...getOverrideProps(overrides, "Frame 4322874386")}
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
          children="交通費等申請"
          {...getOverrideProps(
            overrides,
            "\u4EA4\u901A\u8CBB\u7B49\u7533\u8ACB"
          )}
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
        {...getOverrideProps(overrides, "Frame 4322874391")}
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
          width="300px"
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
          width="300px"
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
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="5px 10px 5px 10px"
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
          width="139px"
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
            padding="5px 0px 5px 0px"
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
            padding="5px 0px 5px 0px"
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
        gap="5px"
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
          width="139px"
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
          width="900px"
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
        gap="5px"
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
          width="139px"
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
          width="900px"
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
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "transportContentSlot")}
        ></Flex>
      </Flex>
    </Flex>
  );
}
