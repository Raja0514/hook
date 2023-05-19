/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Loadinglocatins } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function LoadinglocatinsUpdateForm(props) {
  const {
    id: idProp,
    loadinglocatins: loadinglocatinsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    fromlocation: "",
    development: "",
    loadinglocation: "",
    fromstockpile: "",
    toromfinger: "",
    bog: "",
  };
  const [fromlocation, setFromlocation] = React.useState(
    initialValues.fromlocation
  );
  const [development, setDevelopment] = React.useState(
    initialValues.development
  );
  const [loadinglocation, setLoadinglocation] = React.useState(
    initialValues.loadinglocation
  );
  const [fromstockpile, setFromstockpile] = React.useState(
    initialValues.fromstockpile
  );
  const [toromfinger, setToromfinger] = React.useState(
    initialValues.toromfinger
  );
  const [bog, setBog] = React.useState(initialValues.bog);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = loadinglocatinsRecord
      ? { ...initialValues, ...loadinglocatinsRecord }
      : initialValues;
    setFromlocation(cleanValues.fromlocation);
    setDevelopment(cleanValues.development);
    setLoadinglocation(cleanValues.loadinglocation);
    setFromstockpile(cleanValues.fromstockpile);
    setToromfinger(cleanValues.toromfinger);
    setBog(cleanValues.bog);
    setErrors({});
  };
  const [loadinglocatinsRecord, setLoadinglocatinsRecord] = React.useState(
    loadinglocatinsModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Loadinglocatins, idProp)
        : loadinglocatinsModelProp;
      setLoadinglocatinsRecord(record);
    };
    queryData();
  }, [idProp, loadinglocatinsModelProp]);
  React.useEffect(resetStateValues, [loadinglocatinsRecord]);
  const validations = {
    fromlocation: [{ type: "Required" }],
    development: [],
    loadinglocation: [],
    fromstockpile: [],
    toromfinger: [],
    bog: [],
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
          fromlocation,
          development,
          loadinglocation,
          fromstockpile,
          toromfinger,
          bog,
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
            Loadinglocatins.copyOf(loadinglocatinsRecord, (updated) => {
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
      {...getOverrideProps(overrides, "LoadinglocatinsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Fromlocation"
        isRequired={true}
        isReadOnly={false}
        value={fromlocation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fromlocation: value,
              development,
              loadinglocation,
              fromstockpile,
              toromfinger,
              bog,
            };
            const result = onChange(modelFields);
            value = result?.fromlocation ?? value;
          }
          if (errors.fromlocation?.hasError) {
            runValidationTasks("fromlocation", value);
          }
          setFromlocation(value);
        }}
        onBlur={() => runValidationTasks("fromlocation", fromlocation)}
        errorMessage={errors.fromlocation?.errorMessage}
        hasError={errors.fromlocation?.hasError}
        {...getOverrideProps(overrides, "fromlocation")}
      ></TextField>
      <TextField
        label="Development"
        isRequired={false}
        isReadOnly={false}
        value={development}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fromlocation,
              development: value,
              loadinglocation,
              fromstockpile,
              toromfinger,
              bog,
            };
            const result = onChange(modelFields);
            value = result?.development ?? value;
          }
          if (errors.development?.hasError) {
            runValidationTasks("development", value);
          }
          setDevelopment(value);
        }}
        onBlur={() => runValidationTasks("development", development)}
        errorMessage={errors.development?.errorMessage}
        hasError={errors.development?.hasError}
        {...getOverrideProps(overrides, "development")}
      ></TextField>
      <TextField
        label="Loadinglocation"
        isRequired={false}
        isReadOnly={false}
        value={loadinglocation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fromlocation,
              development,
              loadinglocation: value,
              fromstockpile,
              toromfinger,
              bog,
            };
            const result = onChange(modelFields);
            value = result?.loadinglocation ?? value;
          }
          if (errors.loadinglocation?.hasError) {
            runValidationTasks("loadinglocation", value);
          }
          setLoadinglocation(value);
        }}
        onBlur={() => runValidationTasks("loadinglocation", loadinglocation)}
        errorMessage={errors.loadinglocation?.errorMessage}
        hasError={errors.loadinglocation?.hasError}
        {...getOverrideProps(overrides, "loadinglocation")}
      ></TextField>
      <TextField
        label="Fromstockpile"
        isRequired={false}
        isReadOnly={false}
        value={fromstockpile}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fromlocation,
              development,
              loadinglocation,
              fromstockpile: value,
              toromfinger,
              bog,
            };
            const result = onChange(modelFields);
            value = result?.fromstockpile ?? value;
          }
          if (errors.fromstockpile?.hasError) {
            runValidationTasks("fromstockpile", value);
          }
          setFromstockpile(value);
        }}
        onBlur={() => runValidationTasks("fromstockpile", fromstockpile)}
        errorMessage={errors.fromstockpile?.errorMessage}
        hasError={errors.fromstockpile?.hasError}
        {...getOverrideProps(overrides, "fromstockpile")}
      ></TextField>
      <TextField
        label="Toromfinger"
        isRequired={false}
        isReadOnly={false}
        value={toromfinger}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fromlocation,
              development,
              loadinglocation,
              fromstockpile,
              toromfinger: value,
              bog,
            };
            const result = onChange(modelFields);
            value = result?.toromfinger ?? value;
          }
          if (errors.toromfinger?.hasError) {
            runValidationTasks("toromfinger", value);
          }
          setToromfinger(value);
        }}
        onBlur={() => runValidationTasks("toromfinger", toromfinger)}
        errorMessage={errors.toromfinger?.errorMessage}
        hasError={errors.toromfinger?.hasError}
        {...getOverrideProps(overrides, "toromfinger")}
      ></TextField>
      <TextField
        label="Bog"
        isRequired={false}
        isReadOnly={false}
        value={bog}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              fromlocation,
              development,
              loadinglocation,
              fromstockpile,
              toromfinger,
              bog: value,
            };
            const result = onChange(modelFields);
            value = result?.bog ?? value;
          }
          if (errors.bog?.hasError) {
            runValidationTasks("bog", value);
          }
          setBog(value);
        }}
        onBlur={() => runValidationTasks("bog", bog)}
        errorMessage={errors.bog?.errorMessage}
        hasError={errors.bog?.hasError}
        {...getOverrideProps(overrides, "bog")}
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
          isDisabled={!(idProp || loadinglocatinsModelProp)}
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
              !(idProp || loadinglocatinsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
