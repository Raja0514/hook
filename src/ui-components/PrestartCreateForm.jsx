/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Prestart } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PrestartCreateForm(props) {
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
    odometerreading: "",
    enginehoursos: "",
    categeoryAfault: "",
    categeoryBfault: "",
    categeoryCfault: "",
  };
  const [odometerreading, setOdometerreading] = React.useState(
    initialValues.odometerreading
  );
  const [enginehoursos, setEnginehoursos] = React.useState(
    initialValues.enginehoursos
  );
  const [categeoryAfault, setCategeoryAfault] = React.useState(
    initialValues.categeoryAfault
  );
  const [categeoryBfault, setCategeoryBfault] = React.useState(
    initialValues.categeoryBfault
  );
  const [categeoryCfault, setCategeoryCfault] = React.useState(
    initialValues.categeoryCfault
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setOdometerreading(initialValues.odometerreading);
    setEnginehoursos(initialValues.enginehoursos);
    setCategeoryAfault(initialValues.categeoryAfault);
    setCategeoryBfault(initialValues.categeoryBfault);
    setCategeoryCfault(initialValues.categeoryCfault);
    setErrors({});
  };
  const validations = {
    odometerreading: [],
    enginehoursos: [],
    categeoryAfault: [],
    categeoryBfault: [],
    categeoryCfault: [],
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
          odometerreading,
          enginehoursos,
          categeoryAfault,
          categeoryBfault,
          categeoryCfault,
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
          await DataStore.save(new Prestart(modelFields));
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
      {...getOverrideProps(overrides, "PrestartCreateForm")}
      {...rest}
    >
      <TextField
        label="Odometerreading"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={odometerreading}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              odometerreading: value,
              enginehoursos,
              categeoryAfault,
              categeoryBfault,
              categeoryCfault,
            };
            const result = onChange(modelFields);
            value = result?.odometerreading ?? value;
          }
          if (errors.odometerreading?.hasError) {
            runValidationTasks("odometerreading", value);
          }
          setOdometerreading(value);
        }}
        onBlur={() => runValidationTasks("odometerreading", odometerreading)}
        errorMessage={errors.odometerreading?.errorMessage}
        hasError={errors.odometerreading?.hasError}
        {...getOverrideProps(overrides, "odometerreading")}
      ></TextField>
      <TextField
        label="Enginehoursos"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={enginehoursos}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              odometerreading,
              enginehoursos: value,
              categeoryAfault,
              categeoryBfault,
              categeoryCfault,
            };
            const result = onChange(modelFields);
            value = result?.enginehoursos ?? value;
          }
          if (errors.enginehoursos?.hasError) {
            runValidationTasks("enginehoursos", value);
          }
          setEnginehoursos(value);
        }}
        onBlur={() => runValidationTasks("enginehoursos", enginehoursos)}
        errorMessage={errors.enginehoursos?.errorMessage}
        hasError={errors.enginehoursos?.hasError}
        {...getOverrideProps(overrides, "enginehoursos")}
      ></TextField>
      <TextField
        label="Categeory afault"
        isRequired={false}
        isReadOnly={false}
        value={categeoryAfault}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              odometerreading,
              enginehoursos,
              categeoryAfault: value,
              categeoryBfault,
              categeoryCfault,
            };
            const result = onChange(modelFields);
            value = result?.categeoryAfault ?? value;
          }
          if (errors.categeoryAfault?.hasError) {
            runValidationTasks("categeoryAfault", value);
          }
          setCategeoryAfault(value);
        }}
        onBlur={() => runValidationTasks("categeoryAfault", categeoryAfault)}
        errorMessage={errors.categeoryAfault?.errorMessage}
        hasError={errors.categeoryAfault?.hasError}
        {...getOverrideProps(overrides, "categeoryAfault")}
      ></TextField>
      <TextField
        label="Categeory bfault"
        isRequired={false}
        isReadOnly={false}
        value={categeoryBfault}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              odometerreading,
              enginehoursos,
              categeoryAfault,
              categeoryBfault: value,
              categeoryCfault,
            };
            const result = onChange(modelFields);
            value = result?.categeoryBfault ?? value;
          }
          if (errors.categeoryBfault?.hasError) {
            runValidationTasks("categeoryBfault", value);
          }
          setCategeoryBfault(value);
        }}
        onBlur={() => runValidationTasks("categeoryBfault", categeoryBfault)}
        errorMessage={errors.categeoryBfault?.errorMessage}
        hasError={errors.categeoryBfault?.hasError}
        {...getOverrideProps(overrides, "categeoryBfault")}
      ></TextField>
      <TextField
        label="Categeory cfault"
        isRequired={false}
        isReadOnly={false}
        value={categeoryCfault}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              odometerreading,
              enginehoursos,
              categeoryAfault,
              categeoryBfault,
              categeoryCfault: value,
            };
            const result = onChange(modelFields);
            value = result?.categeoryCfault ?? value;
          }
          if (errors.categeoryCfault?.hasError) {
            runValidationTasks("categeoryCfault", value);
          }
          setCategeoryCfault(value);
        }}
        onBlur={() => runValidationTasks("categeoryCfault", categeoryCfault)}
        errorMessage={errors.categeoryCfault?.errorMessage}
        hasError={errors.categeoryCfault?.hasError}
        {...getOverrideProps(overrides, "categeoryCfault")}
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
