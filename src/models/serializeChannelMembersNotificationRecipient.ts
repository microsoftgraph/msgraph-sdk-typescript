import {ChannelMembersNotificationRecipient} from './channelMembersNotificationRecipient';
import {serializeTeamworkNotificationRecipient} from './serializeTeamworkNotificationRecipient';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeChannelMembersNotificationRecipient(channelMembersNotificationRecipient: ChannelMembersNotificationRecipient | undefined = {} as ChannelMembersNotificationRecipient, writer: SerializationWriter) : void {
        serializeTeamworkNotificationRecipient(writer, channelMembersNotificationRecipient)
        writer.writeStringValue("channelId", channelMembersNotificationRecipient.channelId);
        writer.writeStringValue("teamId", channelMembersNotificationRecipient.teamId);
}
