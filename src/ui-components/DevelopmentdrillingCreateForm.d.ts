/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DevelopmentdrillingCreateFormInputValues = {
    heading?: string;
    holes?: string;
    splitsetbolts?: string;
    tunnelprofilewidth?: string;
    tunnelprofileheight?: string;
    meshsheet?: string;
    scalinghours?: string;
    tunnelprofiledistance?: string;
};
export declare type DevelopmentdrillingCreateFormValidationValues = {
    heading?: ValidationFunction<string>;
    holes?: ValidationFunction<string>;
    splitsetbolts?: ValidationFunction<string>;
    tunnelprofilewidth?: ValidationFunction<string>;
    tunnelprofileheight?: ValidationFunction<string>;
    meshsheet?: ValidationFunction<string>;
    scalinghours?: ValidationFunction<string>;
    tunnelprofiledistance?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DevelopmentdrillingCreateFormOverridesProps = {
    DevelopmentdrillingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    heading?: PrimitiveOverrideProps<TextFieldProps>;
    holes?: PrimitiveOverrideProps<TextFieldProps>;
    splitsetbolts?: PrimitiveOverrideProps<TextFieldProps>;
    tunnelprofilewidth?: PrimitiveOverrideProps<TextFieldProps>;
    tunnelprofileheight?: PrimitiveOverrideProps<TextFieldProps>;
    meshsheet?: PrimitiveOverrideProps<TextFieldProps>;
    scalinghours?: PrimitiveOverrideProps<TextFieldProps>;
    tunnelprofiledistance?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DevelopmentdrillingCreateFormProps = React.PropsWithChildren<{
    overrides?: DevelopmentdrillingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DevelopmentdrillingCreateFormInputValues) => DevelopmentdrillingCreateFormInputValues;
    onSuccess?: (fields: DevelopmentdrillingCreateFormInputValues) => void;
    onError?: (fields: DevelopmentdrillingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DevelopmentdrillingCreateFormInputValues) => DevelopmentdrillingCreateFormInputValues;
    onValidate?: DevelopmentdrillingCreateFormValidationValues;
} & React.CSSProperties>;
export default function DevelopmentdrillingCreateForm(props: DevelopmentdrillingCreateFormProps): React.ReactElement;
