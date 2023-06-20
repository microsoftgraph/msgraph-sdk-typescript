import {ConversationMember} from '../../../../../../models/conversationMember';
import {serializeConversationMember} from '../../../../../../models/serializeConversationMember';
import {AddPostRequestBody} from './addPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAddPostRequestBody(addPostRequestBody: AddPostRequestBody | undefined = {} as AddPostRequestBody, writer: SerializationWriter) : void {
        writer.writeCollectionOfObjectValues<ConversationMember>("values", addPostRequestBody.values, serializeConversationMember);
        writer.writeAdditionalData(addPostRequestBody.additionalData);
}
