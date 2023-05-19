/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Reamers } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ReamersCreateForm(props) {
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
    reamerssize: "",
    reamersused: "",
    reamersdamage: "",
    reamerslost: "",
  };
  const [reamerssize, setReamerssize] = React.useState(
    initialValues.reamerssize
  );
  const [reamersused, setReamersused] = React.useState(
    initialValues.reamersused
  );
  const [reamersdamage, setReamersdamage] = React.useState(
    initialValues.reamersdamage
  );
  const [reamerslost, setReamerslost] = React.useState(
    initialValues.reamerslost
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setReamerssize(initialValues.reamerssize);
    setReamersused(initialValues.reamersused);
    setReamersdamage(initialValues.reamersdamage);
    setReamerslost(initialValues.reamerslost);
    setErrors({});
  };
  const validations = {
    reamerssize: [{ type: "Required" }],
    reamersused: [{ type: "Required" }],
    reamersdamage: [{ type: "Required" }],
    reamerslost: [{ type: "Required" }],
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
          reamerssize,
          reamersused,
          reamersdamage,
          reamerslost,
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
          await DataStore.save(new Reamers(modelFields));
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
      {...getOverrideProps(overrides, "ReamersCreateForm")}
      {...rest}
    >
      <TextField
        label="Reamerssize"
        isRequired={true}
        isReadOnly={false}
        value={reamerssize}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              reamerssize: value,
              reamersused,
              reamersdamage,
              reamerslost,
            };
            const result = onChange(modelFields);
            value = result?.reamerssize ?? value;
          }
          if (errors.reamerssize?.hasError) {
            runValidationTasks("reamerssize", value);
          }
          setReamerssize(value);
        }}
        onBlur={() => runValidationTasks("reamerssize", reamerssize)}
        errorMessage={errors.reamerssize?.errorMessage}
        hasError={errors.reamerssize?.hasError}
        {...getOverrideProps(overrides, "reamerssize")}
      ></TextField>
      <TextField
        label="Reamersused"
        isRequired={true}
        isReadOnly={false}
        value={reamersused}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              reamerssize,
              reamersused: value,
              reamersdamage,
              reamerslost,
            };
            const result = onChange(modelFields);
            value = result?.reamersused ?? value;
          }
          if (errors.reamersused?.hasError) {
            runValidationTasks("reamersused", value);
          }
          setReamersused(value);
        }}
        onBlur={() => runValidationTasks("reamersused", reamersused)}
        errorMessage={errors.reamersused?.errorMessage}
        hasError={errors.reamersused?.hasError}
        {...getOverrideProps(overrides, "reamersused")}
      ></TextField>
      <TextField
        label="Reamersdamage"
        isRequired={true}
        isReadOnly={false}
        value={reamersdamage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              reamerssize,
              reamersused,
              reamersdamage: value,
              reamerslost,
            };
            const result = onChange(modelFields);
            value = result?.reamersdamage ?? value;
          }
          if (errors.reamersdamage?.hasError) {
            runValidationTasks("reamersdamage", value);
          }
          setReamersdamage(value);
        }}
        onBlur={() => runValidationTasks("reamersdamage", reamersdamage)}
        errorMessage={errors.reamersdamage?.errorMessage}
        hasError={errors.reamersdamage?.hasError}
        {...getOverrideProps(overrides, "reamersdamage")}
      ></TextField>
      <TextField
        label="Reamerslost"
        isRequired={true}
        isReadOnly={false}
        value={reamerslost}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              reamerssize,
              reamersused,
              reamersdamage,
              reamerslost: value,
            };
            const result = onChange(modelFields);
            value = result?.reamerslost ?? value;
          }
          if (errors.reamerslost?.hasError) {
            runValidationTasks("reamerslost", value);
          }
          setReamerslost(value);
        }}
        onBlur={() => runValidationTasks("reamerslost", reamerslost)}
        errorMessage={errors.reamerslost?.errorMessage}
        hasError={errors.reamerslost?.hasError}
        {...getOverrideProps(overrides, "reamerslost")}
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
