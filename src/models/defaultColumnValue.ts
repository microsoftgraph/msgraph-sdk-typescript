import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DefaultColumnValue extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The formula used to compute the default value for the column.
     */
    formula?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The direct value to use as the default value for the column.
     */
    value?: string | undefined;
}
