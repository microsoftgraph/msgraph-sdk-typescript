import {deserializeIntoChannelUnsetAsFavoriteByDefaultEventMessageDetail} from './deserializeIntoChannelUnsetAsFavoriteByDefaultEventMessageDetail';
import {ChannelUnsetAsFavoriteByDefaultEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChannelUnsetAsFavoriteByDefaultEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChannelUnsetAsFavoriteByDefaultEventMessageDetail;
}
