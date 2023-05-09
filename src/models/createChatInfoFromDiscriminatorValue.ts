import {deserializeIntoChatInfo} from './deserializeIntoChatInfo';
import {ChatInfo} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChatInfo;
}
