import {ChatCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChatCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChatCollectionResponseImpl();
}
