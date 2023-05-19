/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Couplings } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CouplingsUpdateForm(props) {
  const {
    id: idProp,
    couplings: couplingsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    couplingssize: "",
    couplingsused: "",
    couplingsdamage: "",
    couplingslost: "",
  };
  const [couplingssize, setCouplingssize] = React.useState(
    initialValues.couplingssize
  );
  const [couplingsused, setCouplingsused] = React.useState(
    initialValues.couplingsused
  );
  const [couplingsdamage, setCouplingsdamage] = React.useState(
    initialValues.couplingsdamage
  );
  const [couplingslost, setCouplingslost] = React.useState(
    initialValues.couplingslost
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = couplingsRecord
      ? { ...initialValues, ...couplingsRecord }
      : initialValues;
    setCouplingssize(cleanValues.couplingssize);
    setCouplingsused(cleanValues.couplingsused);
    setCouplingsdamage(cleanValues.couplingsdamage);
    setCouplingslost(cleanValues.couplingslost);
    setErrors({});
  };
  const [couplingsRecord, setCouplingsRecord] =
    React.useState(couplingsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Couplings, idProp)
        : couplingsModelProp;
      setCouplingsRecord(record);
    };
    queryData();
  }, [idProp, couplingsModelProp]);
  React.useEffect(resetStateValues, [couplingsRecord]);
  const validations = {
    couplingssize: [{ type: "Required" }],
    couplingsused: [{ type: "Required" }],
    couplingsdamage: [{ type: "Required" }],
    couplingslost: [{ type: "Required" }],
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
          couplingssize,
          couplingsused,
          couplingsdamage,
          couplingslost,
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
            Couplings.copyOf(couplingsRecord, (updated) => {
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
      {...getOverrideProps(overrides, "CouplingsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Couplingssize"
        isRequired={true}
        isReadOnly={false}
        value={couplingssize}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              couplingssize: value,
              couplingsused,
              couplingsdamage,
              couplingslost,
            };
            const result = onChange(modelFields);
            value = result?.couplingssize ?? value;
          }
          if (errors.couplingssize?.hasError) {
            runValidationTasks("couplingssize", value);
          }
          setCouplingssize(value);
        }}
        onBlur={() => runValidationTasks("couplingssize", couplingssize)}
        errorMessage={errors.couplingssize?.errorMessage}
        hasError={errors.couplingssize?.hasError}
        {...getOverrideProps(overrides, "couplingssize")}
      ></TextField>
      <TextField
        label="Couplingsused"
        isRequired={true}
        isReadOnly={false}
        value={couplingsused}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              couplingssize,
              couplingsused: value,
              couplingsdamage,
              couplingslost,
            };
            const result = onChange(modelFields);
            value = result?.couplingsused ?? value;
          }
          if (errors.couplingsused?.hasError) {
            runValidationTasks("couplingsused", value);
          }
          setCouplingsused(value);
        }}
        onBlur={() => runValidationTasks("couplingsused", couplingsused)}
        errorMessage={errors.couplingsused?.errorMessage}
        hasError={errors.couplingsused?.hasError}
        {...getOverrideProps(overrides, "couplingsused")}
      ></TextField>
      <TextField
        label="Couplingsdamage"
        isRequired={true}
        isReadOnly={false}
        value={couplingsdamage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              couplingssize,
              couplingsused,
              couplingsdamage: value,
              couplingslost,
            };
            const result = onChange(modelFields);
            value = result?.couplingsdamage ?? value;
          }
          if (errors.couplingsdamage?.hasError) {
            runValidationTasks("couplingsdamage", value);
          }
          setCouplingsdamage(value);
        }}
        onBlur={() => runValidationTasks("couplingsdamage", couplingsdamage)}
        errorMessage={errors.couplingsdamage?.errorMessage}
        hasError={errors.couplingsdamage?.hasError}
        {...getOverrideProps(overrides, "couplingsdamage")}
      ></TextField>
      <TextField
        label="Couplingslost"
        isRequired={true}
        isReadOnly={false}
        value={couplingslost}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              couplingssize,
              couplingsused,
              couplingsdamage,
              couplingslost: value,
            };
            const result = onChange(modelFields);
            value = result?.couplingslost ?? value;
          }
          if (errors.couplingslost?.hasError) {
            runValidationTasks("couplingslost", value);
          }
          setCouplingslost(value);
        }}
        onBlur={() => runValidationTasks("couplingslost", couplingslost)}
        errorMessage={errors.couplingslost?.errorMessage}
        hasError={errors.couplingslost?.hasError}
        {...getOverrideProps(overrides, "couplingslost")}
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
          isDisabled={!(idProp || couplingsModelProp)}
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
              !(idProp || couplingsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
