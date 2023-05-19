/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Numberofloads } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NumberofloadsUpdateFormInputValues = {
    loads?: number;
};
export declare type NumberofloadsUpdateFormValidationValues = {
    loads?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NumberofloadsUpdateFormOverridesProps = {
    NumberofloadsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    loads?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NumberofloadsUpdateFormProps = React.PropsWithChildren<{
    overrides?: NumberofloadsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    numberofloads?: Numberofloads;
    onSubmit?: (fields: NumberofloadsUpdateFormInputValues) => NumberofloadsUpdateFormInputValues;
    onSuccess?: (fields: NumberofloadsUpdateFormInputValues) => void;
    onError?: (fields: NumberofloadsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NumberofloadsUpdateFormInputValues) => NumberofloadsUpdateFormInputValues;
    onValidate?: NumberofloadsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function NumberofloadsUpdateForm(props: NumberofloadsUpdateFormProps): React.ReactElement;
