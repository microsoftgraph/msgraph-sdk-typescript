import type {ChannelDescriptionUpdatedEventMessageDetail} from './channelDescriptionUpdatedEventMessageDetail';
import type {IdentitySet} from './identitySet';
import {serializeEventMessageDetail} from './serializeEventMessageDetail';
import {serializeIdentitySet} from './serializeIdentitySet';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChannelDescriptionUpdatedEventMessageDetail(writer: SerializationWriter, channelDescriptionUpdatedEventMessageDetail: ChannelDescriptionUpdatedEventMessageDetail | undefined = {} as ChannelDescriptionUpdatedEventMessageDetail) : void {
        serializeEventMessageDetail(writer, channelDescriptionUpdatedEventMessageDetail)
        writer.writeStringValue("channelDescription", channelDescriptionUpdatedEventMessageDetail.channelDescription);
        writer.writeStringValue("channelId", channelDescriptionUpdatedEventMessageDetail.channelId);
        writer.writeObjectValue<IdentitySet>("initiator", channelDescriptionUpdatedEventMessageDetail.initiator, serializeIdentitySet);
}
