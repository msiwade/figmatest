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
  TextField,
  View,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
export default function TransitPointComp(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        transitPoint: { width: "100px" },
        Vector: {},
        transitPointDelete: {},
        TransitPointComp: {},
      },
      variantValues: { breakpoint: "small" },
    },
    {
      overrides: {
        transitPoint: {},
        Vector: {},
        transitPointDelete: {},
        TransitPointComp: {},
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
      gap="2px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "TransitPointComp")}
      {...rest}
    >
      <TextField
        width="280px"
        height="unset"
        placeholder="任意"
        shrink="0"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "transitPoint")}
      ></TextField>
      <View
        width="22px"
        height="22px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "transitPointDelete")}
      >
        <Icon
          width="12.83px"
          height="12.83px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 12.833333015441895,
            height: 12.833333015441895,
          }}
          paths={[
            {
              d: "M12.8333 1.2925L11.5408 0L6.41667 5.12417L1.2925 0L0 1.2925L5.12417 6.41667L0 11.5408L1.2925 12.8333L6.41667 7.70917L11.5408 12.8333L12.8333 11.5408L7.70917 6.41667L12.8333 1.2925Z",
              fill: "rgba(13,26,38,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="20.83%"
          bottom="20.83%"
          left="20.83%"
          right="20.83%"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </View>
    </Flex>
  );
}
