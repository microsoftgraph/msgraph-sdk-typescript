import {deserializeIntoChatMessageHostedContentCollectionResponse} from './deserializeIntoChatMessageHostedContentCollectionResponse';
import {ChatMessageHostedContentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatMessageHostedContentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChatMessageHostedContentCollectionResponse;
}
