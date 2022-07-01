import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SettingValue extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** Name of the setting (as defined by the directorySettingTemplate). */
    name?: string | undefined;
    /** Value of the setting. */
    value?: string | undefined;
}
