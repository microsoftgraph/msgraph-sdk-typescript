import {ConversationThreadCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConversationThreadCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConversationThreadCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConversationThreadCollectionResponseImpl();
}
