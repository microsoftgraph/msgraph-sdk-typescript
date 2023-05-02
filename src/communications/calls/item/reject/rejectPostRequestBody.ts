import {RejectReason} from '../../../../models/rejectReason';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RejectPostRequestBody extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The callbackUri property */
    callbackUri?: string | undefined;
    /** The reason property */
    reason?: RejectReason | undefined;
}
