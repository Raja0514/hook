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
export declare type MetstruckplodCreateFormInputValues = {
    trucknumber?: string;
    enginehours?: string;
    date?: string;
    operatorname?: string;
    hoursworked?: string;
    shift?: string;
    crew?: string;
};
export declare type MetstruckplodCreateFormValidationValues = {
    trucknumber?: ValidationFunction<string>;
    enginehours?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    operatorname?: ValidationFunction<string>;
    hoursworked?: ValidationFunction<string>;
    shift?: ValidationFunction<string>;
    crew?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MetstruckplodCreateFormOverridesProps = {
    MetstruckplodCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    trucknumber?: PrimitiveOverrideProps<TextFieldProps>;
    enginehours?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    operatorname?: PrimitiveOverrideProps<TextFieldProps>;
    hoursworked?: PrimitiveOverrideProps<TextFieldProps>;
    shift?: PrimitiveOverrideProps<TextFieldProps>;
    crew?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MetstruckplodCreateFormProps = React.PropsWithChildren<{
    overrides?: MetstruckplodCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MetstruckplodCreateFormInputValues) => MetstruckplodCreateFormInputValues;
    onSuccess?: (fields: MetstruckplodCreateFormInputValues) => void;
    onError?: (fields: MetstruckplodCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MetstruckplodCreateFormInputValues) => MetstruckplodCreateFormInputValues;
    onValidate?: MetstruckplodCreateFormValidationValues;
} & React.CSSProperties>;
export default function MetstruckplodCreateForm(props: MetstruckplodCreateFormProps): React.ReactElement;
