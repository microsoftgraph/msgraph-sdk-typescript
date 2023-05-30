import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CollapseProperty extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The fields property */
    fields?: string[] | undefined;
    /** The limit property */
    limit?: number | undefined;
    /** The OdataType property */
    odataType?: string | undefined;
}
