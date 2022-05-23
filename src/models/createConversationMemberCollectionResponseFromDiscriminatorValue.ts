import {ConversationMemberCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConversationMemberCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConversationMemberCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConversationMemberCollectionResponseImpl();
}
