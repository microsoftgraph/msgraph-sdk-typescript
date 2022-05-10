import {ChatInfoImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChatInfoImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChatInfoImpl();
}
