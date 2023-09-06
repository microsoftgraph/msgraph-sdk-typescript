import { type ChannelMembersNotificationRecipient } from './channelMembersNotificationRecipient';
import { deserializeIntoTeamworkNotificationRecipient } from './deserializeIntoTeamworkNotificationRecipient';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoChannelMembersNotificationRecipient(channelMembersNotificationRecipient: ChannelMembersNotificationRecipient | undefined = {} as ChannelMembersNotificationRecipient) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTeamworkNotificationRecipient(channelMembersNotificationRecipient),
        "channelId": n => { channelMembersNotificationRecipient.channelId = n.getStringValue(); },
        "teamId": n => { channelMembersNotificationRecipient.teamId = n.getStringValue(); },
    }
}
