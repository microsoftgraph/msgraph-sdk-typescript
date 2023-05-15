import {deserializeIntoChannelSetAsFavoriteByDefaultEventMessageDetail} from './deserializeIntoChannelSetAsFavoriteByDefaultEventMessageDetail';
import {ChannelSetAsFavoriteByDefaultEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChannelSetAsFavoriteByDefaultEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChannelSetAsFavoriteByDefaultEventMessageDetail;
}
