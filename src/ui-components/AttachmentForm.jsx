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
  SelectField,
  Text,
  TextAreaField,
  View,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
export default function AttachmentForm(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        SelectFileButton: {},
        filename: {},
        previewSlot: {},
        close: {},
        "Frame 438": {},
        "\u30B9\u30AF\u30B7\u30E7\u6CE8\u8A18\uFF11": {},
        "\u30C9\u30E9\u30C3\u30B0\u30A2\u30F3\u30C9\u30C9\u30ED\u30C3\u30D7\u6CE8\u8A18\uFF11":
          {},
        "Frame 405": {},
        "\u6CE8\u8A18\uFF11": {},
        "\u6CE8\u8A18\uFF12": {},
        notesFrame: {},
        comment: {},
        fileType: {},
        UploadButton: {},
        "Frame 439": {},
        AttachmentForm: {},
      },
      variantValues: { breakpoint: "large" },
    },
    {
      overrides: {
        SelectFileButton: { height: "40px" },
        filename: { width: "159px" },
        previewSlot: { display: "none" },
        close: {},
        "Frame 438": { gap: "15px" },
        "\u30B9\u30AF\u30B7\u30E7\u6CE8\u8A18\uFF11": {},
        "\u30C9\u30E9\u30C3\u30B0\u30A2\u30F3\u30C9\u30C9\u30ED\u30C3\u30D7\u6CE8\u8A18\uFF11":
          {},
        "Frame 405": { display: "none" },
        "\u6CE8\u8A18\uFF11": {},
        "\u6CE8\u8A18\uFF12": {
          children:
            "\uFF11\u3064\u306E\u66F8\u985E\u3060\u3051\u3067\u8A18\u8F09\u4E8B\u9805\u304C\u6E80\u305F\u3055\u308C\u3066\u3044\u306A\u3044\u5834\u5408\u306F\u8FFD\u52A0\u8CC7\u6599\u306E\u6DFB\u4ED8\u3092\u304A\u9858\u3044\u3057\u307E\u3059\u3002",
        },
        notesFrame: {},
        comment: {},
        fileType: {},
        UploadButton: {},
        "Frame 439": {},
        AttachmentForm: { gap: "10px", width: "390px" },
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
      gap="5px"
      direction="column"
      width="1450px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      borderRadius="5px"
      padding="10px 30px 10px 30px"
      backgroundColor="rgba(255,255,255,1)"
      display="flex"
      {...getOverrideProps(overrides, "AttachmentForm")}
      {...rest}
    >
      <Flex
        gap="37px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="5px 7px 5px 7px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 438")}
      >
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="small"
          isDisabled={false}
          variation="default"
          children="ファイル選択"
          {...getOverrideProps(overrides, "SelectFileButton")}
        ></Button>
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
          width="1000px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="filename"
          {...getOverrideProps(overrides, "filename")}
        ></Text>
        <View
          width="120px"
          height="60px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "previewSlot")}
        ></View>
        <View
          width="24px"
          height="24px"
          {...getOverrideProps(overrides, "close")}
        ></View>
      </Flex>
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 10px 0px 10px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 405")}
      >
        <Text
          fontFamily="Noto Sans JP"
          fontSize="12px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18px"
          textAlign="left"
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
          children="Ctrl + Vでスクリーンショットした画像を貼り付けられます。"
          {...getOverrideProps(
            overrides,
            "\u30B9\u30AF\u30B7\u30E7\u6CE8\u8A18\uFF11"
          )}
        ></Text>
        <Text
          fontFamily="Noto Sans JP"
          fontSize="12px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="18px"
          textAlign="left"
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
          children="ドラッグ＆ドロップでファイルをアップロードできます。"
          {...getOverrideProps(
            overrides,
            "\u30C9\u30E9\u30C3\u30B0\u30A2\u30F3\u30C9\u30C9\u30ED\u30C3\u30D7\u6CE8\u8A18\uFF11"
          )}
        ></Text>
      </Flex>
      <Flex
        gap="0"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 10px 0px 10px"
        display="flex"
        {...getOverrideProps(overrides, "notesFrame")}
      >
        <Text
          fontFamily="Noto Sans JP"
          fontSize="12px"
          fontWeight="400"
          color="rgba(255,0,0,1)"
          lineHeight="18px"
          textAlign="left"
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
          children="※取引先、取引年月日（決済日ではなく利用日）、取引金額の記載事項が満たされているか確認してください。"
          {...getOverrideProps(overrides, "\u6CE8\u8A18\uFF11")}
        ></Text>
        <Text
          fontFamily="Noto Sans JP"
          fontSize="12px"
          fontWeight="400"
          color="rgba(255,0,0,1)"
          lineHeight="18px"
          textAlign="left"
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
          children="　１つの書類だけで記載事項が満たされていない場合は追加資料の添付をお願いします。"
          {...getOverrideProps(overrides, "\u6CE8\u8A18\uFF12")}
        ></Text>
      </Flex>
      <TextAreaField
        width="unset"
        height="unset"
        label="コメント"
        placeholder="資料の説明"
        shrink="0"
        alignSelf="stretch"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "comment")}
      ></TextAreaField>
      <SelectField
        width="300px"
        height="unset"
        label="ファイル種別"
        placeholder="ファイル種別を選択してください"
        shrink="0"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "fileType")}
      ></SelectField>
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
        padding="5px 5px 5px 5px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 439")}
      >
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="small"
          isDisabled={false}
          variation="primary"
          children="添付資料を追加"
          {...getOverrideProps(overrides, "UploadButton")}
        ></Button>
      </Flex>
    </Flex>
  );
}
