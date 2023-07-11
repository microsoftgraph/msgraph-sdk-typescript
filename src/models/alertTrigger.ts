import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AlertTrigger extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Name of the property serving as a detection trigger.
     */
    name?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Type of the property in the key:value pair for interpretation. For example, String, Boolean etc.
     */
    type?: string | undefined;
    /**
     * Value of the property serving as a detection trigger.
     */
    value?: string | undefined;
}
