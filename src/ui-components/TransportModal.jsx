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
  Radio,
  Text,
  View,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
export default function TransportModal(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        "\u30BF\u30A4\u30C8\u30EB": {
          width: "unset",
          shrink: "1",
          grow: "1",
          basis: "0",
        },
        close: {},
        "Frame 448": { height: "35px" },
        "\u51FA\u5F35": { width: "60px" },
        Radio1: {},
        Radio2: {},
        "Frame 449": { alignSelf: "stretch" },
        "\u904B\u8CC3": { width: "60px" },
        Radio3: {},
        Radio4: {},
        "Frame 452": { alignSelf: "stretch" },
        "\u65C5\u8CBB": { width: "60px" },
        Radio5: {},
        bk313212: { display: "none" },
        bk313214: { display: "none" },
        "Frame 450243453": { alignSelf: "stretch" },
        "\u305D\u306E\u4ED6": { width: "60px" },
        Radio10: {},
        Radio6: {},
        Radio7: {},
        Radio8: {},
        Radio9: {},
        "Frame 451": { alignSelf: "stretch" },
        "Frame 450243439": {
          direction: "column",
          width: "unset",
          padding: "5px 30px 5px 30px",
          alignSelf: "stretch",
        },
        "Frame 446": { justifyContent: "center", padding: "0px 0px 0px 0px" },
        AddButton: {},
        CancelButton: {},
        "Frame 480": {},
        TransportModal: { width: "390px", padding: "5px 5px 5px 5px" },
      },
      variantValues: { breakpoint: "small" },
    },
    {
      overrides: {
        "\u30BF\u30A4\u30C8\u30EB": {},
        close: {},
        "Frame 448": {},
        "\u51FA\u5F35": {},
        Radio1: {},
        Radio2: {},
        "Frame 449": {},
        "\u904B\u8CC3": {},
        Radio3: {},
        Radio4: {},
        "Frame 452": {},
        "\u65C5\u8CBB": {},
        Radio5: {},
        bk313212: {},
        bk313214: {},
        "Frame 450243453": {},
        "\u305D\u306E\u4ED6": {},
        Radio10: {},
        Radio6: {},
        Radio7: {},
        Radio8: {},
        Radio9: {},
        "Frame 451": {},
        "Frame 450243439": {},
        "Frame 446": {},
        AddButton: {},
        CancelButton: {},
        "Frame 480": {},
        TransportModal: {},
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
      width="800px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      borderRadius="5px"
      padding="5px 0px 5px 0px"
      backgroundColor="rgba(250,250,250,1)"
      display="flex"
      {...getOverrideProps(overrides, "TransportModal")}
      {...rest}
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
        padding="0px 10px 0px 10px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 446")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="30px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="5px 10px 5px 10px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 448")}
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
            width="730px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="挿入したい内容を選択してください。"
            {...getOverrideProps(overrides, "\u30BF\u30A4\u30C8\u30EB")}
          ></Text>
          <View
            width="24px"
            height="24px"
            {...getOverrideProps(overrides, "close")}
          ></View>
        </Flex>
        <Flex
          gap="5px"
          direction="row"
          width="722px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="5px 10px 5px 10px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 450243439")}
        >
          <Flex
            gap="10px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="5px 10px 5px 10px"
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
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="出張"
              {...getOverrideProps(overrides, "\u51FA\u5F35")}
            ></Text>
            <Radio
              width="unset"
              height="unset"
              shrink="0"
              size="small"
              defaultChecked={true}
              isDisabled={false}
              labelPosition="end"
              children="日当"
              {...getOverrideProps(overrides, "Radio1")}
            ></Radio>
            <Radio
              width="unset"
              height="unset"
              shrink="0"
              size="small"
              defaultChecked={false}
              isDisabled={false}
              labelPosition="end"
              children="滞在費"
              {...getOverrideProps(overrides, "Radio2")}
            ></Radio>
          </Flex>
          <Flex
            gap="10px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="5px 10px 5px 10px"
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
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="運賃"
              {...getOverrideProps(overrides, "\u904B\u8CC3")}
            ></Text>
            <Radio
              width="unset"
              height="unset"
              shrink="0"
              size="small"
              defaultChecked={false}
              isDisabled={false}
              labelPosition="end"
              children="電車/バス/飛行機"
              {...getOverrideProps(overrides, "Radio3")}
            ></Radio>
            <Radio
              width="unset"
              height="unset"
              shrink="0"
              size="small"
              defaultChecked={false}
              isDisabled={false}
              labelPosition="end"
              children="マイカー"
              {...getOverrideProps(overrides, "Radio4")}
            ></Radio>
          </Flex>
          <Flex
            gap="10px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="5px 10px 5px 10px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 450243453")}
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
              children="旅費"
              {...getOverrideProps(overrides, "\u65C5\u8CBB")}
            ></Text>
            <Radio
              width="unset"
              height="unset"
              shrink="0"
              size="small"
              defaultChecked={false}
              isDisabled={false}
              labelPosition="end"
              children="宿泊費"
              {...getOverrideProps(overrides, "Radio5")}
            ></Radio>
            <View
              width="62px"
              height="21px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "bk313212")}
            ></View>
            <View
              width="62px"
              height="21px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "bk313214")}
            ></View>
          </Flex>
          <Flex
            gap="10px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="5px 10px 5px 10px"
            display="flex"
            {...getOverrideProps(overrides, "Frame 451")}
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
              children="その他"
              {...getOverrideProps(overrides, "\u305D\u306E\u4ED6")}
            ></Text>
            <Radio
              width="unset"
              height="unset"
              shrink="0"
              size="small"
              defaultChecked={false}
              isDisabled={false}
              labelPosition="end"
              children="受験手数料"
              {...getOverrideProps(overrides, "Radio10")}
            ></Radio>
            <Radio
              width="unset"
              height="unset"
              shrink="0"
              size="small"
              defaultChecked={false}
              isDisabled={false}
              labelPosition="end"
              children="資格報奨金"
              {...getOverrideProps(overrides, "Radio6")}
            ></Radio>
            <Radio
              width="unset"
              height="unset"
              shrink="0"
              size="small"
              defaultChecked={false}
              isDisabled={false}
              labelPosition="end"
              children="通信費"
              {...getOverrideProps(overrides, "Radio7")}
            ></Radio>
            <Radio
              width="unset"
              height="unset"
              display="none"
              shrink="0"
              size="small"
              defaultChecked={false}
              isDisabled={true}
              labelPosition="end"
              children="仮払金"
              {...getOverrideProps(overrides, "Radio8")}
            ></Radio>
            <Radio
              width="unset"
              height="unset"
              shrink="0"
              size="small"
              defaultChecked={false}
              isDisabled={false}
              labelPosition="end"
              children="その他"
              {...getOverrideProps(overrides, "Radio9")}
            ></Radio>
          </Flex>
        </Flex>
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
        padding="10px 10px 10px 10px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 480")}
      >
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="small"
          isDisabled={false}
          variation="primary"
          children="追加"
          {...getOverrideProps(overrides, "AddButton")}
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
