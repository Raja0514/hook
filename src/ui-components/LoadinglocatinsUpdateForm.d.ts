/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Loadinglocatins } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type LoadinglocatinsUpdateFormInputValues = {
    fromlocation?: string;
    development?: string;
    loadinglocation?: string;
    fromstockpile?: string;
    toromfinger?: string;
    bog?: string;
};
export declare type LoadinglocatinsUpdateFormValidationValues = {
    fromlocation?: ValidationFunction<string>;
    development?: ValidationFunction<string>;
    loadinglocation?: ValidationFunction<string>;
    fromstockpile?: ValidationFunction<string>;
    toromfinger?: ValidationFunction<string>;
    bog?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LoadinglocatinsUpdateFormOverridesProps = {
    LoadinglocatinsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    fromlocation?: PrimitiveOverrideProps<TextFieldProps>;
    development?: PrimitiveOverrideProps<TextFieldProps>;
    loadinglocation?: PrimitiveOverrideProps<TextFieldProps>;
    fromstockpile?: PrimitiveOverrideProps<TextFieldProps>;
    toromfinger?: PrimitiveOverrideProps<TextFieldProps>;
    bog?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LoadinglocatinsUpdateFormProps = React.PropsWithChildren<{
    overrides?: LoadinglocatinsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    loadinglocatins?: Loadinglocatins;
    onSubmit?: (fields: LoadinglocatinsUpdateFormInputValues) => LoadinglocatinsUpdateFormInputValues;
    onSuccess?: (fields: LoadinglocatinsUpdateFormInputValues) => void;
    onError?: (fields: LoadinglocatinsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LoadinglocatinsUpdateFormInputValues) => LoadinglocatinsUpdateFormInputValues;
    onValidate?: LoadinglocatinsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LoadinglocatinsUpdateForm(props: LoadinglocatinsUpdateFormProps): React.ReactElement;
