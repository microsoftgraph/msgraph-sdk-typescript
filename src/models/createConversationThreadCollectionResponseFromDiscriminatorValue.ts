import {deserializeIntoConversationThreadCollectionResponse} from './deserializeIntoConversationThreadCollectionResponse';
import {ConversationThreadCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConversationThreadCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConversationThreadCollectionResponse;
}
