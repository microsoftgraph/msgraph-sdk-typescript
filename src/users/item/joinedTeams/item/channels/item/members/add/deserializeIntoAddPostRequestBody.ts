import type {ConversationMember} from '../../../../../../../../models/conversationMember';
import {createConversationMemberFromDiscriminatorValue} from '../../../../../../../../models/createConversationMemberFromDiscriminatorValue';
import {serializeConversationMember} from '../../../../../../../../models/serializeConversationMember';
import type {AddPostRequestBody} from './addPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddPostRequestBody(addPostRequestBody: AddPostRequestBody | undefined = {} as AddPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "values": n => { addPostRequestBody.values = n.getCollectionOfObjectValues<ConversationMember>(createConversationMemberFromDiscriminatorValue); },
    }
}
