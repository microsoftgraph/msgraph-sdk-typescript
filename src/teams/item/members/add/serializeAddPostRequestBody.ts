import type {ConversationMember} from '../../../../models/conversationMember';
import {serializeConversationMember} from '../../../../models/serializeConversationMember';
import type {AddPostRequestBody} from './addPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddPostRequestBody(writer: SerializationWriter, addPostRequestBody: AddPostRequestBody | undefined = {} as AddPostRequestBody) : void {
        writer.writeCollectionOfObjectValues<ConversationMember>("values", addPostRequestBody.values, serializeConversationMember);
        writer.writeAdditionalData(addPostRequestBody.additionalData);
}
