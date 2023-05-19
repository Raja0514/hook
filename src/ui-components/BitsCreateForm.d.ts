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
export declare type BitsCreateFormInputValues = {
    bitssize?: string;
    bitsused?: string;
    bitsdamage?: string;
    bitslost?: string;
};
export declare type BitsCreateFormValidationValues = {
    bitssize?: ValidationFunction<string>;
    bitsused?: ValidationFunction<string>;
    bitsdamage?: ValidationFunction<string>;
    bitslost?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BitsCreateFormOverridesProps = {
    BitsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    bitssize?: PrimitiveOverrideProps<TextFieldProps>;
    bitsused?: PrimitiveOverrideProps<TextFieldProps>;
    bitsdamage?: PrimitiveOverrideProps<TextFieldProps>;
    bitslost?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BitsCreateFormProps = React.PropsWithChildren<{
    overrides?: BitsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BitsCreateFormInputValues) => BitsCreateFormInputValues;
    onSuccess?: (fields: BitsCreateFormInputValues) => void;
    onError?: (fields: BitsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BitsCreateFormInputValues) => BitsCreateFormInputValues;
    onValidate?: BitsCreateFormValidationValues;
} & React.CSSProperties>;
export default function BitsCreateForm(props: BitsCreateFormProps): React.ReactElement;
