import {ChatImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChatImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChatImpl();
}
