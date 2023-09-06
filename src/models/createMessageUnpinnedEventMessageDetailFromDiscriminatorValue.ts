import { deserializeIntoMessageUnpinnedEventMessageDetail } from './deserializeIntoMessageUnpinnedEventMessageDetail';
import { type MessageUnpinnedEventMessageDetail } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMessageUnpinnedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMessageUnpinnedEventMessageDetail;
}
