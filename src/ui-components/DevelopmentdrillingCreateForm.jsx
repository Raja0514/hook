/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Developmentdrilling } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function DevelopmentdrillingCreateForm(props) {
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
    heading: "",
    holes: "",
    splitsetbolts: "",
    tunnelprofilewidth: "",
    tunnelprofileheight: "",
    meshsheet: "",
    scalinghours: "",
    tunnelprofiledistance: "",
  };
  const [heading, setHeading] = React.useState(initialValues.heading);
  const [holes, setHoles] = React.useState(initialValues.holes);
  const [splitsetbolts, setSplitsetbolts] = React.useState(
    initialValues.splitsetbolts
  );
  const [tunnelprofilewidth, setTunnelprofilewidth] = React.useState(
    initialValues.tunnelprofilewidth
  );
  const [tunnelprofileheight, setTunnelprofileheight] = React.useState(
    initialValues.tunnelprofileheight
  );
  const [meshsheet, setMeshsheet] = React.useState(initialValues.meshsheet);
  const [scalinghours, setScalinghours] = React.useState(
    initialValues.scalinghours
  );
  const [tunnelprofiledistance, setTunnelprofiledistance] = React.useState(
    initialValues.tunnelprofiledistance
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setHeading(initialValues.heading);
    setHoles(initialValues.holes);
    setSplitsetbolts(initialValues.splitsetbolts);
    setTunnelprofilewidth(initialValues.tunnelprofilewidth);
    setTunnelprofileheight(initialValues.tunnelprofileheight);
    setMeshsheet(initialValues.meshsheet);
    setScalinghours(initialValues.scalinghours);
    setTunnelprofiledistance(initialValues.tunnelprofiledistance);
    setErrors({});
  };
  const validations = {
    heading: [{ type: "Required" }],
    holes: [{ type: "Required" }],
    splitsetbolts: [{ type: "Required" }],
    tunnelprofilewidth: [{ type: "Required" }],
    tunnelprofileheight: [{ type: "Required" }],
    meshsheet: [{ type: "Required" }],
    scalinghours: [{ type: "Required" }],
    tunnelprofiledistance: [],
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
          heading,
          holes,
          splitsetbolts,
          tunnelprofilewidth,
          tunnelprofileheight,
          meshsheet,
          scalinghours,
          tunnelprofiledistance,
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
          await DataStore.save(new Developmentdrilling(modelFields));
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
      {...getOverrideProps(overrides, "DevelopmentdrillingCreateForm")}
      {...rest}
    >
      <TextField
        label="Heading"
        isRequired={true}
        isReadOnly={false}
        value={heading}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              heading: value,
              holes,
              splitsetbolts,
              tunnelprofilewidth,
              tunnelprofileheight,
              meshsheet,
              scalinghours,
              tunnelprofiledistance,
            };
            const result = onChange(modelFields);
            value = result?.heading ?? value;
          }
          if (errors.heading?.hasError) {
            runValidationTasks("heading", value);
          }
          setHeading(value);
        }}
        onBlur={() => runValidationTasks("heading", heading)}
        errorMessage={errors.heading?.errorMessage}
        hasError={errors.heading?.hasError}
        {...getOverrideProps(overrides, "heading")}
      ></TextField>
      <TextField
        label="Holes"
        isRequired={true}
        isReadOnly={false}
        value={holes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              heading,
              holes: value,
              splitsetbolts,
              tunnelprofilewidth,
              tunnelprofileheight,
              meshsheet,
              scalinghours,
              tunnelprofiledistance,
            };
            const result = onChange(modelFields);
            value = result?.holes ?? value;
          }
          if (errors.holes?.hasError) {
            runValidationTasks("holes", value);
          }
          setHoles(value);
        }}
        onBlur={() => runValidationTasks("holes", holes)}
        errorMessage={errors.holes?.errorMessage}
        hasError={errors.holes?.hasError}
        {...getOverrideProps(overrides, "holes")}
      ></TextField>
      <TextField
        label="Splitsetbolts"
        isRequired={true}
        isReadOnly={false}
        value={splitsetbolts}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              heading,
              holes,
              splitsetbolts: value,
              tunnelprofilewidth,
              tunnelprofileheight,
              meshsheet,
              scalinghours,
              tunnelprofiledistance,
            };
            const result = onChange(modelFields);
            value = result?.splitsetbolts ?? value;
          }
          if (errors.splitsetbolts?.hasError) {
            runValidationTasks("splitsetbolts", value);
          }
          setSplitsetbolts(value);
        }}
        onBlur={() => runValidationTasks("splitsetbolts", splitsetbolts)}
        errorMessage={errors.splitsetbolts?.errorMessage}
        hasError={errors.splitsetbolts?.hasError}
        {...getOverrideProps(overrides, "splitsetbolts")}
      ></TextField>
      <TextField
        label="Tunnelprofilewidth"
        isRequired={true}
        isReadOnly={false}
        value={tunnelprofilewidth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              heading,
              holes,
              splitsetbolts,
              tunnelprofilewidth: value,
              tunnelprofileheight,
              meshsheet,
              scalinghours,
              tunnelprofiledistance,
            };
            const result = onChange(modelFields);
            value = result?.tunnelprofilewidth ?? value;
          }
          if (errors.tunnelprofilewidth?.hasError) {
            runValidationTasks("tunnelprofilewidth", value);
          }
          setTunnelprofilewidth(value);
        }}
        onBlur={() =>
          runValidationTasks("tunnelprofilewidth", tunnelprofilewidth)
        }
        errorMessage={errors.tunnelprofilewidth?.errorMessage}
        hasError={errors.tunnelprofilewidth?.hasError}
        {...getOverrideProps(overrides, "tunnelprofilewidth")}
      ></TextField>
      <TextField
        label="Tunnelprofileheight"
        isRequired={true}
        isReadOnly={false}
        value={tunnelprofileheight}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              heading,
              holes,
              splitsetbolts,
              tunnelprofilewidth,
              tunnelprofileheight: value,
              meshsheet,
              scalinghours,
              tunnelprofiledistance,
            };
            const result = onChange(modelFields);
            value = result?.tunnelprofileheight ?? value;
          }
          if (errors.tunnelprofileheight?.hasError) {
            runValidationTasks("tunnelprofileheight", value);
          }
          setTunnelprofileheight(value);
        }}
        onBlur={() =>
          runValidationTasks("tunnelprofileheight", tunnelprofileheight)
        }
        errorMessage={errors.tunnelprofileheight?.errorMessage}
        hasError={errors.tunnelprofileheight?.hasError}
        {...getOverrideProps(overrides, "tunnelprofileheight")}
      ></TextField>
      <TextField
        label="Meshsheet"
        isRequired={true}
        isReadOnly={false}
        value={meshsheet}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              heading,
              holes,
              splitsetbolts,
              tunnelprofilewidth,
              tunnelprofileheight,
              meshsheet: value,
              scalinghours,
              tunnelprofiledistance,
            };
            const result = onChange(modelFields);
            value = result?.meshsheet ?? value;
          }
          if (errors.meshsheet?.hasError) {
            runValidationTasks("meshsheet", value);
          }
          setMeshsheet(value);
        }}
        onBlur={() => runValidationTasks("meshsheet", meshsheet)}
        errorMessage={errors.meshsheet?.errorMessage}
        hasError={errors.meshsheet?.hasError}
        {...getOverrideProps(overrides, "meshsheet")}
      ></TextField>
      <TextField
        label="Scalinghours"
        isRequired={true}
        isReadOnly={false}
        value={scalinghours}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              heading,
              holes,
              splitsetbolts,
              tunnelprofilewidth,
              tunnelprofileheight,
              meshsheet,
              scalinghours: value,
              tunnelprofiledistance,
            };
            const result = onChange(modelFields);
            value = result?.scalinghours ?? value;
          }
          if (errors.scalinghours?.hasError) {
            runValidationTasks("scalinghours", value);
          }
          setScalinghours(value);
        }}
        onBlur={() => runValidationTasks("scalinghours", scalinghours)}
        errorMessage={errors.scalinghours?.errorMessage}
        hasError={errors.scalinghours?.hasError}
        {...getOverrideProps(overrides, "scalinghours")}
      ></TextField>
      <TextField
        label="Tunnelprofiledistance"
        isRequired={false}
        isReadOnly={false}
        value={tunnelprofiledistance}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              heading,
              holes,
              splitsetbolts,
              tunnelprofilewidth,
              tunnelprofileheight,
              meshsheet,
              scalinghours,
              tunnelprofiledistance: value,
            };
            const result = onChange(modelFields);
            value = result?.tunnelprofiledistance ?? value;
          }
          if (errors.tunnelprofiledistance?.hasError) {
            runValidationTasks("tunnelprofiledistance", value);
          }
          setTunnelprofiledistance(value);
        }}
        onBlur={() =>
          runValidationTasks("tunnelprofiledistance", tunnelprofiledistance)
        }
        errorMessage={errors.tunnelprofiledistance?.errorMessage}
        hasError={errors.tunnelprofiledistance?.hasError}
        {...getOverrideProps(overrides, "tunnelprofiledistance")}
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
