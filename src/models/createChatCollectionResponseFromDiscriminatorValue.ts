import {deserializeIntoChatCollectionResponse} from './deserializeIntoChatCollectionResponse';
import {ChatCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChatCollectionResponse;
}
