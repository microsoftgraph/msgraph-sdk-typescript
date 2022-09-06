import {ChannelRenamedEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChannelRenamedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChannelRenamedEventMessageDetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChannelRenamedEventMessageDetail();
}
