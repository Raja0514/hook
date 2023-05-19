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
export declare type CouplingsCreateFormInputValues = {
    couplingssize?: string;
    couplingsused?: string;
    couplingsdamage?: string;
    couplingslost?: string;
};
export declare type CouplingsCreateFormValidationValues = {
    couplingssize?: ValidationFunction<string>;
    couplingsused?: ValidationFunction<string>;
    couplingsdamage?: ValidationFunction<string>;
    couplingslost?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CouplingsCreateFormOverridesProps = {
    CouplingsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    couplingssize?: PrimitiveOverrideProps<TextFieldProps>;
    couplingsused?: PrimitiveOverrideProps<TextFieldProps>;
    couplingsdamage?: PrimitiveOverrideProps<TextFieldProps>;
    couplingslost?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CouplingsCreateFormProps = React.PropsWithChildren<{
    overrides?: CouplingsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CouplingsCreateFormInputValues) => CouplingsCreateFormInputValues;
    onSuccess?: (fields: CouplingsCreateFormInputValues) => void;
    onError?: (fields: CouplingsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CouplingsCreateFormInputValues) => CouplingsCreateFormInputValues;
    onValidate?: CouplingsCreateFormValidationValues;
} & React.CSSProperties>;
export default function CouplingsCreateForm(props: CouplingsCreateFormProps): React.ReactElement;
