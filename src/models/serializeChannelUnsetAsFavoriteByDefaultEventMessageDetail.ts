import {ChannelUnsetAsFavoriteByDefaultEventMessageDetail} from './channelUnsetAsFavoriteByDefaultEventMessageDetail';
import {IdentitySet} from './identitySet';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChannelUnsetAsFavoriteByDefaultEventMessageDetail(writer: SerializationWriter, channelUnsetAsFavoriteByDefaultEventMessageDetail: ChannelUnsetAsFavoriteByDefaultEventMessageDetail | undefined = {} as ChannelUnsetAsFavoriteByDefaultEventMessageDetail) : void {
        serializeEventMessageDetail(writer, channelUnsetAsFavoriteByDefaultEventMessageDetail)
        writer.writeStringValue("channelId", channelUnsetAsFavoriteByDefaultEventMessageDetail.channelId);
        writer.writeObjectValue<IdentitySet>("initiator", channelUnsetAsFavoriteByDefaultEventMessageDetail.initiator, serializeIdentitySet);
}
