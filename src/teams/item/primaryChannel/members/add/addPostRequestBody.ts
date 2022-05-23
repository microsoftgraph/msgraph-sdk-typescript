import {ConversationMember} from '../../../../../models/conversationMember';

export interface AddPostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The values property */
    values?:ConversationMember[] | undefined;
}
