import {ChannelAddedEventMessageDetail} from './channelAddedEventMessageDetail';
import {IdentitySet} from './identitySet';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChannelAddedEventMessageDetail(writer: SerializationWriter, channelAddedEventMessageDetail: ChannelAddedEventMessageDetail | undefined = {} as ChannelAddedEventMessageDetail) : void {
        serializeEventMessageDetail(writer, channelAddedEventMessageDetail)
        writer.writeStringValue("channelDisplayName", channelAddedEventMessageDetail.channelDisplayName);
        writer.writeStringValue("channelId", channelAddedEventMessageDetail.channelId);
        writer.writeObjectValue<IdentitySet>("initiator", channelAddedEventMessageDetail.initiator, serializeIdentitySet);
}
