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
  Text,
  TextAreaField,
  View,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
export default function ReviewSubmit(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        commentTitle: {},
        fixedPhraseSlot: {},
        "Frame 501": {},
        comment: {},
        ApproveButton: {},
        RejectButton: {},
        CancelButton: {},
        "Frame 429": {},
        ReviewSubmit: {},
      },
      variantValues: { breakpoint: "large" },
    },
    {
      overrides: {
        commentTitle: {},
        fixedPhraseSlot: {},
        "Frame 501": {},
        comment: {},
        ApproveButton: {},
        RejectButton: {},
        CancelButton: {},
        "Frame 429": {},
        ReviewSubmit: { width: "390px" },
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
      overflow="hidden"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="5px"
      padding="20px 30px 20px 30px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "ReviewSubmit")}
      {...rest}
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
        {...getOverrideProps(overrides, "Frame 501")}
      >
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
          children="コメント"
          {...getOverrideProps(overrides, "commentTitle")}
        ></Text>
        <View
          width="100px"
          height="32px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "fixedPhraseSlot")}
        ></View>
      </Flex>
      <TextAreaField
        width="unset"
        height="unset"
        label="コメント"
        placeholder="承認コメント・却下理由を入力してください"
        shrink="0"
        alignSelf="stretch"
        size="small"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "comment")}
      ></TextAreaField>
      <Flex
        gap="30px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="10px 50px 10px 0px"
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
          children="承認"
          {...getOverrideProps(overrides, "ApproveButton")}
        ></Button>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="small"
          isDisabled={false}
          variation="primary"
          children="差し戻し"
          {...getOverrideProps(overrides, "RejectButton")}
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
