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
export declare type LoadinglocatinsCreateFormInputValues = {
    fromlocation?: string;
    development?: string;
    loadinglocation?: string;
    fromstockpile?: string;
    toromfinger?: string;
    bog?: string;
};
export declare type LoadinglocatinsCreateFormValidationValues = {
    fromlocation?: ValidationFunction<string>;
    development?: ValidationFunction<string>;
    loadinglocation?: ValidationFunction<string>;
    fromstockpile?: ValidationFunction<string>;
    toromfinger?: ValidationFunction<string>;
    bog?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoadinglocatinsCreateFormOverridesProps = {
    LoadinglocatinsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    fromlocation?: PrimitiveOverrideProps<TextFieldProps>;
    development?: PrimitiveOverrideProps<TextFieldProps>;
    loadinglocation?: PrimitiveOverrideProps<TextFieldProps>;
    fromstockpile?: PrimitiveOverrideProps<TextFieldProps>;
    toromfinger?: PrimitiveOverrideProps<TextFieldProps>;
    bog?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LoadinglocatinsCreateFormProps = React.PropsWithChildren<{
    overrides?: LoadinglocatinsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LoadinglocatinsCreateFormInputValues) => LoadinglocatinsCreateFormInputValues;
    onSuccess?: (fields: LoadinglocatinsCreateFormInputValues) => void;
    onError?: (fields: LoadinglocatinsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LoadinglocatinsCreateFormInputValues) => LoadinglocatinsCreateFormInputValues;
    onValidate?: LoadinglocatinsCreateFormValidationValues;
} & React.CSSProperties>;
export default function LoadinglocatinsCreateForm(props: LoadinglocatinsCreateFormProps): React.ReactElement;
