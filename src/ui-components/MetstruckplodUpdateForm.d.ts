/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Metstruckplod } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type MetstruckplodUpdateFormInputValues = {
    trucknumber?: string;
    enginehours?: string;
    date?: string;
    operatorname?: string;
    hoursworked?: string;
    shift?: string;
    crew?: string;
};
export declare type MetstruckplodUpdateFormValidationValues = {
    trucknumber?: ValidationFunction<string>;
    enginehours?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    operatorname?: ValidationFunction<string>;
    hoursworked?: ValidationFunction<string>;
    shift?: ValidationFunction<string>;
    crew?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MetstruckplodUpdateFormOverridesProps = {
    MetstruckplodUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    trucknumber?: PrimitiveOverrideProps<TextFieldProps>;
    enginehours?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    operatorname?: PrimitiveOverrideProps<TextFieldProps>;
    hoursworked?: PrimitiveOverrideProps<TextFieldProps>;
    shift?: PrimitiveOverrideProps<TextFieldProps>;
    crew?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MetstruckplodUpdateFormProps = React.PropsWithChildren<{
    overrides?: MetstruckplodUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    metstruckplod?: Metstruckplod;
    onSubmit?: (fields: MetstruckplodUpdateFormInputValues) => MetstruckplodUpdateFormInputValues;
    onSuccess?: (fields: MetstruckplodUpdateFormInputValues) => void;
    onError?: (fields: MetstruckplodUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MetstruckplodUpdateFormInputValues) => MetstruckplodUpdateFormInputValues;
    onValidate?: MetstruckplodUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MetstruckplodUpdateForm(props: MetstruckplodUpdateFormProps): React.ReactElement;
