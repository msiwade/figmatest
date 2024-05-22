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
export default function ReviewCard(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        orderAndRole: {},
        "Frame 444": {},
        status: {},
        "Frame 445": {},
        title: {},
        ":": {},
        reviewedBy: {},
        cell36722870: {},
        "\u30B3\u30E1\u30F3\u30C8": {},
        comment: {},
        cell37623146: {},
        "Frame 434": {},
        "\u627F\u8A8D\u65E5": {},
        createdAt: {},
        "Frame 435": {},
        ReviewButton: {},
        "Frame 433": {},
        "Frame 467": {},
        ReviewCard: {},
      },
      variantValues: { breakpoint: "large" },
    },
    {
      overrides: {
        orderAndRole: { shrink: "1", grow: "1", basis: "0" },
        "Frame 444": {
          gap: "5px",
          width: "97px",
          shrink: "0",
          padding: "10px 0px 10px 0px",
        },
        status: { gap: "0" },
        "Frame 445": {
          gap: "0",
          width: "72px",
          shrink: "0",
          padding: "10px 0px 10px 0px",
        },
        title: { width: "28px" },
        ":": { width: "13px" },
        reviewedBy: { width: "78px", height: "25px" },
        cell36722870: { padding: "0px 0px 0px 0px" },
        "\u30B3\u30E1\u30F3\u30C8": {},
        comment: { width: "69px" },
        cell37623146: { padding: "0px 0px 0px 0px", alignSelf: "stretch" },
        "Frame 434": { width: "144px", padding: "0px 0px 0px 0px" },
        "\u627F\u8A8D\u65E5": {},
        createdAt: {},
        "Frame 435": { width: "75px", shrink: "0", display: "none" },
        ReviewButton: {},
        "Frame 433": { shrink: "0", padding: "0px 10px 0px 10px" },
        "Frame 467": { gap: "0", padding: "10px 0px 10px 0px" },
        ReviewCard: { width: "390px", padding: "0px 0px 0px 0px" },
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
      gap="10px"
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
      {...getOverrideProps(overrides, "ReviewCard")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 467")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          overflow="hidden"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="10px 10px 10px 10px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 444")}
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
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="orderAndRole"
            {...getOverrideProps(overrides, "orderAndRole")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="10px 10px 10px 10px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 445")}
        >
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
          gap="5px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 10px 0px 10px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 434")}
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
            padding="5px 0px 5px 0px"
            display="flex"
            {...getOverrideProps(overrides, "cell36722870")}
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
              width="65px"
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
              children=":"
              {...getOverrideProps(overrides, ":")}
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
              children="reviewedBy"
              {...getOverrideProps(overrides, "reviewedBy")}
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
            padding="5px 0px 5px 0px"
            display="flex"
            {...getOverrideProps(overrides, "cell37623146")}
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
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="コメント："
              {...getOverrideProps(overrides, "\u30B3\u30E1\u30F3\u30C8")}
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
              width="562px"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="comment"
              {...getOverrideProps(overrides, "comment")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="5px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 10px 0px 10px"
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
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="承認日"
            {...getOverrideProps(overrides, "\u627F\u8A8D\u65E5")}
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
            width="133px"
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
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
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
            children="編集"
            {...getOverrideProps(overrides, "ReviewButton")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
