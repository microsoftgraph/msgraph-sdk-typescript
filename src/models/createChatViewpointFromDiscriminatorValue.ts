import { deserializeIntoChatViewpoint } from './deserializeIntoChatViewpoint';
import { type ChatViewpoint } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createChatViewpointFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChatViewpoint;
}
