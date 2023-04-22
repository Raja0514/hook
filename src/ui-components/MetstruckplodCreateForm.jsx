/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Metstruckplod } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function MetstruckplodCreateForm(props) {
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
    trucknumber: "",
    enginehours: "",
    date: "",
    operatorname: "",
    hoursworked: "",
    shift: "",
    crew: "",
  };
  const [trucknumber, setTrucknumber] = React.useState(
    initialValues.trucknumber
  );
  const [enginehours, setEnginehours] = React.useState(
    initialValues.enginehours
  );
  const [date, setDate] = React.useState(initialValues.date);
  const [operatorname, setOperatorname] = React.useState(
    initialValues.operatorname
  );
  const [hoursworked, setHoursworked] = React.useState(
    initialValues.hoursworked
  );
  const [shift, setShift] = React.useState(initialValues.shift);
  const [crew, setCrew] = React.useState(initialValues.crew);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTrucknumber(initialValues.trucknumber);
    setEnginehours(initialValues.enginehours);
    setDate(initialValues.date);
    setOperatorname(initialValues.operatorname);
    setHoursworked(initialValues.hoursworked);
    setShift(initialValues.shift);
    setCrew(initialValues.crew);
    setErrors({});
  };
  const validations = {
    trucknumber: [{ type: "Required" }],
    enginehours: [],
    date: [{ type: "Required" }],
    operatorname: [{ type: "Required" }],
    hoursworked: [{ type: "Required" }],
    shift: [{ type: "Required" }],
    crew: [{ type: "Required" }],
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
          trucknumber,
          enginehours,
          date,
          operatorname,
          hoursworked,
          shift,
          crew,
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
          await DataStore.save(new Metstruckplod(modelFields));
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
      {...getOverrideProps(overrides, "MetstruckplodCreateForm")}
      {...rest}
    >
      <TextField
        label="Trucknumber"
        isRequired={true}
        isReadOnly={false}
        value={trucknumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              trucknumber: value,
              enginehours,
              date,
              operatorname,
              hoursworked,
              shift,
              crew,
            };
            const result = onChange(modelFields);
            value = result?.trucknumber ?? value;
          }
          if (errors.trucknumber?.hasError) {
            runValidationTasks("trucknumber", value);
          }
          setTrucknumber(value);
        }}
        onBlur={() => runValidationTasks("trucknumber", trucknumber)}
        errorMessage={errors.trucknumber?.errorMessage}
        hasError={errors.trucknumber?.hasError}
        {...getOverrideProps(overrides, "trucknumber")}
      ></TextField>
      <TextField
        label="Enginehours"
        isRequired={false}
        isReadOnly={false}
        value={enginehours}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              trucknumber,
              enginehours: value,
              date,
              operatorname,
              hoursworked,
              shift,
              crew,
            };
            const result = onChange(modelFields);
            value = result?.enginehours ?? value;
          }
          if (errors.enginehours?.hasError) {
            runValidationTasks("enginehours", value);
          }
          setEnginehours(value);
        }}
        onBlur={() => runValidationTasks("enginehours", enginehours)}
        errorMessage={errors.enginehours?.errorMessage}
        hasError={errors.enginehours?.hasError}
        {...getOverrideProps(overrides, "enginehours")}
      ></TextField>
      <TextField
        label="Date"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              trucknumber,
              enginehours,
              date: value,
              operatorname,
              hoursworked,
              shift,
              crew,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <TextField
        label="Operatorname"
        isRequired={true}
        isReadOnly={false}
        value={operatorname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              trucknumber,
              enginehours,
              date,
              operatorname: value,
              hoursworked,
              shift,
              crew,
            };
            const result = onChange(modelFields);
            value = result?.operatorname ?? value;
          }
          if (errors.operatorname?.hasError) {
            runValidationTasks("operatorname", value);
          }
          setOperatorname(value);
        }}
        onBlur={() => runValidationTasks("operatorname", operatorname)}
        errorMessage={errors.operatorname?.errorMessage}
        hasError={errors.operatorname?.hasError}
        {...getOverrideProps(overrides, "operatorname")}
      ></TextField>
      <TextField
        label="Hoursworked"
        isRequired={true}
        isReadOnly={false}
        value={hoursworked}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              trucknumber,
              enginehours,
              date,
              operatorname,
              hoursworked: value,
              shift,
              crew,
            };
            const result = onChange(modelFields);
            value = result?.hoursworked ?? value;
          }
          if (errors.hoursworked?.hasError) {
            runValidationTasks("hoursworked", value);
          }
          setHoursworked(value);
        }}
        onBlur={() => runValidationTasks("hoursworked", hoursworked)}
        errorMessage={errors.hoursworked?.errorMessage}
        hasError={errors.hoursworked?.hasError}
        {...getOverrideProps(overrides, "hoursworked")}
      ></TextField>
      <TextField
        label="Shift"
        isRequired={true}
        isReadOnly={false}
        value={shift}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              trucknumber,
              enginehours,
              date,
              operatorname,
              hoursworked,
              shift: value,
              crew,
            };
            const result = onChange(modelFields);
            value = result?.shift ?? value;
          }
          if (errors.shift?.hasError) {
            runValidationTasks("shift", value);
          }
          setShift(value);
        }}
        onBlur={() => runValidationTasks("shift", shift)}
        errorMessage={errors.shift?.errorMessage}
        hasError={errors.shift?.hasError}
        {...getOverrideProps(overrides, "shift")}
      ></TextField>
      <TextField
        label="Crew"
        isRequired={true}
        isReadOnly={false}
        value={crew}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              trucknumber,
              enginehours,
              date,
              operatorname,
              hoursworked,
              shift,
              crew: value,
            };
            const result = onChange(modelFields);
            value = result?.crew ?? value;
          }
          if (errors.crew?.hasError) {
            runValidationTasks("crew", value);
          }
          setCrew(value);
        }}
        onBlur={() => runValidationTasks("crew", crew)}
        errorMessage={errors.crew?.errorMessage}
        hasError={errors.crew?.hasError}
        {...getOverrideProps(overrides, "crew")}
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
