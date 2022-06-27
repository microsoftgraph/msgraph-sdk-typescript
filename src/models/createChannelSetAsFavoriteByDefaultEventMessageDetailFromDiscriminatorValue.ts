import {ChannelSetAsFavoriteByDefaultEventMessageDetailImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChannelSetAsFavoriteByDefaultEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChannelSetAsFavoriteByDefaultEventMessageDetailImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChannelSetAsFavoriteByDefaultEventMessageDetailImpl();
}
