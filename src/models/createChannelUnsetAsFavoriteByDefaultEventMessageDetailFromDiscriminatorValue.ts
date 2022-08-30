import {ChannelUnsetAsFavoriteByDefaultEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChannelUnsetAsFavoriteByDefaultEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChannelUnsetAsFavoriteByDefaultEventMessageDetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChannelUnsetAsFavoriteByDefaultEventMessageDetail();
}
