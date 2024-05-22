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
  useBreakpointValue,
} from "@aws-amplify/ui-react";
export default function PaidTargetList(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        applicationNoText: {},
        documentId: {},
        cell2074441: { display: "none" },
        "\u627F\u8A8D\u756A\u53F7": {},
        approvalNo: {},
        cell2074444: { width: "164.29px", display: "none" },
        "\u4EF6\u540D": {},
        title: { width: "91px" },
        cell2074447: { width: "97.5px" },
        "\u7533\u8ACB\u65E5": {},
        startDate: {},
        cell2074450: { display: "none" },
        "\u8D77\u6848\u8005": {},
        createdBy: { width: "91px" },
        cell2074453: { width: "97.5px" },
        "\u91D1\u984D": {},
        amount: {},
        cell2074456: { width: "164.29px", display: "none" },
        "\u652F\u6255\u65E5": {},
        paidDate: {},
        cell4122095: { display: "none" },
        "\u652F\u6255\u72B6\u6CC1": {},
        paidFlag: {},
        cell2074459: { width: "97.5px" },
        ReviewButton: {},
        "Frame 433": { width: "unset", shrink: "1", grow: "1", basis: "0" },
        PaidTargetList: { width: "390px" },
      },
      variantValues: { breakpoint: "small" },
    },
    {
      overrides: {
        applicationNoText: {},
        documentId: {},
        cell2074441: {},
        "\u627F\u8A8D\u756A\u53F7": {},
        approvalNo: {},
        cell2074444: {},
        "\u4EF6\u540D": {},
        title: {},
        cell2074447: {},
        "\u7533\u8ACB\u65E5": {},
        startDate: {},
        cell2074450: {},
        "\u8D77\u6848\u8005": {},
        createdBy: {},
        cell2074453: {},
        "\u91D1\u984D": {},
        amount: {},
        cell2074456: {},
        "\u652F\u6255\u65E5": {},
        paidDate: {},
        cell4122095: {},
        "\u652F\u6255\u72B6\u6CC1": {},
        paidFlag: {},
        cell2074459: {},
        ReviewButton: {},
        "Frame 433": {},
        PaidTargetList: {},
      },
      variantValues: { breakpoint: "large" },
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
      direction="row"
      width="1450px"
      height="79px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(220,222,224,1)"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="5px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "PaidTargetList")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="164.29px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 13.5px 10px 13.5px"
        display="flex"
        {...getOverrideProps(overrides, "cell2074441")}
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
          children="applicationNoText"
          {...getOverrideProps(overrides, "applicationNoText")}
        ></Text>
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
          height="19px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="documentNo"
          {...getOverrideProps(overrides, "documentId")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="150px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 13.5px 10px 13.5px"
        display="flex"
        {...getOverrideProps(overrides, "cell2074444")}
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
          children="承認番号"
          {...getOverrideProps(overrides, "\u627F\u8A8D\u756A\u53F7")}
        ></Text>
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
          height="19px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="approvalNo"
          {...getOverrideProps(overrides, "approvalNo")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="300px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="10px 13.5px 10px 13.5px"
        display="flex"
        {...getOverrideProps(overrides, "cell2074447")}
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
          children="件名"
          {...getOverrideProps(overrides, "\u4EF6\u540D")}
        ></Text>
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
          width="300px"
          height="19px"
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
        direction="column"
        width="164.29px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 13.5px 10px 13.5px"
        display="flex"
        {...getOverrideProps(overrides, "cell2074450")}
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
          children="申請日"
          {...getOverrideProps(overrides, "\u7533\u8ACB\u65E5")}
        ></Text>
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
          height="19px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="startDate"
          {...getOverrideProps(overrides, "startDate")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="150px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 13.5px 10px 10px"
        display="flex"
        {...getOverrideProps(overrides, "cell2074453")}
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
          width="101px"
          height="21px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="起案者"
          {...getOverrideProps(overrides, "\u8D77\u6848\u8005")}
        ></Text>
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
          height="19px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="createdBy"
          {...getOverrideProps(overrides, "createdBy")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="150px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 13.5px 10px 13.5px"
        display="flex"
        {...getOverrideProps(overrides, "cell2074456")}
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
          width="116px"
          height="21px"
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
          height="19px"
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
        gap="10px"
        direction="column"
        width="164.29px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 13.5px 10px 13.5px"
        display="flex"
        {...getOverrideProps(overrides, "cell4122095")}
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
          children="支払日"
          {...getOverrideProps(overrides, "\u652F\u6255\u65E5")}
        ></Text>
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
          height="19px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="paidDate"
          {...getOverrideProps(overrides, "paidDate")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="120px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 13.5px 10px 13.5px"
        display="flex"
        {...getOverrideProps(overrides, "cell2074459")}
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
          children="支払状況"
          {...getOverrideProps(overrides, "\u652F\u6255\u72B6\u6CC1")}
        ></Text>
        <Badge
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          variation="success"
          children="paidFlag"
          {...getOverrideProps(overrides, "paidFlag")}
        ></Badge>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="80px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="14px 0px 14px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 433")}
      >
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="small"
          isDisabled={false}
          variation="primary"
          children="閲覧"
          {...getOverrideProps(overrides, "ReviewButton")}
        ></Button>
      </Flex>
    </Flex>
  );
}
