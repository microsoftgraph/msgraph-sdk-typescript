import {ChatViewpoint} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChatViewpointFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChatViewpoint {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChatViewpoint();
}
