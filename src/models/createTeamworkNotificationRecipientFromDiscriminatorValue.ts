import {deserializeIntoAadUserNotificationRecipient} from './deserializeIntoAadUserNotificationRecipient';
import {deserializeIntoChannelMembersNotificationRecipient} from './deserializeIntoChannelMembersNotificationRecipient';
import {deserializeIntoChatMembersNotificationRecipient} from './deserializeIntoChatMembersNotificationRecipient';
import {deserializeIntoTeamMembersNotificationRecipient} from './deserializeIntoTeamMembersNotificationRecipient';
import {deserializeIntoTeamworkNotificationRecipient} from './deserializeIntoTeamworkNotificationRecipient';
import {AadUserNotificationRecipient, ChannelMembersNotificationRecipient, ChatMembersNotificationRecipient, TeamMembersNotificationRecipient, TeamworkNotificationRecipient} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkNotificationRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.aadUserNotificationRecipient":
                    return deserializeIntoAadUserNotificationRecipient;
                case "#microsoft.graph.channelMembersNotificationRecipient":
                    return deserializeIntoChannelMembersNotificationRecipient;
                case "#microsoft.graph.chatMembersNotificationRecipient":
                    return deserializeIntoChatMembersNotificationRecipient;
                case "#microsoft.graph.teamMembersNotificationRecipient":
                    return deserializeIntoTeamMembersNotificationRecipient;
            }
        }
    }
    return deserializeIntoTeamworkNotificationRecipient;
}
