import { type ChannelRenamedEventMessageDetail } from './channelRenamedEventMessageDetail';
import { type IdentitySet } from './identitySet';
import { serializeEventMessageDetail } from './serializeEventMessageDetail';
import { serializeIdentitySet } from './serializeIdentitySet';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeChannelRenamedEventMessageDetail(writer: SerializationWriter, channelRenamedEventMessageDetail: ChannelRenamedEventMessageDetail | undefined = {} as ChannelRenamedEventMessageDetail) : void {
        serializeEventMessageDetail(writer, channelRenamedEventMessageDetail)
        writer.writeStringValue("channelDisplayName", channelRenamedEventMessageDetail.channelDisplayName);
        writer.writeStringValue("channelId", channelRenamedEventMessageDetail.channelId);
        writer.writeObjectValue<IdentitySet>("initiator", channelRenamedEventMessageDetail.initiator, serializeIdentitySet);
}
