/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Prestart } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PrestartUpdateFormInputValues = {
    odometerreading?: number;
    enginehoursos?: number;
    categeoryAfault?: string;
    categeoryBfault?: string;
    categeoryCfault?: string;
};
export declare type PrestartUpdateFormValidationValues = {
    odometerreading?: ValidationFunction<number>;
    enginehoursos?: ValidationFunction<number>;
    categeoryAfault?: ValidationFunction<string>;
    categeoryBfault?: ValidationFunction<string>;
    categeoryCfault?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PrestartUpdateFormOverridesProps = {
    PrestartUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    odometerreading?: PrimitiveOverrideProps<TextFieldProps>;
    enginehoursos?: PrimitiveOverrideProps<TextFieldProps>;
    categeoryAfault?: PrimitiveOverrideProps<TextFieldProps>;
    categeoryBfault?: PrimitiveOverrideProps<TextFieldProps>;
    categeoryCfault?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PrestartUpdateFormProps = React.PropsWithChildren<{
    overrides?: PrestartUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    prestart?: Prestart;
    onSubmit?: (fields: PrestartUpdateFormInputValues) => PrestartUpdateFormInputValues;
    onSuccess?: (fields: PrestartUpdateFormInputValues) => void;
    onError?: (fields: PrestartUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PrestartUpdateFormInputValues) => PrestartUpdateFormInputValues;
    onValidate?: PrestartUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PrestartUpdateForm(props: PrestartUpdateFormProps): React.ReactElement;
