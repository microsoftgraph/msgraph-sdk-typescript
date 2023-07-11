import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SettingValue extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Name of the setting (as defined by the groupSettingTemplate).
     */
    name?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Value of the setting.
     */
    value?: string | undefined;
}
