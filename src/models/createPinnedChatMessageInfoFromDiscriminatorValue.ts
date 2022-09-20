import {PinnedChatMessageInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPinnedChatMessageInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : PinnedChatMessageInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PinnedChatMessageInfo();
}
