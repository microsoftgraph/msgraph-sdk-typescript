import { deserializeIntoChannelUnsetAsFavoriteByDefaultEventMessageDetail } from './deserializeIntoChannelUnsetAsFavoriteByDefaultEventMessageDetail';
import { type ChannelUnsetAsFavoriteByDefaultEventMessageDetail } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createChannelUnsetAsFavoriteByDefaultEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoChannelUnsetAsFavoriteByDefaultEventMessageDetail;
}
