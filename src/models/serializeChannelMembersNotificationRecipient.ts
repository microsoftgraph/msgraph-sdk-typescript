import { type ChannelMembersNotificationRecipient } from './channelMembersNotificationRecipient';
import { serializeTeamworkNotificationRecipient } from './serializeTeamworkNotificationRecipient';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeChannelMembersNotificationRecipient(writer: SerializationWriter, channelMembersNotificationRecipient: ChannelMembersNotificationRecipient | undefined = {} as ChannelMembersNotificationRecipient) : void {
        serializeTeamworkNotificationRecipient(writer, channelMembersNotificationRecipient)
        writer.writeStringValue("channelId", channelMembersNotificationRecipient.channelId);
        writer.writeStringValue("teamId", channelMembersNotificationRecipient.teamId);
}
