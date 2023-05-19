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
export declare type ReamersCreateFormInputValues = {
    reamerssize?: string;
    reamersused?: string;
    reamersdamage?: string;
    reamerslost?: string;
};
export declare type ReamersCreateFormValidationValues = {
    reamerssize?: ValidationFunction<string>;
    reamersused?: ValidationFunction<string>;
    reamersdamage?: ValidationFunction<string>;
    reamerslost?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReamersCreateFormOverridesProps = {
    ReamersCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    reamerssize?: PrimitiveOverrideProps<TextFieldProps>;
    reamersused?: PrimitiveOverrideProps<TextFieldProps>;
    reamersdamage?: PrimitiveOverrideProps<TextFieldProps>;
    reamerslost?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReamersCreateFormProps = React.PropsWithChildren<{
    overrides?: ReamersCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ReamersCreateFormInputValues) => ReamersCreateFormInputValues;
    onSuccess?: (fields: ReamersCreateFormInputValues) => void;
    onError?: (fields: ReamersCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReamersCreateFormInputValues) => ReamersCreateFormInputValues;
    onValidate?: ReamersCreateFormValidationValues;
} & React.CSSProperties>;
export default function ReamersCreateForm(props: ReamersCreateFormProps): React.ReactElement;
