/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Shanks } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ShanksUpdateFormInputValues = {
    shankssize?: string;
    shanksused?: string;
    shanksdamage?: string;
    shankslost?: string;
};
export declare type ShanksUpdateFormValidationValues = {
    shankssize?: ValidationFunction<string>;
    shanksused?: ValidationFunction<string>;
    shanksdamage?: ValidationFunction<string>;
    shankslost?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShanksUpdateFormOverridesProps = {
    ShanksUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    shankssize?: PrimitiveOverrideProps<TextFieldProps>;
    shanksused?: PrimitiveOverrideProps<TextFieldProps>;
    shanksdamage?: PrimitiveOverrideProps<TextFieldProps>;
    shankslost?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ShanksUpdateFormProps = React.PropsWithChildren<{
    overrides?: ShanksUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    shanks?: Shanks;
    onSubmit?: (fields: ShanksUpdateFormInputValues) => ShanksUpdateFormInputValues;
    onSuccess?: (fields: ShanksUpdateFormInputValues) => void;
    onError?: (fields: ShanksUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ShanksUpdateFormInputValues) => ShanksUpdateFormInputValues;
    onValidate?: ShanksUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ShanksUpdateForm(props: ShanksUpdateFormProps): React.ReactElement;
