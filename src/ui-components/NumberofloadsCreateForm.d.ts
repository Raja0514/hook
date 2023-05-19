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
export declare type NumberofloadsCreateFormInputValues = {
    loads?: number;
};
export declare type NumberofloadsCreateFormValidationValues = {
    loads?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NumberofloadsCreateFormOverridesProps = {
    NumberofloadsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    loads?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NumberofloadsCreateFormProps = React.PropsWithChildren<{
    overrides?: NumberofloadsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NumberofloadsCreateFormInputValues) => NumberofloadsCreateFormInputValues;
    onSuccess?: (fields: NumberofloadsCreateFormInputValues) => void;
    onError?: (fields: NumberofloadsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NumberofloadsCreateFormInputValues) => NumberofloadsCreateFormInputValues;
    onValidate?: NumberofloadsCreateFormValidationValues;
} & React.CSSProperties>;
export default function NumberofloadsCreateForm(props: NumberofloadsCreateFormProps): React.ReactElement;
