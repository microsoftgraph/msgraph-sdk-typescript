import {ChannelRenamedEventMessageDetail} from './channelRenamedEventMessageDetail';
import {IdentitySet} from './identitySet';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChannelRenamedEventMessageDetail(channelRenamedEventMessageDetail: ChannelRenamedEventMessageDetail | undefined = {} as ChannelRenamedEventMessageDetail, writer: SerializationWriter) : void {
        serializeEventMessageDetail(writer, channelRenamedEventMessageDetail)
        writer.writeStringValue("channelDisplayName", channelRenamedEventMessageDetail.channelDisplayName);
        writer.writeStringValue("channelId", channelRenamedEventMessageDetail.channelId);
        writer.writeObjectValue<IdentitySet>("initiator", channelRenamedEventMessageDetail.initiator, serializeIdentitySet);
}
