/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Steels } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SteelsUpdateFormInputValues = {
    steelssize?: string;
    steelsused?: string;
    steelsdamage?: string;
    steelslost?: string;
};
export declare type SteelsUpdateFormValidationValues = {
    steelssize?: ValidationFunction<string>;
    steelsused?: ValidationFunction<string>;
    steelsdamage?: ValidationFunction<string>;
    steelslost?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SteelsUpdateFormOverridesProps = {
    SteelsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    steelssize?: PrimitiveOverrideProps<TextFieldProps>;
    steelsused?: PrimitiveOverrideProps<TextFieldProps>;
    steelsdamage?: PrimitiveOverrideProps<TextFieldProps>;
    steelslost?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SteelsUpdateFormProps = React.PropsWithChildren<{
    overrides?: SteelsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    steels?: Steels;
    onSubmit?: (fields: SteelsUpdateFormInputValues) => SteelsUpdateFormInputValues;
    onSuccess?: (fields: SteelsUpdateFormInputValues) => void;
    onError?: (fields: SteelsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SteelsUpdateFormInputValues) => SteelsUpdateFormInputValues;
    onValidate?: SteelsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SteelsUpdateForm(props: SteelsUpdateFormProps): React.ReactElement;
