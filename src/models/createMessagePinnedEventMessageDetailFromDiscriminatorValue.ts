import {MessagePinnedEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMessagePinnedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : MessagePinnedEventMessageDetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MessagePinnedEventMessageDetail();
}
