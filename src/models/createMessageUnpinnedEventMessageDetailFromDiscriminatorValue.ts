import {deserializeIntoMessageUnpinnedEventMessageDetail} from './deserializeIntoMessageUnpinnedEventMessageDetail';
import {MessageUnpinnedEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMessageUnpinnedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMessageUnpinnedEventMessageDetail;
}
