import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DateTimeColumn extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** How the value should be presented in the UX. Must be one of default, friendly, or standard. See below for more details. If unspecified, treated as default. */
    displayAs?: string | undefined;
    /** Indicates whether the value should be presented as a date only or a date and time. Must be one of dateOnly or dateTime */
    format?: string | undefined;
}
