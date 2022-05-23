import {ConversationCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConversationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConversationCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConversationCollectionResponseImpl();
}
