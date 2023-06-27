import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SettingTemplateValue extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Default value for the setting.
     */
    defaultValue?: string | undefined;
    /**
     * Description of the setting.
     */
    description?: string | undefined;
    /**
     * Name of the setting.
     */
    name?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Type of the setting.
     */
    type?: string | undefined;
}
