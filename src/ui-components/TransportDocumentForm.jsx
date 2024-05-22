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
export default function TransportDocumentForm(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        titleDocumentForm: {},
        close: {},
        "Frame 419": { width: "390px" },
        "\u7533\u8ACB\u8005": {},
        createdBy: {},
        "Frame 420": {},
        "\u627F\u8A8D\u30EB\u30FC\u30C8\u9078\u629E": { width: "80px" },
        SelectField: { width: "unset", alignSelf: "stretch" },
        workflowAlert: { width: "unset", alignSelf: "stretch" },
        "Frame 441423914": { shrink: "1", grow: "1", basis: "0" },
        "Frame 437": { alignSelf: "stretch" },
        "\u5E74\u5EA6": { width: "80px" },
        fiscalYear: {},
        fiscalYearSlot: {},
        "\u5E74": {},
        "Frame 497": { alignSelf: "stretch" },
        fiscalMonth: { width: "unset", shrink: "1", grow: "1", basis: "0" },
        "\u5EA6": {},
        "Frame 498": { alignSelf: "stretch" },
        "Frame 488": {
          direction: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        },
        "\u203B\u6CE8\u8A18": { height: "unset" },
        fiscalYearAlert: {},
        "Frame 441874108": {
          width: "unset",
          shrink: "1",
          grow: "1",
          basis: "0",
        },
        "Frame 439": { width: "unset", alignSelf: "stretch" },
        "\u4EF6\u540D": { width: "80px" },
        title: { width: "unset", alignSelf: "stretch" },
        "Frame 441423919": {},
        "Frame 426": { width: "unset", alignSelf: "stretch" },
        "\u7533\u8ACB\u65E5": { width: "80px" },
        startDate: { shrink: "1", grow: "1", basis: "0" },
        startDateSlot: { shrink: "0" },
        "Frame 441423924": {
          width: "unset",
          height: "unset",
          shrink: "1",
          grow: "1",
          basis: "0",
        },
        "Frame 436": { width: "unset", alignSelf: "stretch" },
        transportContentSlot: { shrink: "1", grow: "1", basis: "0" },
        "Frame 438": {
          direction: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        },
        Vector: {},
        AddButton: {},
        "Frame 432": {},
        "\u5408\u8A08\u91D1\u984D": { width: "80px" },
        amount: {},
        "\u5186": {},
        "Frame 442": { shrink: "1", grow: "1", basis: "0" },
        "Frame 431": {},
        SubmitButton: {},
        CancelButton: {},
        SaveButton: {},
        "Frame 429": {},
        TransportDocumentForm: { width: "390px" },
      },
      variantValues: { breakpoint: "small" },
    },
    {
      overrides: {
        titleDocumentForm: {},
        close: {},
        "Frame 419": {},
        "\u7533\u8ACB\u8005": {},
        createdBy: {},
        "Frame 420": {},
        "\u627F\u8A8D\u30EB\u30FC\u30C8\u9078\u629E": {},
        SelectField: {},
        workflowAlert: {},
        "Frame 441423914": {},
        "Frame 437": {},
        "\u5E74\u5EA6": {},
        fiscalYear: {},
        fiscalYearSlot: {},
        "\u5E74": {},
        "Frame 497": {},
        fiscalMonth: {},
        "\u5EA6": {},
        "Frame 498": {},
        "Frame 488": {},
        "\u203B\u6CE8\u8A18": {},
        fiscalYearAlert: {},
        "Frame 441874108": {},
        "Frame 439": {},
        "\u4EF6\u540D": {},
        title: {},
        "Frame 441423919": {},
        "Frame 426": {},
        "\u7533\u8ACB\u65E5": {},
        startDate: {},
        startDateSlot: {},
        "Frame 441423924": {},
        "Frame 436": {},
        transportContentSlot: {},
        "Frame 438": {},
        Vector: {},
        AddButton: {},
        "Frame 432": {},
        "\u5408\u8A08\u91D1\u984D": {},
        amount: {},
        "\u5186": {},
        "Frame 442": {},
        "Frame 431": {},
        SubmitButton: {},
        CancelButton: {},
        SaveButton: {},
        "Frame 429": {},
        TransportDocumentForm: {},
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
      {...getOverrideProps(overrides, "TransportDocumentForm")}
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
          children="交通費等申請　新規作成"
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
          {...getOverrideProps(overrides, "Frame 441423914")}
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
        width="1140px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="5px 10px 5px 10px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 439")}
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
          children="年度"
          {...getOverrideProps(overrides, "\u5E74\u5EA6")}
        ></Text>
        <Flex
          gap="2px"
          direction="column"
          width="984px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="5px 0px 5px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 441874108")}
        >
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
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 488")}
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
              {...getOverrideProps(overrides, "Frame 497")}
            >
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
                {...getOverrideProps(overrides, "fiscalYearSlot")}
              >
                <TextField
                  width="100px"
                  height="unset"
                  placeholder="必須"
                  shrink="0"
                  size="small"
                  isDisabled={false}
                  labelHidden={false}
                  variation="default"
                  {...getOverrideProps(overrides, "fiscalYear")}
                ></TextField>
              </Flex>
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
                width="24px"
                height="22px"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="年"
                {...getOverrideProps(overrides, "\u5E74")}
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
              position="relative"
              padding="0px 0px 0px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 498")}
            >
              <SelectField
                width="300px"
                height="unset"
                shrink="0"
                size="small"
                isDisabled={true}
                labelHidden={true}
                variation="default"
                {...getOverrideProps(overrides, "fiscalMonth")}
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
                width="40px"
                height="22px"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="度"
                {...getOverrideProps(overrides, "\u5EA6")}
              ></Text>
            </Flex>
          </Flex>
          <Text
            fontFamily="Noto Sans JP"
            fontSize="12px"
            fontWeight="400"
            color="rgba(255,0,0,1)"
            lineHeight="17.375999450683594px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="16px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="※前月16日から当月15日までの分を当月20日までに提出してください。"
            {...getOverrideProps(overrides, "\u203B\u6CE8\u8A18")}
          ></Text>
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
            {...getOverrideProps(overrides, "fiscalYearAlert")}
          ></CustomAlert>
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
          {...getOverrideProps(overrides, "Frame 441423919")}
        >
          <TextField
            width="965px"
            height="unset"
            placeholder="必須（最大40文字）"
            shrink="0"
            size="small"
            isDisabled={true}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "title")}
          ></TextField>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="1140px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
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
          height="43px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="5px 0px 5px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 441423924")}
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
              isDisabled={true}
              labelHidden={false}
              variation="default"
              {...getOverrideProps(overrides, "startDate")}
            ></TextField>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 438")}
      >
        <Flex
          gap="0"
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
          {...getOverrideProps(overrides, "transportContentSlot")}
        ></Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="5px 10px 5px 10px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 432")}
      >
        <View
          width="40px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "AddButton")}
        >
          <Icon
            width="31.67px"
            height="33.33px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 31.666669845581055,
              height: 33.333335876464844,
            }}
            paths={[
              {
                d: "M3.33334 30C2.41667 30 1.63167 29.6733 0.978336 29.02C0.325003 28.3667 -0.00110828 27.5822 2.82966e-06 26.6667L2.82966e-06 3.33334C2.82966e-06 2.41667 0.32667 1.63167 0.980003 0.978336C1.63334 0.325003 2.41778 -0.00110828 3.33334 2.82966e-06L26.6667 2.82966e-06C27.5833 2.82966e-06 28.3683 0.32667 29.0217 0.980003C29.675 1.63334 30.0011 2.41778 30 3.33334L30 18.0417C29.5 17.7361 28.9722 17.4861 28.4167 17.2917C27.8611 17.0972 27.2778 16.9444 26.6667 16.8333L26.6667 3.33334L3.33334 3.33334L3.33334 26.6667L15 26.6667C15 27.25 15.0417 27.8194 15.125 28.375C15.2083 28.9306 15.3472 29.4722 15.5417 30L3.33334 30ZM23.3333 33.3333L23.3333 28.3333L18.3333 28.3333L18.3333 25L23.3333 25L23.3333 20L26.6667 20L26.6667 25L31.6667 25L31.6667 28.3333L26.6667 28.3333L26.6667 33.3333L23.3333 33.3333ZM8.33334 23.3333C8.80556 23.3333 9.20167 23.1733 9.52167 22.8533C9.84167 22.5333 10.0011 22.1378 10 21.6667C10 21.1944 9.84 20.7983 9.52 20.4783C9.2 20.1583 8.80445 19.9989 8.33334 20C7.86111 20 7.465 20.16 7.145 20.48C6.825 20.8 6.66556 21.1956 6.66667 21.6667C6.66667 22.1389 6.82667 22.535 7.14667 22.855C7.46667 23.175 7.86223 23.3344 8.33334 23.3333ZM8.33334 16.6667C8.80556 16.6667 9.20167 16.5067 9.52167 16.1867C9.84167 15.8667 10.0011 15.4711 10 15C10 14.5278 9.84 14.1317 9.52 13.8117C9.2 13.4917 8.80445 13.3322 8.33334 13.3333C7.86111 13.3333 7.465 13.4933 7.145 13.8133C6.825 14.1333 6.66556 14.5289 6.66667 15C6.66667 15.4722 6.82667 15.8683 7.14667 16.1883C7.46667 16.5083 7.86223 16.6678 8.33334 16.6667ZM8.33334 10C8.80556 10 9.20167 9.84 9.52167 9.52C9.84167 9.2 10.0011 8.80445 10 8.33334C10 7.86111 9.84 7.465 9.52 7.145C9.2 6.825 8.80445 6.66556 8.33334 6.66667C7.86111 6.66667 7.465 6.82667 7.145 7.14667C6.825 7.46667 6.66556 7.86223 6.66667 8.33334C6.66667 8.80556 6.82667 9.20167 7.14667 9.52167C7.46667 9.84167 7.86223 10.0011 8.33334 10ZM13.3333 16.6667L23.3333 16.6667L23.3333 13.3333L13.3333 13.3333L13.3333 16.6667ZM13.3333 10L23.3333 10L23.3333 6.66667L13.3333 6.66667L13.3333 10ZM13.3333 23.3333L15.5833 23.3333C15.8056 22.6944 16.0833 22.0972 16.4167 21.5417C16.75 20.9861 17.1389 20.4722 17.5833 20L13.3333 20L13.3333 23.3333Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="12.5%"
            bottom="4.17%"
            left="12.5%"
            right="8.33%"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </View>
      </Flex>
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
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="円（税込）"
            {...getOverrideProps(overrides, "\u5186")}
          ></Text>
        </Flex>
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
