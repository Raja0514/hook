/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Steels } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function SteelsCreateForm(props) {
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
    steelssize: "",
    steelsused: "",
    steelsdamage: "",
    steelslost: "",
  };
  const [steelssize, setSteelssize] = React.useState(initialValues.steelssize);
  const [steelsused, setSteelsused] = React.useState(initialValues.steelsused);
  const [steelsdamage, setSteelsdamage] = React.useState(
    initialValues.steelsdamage
  );
  const [steelslost, setSteelslost] = React.useState(initialValues.steelslost);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setSteelssize(initialValues.steelssize);
    setSteelsused(initialValues.steelsused);
    setSteelsdamage(initialValues.steelsdamage);
    setSteelslost(initialValues.steelslost);
    setErrors({});
  };
  const validations = {
    steelssize: [],
    steelsused: [],
    steelsdamage: [],
    steelslost: [],
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
          steelssize,
          steelsused,
          steelsdamage,
          steelslost,
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
          await DataStore.save(new Steels(modelFields));
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
      {...getOverrideProps(overrides, "SteelsCreateForm")}
      {...rest}
    >
      <TextField
        label="Steelssize"
        isRequired={false}
        isReadOnly={false}
        value={steelssize}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              steelssize: value,
              steelsused,
              steelsdamage,
              steelslost,
            };
            const result = onChange(modelFields);
            value = result?.steelssize ?? value;
          }
          if (errors.steelssize?.hasError) {
            runValidationTasks("steelssize", value);
          }
          setSteelssize(value);
        }}
        onBlur={() => runValidationTasks("steelssize", steelssize)}
        errorMessage={errors.steelssize?.errorMessage}
        hasError={errors.steelssize?.hasError}
        {...getOverrideProps(overrides, "steelssize")}
      ></TextField>
      <TextField
        label="Steelsused"
        isRequired={false}
        isReadOnly={false}
        value={steelsused}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              steelssize,
              steelsused: value,
              steelsdamage,
              steelslost,
            };
            const result = onChange(modelFields);
            value = result?.steelsused ?? value;
          }
          if (errors.steelsused?.hasError) {
            runValidationTasks("steelsused", value);
          }
          setSteelsused(value);
        }}
        onBlur={() => runValidationTasks("steelsused", steelsused)}
        errorMessage={errors.steelsused?.errorMessage}
        hasError={errors.steelsused?.hasError}
        {...getOverrideProps(overrides, "steelsused")}
      ></TextField>
      <TextField
        label="Steelsdamage"
        isRequired={false}
        isReadOnly={false}
        value={steelsdamage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              steelssize,
              steelsused,
              steelsdamage: value,
              steelslost,
            };
            const result = onChange(modelFields);
            value = result?.steelsdamage ?? value;
          }
          if (errors.steelsdamage?.hasError) {
            runValidationTasks("steelsdamage", value);
          }
          setSteelsdamage(value);
        }}
        onBlur={() => runValidationTasks("steelsdamage", steelsdamage)}
        errorMessage={errors.steelsdamage?.errorMessage}
        hasError={errors.steelsdamage?.hasError}
        {...getOverrideProps(overrides, "steelsdamage")}
      ></TextField>
      <TextField
        label="Steelslost"
        isRequired={false}
        isReadOnly={false}
        value={steelslost}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              steelssize,
              steelsused,
              steelsdamage,
              steelslost: value,
            };
            const result = onChange(modelFields);
            value = result?.steelslost ?? value;
          }
          if (errors.steelslost?.hasError) {
            runValidationTasks("steelslost", value);
          }
          setSteelslost(value);
        }}
        onBlur={() => runValidationTasks("steelslost", steelslost)}
        errorMessage={errors.steelslost?.errorMessage}
        hasError={errors.steelslost?.hasError}
        {...getOverrideProps(overrides, "steelslost")}
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
