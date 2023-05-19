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
export declare type SteelsCreateFormInputValues = {
    steelssize?: string;
    steelsused?: string;
    steelsdamage?: string;
    steelslost?: string;
};
export declare type SteelsCreateFormValidationValues = {
    steelssize?: ValidationFunction<string>;
    steelsused?: ValidationFunction<string>;
    steelsdamage?: ValidationFunction<string>;
    steelslost?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SteelsCreateFormOverridesProps = {
    SteelsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    steelssize?: PrimitiveOverrideProps<TextFieldProps>;
    steelsused?: PrimitiveOverrideProps<TextFieldProps>;
    steelsdamage?: PrimitiveOverrideProps<TextFieldProps>;
    steelslost?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SteelsCreateFormProps = React.PropsWithChildren<{
    overrides?: SteelsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SteelsCreateFormInputValues) => SteelsCreateFormInputValues;
    onSuccess?: (fields: SteelsCreateFormInputValues) => void;
    onError?: (fields: SteelsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SteelsCreateFormInputValues) => SteelsCreateFormInputValues;
    onValidate?: SteelsCreateFormValidationValues;
} & React.CSSProperties>;
export default function SteelsCreateForm(props: SteelsCreateFormProps): React.ReactElement;
