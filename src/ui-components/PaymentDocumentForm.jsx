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
  Icon,
  SelectField,
  Text,
  TextField,
  View,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
import CustomAlert from "./CustomAlert";
export default function PaymentDocumentForm(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        titleDocumentForm: {},
        close: {},
        "Frame 419": {},
        "\u7533\u8ACB\u8005": {},
        createdBy: {},
        "Frame 420": {},
        "\u4F9D\u983C\u30E1\u30FC\u30EB": {},
        requestEmailSelect: {},
        requestEmailSelectAlert: {},
        "Frame 4417473078": {},
        "Frame 438": {},
        "\u627F\u8A8D\u30EB\u30FC\u30C8\u9078\u629E": {},
        SelectField: {},
        workflowAlert: {},
        "Frame 4411123910": {},
        "Frame 437": {},
        "\u4EF6\u540D": {},
        title: {},
        titleAlert: {},
        "Frame 4411123918": {},
        "Frame 426": {},
        "\u7533\u8ACB\u65E5": {},
        startDate: {},
        startDateSlot: {},
        startDateAlert: {},
        "Frame 4411123936": {},
        "Frame 436": {},
        "\u8CFC\u5165\u5185\u5BB9": {},
        paymentContentSlot: {},
        "Frame 432": {},
        "\u5408\u8A08\u91D1\u984D": {},
        amount: {},
        "\u5186": {},
        "Frame 442": {},
        "Frame 431": {},
        "\u8A73\u7D30\u8AAC\u660E": {},
        Vector6192669: {},
        attachmentTooltip: {},
        Vector1123979: {},
        attachment: {},
        "Frame 440": {},
        attachmentListSlot: {},
        "Frame 430": {},
        SubmitButton: {},
        CancelButton: {},
        SaveButton: {},
        "Frame 429": {},
        PaymentDocumentForm: {},
      },
      variantValues: { breakpoint: "large" },
    },
    {
      overrides: {
        titleDocumentForm: {},
        close: {},
        "Frame 419": { width: "390px" },
        "\u7533\u8ACB\u8005": { width: "100px" },
        createdBy: { shrink: "1", grow: "1", basis: "0" },
        "Frame 420": { width: "390px" },
        "\u4F9D\u983C\u30E1\u30FC\u30EB": { width: "100px" },
        requestEmailSelect: { width: "unset", alignSelf: "stretch" },
        requestEmailSelectAlert: { width: "unset", alignSelf: "stretch" },
        "Frame 4417473078": {
          width: "unset",
          shrink: "1",
          grow: "1",
          basis: "0",
        },
        "Frame 438": {},
        "\u627F\u8A8D\u30EB\u30FC\u30C8\u9078\u629E": { width: "100px" },
        SelectField: { width: "unset", alignSelf: "stretch" },
        workflowAlert: { width: "unset", alignSelf: "stretch" },
        "Frame 4411123910": { shrink: "1", grow: "1", basis: "0" },
        "Frame 437": { width: "390px", padding: "5px 10px 5px 10px" },
        "\u4EF6\u540D": { width: "100px" },
        title: { width: "unset", alignSelf: "stretch" },
        titleAlert: { width: "unset", alignSelf: "stretch" },
        "Frame 4411123918": {},
        "Frame 426": { width: "390px" },
        "\u7533\u8ACB\u65E5": { width: "100px" },
        startDate: { shrink: "1", grow: "1", basis: "0" },
        startDateSlot: {},
        startDateAlert: { width: "unset", alignSelf: "stretch" },
        "Frame 4411123936": {
          width: "unset",
          shrink: "1",
          grow: "1",
          basis: "0",
        },
        "Frame 436": { width: "390px" },
        "\u8CFC\u5165\u5185\u5BB9": { width: "90px", height: "19px" },
        paymentContentSlot: {
          gap: "10px",
          width: "unset",
          shrink: "1",
          padding: "0px 0px 0px 0px",
          grow: "1",
          basis: "0",
        },
        "Frame 432": {
          gap: "6px",
          alignItems: "flex-start",
          padding: "5px 0px 5px 10px",
          overflow: "hidden",
        },
        "\u5408\u8A08\u91D1\u984D": { width: "100px" },
        amount: {},
        "\u5186": {},
        "Frame 442": {},
        "Frame 431": { width: "390px", overflow: "hidden" },
        "\u8A73\u7D30\u8AAC\u660E": { width: "66px" },
        Vector6192669: {},
        attachmentTooltip: {},
        Vector1123979: {},
        attachment: {},
        "Frame 440": { width: "unset" },
        attachmentListSlot: { overflow: "hidden" },
        "Frame 430": {
          width: "390px",
          padding: "5px 5px 5px 10px",
          overflow: "hidden",
        },
        SubmitButton: {},
        CancelButton: {},
        SaveButton: {},
        "Frame 429": { width: "390px", justifyContent: "center" },
        PaymentDocumentForm: { width: "390px" },
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
      width="1140px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="5px 10px 5px 0px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "PaymentDocumentForm")}
      {...rest}
    >
      <View
        width="1140px"
        height="49px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 419")}
      >
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
          top="10px"
          left="32.5px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="支払依頼書　新規作成"
          {...getOverrideProps(overrides, "titleDocumentForm")}
        ></Text>
        <View
          width="24px"
          height="24px"
          {...getOverrideProps(overrides, "close")}
        ></View>
      </View>
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
        padding="5px 10px 5px 10px"
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
          children="申請者"
          {...getOverrideProps(overrides, "\u7533\u8ACB\u8005")}
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
        padding="5px 0px 5px 10px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 438")}
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
          children="依頼メール"
          {...getOverrideProps(overrides, "\u4F9D\u983C\u30E1\u30FC\u30EB")}
        ></Text>
        <Flex
          gap="2px"
          direction="column"
          width="941px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="5px 0px 5px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 4417473078")}
        >
          <SelectField
            width="400px"
            height="unset"
            shrink="0"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "requestEmailSelect")}
          ></SelectField>
          <CustomAlert
            display="flex"
            gap="10px"
            direction="row"
            width="258px"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            isshow={true}
            {...getOverrideProps(overrides, "requestEmailSelectAlert")}
          ></CustomAlert>
        </Flex>
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
        padding="5px 0px 5px 10px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 437")}
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
          children="承認ルート選択"
          {...getOverrideProps(
            overrides,
            "\u627F\u8A8D\u30EB\u30FC\u30C8\u9078\u629E"
          )}
        ></Text>
        <Flex
          gap="2px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="5px 0px 5px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 4411123910")}
        >
          <SelectField
            width="965px"
            height="unset"
            shrink="0"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="quiet"
            {...getOverrideProps(overrides, "SelectField")}
          ></SelectField>
          <CustomAlert
            display="flex"
            gap="10px"
            direction="row"
            width="258px"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            isshow={true}
            {...getOverrideProps(overrides, "workflowAlert")}
          ></CustomAlert>
        </Flex>
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
        padding="5px 10px 5px 10px"
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
        <Flex
          gap="2px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="5px 0px 5px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 4411123918")}
        >
          <TextField
            width="965px"
            height="unset"
            placeholder="必須（最大40文字）"
            shrink="0"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "title")}
          ></TextField>
          <CustomAlert
            display="flex"
            gap="10px"
            direction="row"
            width="258px"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            isshow={true}
            {...getOverrideProps(overrides, "titleAlert")}
          ></CustomAlert>
        </Flex>
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
        padding="5px 10px 5px 10px"
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
          children="申請日"
          {...getOverrideProps(overrides, "\u7533\u8ACB\u65E5")}
        ></Text>
        <Flex
          gap="2px"
          direction="column"
          width="984px"
          height="62px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="5px 0px 5px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 4411123936")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            grow="1"
            shrink="1"
            basis="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "startDateSlot")}
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
              {...getOverrideProps(overrides, "startDate")}
            ></TextField>
          </Flex>
          <CustomAlert
            display="flex"
            gap="10px"
            direction="row"
            width="258px"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            isshow={true}
            {...getOverrideProps(overrides, "startDateAlert")}
          ></CustomAlert>
        </Flex>
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
        padding="5px 10px 5px 10px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 432")}
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
          children="購入内容"
          {...getOverrideProps(overrides, "\u8CFC\u5165\u5185\u5BB9")}
        ></Text>
        <Flex
          gap="5px"
          direction="column"
          width="981px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="5px 5px 5px 5px"
          display="flex"
          {...getOverrideProps(overrides, "paymentContentSlot")}
        ></Flex>
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
        padding="5px 10px 5px 10px"
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
          children="合計金額"
          {...getOverrideProps(overrides, "\u5408\u8A08\u91D1\u984D")}
        ></Text>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="29px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 442")}
        >
          <Text
            fontFamily="Noto Sans JP"
            fontSize="14px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="21px"
            textAlign="right"
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
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="円（税込）"
            {...getOverrideProps(overrides, "\u5186")}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="1130px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="5px 10px 5px 10px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 430")}
      >
        <Flex
          gap="5px"
          direction="row"
          width="139px"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 440")}
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
            children="添付資料"
            {...getOverrideProps(overrides, "\u8A73\u7D30\u8AAC\u660E")}
          ></Text>
          <View
            width="15px"
            height="15px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "attachmentTooltip")}
          >
            <Icon
              width="15px"
              height="15px"
              viewBox={{ minX: 0, minY: 0, width: 15, height: 15 }}
              paths={[
                {
                  d: "M7.5 15C5.51088 15 3.60322 14.2098 2.1967 12.8033C0.790176 11.3968 4.16334e-16 9.48912 0 7.5C5.82867e-16 5.51088 0.790176 3.60322 2.1967 2.1967C3.60322 0.790176 5.51088 1.33227e-15 7.5 0C9.48912 -9.15934e-16 11.3968 0.790176 12.8033 2.1967C14.2098 3.60322 15 5.51088 15 7.5C15 9.48912 14.2098 11.3968 12.8033 12.8033C11.3968 14.2098 9.48912 15 7.5 15ZM9 5.25C9 5.46 8.8425 5.85 8.685 6L7.5 7.185C7.0725 7.62 6.75 8.385 6.75 9L6.75 9.75L8.25 9.75L8.25 9C8.25 8.7825 8.4075 8.4 8.565 8.25L9.75 7.065C10.1775 6.63 10.5 5.865 10.5 5.25C10.5 4.45435 10.1839 3.69129 9.62132 3.12868C9.05871 2.56607 8.29565 2.25 7.5 2.25C6.70435 2.25 5.94129 2.56607 5.37868 3.12868C4.81607 3.69129 4.5 4.45435 4.5 5.25L6 5.25C6 4.85218 6.15804 4.47064 6.43934 4.18934C6.72064 3.90804 7.10218 3.75 7.5 3.75C7.89782 3.75 8.27936 3.90804 8.56066 4.18934C8.84196 4.47064 9 4.85218 9 5.25ZM6.75 11.25L6.75 12.75L8.25 12.75L8.25 11.25L6.75 11.25Z",
                  fill: "rgba(92,102,112,1)",
                  fillRule: "nonzero",
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
              {...getOverrideProps(overrides, "Vector6192669")}
            ></Icon>
          </View>
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "attachment")}
          >
            <Icon
              width="22px"
              height="11px"
              viewBox={{ minX: 0, minY: 0, width: 22, height: 11 }}
              paths={[
                {
                  d: "M17 9.5L5.5 9.5C3.29 9.5 1.5 7.71 1.5 5.5C1.5 3.29 3.29 1.5 5.5 1.5L18 1.5C19.38 1.5 20.5 2.62 20.5 4C20.5 5.38 19.38 6.5 18 6.5L7.5 6.5C6.95 6.5 6.5 6.05 6.5 5.5C6.5 4.95 6.95 4.5 7.5 4.5L17 4.5L17 3L7.5 3C6.12 3 5 4.12 5 5.5C5 6.88 6.12 8 7.5 8L18 8C20.21 8 22 6.21 22 4C22 1.79 20.21 0 18 0L5.5 0C2.46 0 0 2.46 0 5.5C0 8.54 2.46 11 5.5 11L17 11L17 9.5Z",
                  fill: "rgba(0,0,0,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="27.08%"
              bottom="27.08%"
              left="4.17%"
              right="4.17%"
              {...getOverrideProps(overrides, "Vector1123979")}
            ></Icon>
          </View>
        </Flex>
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
          {...getOverrideProps(overrides, "attachmentListSlot")}
        ></View>
      </Flex>
      <Flex
        gap="30px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="5px 50px 5px 50px"
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
          children="申請"
          {...getOverrideProps(overrides, "SubmitButton")}
        ></Button>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="small"
          isDisabled={false}
          variation="default"
          children="キャンセル"
          {...getOverrideProps(overrides, "CancelButton")}
        ></Button>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="small"
          isDisabled={false}
          variation="primary"
          children="一時保存"
          {...getOverrideProps(overrides, "SaveButton")}
        ></Button>
      </Flex>
    </Flex>
  );
}
