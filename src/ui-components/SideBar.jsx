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
  View,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
export default function SideBar(props) {
  const { todo, overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        myDocumentText: {},
        myDocument: {},
        myTaskText: {},
        myTask: {},
        findDocumentText: {},
        findDocument: {},
        paidSearchText: {},
        paidSearch: {},
        createDocumentSlot: {},
        createDocument: {},
        "Frame 32136472692": {},
        close: {},
        SignOutButton: {},
        name: {},
        email: {},
        "Frame 443": {},
        "Frame 32136472691": {},
        SideBar: {},
      },
      variantValues: { breakpoint: "large" },
    },
    {
      overrides: {
        myDocumentText: { fontSize: "15px" },
        myDocument: { width: "390px" },
        myTaskText: { fontSize: "15px" },
        myTask: { width: "390px" },
        findDocumentText: { fontSize: "15px" },
        findDocument: {},
        paidSearchText: {},
        paidSearch: {},
        createDocumentSlot: {},
        createDocument: { width: "unset", alignSelf: "stretch" },
        "Frame 32136472692": { width: "390px", top: "9px" },
        close: {},
        SignOutButton: {
          width: "114px",
          height: "32px",
          top: "calc(50% - 16px - -103px)",
          right: "138px",
        },
        name: { fontSize: "15px" },
        email: { fontSize: "15px" },
        "Frame 443": {
          width: "390px",
          top: "calc(50% - 24px - -27px)",
          left: "calc(50% - 195px - 0px)",
        },
        "Frame 32136472691": { width: "390px", height: "700px" },
        SideBar: {
          width: "390px",
          height: "826px",
          padding: "20px 0px 0px 0px",
        },
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
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="20px 0px 243px 0px"
      backgroundColor="rgba(220,222,224,1)"
      display="flex"
      {...getOverrideProps(overrides, "SideBar")}
      {...rest}
    >
      <View
        width="266px"
        height="595px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32136472691")}
      >
        <Flex
          gap="20px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="15px"
          left="0px"
          padding="25px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 32136472692")}
        >
          <Flex
            gap="16px"
            direction="column"
            width="266px"
            height="24px"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 20px 0px 20px"
            backgroundColor="rgba(174,179,183,1)"
            display="flex"
            {...getOverrideProps(overrides, "myDocument")}
          >
            <Text
              fontFamily="Noto Sans JP"
              fontSize="16px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="24px"
              textAlign="center"
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
              children="マイドキュメント"
              {...getOverrideProps(overrides, "myDocumentText")}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="column"
            width="264px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 20px 0px 20px"
            display="flex"
            {...getOverrideProps(overrides, "myTask")}
          >
            <Text
              fontFamily="Noto Sans JP"
              fontSize="16px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="24px"
              textAlign="center"
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
              children="マイタスク"
              {...getOverrideProps(overrides, "myTaskText")}
            ></Text>
          </Flex>
          <Flex
            gap="20px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 20px 0px 20px"
            display="flex"
            {...getOverrideProps(overrides, "findDocument")}
          >
            <Text
              fontFamily="Noto Sans JP"
              fontSize="16px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="24px"
              textAlign="center"
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
              children="稟議書検索"
              {...getOverrideProps(overrides, "findDocumentText")}
            ></Text>
          </Flex>
          <Flex
            gap="20px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 20px 0px 20px"
            display="flex"
            {...getOverrideProps(overrides, "paidSearch")}
          >
            <Text
              fontFamily="Noto Sans JP"
              fontSize="16px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="24px"
              textAlign="center"
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
              children="支払対象検索"
              {...getOverrideProps(overrides, "paidSearchText")}
            ></Text>
          </Flex>
          <Flex
            gap="20px"
            direction="column"
            width="264px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 20px 0px 20px"
            display="flex"
            {...getOverrideProps(overrides, "createDocument")}
          >
            <Flex
              gap="20px"
              direction="column"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="flex-start"
              overflow="hidden"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              display="flex"
              {...getOverrideProps(overrides, "createDocumentSlot")}
            ></Flex>
          </Flex>
        </Flex>
        <View
          width="30px"
          height="30px"
          {...getOverrideProps(overrides, "close")}
        ></View>
        <Button
          width="179px"
          height="45px"
          position="absolute"
          top="calc(50% - 22.5px - -267px)"
          right="44px"
          size="small"
          isDisabled={false}
          variation="primary"
          children="サインアウト"
          {...getOverrideProps(overrides, "SignOutButton")}
        ></Button>
        <Flex
          gap="0"
          direction="column"
          width="266px"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          overflow="hidden"
          position="absolute"
          top="calc(50% - 24px - -160.5px)"
          left="calc(50% - 133px - 0px)"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 443")}
        >
          <Text
            fontFamily="Noto Sans JP"
            fontSize="14px"
            fontWeight="400"
            color="rgba(0,64,77,1)"
            lineHeight="24px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="name"
            {...getOverrideProps(overrides, "name")}
          ></Text>
          <Text
            fontFamily="Noto Sans JP"
            fontSize="14px"
            fontWeight="400"
            color="rgba(0,64,77,1)"
            lineHeight="24px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="email"
            {...getOverrideProps(overrides, "email")}
          ></Text>
        </Flex>
      </View>
    </Flex>
  );
}
