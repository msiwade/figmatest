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
  CheckboxField,
  Flex,
  Icon,
  SelectField,
  Text,
  TextField,
  View,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
export default function PaidSearch(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        searchTitle: {},
        "Frame 444": {},
        "\u30B9\u30C6\u30FC\u30BF\u30B9": { width: "60px" },
        approved: {},
        "Frame 4683347827": {},
        statusSearchFrame: {},
        "\u7533\u8ACB\u7A2E\u5225": { width: "60px" },
        document: {},
        payment: {},
        transport: {},
        "Frame 4685081974": {
          gap: "10px",
          direction: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        },
        "Frame 459": {},
        "\u5E74\u5EA6": {},
        Vector5082017: {},
        fiscalTooltip: {},
        "Frame 500": { width: "60px" },
        fiscalYear: {},
        fiscalYearSlot: {},
        "\u5E74": {},
        "Frame 492": {},
        fiscalMonth: { width: "unset", shrink: "1", grow: "1", basis: "0" },
        "\u5EA6": {},
        "Frame 493": { alignSelf: "stretch" },
        "Frame 488": {
          direction: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        },
        "Frame 495": {},
        "Frame 439": {},
        "\u7533\u8ACB\u65E5": { width: "60px" },
        startDate1894392: {
          width: "unset",
          placeholder: "\u5FC5\u9808",
          shrink: "1",
          grow: "1",
          basis: "0",
        },
        startDateSlot: {},
        "Frame 489": { alignSelf: "stretch" },
        "\uFF5E1894393": { width: "unset", height: "unset" },
        endDate1894396: {
          width: "unset",
          placeholder: "\u5FC5\u9808",
          shrink: "1",
          grow: "1",
          basis: "0",
        },
        endDateSlot: {},
        "Frame 490": { alignSelf: "stretch" },
        "Frame 4681894389": {
          direction: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          shrink: "1",
          grow: "1",
          basis: "0",
        },
        "Frame 453": {},
        "\u6708\u65E5": {},
        Vector5082044: {},
        transportDateTooltip: {},
        "Frame 501": { width: "60px" },
        startDate5082024: {
          width: "unset",
          shrink: "1",
          grow: "1",
          basis: "0",
        },
        startTransportDateSlot: {},
        "Frame 503": { alignSelf: "stretch" },
        "\uFF5E5082025": {},
        endDate5082028: { width: "unset", shrink: "1", grow: "1", basis: "0" },
        endTransportDateSlot: {},
        "Frame 504": { alignSelf: "stretch" },
        "Frame 502": {
          direction: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          shrink: "1",
          grow: "1",
          basis: "0",
        },
        "Frame 460": {},
        "\u8D77\u6848\u8005": { width: "60px" },
        nameOfCreator: { width: "unset", shrink: "1", grow: "1", basis: "0" },
        "Frame 4684531962": { shrink: "1", grow: "1", basis: "0" },
        "Frame 457": {},
        "\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u540D": { width: "60px" },
        fileName: { width: "unset", shrink: "1", grow: "1", basis: "0" },
        "Frame 4684532582": { shrink: "1", grow: "1", basis: "0" },
        "Frame 458": {},
        "\u5165\u91D1\u72B6\u6CC1": { width: "60px" },
        unpaid: {},
        paid: {},
        "Frame 4681894369": { shrink: "1", grow: "1", basis: "0" },
        paidFlagFrame: {},
        csvExport: { children: "CSV\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9" },
        indexBookExport: {},
        "Frame 4681894427": { shrink: "0", alignSelf: "stretch" },
        searchButton: {},
        "Frame 469": {},
        searchFrame: {
          direction: "column",
          justifyContent: "center",
          alignItems: "flex-end",
        },
        "Frame 445": {},
        "Frame 447": {},
        PaidSearch: { width: "390px" },
      },
      variantValues: { breakpoint: "small" },
    },
    {
      overrides: {
        searchTitle: {},
        "Frame 444": {},
        "\u30B9\u30C6\u30FC\u30BF\u30B9": {},
        approved: {},
        "Frame 4683347827": {},
        statusSearchFrame: {},
        "\u7533\u8ACB\u7A2E\u5225": {},
        document: {},
        payment: {},
        transport: {},
        "Frame 4685081974": {},
        "Frame 459": {},
        "\u5E74\u5EA6": {},
        Vector5082017: {},
        fiscalTooltip: {},
        "Frame 500": {},
        fiscalYear: {},
        fiscalYearSlot: {},
        "\u5E74": {},
        "Frame 492": {},
        fiscalMonth: {},
        "\u5EA6": {},
        "Frame 493": {},
        "Frame 488": {},
        "Frame 495": {},
        "Frame 439": {},
        "\u7533\u8ACB\u65E5": {},
        startDate1894392: {},
        startDateSlot: {},
        "Frame 489": {},
        "\uFF5E1894393": {},
        endDate1894396: {},
        endDateSlot: {},
        "Frame 490": {},
        "Frame 4681894389": {},
        "Frame 453": {},
        "\u6708\u65E5": {},
        Vector5082044: {},
        transportDateTooltip: {},
        "Frame 501": {},
        startDate5082024: {},
        startTransportDateSlot: {},
        "Frame 503": {},
        "\uFF5E5082025": {},
        endDate5082028: {},
        endTransportDateSlot: {},
        "Frame 504": {},
        "Frame 502": {},
        "Frame 460": {},
        "\u8D77\u6848\u8005": {},
        nameOfCreator: {},
        "Frame 4684531962": {},
        "Frame 457": {},
        "\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u540D": {},
        fileName: {},
        "Frame 4684532582": {},
        "Frame 458": {},
        "\u5165\u91D1\u72B6\u6CC1": {},
        unpaid: {},
        paid: {},
        "Frame 4681894369": {},
        paidFlagFrame: {},
        csvExport: {},
        indexBookExport: {},
        "Frame 4681894427": {},
        searchButton: {},
        "Frame 469": {},
        searchFrame: {},
        "Frame 445": {},
        "Frame 447": {},
        PaidSearch: {},
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
      gap="10px"
      direction="column"
      width="1160px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "PaidSearch")}
      {...rest}
    >
      <Flex
        gap="5px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 10px 10px 10px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 447")}
      >
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
          {...getOverrideProps(overrides, "Frame 444")}
        >
          <Text
            fontFamily="Noto Sans JP"
            fontSize="20px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="30px"
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
            children="支払対象検索"
            {...getOverrideProps(overrides, "searchTitle")}
          ></Text>
        </Flex>
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
          borderRadius="5px"
          padding="5px 0px 5px 0px"
          backgroundColor="rgba(250,250,250,1)"
          display="flex"
          {...getOverrideProps(overrides, "Frame 445")}
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
            {...getOverrideProps(overrides, "statusSearchFrame")}
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
              children="ステータス"
              {...getOverrideProps(overrides, "\u30B9\u30C6\u30FC\u30BF\u30B9")}
            ></Text>
            <Flex
              gap="30px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="2px 0px 2px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 4683347827")}
            >
              <CheckboxField
                width="unset"
                height="unset"
                label="承認済み"
                shrink="0"
                size="small"
                defaultChecked={false}
                isDisabled={false}
                labelPosition="end"
                {...getOverrideProps(overrides, "approved")}
              ></CheckboxField>
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
            {...getOverrideProps(overrides, "Frame 459")}
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
              children="申請種別"
              {...getOverrideProps(overrides, "\u7533\u8ACB\u7A2E\u5225")}
            ></Text>
            <Flex
              gap="30px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="2px 0px 2px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 4685081974")}
            >
              <CheckboxField
                width="unset"
                height="unset"
                label="決裁伺"
                shrink="0"
                size="small"
                defaultChecked={false}
                isDisabled={false}
                labelPosition="end"
                {...getOverrideProps(overrides, "document")}
              ></CheckboxField>
              <CheckboxField
                width="unset"
                height="unset"
                label="支払依頼書"
                shrink="0"
                size="small"
                defaultChecked={false}
                isDisabled={false}
                labelPosition="end"
                {...getOverrideProps(overrides, "payment")}
              ></CheckboxField>
              <CheckboxField
                width="unset"
                height="unset"
                label="交通費等申請書"
                shrink="0"
                size="small"
                defaultChecked={false}
                isDisabled={false}
                labelPosition="end"
                {...getOverrideProps(overrides, "transport")}
              ></CheckboxField>
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
            {...getOverrideProps(overrides, "Frame 439")}
          >
            <Flex
              gap="5px"
              direction="row"
              width="120px"
              height="unset"
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
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
                width="unset"
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
                {...getOverrideProps(overrides, "fiscalTooltip")}
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
                  {...getOverrideProps(overrides, "Vector5082017")}
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
              position="relative"
              padding="0px 0px 0px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 495")}
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
                  gap="2px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  display="flex"
                  {...getOverrideProps(overrides, "Frame 492")}
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
                      placeholder="2023"
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
                  gap="2px"
                  direction="row"
                  width="unset"
                  height="unset"
                  justifyContent="flex-start"
                  alignItems="center"
                  shrink="0"
                  position="relative"
                  padding="0px 0px 0px 0px"
                  display="flex"
                  {...getOverrideProps(overrides, "Frame 493")}
                >
                  <SelectField
                    width="300px"
                    height="unset"
                    placeholder="年度（月）を選択"
                    shrink="0"
                    backgroundColor="rgba(255,255,255,1)"
                    size="small"
                    isDisabled={false}
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
            {...getOverrideProps(overrides, "Frame 453")}
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
              children="申請日"
              {...getOverrideProps(overrides, "\u7533\u8ACB\u65E5")}
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
              padding="2px 0px 2px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 4681894389")}
            >
              <Flex
                gap="0"
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
                  {...getOverrideProps(overrides, "startDateSlot")}
                >
                  <TextField
                    width="300px"
                    height="unset"
                    placeholder="2023/08/21"
                    shrink="0"
                    size="small"
                    isDisabled={false}
                    labelHidden={false}
                    variation="default"
                    {...getOverrideProps(overrides, "startDate1894392")}
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
                {...getOverrideProps(overrides, "\uFF5E1894393")}
              ></Text>
              <Flex
                gap="0"
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
                  {...getOverrideProps(overrides, "endDateSlot")}
                >
                  <TextField
                    width="300px"
                    height="unset"
                    placeholder="2023/09/20"
                    shrink="0"
                    size="small"
                    isDisabled={false}
                    labelHidden={false}
                    variation="default"
                    {...getOverrideProps(overrides, "endDate1894396")}
                  ></TextField>
                </Flex>
              </Flex>
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
            {...getOverrideProps(overrides, "Frame 460")}
          >
            <Flex
              gap="5px"
              direction="row"
              width="120px"
              height="unset"
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 501")}
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
                  {...getOverrideProps(overrides, "Vector5082044")}
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
              shrink="0"
              position="relative"
              padding="2px 0px 2px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 502")}
            >
              <Flex
                gap="0"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                display="flex"
                {...getOverrideProps(overrides, "Frame 503")}
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
                  {...getOverrideProps(overrides, "startTransportDateSlot")}
                >
                  <TextField
                    width="300px"
                    height="unset"
                    placeholder="2023/08/21"
                    shrink="0"
                    size="small"
                    isDisabled={false}
                    labelHidden={false}
                    variation="default"
                    {...getOverrideProps(overrides, "startDate5082024")}
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
                {...getOverrideProps(overrides, "\uFF5E5082025")}
              ></Text>
              <Flex
                gap="0"
                direction="column"
                width="unset"
                height="unset"
                justifyContent="flex-start"
                alignItems="flex-start"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                display="flex"
                {...getOverrideProps(overrides, "Frame 504")}
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
                  {...getOverrideProps(overrides, "endTransportDateSlot")}
                >
                  <TextField
                    width="300px"
                    height="unset"
                    placeholder="2023/09/20"
                    shrink="0"
                    size="small"
                    isDisabled={false}
                    labelHidden={false}
                    variation="default"
                    {...getOverrideProps(overrides, "endDate5082028")}
                  ></TextField>
                </Flex>
              </Flex>
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
            {...getOverrideProps(overrides, "Frame 457")}
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
              children="起案者"
              {...getOverrideProps(overrides, "\u8D77\u6848\u8005")}
            ></Text>
            <Flex
              gap="30px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="2px 0px 2px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 4684531962")}
            >
              <TextField
                width="300px"
                height="unset"
                placeholder="部分一致検索"
                shrink="0"
                backgroundColor="rgba(255,255,255,1)"
                size="small"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "nameOfCreator")}
              ></TextField>
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
            {...getOverrideProps(overrides, "Frame 458")}
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
              children="添付ファイル名"
              {...getOverrideProps(
                overrides,
                "\u6DFB\u4ED8\u30D5\u30A1\u30A4\u30EB\u540D"
              )}
            ></Text>
            <Flex
              gap="30px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="2px 0px 2px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 4684532582")}
            >
              <TextField
                width="800px"
                height="unset"
                placeholder="部分一致検索"
                shrink="0"
                backgroundColor="rgba(255,255,255,1)"
                size="small"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "fileName")}
              ></TextField>
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
              {...getOverrideProps(overrides, "\u5165\u91D1\u72B6\u6CC1")}
            ></Text>
            <Flex
              gap="30px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="2px 0px 2px 0px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 4681894369")}
            >
              <CheckboxField
                width="unset"
                height="unset"
                label="未払い"
                shrink="0"
                size="small"
                defaultChecked={false}
                isDisabled={false}
                labelPosition="end"
                {...getOverrideProps(overrides, "unpaid")}
              ></CheckboxField>
              <CheckboxField
                width="unset"
                height="unset"
                label="支払済み"
                shrink="0"
                size="small"
                defaultChecked={false}
                isDisabled={false}
                labelPosition="end"
                {...getOverrideProps(overrides, "paid")}
              ></CheckboxField>
            </Flex>
          </Flex>
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-end"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 10px 0px 10px"
            display="flex"
            {...getOverrideProps(overrides, "searchFrame")}
          >
            <Flex
              gap="30px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              padding="10px 10px 10px 10px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 4681894427")}
            >
              <Button
                width="unset"
                height="unset"
                border="1px SOLID rgba(4,125,149,1)"
                padding="5px 11px 5px 11px"
                shrink="0"
                backgroundColor="rgba(255,255,255,1)"
                size="small"
                isDisabled={false}
                variation="link"
                children="ジョブカン用CSVダウンロード"
                {...getOverrideProps(overrides, "csvExport")}
              ></Button>
              <Button
                width="unset"
                height="unset"
                border="1px SOLID rgba(4,125,149,1)"
                padding="5px 11px 5px 11px"
                shrink="0"
                backgroundColor="rgba(255,255,255,1)"
                size="small"
                isDisabled={false}
                variation="link"
                children="索引簿ダウンロード"
                {...getOverrideProps(overrides, "indexBookExport")}
              ></Button>
            </Flex>
            <Flex
              gap="30px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              position="relative"
              padding="10px 10px 10px 10px"
              display="flex"
              {...getOverrideProps(overrides, "Frame 469")}
            >
              <Button
                width="unset"
                height="unset"
                border="1px SOLID rgba(4,125,149,1)"
                padding="5px 11px 5px 11px"
                shrink="0"
                backgroundColor="rgba(255,255,255,1)"
                size="small"
                isDisabled={false}
                variation="link"
                children="表示"
                {...getOverrideProps(overrides, "searchButton")}
              ></Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
