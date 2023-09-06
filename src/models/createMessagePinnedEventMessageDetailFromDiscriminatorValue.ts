import { deserializeIntoMessagePinnedEventMessageDetail } from './deserializeIntoMessagePinnedEventMessageDetail';
import { type MessagePinnedEventMessageDetail } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMessagePinnedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMessagePinnedEventMessageDetail;
}
