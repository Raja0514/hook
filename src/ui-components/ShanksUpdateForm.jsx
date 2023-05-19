/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Shanks } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ShanksUpdateForm(props) {
  const {
    id: idProp,
    shanks: shanksModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    shankssize: "",
    shanksused: "",
    shanksdamage: "",
    shankslost: "",
  };
  const [shankssize, setShankssize] = React.useState(initialValues.shankssize);
  const [shanksused, setShanksused] = React.useState(initialValues.shanksused);
  const [shanksdamage, setShanksdamage] = React.useState(
    initialValues.shanksdamage
  );
  const [shankslost, setShankslost] = React.useState(initialValues.shankslost);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = shanksRecord
      ? { ...initialValues, ...shanksRecord }
      : initialValues;
    setShankssize(cleanValues.shankssize);
    setShanksused(cleanValues.shanksused);
    setShanksdamage(cleanValues.shanksdamage);
    setShankslost(cleanValues.shankslost);
    setErrors({});
  };
  const [shanksRecord, setShanksRecord] = React.useState(shanksModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Shanks, idProp)
        : shanksModelProp;
      setShanksRecord(record);
    };
    queryData();
  }, [idProp, shanksModelProp]);
  React.useEffect(resetStateValues, [shanksRecord]);
  const validations = {
    shankssize: [{ type: "Required" }],
    shanksused: [{ type: "Required" }],
    shanksdamage: [{ type: "Required" }],
    shankslost: [{ type: "Required" }],
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
          shankssize,
          shanksused,
          shanksdamage,
          shankslost,
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
          await DataStore.save(
            Shanks.copyOf(shanksRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ShanksUpdateForm")}
      {...rest}
    >
      <TextField
        label="Shankssize"
        isRequired={true}
        isReadOnly={false}
        value={shankssize}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              shankssize: value,
              shanksused,
              shanksdamage,
              shankslost,
            };
            const result = onChange(modelFields);
            value = result?.shankssize ?? value;
          }
          if (errors.shankssize?.hasError) {
            runValidationTasks("shankssize", value);
          }
          setShankssize(value);
        }}
        onBlur={() => runValidationTasks("shankssize", shankssize)}
        errorMessage={errors.shankssize?.errorMessage}
        hasError={errors.shankssize?.hasError}
        {...getOverrideProps(overrides, "shankssize")}
      ></TextField>
      <TextField
        label="Shanksused"
        isRequired={true}
        isReadOnly={false}
        value={shanksused}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              shankssize,
              shanksused: value,
              shanksdamage,
              shankslost,
            };
            const result = onChange(modelFields);
            value = result?.shanksused ?? value;
          }
          if (errors.shanksused?.hasError) {
            runValidationTasks("shanksused", value);
          }
          setShanksused(value);
        }}
        onBlur={() => runValidationTasks("shanksused", shanksused)}
        errorMessage={errors.shanksused?.errorMessage}
        hasError={errors.shanksused?.hasError}
        {...getOverrideProps(overrides, "shanksused")}
      ></TextField>
      <TextField
        label="Shanksdamage"
        isRequired={true}
        isReadOnly={false}
        value={shanksdamage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              shankssize,
              shanksused,
              shanksdamage: value,
              shankslost,
            };
            const result = onChange(modelFields);
            value = result?.shanksdamage ?? value;
          }
          if (errors.shanksdamage?.hasError) {
            runValidationTasks("shanksdamage", value);
          }
          setShanksdamage(value);
        }}
        onBlur={() => runValidationTasks("shanksdamage", shanksdamage)}
        errorMessage={errors.shanksdamage?.errorMessage}
        hasError={errors.shanksdamage?.hasError}
        {...getOverrideProps(overrides, "shanksdamage")}
      ></TextField>
      <TextField
        label="Shankslost"
        isRequired={true}
        isReadOnly={false}
        value={shankslost}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              shankssize,
              shanksused,
              shanksdamage,
              shankslost: value,
            };
            const result = onChange(modelFields);
            value = result?.shankslost ?? value;
          }
          if (errors.shankslost?.hasError) {
            runValidationTasks("shankslost", value);
          }
          setShankslost(value);
        }}
        onBlur={() => runValidationTasks("shankslost", shankslost)}
        errorMessage={errors.shankslost?.errorMessage}
        hasError={errors.shankslost?.hasError}
        {...getOverrideProps(overrides, "shankslost")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || shanksModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || shanksModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
