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
export default function DocumentForm(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        titleDocumentForm: {},
        close: {},
        "Frame 419": {},
        "\u8D77\u6848\u8005": {},
        createdBy: {},
        "Frame 420": {},
        "\u4F9D\u983C\u30E1\u30FC\u30EB": {},
        requestEmailSelect: {},
        requestEmailSelectAlert: {},
        "Frame 44137942772": {},
        "Frame 439": {},
        "\u627F\u8A8D\u30EB\u30FC\u30C8\u9078\u629E": {},
        SelectField: {},
        workflowAlert: {},
        "Frame 4417462405": {},
        "Frame 437": {},
        "\u4EF6\u540D": {},
        title: {},
        titleAlert: {},
        "Frame 44137502844": {},
        "Frame 426": {},
        "\u91D1\u984D": {},
        amount: {},
        "\u5186": {},
        "Frame 442": {},
        amountAlert: {},
        "Frame 44137532863": {},
        "Frame 431": {},
        "\u5B9F\u65BD\u6642\u671F": {},
        startDate: {},
        startDateSlot: {},
        startDateAlert: {},
        "Frame 44137672776": {},
        "Frame 436": {},
        "\u652F\u6255\u5148": {},
        Vector7722420: {},
        paymentDestinationTooltip: {},
        "Frame 508": {},
        paymentDestination: {},
        "Frame 44137532877": {},
        "Frame 432": {},
        "\u76EE\u7684": {},
        purpose: {},
        purposeAlert: {},
        "Frame 4416315021": {},
        "Frame 438": {},
        "\u52B9\u679C": {},
        effect: {},
        effectAlert: {},
        "Frame 44137672748": {},
        "Frame 434": {},
        "\u8A73\u7D30": {},
        description: {},
        descriptionAlert: {},
        "Frame 44137532891": {},
        "Frame 433": {},
        "\u6295\u8CC7\u52B9\u679C": {},
        roi: {},
        roiAlert: {},
        "Frame 44137672762": {},
        "Frame 435": {},
        "\u8A73\u7D30\u8AAC\u660E": {},
        Vector37242824: {},
        attachment: {},
        "Frame 440": {},
        attachmentListSlot: {},
        "Frame 430": {},
        SubmitButton: {},
        CancelButton: {},
        SaveButton: {},
        "Frame 429": {},
        DocumentForm: {},
      },
      variantValues: { breakpoint: "large" },
    },
    {
      overrides: {
        titleDocumentForm: {},
        close: {},
        "Frame 419": { width: "390px" },
        "\u8D77\u6848\u8005": { width: "100px" },
        createdBy: {},
        "Frame 420": { width: "390px" },
        "\u4F9D\u983C\u30E1\u30FC\u30EB": { width: "100px" },
        requestEmailSelect: { width: "unset", alignSelf: "stretch" },
        requestEmailSelectAlert: { width: "unset", alignSelf: "stretch" },
        "Frame 44137942772": {},
        "Frame 439": {},
        "\u627F\u8A8D\u30EB\u30FC\u30C8\u9078\u629E": { width: "100px" },
        SelectField: {},
        workflowAlert: { width: "unset", alignSelf: "stretch" },
        "Frame 4417462405": {},
        "Frame 437": { width: "390px" },
        "\u4EF6\u540D": { width: "100px" },
        title: {},
        titleAlert: { width: "unset", alignSelf: "stretch" },
        "Frame 44137502844": {},
        "Frame 426": { width: "390px" },
        "\u91D1\u984D": { width: "100px" },
        amount: { width: "100.5px" },
        "\u5186": { shrink: "1", grow: "1", basis: "0" },
        "Frame 442": { alignSelf: "stretch" },
        amountAlert: { width: "unset", alignSelf: "stretch" },
        "Frame 44137532863": { shrink: "0" },
        "Frame 431": { width: "390px" },
        "\u5B9F\u65BD\u6642\u671F": { width: "100px" },
        startDate: { shrink: "1", grow: "1", basis: "0" },
        startDateSlot: {},
        startDateAlert: { width: "unset", alignSelf: "stretch" },
        "Frame 44137672776": { width: "211px", shrink: "0" },
        "Frame 436": { width: "390px" },
        "\u652F\u6255\u5148": {},
        Vector7722420: {},
        paymentDestinationTooltip: {},
        "Frame 508": { width: "100px" },
        paymentDestination: {
          placeholder: "\u5FC5\u9808",
          shrink: "1",
          grow: "1",
          basis: "0",
        },
        "Frame 44137532877": { height: "44px" },
        "Frame 432": { width: "390px", overflow: "hidden" },
        "\u76EE\u7684": { width: "100px" },
        purpose: { shrink: "1", grow: "1", basis: "0" },
        purposeAlert: { width: "unset", alignSelf: "stretch" },
        "Frame 4416315021": { height: "62px" },
        "Frame 438": { width: "390px" },
        "\u52B9\u679C": { width: "100px" },
        effect: {},
        effectAlert: { width: "unset", alignSelf: "stretch" },
        "Frame 44137672748": {},
        "Frame 434": { width: "390px" },
        "\u8A73\u7D30": { width: "100px" },
        description: {},
        descriptionAlert: { width: "unset", alignSelf: "stretch" },
        "Frame 44137532891": {},
        "Frame 433": { width: "390px" },
        "\u6295\u8CC7\u52B9\u679C": { width: "100px" },
        roi: {},
        roiAlert: { width: "unset", alignSelf: "stretch" },
        "Frame 44137672762": {},
        "Frame 435": { width: "390px", height: "132px" },
        "\u8A73\u7D30\u8AAC\u660E": {},
        Vector37242824: {},
        attachment: {},
        "Frame 440": { width: "unset" },
        attachmentListSlot: { width: "280px" },
        "Frame 430": { width: "390px" },
        SubmitButton: {},
        CancelButton: {},
        SaveButton: {},
        "Frame 429": { width: "390px", justifyContent: "center" },
        DocumentForm: { width: "unset", padding: "5px 0px 5px 0px" },
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
      width="1120px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="5px"
      padding="5px 10px 5px 0px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "DocumentForm")}
      {...rest}
    >
      <View
        width="unset"
        height="49px"
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
          children="決裁伺　新規作成"
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
          children="起案者"
          {...getOverrideProps(overrides, "\u8D77\u6848\u8005")}
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
          children="依頼メール"
          {...getOverrideProps(overrides, "\u4F9D\u983C\u30E1\u30FC\u30EB")}
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
          {...getOverrideProps(overrides, "Frame 44137942772")}
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
        padding="5px 10px 5px 10px"
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
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="5px 0px 5px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 4417462405")}
        >
          <SelectField
            width="unset"
            height="unset"
            shrink="0"
            alignSelf="stretch"
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
          {...getOverrideProps(overrides, "Frame 44137502844")}
        >
          <TextField
            width="unset"
            height="unset"
            placeholder="必須（最大40文字）"
            shrink="0"
            alignSelf="stretch"
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
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="5px 0px 5px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 44137532863")}
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
            {...getOverrideProps(overrides, "Frame 442")}
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
          children="実施時期"
          {...getOverrideProps(overrides, "\u5B9F\u65BD\u6642\u671F")}
        ></Text>
        <Flex
          gap="2px"
          direction="column"
          width="unset"
          height="62px"
          justifyContent="flex-start"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="5px 0px 5px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 44137672776")}
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
        <Flex
          gap="5px"
          direction="row"
          width="139px"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 508")}
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
            children="支払先"
            {...getOverrideProps(overrides, "\u652F\u6255\u5148")}
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
            {...getOverrideProps(overrides, "paymentDestinationTooltip")}
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
              {...getOverrideProps(overrides, "Vector7722420")}
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
          padding="5px 0px 5px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 44137532877")}
        >
          <TextField
            width="unset"
            height="unset"
            placeholder="任意"
            shrink="0"
            alignSelf="stretch"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "paymentDestination")}
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
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="5px 10px 5px 10px"
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
          children="目的"
          {...getOverrideProps(overrides, "\u76EE\u7684")}
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
          {...getOverrideProps(overrides, "Frame 4416315021")}
        >
          <TextField
            width="unset"
            height="unset"
            placeholder="必須"
            shrink="0"
            alignSelf="stretch"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "purpose")}
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
            {...getOverrideProps(overrides, "purposeAlert")}
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
          children="効果"
          {...getOverrideProps(overrides, "\u52B9\u679C")}
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
          {...getOverrideProps(overrides, "Frame 44137672748")}
        >
          <TextAreaField
            width="unset"
            height="unset"
            placeholder="必須"
            shrink="0"
            alignSelf="stretch"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "effect")}
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
            {...getOverrideProps(overrides, "effectAlert")}
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
          children="詳細内容"
          {...getOverrideProps(overrides, "\u8A73\u7D30")}
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
          {...getOverrideProps(overrides, "Frame 44137532891")}
        >
          <TextAreaField
            width="unset"
            height="unset"
            placeholder="必須"
            shrink="0"
            alignSelf="stretch"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "description")}
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
            {...getOverrideProps(overrides, "descriptionAlert")}
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
          children="投資効果&#xA;及び収支予測"
          {...getOverrideProps(overrides, "\u6295\u8CC7\u52B9\u679C")}
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
          {...getOverrideProps(overrides, "Frame 44137672762")}
        >
          <TextAreaField
            width="unset"
            height="unset"
            placeholder="必須"
            shrink="0"
            alignSelf="stretch"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "roi")}
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
            {...getOverrideProps(overrides, "roiAlert")}
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
          width="139px"
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
              {...getOverrideProps(overrides, "Vector37242824")}
            ></Icon>
          </View>
        </Flex>
        <View
          width="941px"
          height="unset"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
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
