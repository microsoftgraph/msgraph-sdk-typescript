import type {ChannelSetAsFavoriteByDefaultEventMessageDetail} from './channelSetAsFavoriteByDefaultEventMessageDetail';
import type {IdentitySet} from './identitySet';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChannelSetAsFavoriteByDefaultEventMessageDetail(writer: SerializationWriter, channelSetAsFavoriteByDefaultEventMessageDetail: ChannelSetAsFavoriteByDefaultEventMessageDetail | undefined = {} as ChannelSetAsFavoriteByDefaultEventMessageDetail) : void {
        serializeEventMessageDetail(writer, channelSetAsFavoriteByDefaultEventMessageDetail)
        writer.writeStringValue("channelId", channelSetAsFavoriteByDefaultEventMessageDetail.channelId);
        writer.writeObjectValue<IdentitySet>("initiator", channelSetAsFavoriteByDefaultEventMessageDetail.initiator, serializeIdentitySet);
}
