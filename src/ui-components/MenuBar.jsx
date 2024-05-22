/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function MenuBar(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="250px"
      height="577px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      border="1px SOLID rgba(220,222,224,1)"
      borderRadius="10px"
      padding="29px 0px 29px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "MenuBar")}
      {...rest}
    >
      <Flex
        gap="100px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32120212895")}
      >
        <Flex
          gap="20px"
          direction="column"
          width="unset"
          height="166px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="20px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 32120212896")}
        >
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="24px"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 20px 0px 20px"
            {...getOverrideProps(overrides, "page1")}
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
              children="過去の製造依頼"
              {...getOverrideProps(overrides, "pageName1")}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 20px 0px 20px"
            {...getOverrideProps(overrides, "page2")}
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
              children="加工スケジュール"
              {...getOverrideProps(overrides, "pageName2")}
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
            {...getOverrideProps(overrides, "page3")}
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
              children="充填スケジュール"
              {...getOverrideProps(overrides, "pageName3")}
            ></Text>
          </Flex>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="250px"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
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
        <Button
          width="152px"
          height="42px"
          border="1px SOLID rgba(0,0,0,1)"
          borderRadius="11px"
          padding="6px 12px 6px 12px"
          shrink="0"
          backgroundColor="rgba(92,102,112,1)"
          size="small"
          isDisabled={false}
          variation="primary"
          children="サインアウト"
          {...getOverrideProps(overrides, "SignOutButton")}
        ></Button>
      </Flex>
    </Flex>
  );
}
