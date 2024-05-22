/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Icon, View } from "@aws-amplify/ui-react";
export default function RequestForm(props) {
  const { filterSlot, tableSlot, menuSlot, overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="1440px"
      height="1024px"
      justifyContent="flex-start"
      alignItems="flex-end"
      overflow="hidden"
      position="relative"
      border="1px SOLID rgba(220,222,224,1)"
      padding="9px 9px 9px 9px"
      {...getOverrideProps(overrides, "RequestForm")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="280px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-end"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="50px 10px 50px 10px"
        {...getOverrideProps(overrides, "Frame 518")}
      >
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
          children={menuSlot}
          {...getOverrideProps(overrides, "menuSlot")}
        ></View>
      </Flex>
      <Flex
        gap="5px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="40px 10px 40px 10px"
        {...getOverrideProps(overrides, "Frame 519")}
      >
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-end"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="5px 5px 5px 5px"
          {...getOverrideProps(overrides, "Frame 507")}
        >
          <Button
            width="unset"
            height="unset"
            border="1px SOLID rgba(13,26,38,1)"
            shrink="0"
            backgroundColor="rgba(92,102,112,1)"
            size="large"
            isDisabled={false}
            variation="primary"
            children="依頼の新規作成"
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
        <Flex
          gap="5px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="5px 5px 5px 5px"
          {...getOverrideProps(overrides, "Frame 508")}
        >
          <Flex
            gap="0"
            direction="row"
            width="unset"
            height="53px"
            justifyContent="flex-start"
            alignItems="center"
            overflow="hidden"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 10px 0px 10px"
            children={filterSlot}
            {...getOverrideProps(overrides, "filterSlot")}
          ></Flex>
          <Flex
            gap="10px"
            direction="row"
            width="50px"
            height="53px"
            justifyContent="flex-start"
            alignItems="center"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="10px 10px 10px 10px"
            {...getOverrideProps(overrides, "Frame 510")}
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
              {...getOverrideProps(overrides, "icons8:plus")}
            >
              <Icon
                width="32.5px"
                height="32.5px"
                viewBox={{ minX: 0, minY: 0, width: 32.5, height: 32.5 }}
                paths={[
                  {
                    d: "M16.25 0C7.29 0 0 7.29 0 16.25C0 25.21 7.29 32.5 16.25 32.5C25.21 32.5 32.5 25.21 32.5 16.25C32.5 7.29 25.21 0 16.25 0ZM16.25 2.5C23.8587 2.5 30 8.64125 30 16.25C30 23.8587 23.8587 30 16.25 30C8.64125 30 2.5 23.8587 2.5 16.25C2.5 8.64125 8.64125 2.5 16.25 2.5ZM15 8.75L15 15L8.75 15L8.75 17.5L15 17.5L15 23.75L17.5 23.75L17.5 17.5L23.75 17.5L23.75 15L17.5 15L17.5 8.75L15 8.75Z",
                    fill: "rgba(0,0,0,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="9.38%"
                bottom="9.38%"
                left="9.38%"
                right="9.38%"
                {...getOverrideProps(overrides, "Vector")}
              ></Icon>
            </View>
          </Flex>
        </Flex>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          grow="1"
          shrink="1"
          basis="0"
          alignSelf="stretch"
          position="relative"
          border="1px SOLID rgba(220,222,224,1)"
          padding="20px 10px 20px 10px"
          {...getOverrideProps(overrides, "tableFrame")}
        >
          <Flex
            gap="0"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            grow="1"
            shrink="1"
            basis="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            children={tableSlot}
            {...getOverrideProps(overrides, "tableSlot")}
          ></Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
