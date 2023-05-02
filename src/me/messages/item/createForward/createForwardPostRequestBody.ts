import {Message} from '../../../../models/message';
import {Recipient} from '../../../../models/recipient';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface CreateForwardPostRequestBody extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The Comment property */
    comment?: string | undefined;
    /** The Message property */
    message?: Message | undefined;
    /** The ToRecipients property */
    toRecipients?: Recipient[] | undefined;
}
