import {ChatMessage} from '../../models/chatMessage';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface GetAllMessagesResponse extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown> | undefined;
    /** The value property */
    value?: ChatMessage[] | undefined;
}
