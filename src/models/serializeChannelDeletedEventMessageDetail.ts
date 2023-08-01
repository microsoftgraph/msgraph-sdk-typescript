import type {ChannelDeletedEventMessageDetail} from './channelDeletedEventMessageDetail';
import type {IdentitySet} from './identitySet';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChannelDeletedEventMessageDetail(writer: SerializationWriter, channelDeletedEventMessageDetail: ChannelDeletedEventMessageDetail | undefined = {} as ChannelDeletedEventMessageDetail) : void {
        serializeEventMessageDetail(writer, channelDeletedEventMessageDetail)
        writer.writeStringValue("channelDisplayName", channelDeletedEventMessageDetail.channelDisplayName);
        writer.writeStringValue("channelId", channelDeletedEventMessageDetail.channelId);
        writer.writeObjectValue<IdentitySet>("initiator", channelDeletedEventMessageDetail.initiator, serializeIdentitySet);
}
