import { type ChannelAddedEventMessageDetail } from './channelAddedEventMessageDetail';
import { type IdentitySet } from './identitySet';
import { serializeEventMessageDetail } from './serializeEventMessageDetail';
import { serializeIdentitySet } from './serializeIdentitySet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeChannelAddedEventMessageDetail(writer: SerializationWriter, channelAddedEventMessageDetail: ChannelAddedEventMessageDetail | undefined = {} as ChannelAddedEventMessageDetail) : void {
        serializeEventMessageDetail(writer, channelAddedEventMessageDetail)
        writer.writeStringValue("channelDisplayName", channelAddedEventMessageDetail.channelDisplayName);
        writer.writeStringValue("channelId", channelAddedEventMessageDetail.channelId);
        writer.writeObjectValue<IdentitySet>("initiator", channelAddedEventMessageDetail.initiator, serializeIdentitySet);
}
