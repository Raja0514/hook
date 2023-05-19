/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Couplings } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CouplingsUpdateFormInputValues = {
    couplingssize?: string;
    couplingsused?: string;
    couplingsdamage?: string;
    couplingslost?: string;
};
export declare type CouplingsUpdateFormValidationValues = {
    couplingssize?: ValidationFunction<string>;
    couplingsused?: ValidationFunction<string>;
    couplingsdamage?: ValidationFunction<string>;
    couplingslost?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CouplingsUpdateFormOverridesProps = {
    CouplingsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    couplingssize?: PrimitiveOverrideProps<TextFieldProps>;
    couplingsused?: PrimitiveOverrideProps<TextFieldProps>;
    couplingsdamage?: PrimitiveOverrideProps<TextFieldProps>;
    couplingslost?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CouplingsUpdateFormProps = React.PropsWithChildren<{
    overrides?: CouplingsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    couplings?: Couplings;
    onSubmit?: (fields: CouplingsUpdateFormInputValues) => CouplingsUpdateFormInputValues;
    onSuccess?: (fields: CouplingsUpdateFormInputValues) => void;
    onError?: (fields: CouplingsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CouplingsUpdateFormInputValues) => CouplingsUpdateFormInputValues;
    onValidate?: CouplingsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CouplingsUpdateForm(props: CouplingsUpdateFormProps): React.ReactElement;
