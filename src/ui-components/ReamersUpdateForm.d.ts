/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Reamers } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReamersUpdateFormInputValues = {
    reamerssize?: string;
    reamersused?: string;
    reamersdamage?: string;
    reamerslost?: string;
};
export declare type ReamersUpdateFormValidationValues = {
    reamerssize?: ValidationFunction<string>;
    reamersused?: ValidationFunction<string>;
    reamersdamage?: ValidationFunction<string>;
    reamerslost?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReamersUpdateFormOverridesProps = {
    ReamersUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    reamerssize?: PrimitiveOverrideProps<TextFieldProps>;
    reamersused?: PrimitiveOverrideProps<TextFieldProps>;
    reamersdamage?: PrimitiveOverrideProps<TextFieldProps>;
    reamerslost?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReamersUpdateFormProps = React.PropsWithChildren<{
    overrides?: ReamersUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    reamers?: Reamers;
    onSubmit?: (fields: ReamersUpdateFormInputValues) => ReamersUpdateFormInputValues;
    onSuccess?: (fields: ReamersUpdateFormInputValues) => void;
    onError?: (fields: ReamersUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReamersUpdateFormInputValues) => ReamersUpdateFormInputValues;
    onValidate?: ReamersUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ReamersUpdateForm(props: ReamersUpdateFormProps): React.ReactElement;
