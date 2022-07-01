import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ResultInfo extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** The result code. */
    code?: number | undefined;
    /** The message. */
    message?: string | undefined;
    /** The result sub-code. */
    subcode?: number | undefined;
}
