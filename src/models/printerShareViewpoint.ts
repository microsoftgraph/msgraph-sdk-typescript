import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface PrinterShareViewpoint extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Date and time when the printer was last used by the signed-in user. The timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    lastUsedDateTime?: Date | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
