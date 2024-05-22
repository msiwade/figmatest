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
  TextField,
  View,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
import CustomAlert from "./CustomAlert";
export default function TransportDetailF(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        transportType: { width: "60px" },
        "\u6708\u65E5": {},
        Vector5943904: {},
        transportDateTooltip: {},
        "Frame 505": { width: "60px" },
        transportDate: { width: "unset", shrink: "1", grow: "1", basis: "0" },
        transportDateSlot: {},
        transportDateAlert: { width: "unset", alignSelf: "stretch" },
        "Frame 442": {},
        "Frame 448": { width: "unset", alignSelf: "stretch" },
        "\u51FA\u5F35\u7406\u7531": { width: "60px" },
        businessTripReason: { width: "unset", alignSelf: "stretch" },
        businessTripReasonAlert: { width: "unset", alignSelf: "stretch" },
        "Frame 4413854141": {},
        "Frame 455": { alignSelf: "stretch" },
        "\u5BBF\u6CCA\u5834\u6240": { width: "60px" },
        content: {
          width: "unset",
          placeholder: "\u5FC5\u9808",
          alignSelf: "stretch",
        },
        contentAlert: { width: "unset", alignSelf: "stretch" },
        "Frame 441824287": {},
        "Frame 449": { alignSelf: "stretch" },
        "\u5BBF\u6CCA\u671F\u9593": { width: "60px" },
        "\u5BBF\u6CCA\u671F\u9593\uFF08\u958B\u59CB\uFF09": {},
        stayStartDate: {
          width: "unset",
          placeholder: "\u5FC5\u9808",
          shrink: "1",
          grow: "1",
          basis: "0",
        },
        stayStartDateSlot: {},
        "Frame 489": { alignSelf: "stretch" },
        "\uFF5E": {},
        "\u5BBF\u6CCA\u671F\u9593\uFF08\u7D42\u4E86\uFF09": {},
        stayEndDate: {
          width: "unset",
          placeholder: "\u5FC5\u9808",
          shrink: "1",
          grow: "1",
          basis: "0",
        },
        stayEndDateSlot: {},
        "Frame 490": { alignSelf: "stretch" },
        "Frame 468": {
          direction: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          alignSelf: "stretch",
        },
        "\u203B2023/06/20\u306B1\u6CCA\u3057\u305F\u5834\u5408\u30012023/06/20\uFF5E2023/06/20\u3068\u8A18\u8F09\u3059\u308B\u3002":
          {
            fontSize: "12px",
            lineHeight: "17.375999450683594px",
            width: "unset",
            alignSelf: "stretch",
          },
        stayDateAlert: { width: "unset", alignSelf: "stretch" },
        "Frame 4411454404": { shrink: "1", grow: "1", basis: "0" },
        "Frame 454": { alignSelf: "stretch" },
        "\u91D1\u984D": { width: "60px" },
        amount: { width: "unset", shrink: "1", grow: "1", basis: "0" },
        "\u5186": {},
        "Frame 443": { alignSelf: "stretch" },
        amountAlert: { width: "unset", alignSelf: "stretch" },
        "Frame 456": { shrink: "1", grow: "1", basis: "0" },
        "Frame 452": { alignSelf: "stretch" },
        "\u8A73\u7D30\u8AAC\u660E": {},
        Vector1744981: {},
        attachment: {},
        "Frame 440": { width: "100px" },
        attachmentSlot: {},
        "Frame 430": {},
        "Frame 446": {},
        "Frame 471": {},
        "Frame 478": {
          width: "unset",
          shrink: "1",
          padding: "5px 0px 5px 0px",
          grow: "1",
          basis: "0",
        },
        Vector4242582: {},
        add: {},
        Vector2984413: {},
        copy: {},
        Vector6092131: {},
        delete: {},
        "Frame 447": { width: "30px", padding: "10px 0px 10px 0px" },
        TransportDetailF: { width: "392px", padding: "5px 0px 5px 0px" },
      },
      variantValues: { breakpoint: "small" },
    },
    {
      overrides: {
        transportType: {},
        "\u6708\u65E5": {},
        Vector5943904: {},
        transportDateTooltip: {},
        "Frame 505": {},
        transportDate: {},
        transportDateSlot: {},
        transportDateAlert: {},
        "Frame 442": {},
        "Frame 448": {},
        "\u51FA\u5F35\u7406\u7531": {},
        businessTripReason: {},
        businessTripReasonAlert: {},
        "Frame 4413854141": {},
        "Frame 455": {},
        "\u5BBF\u6CCA\u5834\u6240": {},
        content: {},
        contentAlert: {},
        "Frame 441824287": {},
        "Frame 449": {},
        "\u5BBF\u6CCA\u671F\u9593": {},
        "\u5BBF\u6CCA\u671F\u9593\uFF08\u958B\u59CB\uFF09": {},
        stayStartDate: {},
        stayStartDateSlot: {},
        "Frame 489": {},
        "\uFF5E": {},
        "\u5BBF\u6CCA\u671F\u9593\uFF08\u7D42\u4E86\uFF09": {},
        stayEndDate: {},
        stayEndDateSlot: {},
        "Frame 490": {},
        "Frame 468": {},
        "\u203B2023/06/20\u306B1\u6CCA\u3057\u305F\u5834\u5408\u30012023/06/20\uFF5E2023/06/20\u3068\u8A18\u8F09\u3059\u308B\u3002":
          {},
        stayDateAlert: {},
        "Frame 4411454404": {},
        "Frame 454": {},
        "\u91D1\u984D": {},
        amount: {},
        "\u5186": {},
        "Frame 443": {},
        amountAlert: {},
        "Frame 456": {},
        "Frame 452": {},
        "\u8A73\u7D30\u8AAC\u660E": {},
        Vector1744981: {},
        attachment: {},
        "Frame 440": {},
        attachmentSlot: {},
        "Frame 430": {},
        "Frame 446": {},
        "Frame 471": {},
        "Frame 478": {},
        Vector4242582: {},
        add: {},
        Vector2984413: {},
        copy: {},
        Vector6092131: {},
        delete: {},
        "Frame 447": {},
        TransportDetailF: {},
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
      width="1142px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(239,240,240,1)"
      padding="5px 10px 5px 0px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "TransportDetailF")}
      {...rest}
    >
      <Flex
        gap="5px"
        direction="column"
        width="1090px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 478")}
      >
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
          {...getOverrideProps(overrides, "Frame 471")}
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
            height="19px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="transportType"
            {...getOverrideProps(overrides, "transportType")}
          ></Text>
          <Flex
            gap="5px"
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
            {...getOverrideProps(overrides, "Frame 446")}
          >
            <Flex
              gap="10px"
              direction="row"
              width="511px"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="2px 10px 2px 10px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 448")}
            >
              <Flex
                gap="5px"
                direction="row"
                width="120px"
                height="unset"
                justifyContent="center"
                alignItems="center"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                display="flex"
                {...getOverrideProps(overrides, "Frame 505")}
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
                  children="月日"
                  {...getOverrideProps(overrides, "\u6708\u65E5")}
                ></Text>
                <View
                  width="15px"
                  height="15px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  overflow="hidden"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  {...getOverrideProps(overrides, "transportDateTooltip")}
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
                    {...getOverrideProps(overrides, "Vector5943904")}
                  ></Icon>
                </View>
              </Flex>
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
                padding="2px 0px 2px 0px"
                display="flex"
                {...getOverrideProps(overrides, "Frame 442")}
              >
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
                  padding="0px 0px 0px 0px"
                  display="flex"
                  {...getOverrideProps(overrides, "transportDateSlot")}
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
                    {...getOverrideProps(overrides, "transportDate")}
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
                  {...getOverrideProps(overrides, "transportDateAlert")}
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
              position="relative"
              padding="2px 10px 2px 10px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 455")}
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
                children="出張理由"
                {...getOverrideProps(overrides, "\u51FA\u5F35\u7406\u7531")}
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
                padding="2px 0px 2px 0px"
                display="flex"
                {...getOverrideProps(overrides, "Frame 4413854141")}
              >
                <TextField
                  width="750px"
                  height="unset"
                  placeholder="必須"
                  shrink="0"
                  size="small"
                  isDisabled={false}
                  labelHidden={false}
                  variation="default"
                  {...getOverrideProps(overrides, "businessTripReason")}
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
                  {...getOverrideProps(overrides, "businessTripReasonAlert")}
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
              position="relative"
              padding="2px 10px 2px 10px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 449")}
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
                children="宿泊場所"
                {...getOverrideProps(overrides, "\u5BBF\u6CCA\u5834\u6240")}
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
                padding="2px 0px 2px 0px"
                display="flex"
                {...getOverrideProps(overrides, "Frame 441824287")}
              >
                <TextField
                  width="750px"
                  height="unset"
                  placeholder="必須　小千谷パークホテル"
                  shrink="0"
                  size="small"
                  isDisabled={false}
                  labelHidden={false}
                  variation="default"
                  {...getOverrideProps(overrides, "content")}
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
                  {...getOverrideProps(overrides, "contentAlert")}
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
              position="relative"
              padding="2px 10px 2px 10px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 454")}
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
                children="宿泊期間"
                {...getOverrideProps(overrides, "\u5BBF\u6CCA\u671F\u9593")}
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
                padding="2px 0px 2px 0px"
                display="flex"
                {...getOverrideProps(overrides, "Frame 4411454404")}
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
                  padding="2px 0px 2px 0px"
                  display="flex"
                  {...getOverrideProps(overrides, "Frame 468")}
                >
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
                    {...getOverrideProps(overrides, "Frame 489")}
                  >
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
                      width="120px"
                      height="20px"
                      gap="unset"
                      alignItems="unset"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children="宿泊期間（開始）"
                      {...getOverrideProps(
                        overrides,
                        "\u5BBF\u6CCA\u671F\u9593\uFF08\u958B\u59CB\uFF09"
                      )}
                    ></Text>
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
                      padding="0px 0px 0px 0px"
                      display="flex"
                      {...getOverrideProps(overrides, "stayStartDateSlot")}
                    >
                      <TextField
                        width="300px"
                        height="unset"
                        placeholder="必須　例）2023/06/20"
                        shrink="0"
                        size="small"
                        isDisabled={false}
                        labelHidden={false}
                        variation="default"
                        {...getOverrideProps(overrides, "stayStartDate")}
                      ></TextField>
                    </Flex>
                  </Flex>
                  <Text
                    fontFamily="Noto Sans JP"
                    fontSize="14px"
                    fontWeight="400"
                    color="rgba(0,0,0,1)"
                    lineHeight="21px"
                    textAlign="center"
                    display="block"
                    direction="column"
                    justifyContent="unset"
                    width="20px"
                    height="20px"
                    gap="unset"
                    alignItems="unset"
                    shrink="0"
                    position="relative"
                    padding="0px 0px 0px 0px"
                    whiteSpace="pre-wrap"
                    children="～"
                    {...getOverrideProps(overrides, "\uFF5E")}
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
                    {...getOverrideProps(overrides, "Frame 490")}
                  >
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
                      width="120px"
                      height="20px"
                      gap="unset"
                      alignItems="unset"
                      shrink="0"
                      position="relative"
                      padding="0px 0px 0px 0px"
                      whiteSpace="pre-wrap"
                      children="宿泊期間（終了）"
                      {...getOverrideProps(
                        overrides,
                        "\u5BBF\u6CCA\u671F\u9593\uFF08\u7D42\u4E86\uFF09"
                      )}
                    ></Text>
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
                      padding="0px 0px 0px 0px"
                      display="flex"
                      {...getOverrideProps(overrides, "stayEndDateSlot")}
                    >
                      <TextField
                        width="300px"
                        height="unset"
                        placeholder="必須　例）2023/06/20"
                        shrink="0"
                        size="small"
                        isDisabled={false}
                        labelHidden={false}
                        variation="default"
                        {...getOverrideProps(overrides, "stayEndDate")}
                      ></TextField>
                    </Flex>
                  </Flex>
                </Flex>
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
                  width="750px"
                  height="unset"
                  gap="unset"
                  alignItems="unset"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  whiteSpace="pre-wrap"
                  children="※2023/06/20に1泊した場合、2023/06/20～2023/06/20と記載する。"
                  {...getOverrideProps(
                    overrides,
                    "\u203B2023/06/20\u306B1\u6CCA\u3057\u305F\u5834\u5408\u30012023/06/20\uFF5E2023/06/20\u3068\u8A18\u8F09\u3059\u308B\u3002"
                  )}
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
                  {...getOverrideProps(overrides, "stayDateAlert")}
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
              position="relative"
              padding="2px 10px 2px 10px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 452")}
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
                padding="2px 0px 2px 0px"
                display="flex"
                {...getOverrideProps(overrides, "Frame 456")}
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
                  {...getOverrideProps(overrides, "Frame 443")}
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
              overflow="hidden"
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
                width="120px"
                height="unset"
                justifyContent="center"
                alignItems="center"
                overflow="hidden"
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
                    {...getOverrideProps(overrides, "Vector1744981")}
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
                overflow="hidden"
                grow="1"
                shrink="1"
                basis="0"
                alignSelf="stretch"
                position="relative"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "attachmentSlot")}
              ></View>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="40px"
        direction="column"
        width="40px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 10px 10px 10px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 447")}
      >
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
          {...getOverrideProps(overrides, "add")}
        >
          <Icon
            width="19px"
            height="20px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 19.000001907348633,
              height: 20.000001907348633,
            }}
            paths={[
              {
                d: "M2 18C1.45 18 0.979002 17.804 0.587002 17.412C0.195002 17.02 -0.000664969 16.5493 1.69779e-06 16L1.69779e-06 2C1.69779e-06 1.45 0.196002 0.979002 0.588002 0.587002C0.980002 0.195002 1.45067 -0.000664969 2 1.69779e-06L16 1.69779e-06C16.55 1.69779e-06 17.021 0.196002 17.413 0.588002C17.805 0.980002 18.0007 1.45067 18 2L18 10.825C17.7 10.6417 17.3833 10.4917 17.05 10.375C16.7167 10.2583 16.3667 10.1667 16 10.1L16 2L2 2L2 16L9 16C9 16.35 9.025 16.6917 9.075 17.025C9.125 17.3583 9.20833 17.6833 9.325 18L2 18ZM14 20L14 17L11 17L11 15L14 15L14 12L16 12L16 15L19 15L19 17L16 17L16 20L14 20ZM5 14C5.28334 14 5.521 13.904 5.713 13.712C5.905 13.52 6.00067 13.2827 6 13C6 12.7167 5.904 12.479 5.712 12.287C5.52 12.095 5.28267 11.9993 5 12C4.71667 12 4.479 12.096 4.287 12.288C4.095 12.48 3.99934 12.7173 4 13C4 13.2833 4.096 13.521 4.288 13.713C4.48 13.905 4.71734 14.0007 5 14ZM5 10C5.28334 10 5.521 9.904 5.713 9.712C5.905 9.52 6.00067 9.28267 6 9C6 8.71667 5.904 8.479 5.712 8.287C5.52 8.095 5.28267 7.99934 5 8C4.71667 8 4.479 8.096 4.287 8.288C4.095 8.48 3.99934 8.71734 4 9C4 9.28334 4.096 9.521 4.288 9.713C4.48 9.905 4.71734 10.0007 5 10ZM5 6C5.28334 6 5.521 5.904 5.713 5.712C5.905 5.52 6.00067 5.28267 6 5C6 4.71667 5.904 4.479 5.712 4.287C5.52 4.095 5.28267 3.99934 5 4C4.71667 4 4.479 4.096 4.287 4.288C4.095 4.48 3.99934 4.71734 4 5C4 5.28334 4.096 5.521 4.288 5.713C4.48 5.905 4.71734 6.00067 5 6ZM8 10L14 10L14 8L8 8L8 10ZM8 6L14 6L14 4L8 4L8 6ZM8 14L9.35 14C9.48334 13.6167 9.65 13.2583 9.85 12.925C10.05 12.5917 10.2833 12.2833 10.55 12L8 12L8 14Z",
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
            {...getOverrideProps(overrides, "Vector4242582")}
          ></Icon>
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
          {...getOverrideProps(overrides, "copy")}
        >
          <Icon
            width="19px"
            height="22px"
            viewBox={{ minX: 0, minY: 0, width: 19, height: 22 }}
            paths={[
              {
                d: "M14 0L2 0C0.9 0 0 0.9 0 2L0 16L2 16L2 2L14 2L14 0ZM17 4L6 4C4.9 4 4 4.9 4 6L4 20C4 21.1 4.9 22 6 22L17 22C18.1 22 19 21.1 19 20L19 6C19 4.9 18.1 4 17 4ZM17 20L6 20L6 6L17 6L17 20Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="4.17%"
            bottom="4.17%"
            left="10.42%"
            right="10.42%"
            {...getOverrideProps(overrides, "Vector2984413")}
          ></Icon>
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
          {...getOverrideProps(overrides, "delete")}
        >
          <Icon
            width="20px"
            height="20px"
            viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
            paths={[
              {
                d: "M5 2C5 1.46957 5.21071 0.960859 5.58579 0.585786C5.96086 0.210714 6.46957 4.44089e-16 7 0L13 0C13.5304 4.44089e-16 14.0391 0.210714 14.4142 0.585786C14.7893 0.960859 15 1.46957 15 2L15 4L19 4C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5C20 5.26522 19.8946 5.51957 19.7071 5.70711C19.5196 5.89464 19.2652 6 19 6L17.931 6L17.064 18.142C17.0281 18.6466 16.8023 19.1188 16.4321 19.4636C16.0619 19.8083 15.5749 20 15.069 20L4.93 20C4.42414 20 3.93707 19.8083 3.56688 19.4636C3.1967 19.1188 2.97092 18.6466 2.935 18.142L2.07 6L1 6C0.734784 6 0.48043 5.89464 0.292893 5.70711C0.105357 5.51957 6.66134e-16 5.26522 0 5C2.22045e-16 4.73478 0.105357 4.48043 0.292893 4.29289C0.48043 4.10536 0.734784 4 1 4L5 4L5 2ZM7 4L13 4L13 2L7 2L7 4ZM4.074 6L4.931 18L15.07 18L15.927 6L4.074 6ZM8 8C8.26522 8 8.51957 8.10536 8.70711 8.29289C8.89464 8.48043 9 8.73478 9 9L9 15C9 15.2652 8.89464 15.5196 8.70711 15.7071C8.51957 15.8946 8.26522 16 8 16C7.73478 16 7.48043 15.8946 7.29289 15.7071C7.10536 15.5196 7 15.2652 7 15L7 9C7 8.73478 7.10536 8.48043 7.29289 8.29289C7.48043 8.10536 7.73478 8 8 8ZM12 8C12.2652 8 12.5196 8.10536 12.7071 8.29289C12.8946 8.48043 13 8.73478 13 9L13 15C13 15.2652 12.8946 15.5196 12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16C11.7348 16 11.4804 15.8946 11.2929 15.7071C11.1054 15.5196 11 15.2652 11 15L11 9C11 8.73478 11.1054 8.48043 11.2929 8.29289C11.4804 8.10536 11.7348 8 12 8Z",
                fill: "rgba(0,0,0,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="8.33%"
            bottom="8.33%"
            left="8.33%"
            right="8.33%"
            {...getOverrideProps(overrides, "Vector6092131")}
          ></Icon>
        </View>
      </Flex>
    </Flex>
  );
}
