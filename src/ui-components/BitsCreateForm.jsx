/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Bits } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function BitsCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    bitssize: "",
    bitsused: "",
    bitsdamage: "",
    bitslost: "",
  };
  const [bitssize, setBitssize] = React.useState(initialValues.bitssize);
  const [bitsused, setBitsused] = React.useState(initialValues.bitsused);
  const [bitsdamage, setBitsdamage] = React.useState(initialValues.bitsdamage);
  const [bitslost, setBitslost] = React.useState(initialValues.bitslost);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setBitssize(initialValues.bitssize);
    setBitsused(initialValues.bitsused);
    setBitsdamage(initialValues.bitsdamage);
    setBitslost(initialValues.bitslost);
    setErrors({});
  };
  const validations = {
    bitssize: [],
    bitsused: [],
    bitsdamage: [],
    bitslost: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          bitssize,
          bitsused,
          bitsdamage,
          bitslost,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Bits(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "BitsCreateForm")}
      {...rest}
    >
      <TextField
        label="Bitssize"
        isRequired={false}
        isReadOnly={false}
        value={bitssize}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bitssize: value,
              bitsused,
              bitsdamage,
              bitslost,
            };
            const result = onChange(modelFields);
            value = result?.bitssize ?? value;
          }
          if (errors.bitssize?.hasError) {
            runValidationTasks("bitssize", value);
          }
          setBitssize(value);
        }}
        onBlur={() => runValidationTasks("bitssize", bitssize)}
        errorMessage={errors.bitssize?.errorMessage}
        hasError={errors.bitssize?.hasError}
        {...getOverrideProps(overrides, "bitssize")}
      ></TextField>
      <TextField
        label="Bitsused"
        isRequired={false}
        isReadOnly={false}
        value={bitsused}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bitssize,
              bitsused: value,
              bitsdamage,
              bitslost,
            };
            const result = onChange(modelFields);
            value = result?.bitsused ?? value;
          }
          if (errors.bitsused?.hasError) {
            runValidationTasks("bitsused", value);
          }
          setBitsused(value);
        }}
        onBlur={() => runValidationTasks("bitsused", bitsused)}
        errorMessage={errors.bitsused?.errorMessage}
        hasError={errors.bitsused?.hasError}
        {...getOverrideProps(overrides, "bitsused")}
      ></TextField>
      <TextField
        label="Bitsdamage"
        isRequired={false}
        isReadOnly={false}
        value={bitsdamage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bitssize,
              bitsused,
              bitsdamage: value,
              bitslost,
            };
            const result = onChange(modelFields);
            value = result?.bitsdamage ?? value;
          }
          if (errors.bitsdamage?.hasError) {
            runValidationTasks("bitsdamage", value);
          }
          setBitsdamage(value);
        }}
        onBlur={() => runValidationTasks("bitsdamage", bitsdamage)}
        errorMessage={errors.bitsdamage?.errorMessage}
        hasError={errors.bitsdamage?.hasError}
        {...getOverrideProps(overrides, "bitsdamage")}
      ></TextField>
      <TextField
        label="Bitslost"
        isRequired={false}
        isReadOnly={false}
        value={bitslost}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bitssize,
              bitsused,
              bitsdamage,
              bitslost: value,
            };
            const result = onChange(modelFields);
            value = result?.bitslost ?? value;
          }
          if (errors.bitslost?.hasError) {
            runValidationTasks("bitslost", value);
          }
          setBitslost(value);
        }}
        onBlur={() => runValidationTasks("bitslost", bitslost)}
        errorMessage={errors.bitslost?.errorMessage}
        hasError={errors.bitslost?.hasError}
        {...getOverrideProps(overrides, "bitslost")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
