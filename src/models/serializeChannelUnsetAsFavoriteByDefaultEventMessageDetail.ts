import { type ChannelUnsetAsFavoriteByDefaultEventMessageDetail } from './channelUnsetAsFavoriteByDefaultEventMessageDetail';
import { type IdentitySet } from './identitySet';
import { serializeEventMessageDetail } from './serializeEventMessageDetail';
import { serializeIdentitySet } from './serializeIdentitySet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeChannelUnsetAsFavoriteByDefaultEventMessageDetail(writer: SerializationWriter, channelUnsetAsFavoriteByDefaultEventMessageDetail: ChannelUnsetAsFavoriteByDefaultEventMessageDetail | undefined = {} as ChannelUnsetAsFavoriteByDefaultEventMessageDetail) : void {
        serializeEventMessageDetail(writer, channelUnsetAsFavoriteByDefaultEventMessageDetail)
        writer.writeStringValue("channelId", channelUnsetAsFavoriteByDefaultEventMessageDetail.channelId);
        writer.writeObjectValue<IdentitySet>("initiator", channelUnsetAsFavoriteByDefaultEventMessageDetail.initiator, serializeIdentitySet);
}
