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
  TextAreaField,
  TextField,
  View,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
import CustomAlert from "./CustomAlert";
export default function UpdateAttachmentForm(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        Vector6833712: {},
        close: {},
        title: {},
        "Frame 466": {},
        "\u4F5C\u6210\u8005": {},
        nameOfCreator: {},
        "Frame 488": {},
        "\u4F9D\u983C\u533A\u5206": {},
        requestDiv: {},
        requestDivText: {},
        "Frame 506": {},
        "Frame 489": {},
        "\u30D5\u30A1\u30A4\u30EB\u7A2E\u5225": {},
        fileType: {},
        "Frame 495": {},
        "\u53D6\u5F15\u5E74\u6708\u65E5": {},
        transactionDate: {},
        transactionDateSlot: {},
        transactionDateAlert: {},
        "Frame 4926833727": {},
        "Frame 490": {},
        "\u53D6\u5F15\u5148": {},
        paymentDestination: {},
        paymentDestinationAlert: {},
        "Frame 4936833733": {},
        "Frame 491": {},
        "\u91D1\u984D": {},
        amount: {},
        "\u5186": {},
        "Frame 4946833739": {},
        amountAlert: {},
        "Frame 4936833738": {},
        "Frame 4926833736": {},
        "\u6539\u8A02\u7406\u7531": {},
        reason: {},
        reasonAlert: {},
        "Frame 4936833950": {},
        "Frame 496": {},
        "\u5099\u8003": {},
        remarks: {},
        "Frame 4936833743": {},
        "\u6DFB\u4ED8\u8CC7\u6599": {},
        Vector6833750: {},
        attachment: {},
        "Frame 440": {},
        attachmentListSlot: {},
        attachmentAlert: {},
        "Frame 498": {},
        "Frame 430": {},
        SubmitButton: {},
        CancelButton: {},
        "Frame 4946833754": {},
        UpdateAttachmentForm: {},
      },
      variantValues: { breakpoint: "large" },
    },
    {
      overrides: {
        Vector6833712: {},
        close: {},
        title: {},
        "Frame 466": { width: "unset", alignSelf: "stretch" },
        "\u4F5C\u6210\u8005": { width: "100px" },
        nameOfCreator: {},
        "Frame 488": {},
        "\u4F9D\u983C\u533A\u5206": { width: "100px" },
        requestDiv: { width: "unset", alignSelf: "stretch" },
        requestDivText: {},
        "Frame 506": {},
        "Frame 489": {},
        "\u30D5\u30A1\u30A4\u30EB\u7A2E\u5225": { width: "100px" },
        fileType: { width: "unset", shrink: "1", grow: "1", basis: "0" },
        "Frame 495": {},
        "\u53D6\u5F15\u5E74\u6708\u65E5": { width: "100px" },
        transactionDate: { width: "unset", alignSelf: "stretch" },
        transactionDateSlot: { alignSelf: "stretch" },
        transactionDateAlert: { width: "unset", alignSelf: "stretch" },
        "Frame 4926833727": { shrink: "1", grow: "1", basis: "0" },
        "Frame 490": {},
        "\u53D6\u5F15\u5148": { width: "100px" },
        paymentDestination: { width: "unset", alignSelf: "stretch" },
        paymentDestinationAlert: { width: "unset", alignSelf: "stretch" },
        "Frame 4936833733": { shrink: "1", grow: "1", basis: "0" },
        "Frame 491": {},
        "\u91D1\u984D": { width: "100px" },
        amount: { width: "unset", shrink: "1", grow: "1", basis: "0" },
        "\u5186": {},
        "Frame 4946833739": { alignSelf: "stretch" },
        amountAlert: { width: "unset", alignSelf: "stretch" },
        "Frame 4936833738": { shrink: "1", grow: "1", basis: "0" },
        "Frame 4926833736": {},
        "\u6539\u8A02\u7406\u7531": { width: "100px" },
        reason: {},
        reasonAlert: { width: "unset", alignSelf: "stretch" },
        "Frame 4936833950": {},
        "Frame 496": {},
        "\u5099\u8003": { width: "100px" },
        remarks: {},
        "Frame 4936833743": {},
        "\u6DFB\u4ED8\u8CC7\u6599": {},
        Vector6833750: {},
        attachment: {},
        "Frame 440": { width: "100px" },
        attachmentListSlot: { width: "unset", alignSelf: "stretch" },
        attachmentAlert: { width: "unset", alignSelf: "stretch" },
        "Frame 498": {},
        "Frame 430": {},
        SubmitButton: {},
        CancelButton: {},
        "Frame 4946833754": {},
        UpdateAttachmentForm: { width: "390px" },
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
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="5px"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "UpdateAttachmentForm")}
      {...rest}
    >
      <View
        width="1110px"
        height="49px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 466")}
      >
        <View
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="calc(50% - 12px - 0px)"
          right="24.5px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "close")}
        >
          <Icon
            width="14px"
            height="14px"
            viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
            paths={[
              {
                d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                fill: "rgba(13,26,38,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="20.83%"
            bottom="20.83%"
            left="20.83%"
            right="20.83%"
            {...getOverrideProps(overrides, "Vector6833712")}
          ></Icon>
        </View>
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
          left="34px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="追加資料添付　更新"
          {...getOverrideProps(overrides, "title")}
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
        backgroundColor="rgba(255,255,255,1)"
        display="flex"
        {...getOverrideProps(overrides, "Frame 488")}
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
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="作成者"
          {...getOverrideProps(overrides, "\u4F5C\u6210\u8005")}
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
          width="200px"
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
        backgroundColor="rgba(255,255,255,1)"
        display="flex"
        {...getOverrideProps(overrides, "Frame 489")}
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
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="依頼区分"
          {...getOverrideProps(overrides, "\u4F9D\u983C\u533A\u5206")}
        ></Text>
        <Flex
          gap="5px"
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
          {...getOverrideProps(overrides, "Frame 506")}
        >
          <SelectField
            width="300px"
            height="unset"
            shrink="0"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "requestDiv")}
          ></SelectField>
          <Text
            fontFamily="Noto Sans JP"
            fontSize="13px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="19.5px"
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
            children="補足説明"
            {...getOverrideProps(overrides, "requestDivText")}
          ></Text>
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
        backgroundColor="rgba(255,255,255,1)"
        display="flex"
        {...getOverrideProps(overrides, "Frame 495")}
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
        <SelectField
          width="300px"
          height="unset"
          shrink="0"
          size="small"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "fileType")}
        ></SelectField>
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
        backgroundColor="rgba(255,255,255,1)"
        display="flex"
        {...getOverrideProps(overrides, "Frame 490")}
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
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="取引年月日"
          {...getOverrideProps(overrides, "\u53D6\u5F15\u5E74\u6708\u65E5")}
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
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 4926833727")}
        >
          <Flex
            gap="10px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "transactionDateSlot")}
          >
            <TextField
              width="300px"
              height="unset"
              shrink="0"
              placeholder="Placeholder"
              size="small"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "transactionDate")}
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
            {...getOverrideProps(overrides, "transactionDateAlert")}
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
        backgroundColor="rgba(255,255,255,1)"
        display="flex"
        {...getOverrideProps(overrides, "Frame 491")}
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
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="取引先"
          {...getOverrideProps(overrides, "\u53D6\u5F15\u5148")}
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
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 4936833733")}
        >
          <TextField
            width="640px"
            height="unset"
            placeholder="必須"
            shrink="0"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "paymentDestination")}
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
            {...getOverrideProps(overrides, "paymentDestinationAlert")}
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
        backgroundColor="rgba(255,255,255,1)"
        display="flex"
        {...getOverrideProps(overrides, "Frame 4926833736")}
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
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="金額"
          {...getOverrideProps(overrides, "\u91D1\u984D")}
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
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 4936833738")}
        >
          <Flex
            gap="5px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 4946833739")}
          >
            <TextField
              width="300px"
              height="unset"
              placeholder="必須"
              shrink="0"
              size="small"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "amount")}
            ></TextField>
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
            {...getOverrideProps(overrides, "amountAlert")}
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
        backgroundColor="rgba(255,255,255,1)"
        display="flex"
        {...getOverrideProps(overrides, "Frame 496")}
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
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="改訂理由"
          {...getOverrideProps(overrides, "\u6539\u8A02\u7406\u7531")}
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
          {...getOverrideProps(overrides, "Frame 4936833950")}
        >
          <TextAreaField
            width="unset"
            height="93px"
            placeholder="必須"
            shrink="0"
            alignSelf="stretch"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "reason")}
          ></TextAreaField>
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
            {...getOverrideProps(overrides, "reasonAlert")}
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
        backgroundColor="rgba(255,255,255,1)"
        display="flex"
        {...getOverrideProps(overrides, "Frame 4936833743")}
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
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="備考"
          {...getOverrideProps(overrides, "\u5099\u8003")}
        ></Text>
        <TextAreaField
          width="unset"
          height="unset"
          placeholder="任意"
          grow="1"
          shrink="1"
          basis="0"
          size="small"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "remarks")}
        ></TextAreaField>
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
        {...getOverrideProps(overrides, "Frame 430")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="140px"
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
            {...getOverrideProps(overrides, "\u6DFB\u4ED8\u8CC7\u6599")}
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
              {...getOverrideProps(overrides, "Vector6833750")}
            ></Icon>
          </View>
        </Flex>
        <Flex
          gap="2px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 498")}
        >
          <View
            width="940px"
            height="unset"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "attachmentListSlot")}
          ></View>
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
            {...getOverrideProps(overrides, "attachmentAlert")}
          ></CustomAlert>
        </Flex>
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
        padding="5px 30px 5px 30px"
        backgroundColor="rgba(255,255,255,1)"
        display="flex"
        {...getOverrideProps(overrides, "Frame 4946833754")}
      >
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="small"
          isDisabled={false}
          variation="primary"
          children="更新"
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
      </Flex>
    </Flex>
  );
}
