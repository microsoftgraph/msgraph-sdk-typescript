import {ConversationMember} from '../../../../../../models/conversationMember';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AddPostRequestBody extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The values property */
    values?: ConversationMember[] | undefined;
}
