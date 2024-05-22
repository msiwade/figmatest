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
export default function DocumentList(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        applicationNoText: {},
        documentId: {},
        cell1253089: {},
        "\u627F\u8A8D\u756A\u53F7": {},
        approvalNo: {},
        cell1253092: {},
        "\u4EF6\u540D": {},
        titel: {},
        cell1253095: {},
        "\u4F5C\u6210\u65E5": {},
        createdAt: {},
        cell1253098: {},
        "\u8D77\u6848\u8005": {},
        createdBy: {},
        cell1253101: {},
        "\u73FE\u5728\u306E\u30EC\u30D3\u30E5\u30A2\u30FC": {},
        reviewer: {},
        cell1253104: {},
        "\u627F\u8A8D\u72B6\u6CC1": {},
        status: {},
        cell1253107: {},
        ReviewButton: {},
        "Frame 433": {},
        DocumentList: {},
      },
      variantValues: { breakpoint: "large" },
    },
    {
      overrides: {
        applicationNoText: {},
        documentId: {},
        cell1253089: {
          width: "unset",
          shrink: "1",
          display: "none",
          grow: "1",
          basis: "0",
        },
        "\u627F\u8A8D\u756A\u53F7": {},
        approvalNo: {},
        cell1253092: {
          width: "unset",
          shrink: "1",
          display: "none",
          grow: "1",
          basis: "0",
        },
        "\u4EF6\u540D": {},
        titel: { width: "91px", height: "unset" },
        cell1253095: { width: "97.5px" },
        "\u4F5C\u6210\u65E5": {},
        createdAt: {},
        cell1253098: {
          width: "unset",
          shrink: "1",
          display: "none",
          grow: "1",
          basis: "0",
        },
        "\u8D77\u6848\u8005": { width: "unset", height: "unset" },
        createdBy: { width: "91px" },
        cell1253101: { width: "97.5px" },
        "\u73FE\u5728\u306E\u30EC\u30D3\u30E5\u30A2\u30FC": {},
        reviewer: {},
        cell1253104: {
          width: "unset",
          shrink: "1",
          display: "none",
          grow: "1",
          basis: "0",
        },
        "\u627F\u8A8D\u72B6\u6CC1": {},
        status: {},
        cell1253107: { width: "97.5px" },
        ReviewButton: {},
        "Frame 433": { width: "unset", shrink: "1", grow: "1", basis: "0" },
        DocumentList: { width: "375px" },
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
      {...getOverrideProps(overrides, "DocumentList")}
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
        {...getOverrideProps(overrides, "cell1253089")}
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
        width="164.29px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 13.5px 10px 13.5px"
        display="flex"
        {...getOverrideProps(overrides, "cell1253092")}
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
        {...getOverrideProps(overrides, "cell1253095")}
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
          children="titel"
          {...getOverrideProps(overrides, "titel")}
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
        {...getOverrideProps(overrides, "cell1253098")}
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
          children="作成日"
          {...getOverrideProps(overrides, "\u4F5C\u6210\u65E5")}
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
          children="createdAt"
          {...getOverrideProps(overrides, "createdAt")}
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
        padding="10px 13.5px 10px 10px"
        display="flex"
        {...getOverrideProps(overrides, "cell1253101")}
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
        width="164.29px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 13.5px 10px 13.5px"
        display="flex"
        {...getOverrideProps(overrides, "cell1253104")}
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
          children="現在のレビュアー"
          {...getOverrideProps(
            overrides,
            "\u73FE\u5728\u306E\u30EC\u30D3\u30E5\u30A2\u30FC"
          )}
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
          children="reviewedBy"
          {...getOverrideProps(overrides, "reviewer")}
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
        {...getOverrideProps(overrides, "cell1253107")}
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
          children="承認状況"
          {...getOverrideProps(overrides, "\u627F\u8A8D\u72B6\u6CC1")}
        ></Text>
        <Badge
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          variation="success"
          children="status"
          {...getOverrideProps(overrides, "status")}
        ></Badge>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="164.29px"
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
