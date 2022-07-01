import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface InnerError extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** Client request Id as sent by the client application. */
    clientRequestId?: string | undefined;
    /** Date when the error occured. */
    date?: Date | undefined;
    /** Request Id as tracked internally by the service */
    requestId?: string | undefined;
}
