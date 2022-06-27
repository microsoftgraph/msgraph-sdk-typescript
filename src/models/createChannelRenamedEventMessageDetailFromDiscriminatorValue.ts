import {ChannelRenamedEventMessageDetailImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChannelRenamedEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChannelRenamedEventMessageDetailImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChannelRenamedEventMessageDetailImpl();
}
