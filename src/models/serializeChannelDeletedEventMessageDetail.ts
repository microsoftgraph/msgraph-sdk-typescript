import {ChannelDeletedEventMessageDetail} from './channelDeletedEventMessageDetail';
import {IdentitySet} from './identitySet';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChannelDeletedEventMessageDetail(channelDeletedEventMessageDetail: ChannelDeletedEventMessageDetail | undefined = {} as ChannelDeletedEventMessageDetail, writer: SerializationWriter) : void {
        serializeEventMessageDetail(writer, channelDeletedEventMessageDetail)
        writer.writeStringValue("channelDisplayName", channelDeletedEventMessageDetail.channelDisplayName);
        writer.writeStringValue("channelId", channelDeletedEventMessageDetail.channelId);
        writer.writeObjectValue<IdentitySet>("initiator", channelDeletedEventMessageDetail.initiator, serializeIdentitySet);
}
