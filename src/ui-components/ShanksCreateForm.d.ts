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
export declare type ShanksCreateFormInputValues = {
    shankssize?: string;
    shanksused?: string;
    shanksdamage?: string;
    shankslost?: string;
};
export declare type ShanksCreateFormValidationValues = {
    shankssize?: ValidationFunction<string>;
    shanksused?: ValidationFunction<string>;
    shanksdamage?: ValidationFunction<string>;
    shankslost?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ShanksCreateFormOverridesProps = {
    ShanksCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    shankssize?: PrimitiveOverrideProps<TextFieldProps>;
    shanksused?: PrimitiveOverrideProps<TextFieldProps>;
    shanksdamage?: PrimitiveOverrideProps<TextFieldProps>;
    shankslost?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ShanksCreateFormProps = React.PropsWithChildren<{
    overrides?: ShanksCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ShanksCreateFormInputValues) => ShanksCreateFormInputValues;
    onSuccess?: (fields: ShanksCreateFormInputValues) => void;
    onError?: (fields: ShanksCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ShanksCreateFormInputValues) => ShanksCreateFormInputValues;
    onValidate?: ShanksCreateFormValidationValues;
} & React.CSSProperties>;
export default function ShanksCreateForm(props: ShanksCreateFormProps): React.ReactElement;
