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
export declare type PrestartCreateFormInputValues = {
    odometerreading?: number;
    enginehoursos?: number;
    categeoryAfault?: string;
    categeoryBfault?: string;
    categeoryCfault?: string;
};
export declare type PrestartCreateFormValidationValues = {
    odometerreading?: ValidationFunction<number>;
    enginehoursos?: ValidationFunction<number>;
    categeoryAfault?: ValidationFunction<string>;
    categeoryBfault?: ValidationFunction<string>;
    categeoryCfault?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PrestartCreateFormOverridesProps = {
    PrestartCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    odometerreading?: PrimitiveOverrideProps<TextFieldProps>;
    enginehoursos?: PrimitiveOverrideProps<TextFieldProps>;
    categeoryAfault?: PrimitiveOverrideProps<TextFieldProps>;
    categeoryBfault?: PrimitiveOverrideProps<TextFieldProps>;
    categeoryCfault?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PrestartCreateFormProps = React.PropsWithChildren<{
    overrides?: PrestartCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PrestartCreateFormInputValues) => PrestartCreateFormInputValues;
    onSuccess?: (fields: PrestartCreateFormInputValues) => void;
    onError?: (fields: PrestartCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PrestartCreateFormInputValues) => PrestartCreateFormInputValues;
    onValidate?: PrestartCreateFormValidationValues;
} & React.CSSProperties>;
export default function PrestartCreateForm(props: PrestartCreateFormProps): React.ReactElement;
