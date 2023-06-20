import {ChannelSetAsFavoriteByDefaultEventMessageDetail} from './channelSetAsFavoriteByDefaultEventMessageDetail';
import {IdentitySet} from './identitySet';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChannelSetAsFavoriteByDefaultEventMessageDetail(channelSetAsFavoriteByDefaultEventMessageDetail: ChannelSetAsFavoriteByDefaultEventMessageDetail | undefined = {} as ChannelSetAsFavoriteByDefaultEventMessageDetail, writer: SerializationWriter) : void {
        serializeEventMessageDetail(writer, channelSetAsFavoriteByDefaultEventMessageDetail)
        writer.writeStringValue("channelId", channelSetAsFavoriteByDefaultEventMessageDetail.channelId);
        writer.writeObjectValue<IdentitySet>("initiator", channelSetAsFavoriteByDefaultEventMessageDetail.initiator, serializeIdentitySet);
}
