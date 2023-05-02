import {deserializeIntoChannelRenamedEventMessageDetail} from './deserializeIntoChannelRenamedEventMessageDetail';
import {ChannelRenamedEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChannelRenamedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChannelRenamedEventMessageDetail;
}
