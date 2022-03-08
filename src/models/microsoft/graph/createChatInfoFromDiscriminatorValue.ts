import {ChatInfo} from './chatInfo';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChatInfo {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChatInfo();
}
