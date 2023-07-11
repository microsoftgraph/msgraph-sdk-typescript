import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CollapseProperty extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Defines the collapse group to trim results. The properties in this collection must be sortable/refinable properties. Required.
     */
    fields?: string[] | undefined;
    /**
     * Defines a maximum limit count for this field. This numeric value must be a positive integer. Required.
     */
    limit?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
