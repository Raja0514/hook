/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Bits } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BitsUpdateFormInputValues = {
    bitssize?: string;
    bitsused?: string;
    bitsdamage?: string;
    bitslost?: string;
};
export declare type BitsUpdateFormValidationValues = {
    bitssize?: ValidationFunction<string>;
    bitsused?: ValidationFunction<string>;
    bitsdamage?: ValidationFunction<string>;
    bitslost?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BitsUpdateFormOverridesProps = {
    BitsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    bitssize?: PrimitiveOverrideProps<TextFieldProps>;
    bitsused?: PrimitiveOverrideProps<TextFieldProps>;
    bitsdamage?: PrimitiveOverrideProps<TextFieldProps>;
    bitslost?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BitsUpdateFormProps = React.PropsWithChildren<{
    overrides?: BitsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    bits?: Bits;
    onSubmit?: (fields: BitsUpdateFormInputValues) => BitsUpdateFormInputValues;
    onSuccess?: (fields: BitsUpdateFormInputValues) => void;
    onError?: (fields: BitsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BitsUpdateFormInputValues) => BitsUpdateFormInputValues;
    onValidate?: BitsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BitsUpdateForm(props: BitsUpdateFormProps): React.ReactElement;
