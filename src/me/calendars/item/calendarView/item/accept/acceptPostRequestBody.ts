import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AcceptPostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** The Comment property */
    comment?: string | undefined;
    /** The SendResponse property */
    sendResponse?: boolean | undefined;
}
