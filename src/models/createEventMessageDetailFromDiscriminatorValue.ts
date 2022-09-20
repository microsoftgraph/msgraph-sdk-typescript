import {CallEndedEventMessageDetail, CallRecordingEventMessageDetail, CallStartedEventMessageDetail, CallTranscriptEventMessageDetail, ChannelAddedEventMessageDetail, ChannelDeletedEventMessageDetail, ChannelDescriptionUpdatedEventMessageDetail, ChannelRenamedEventMessageDetail, ChannelSetAsFavoriteByDefaultEventMessageDetail, ChannelUnsetAsFavoriteByDefaultEventMessageDetail, ChatRenamedEventMessageDetail, ConversationMemberRoleUpdatedEventMessageDetail, EventMessageDetail, MeetingPolicyUpdatedEventMessageDetail, MembersAddedEventMessageDetail, MembersDeletedEventMessageDetail, MembersJoinedEventMessageDetail, MembersLeftEventMessageDetail, MessagePinnedEventMessageDetail, MessageUnpinnedEventMessageDetail, TabUpdatedEventMessageDetail, TeamArchivedEventMessageDetail, TeamCreatedEventMessageDetail, TeamDescriptionUpdatedEventMessageDetail, TeamJoiningDisabledEventMessageDetail, TeamJoiningEnabledEventMessageDetail, TeamRenamedEventMessageDetail, TeamsAppInstalledEventMessageDetail, TeamsAppRemovedEventMessageDetail, TeamsAppUpgradedEventMessageDetail, TeamUnarchivedEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : EventMessageDetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.callEndedEventMessageDetail":
                    return new CallEndedEventMessageDetail();
                case "#microsoft.graph.callRecordingEventMessageDetail":
                    return new CallRecordingEventMessageDetail();
                case "#microsoft.graph.callStartedEventMessageDetail":
                    return new CallStartedEventMessageDetail();
                case "#microsoft.graph.callTranscriptEventMessageDetail":
                    return new CallTranscriptEventMessageDetail();
                case "#microsoft.graph.channelAddedEventMessageDetail":
                    return new ChannelAddedEventMessageDetail();
                case "#microsoft.graph.channelDeletedEventMessageDetail":
                    return new ChannelDeletedEventMessageDetail();
                case "#microsoft.graph.channelDescriptionUpdatedEventMessageDetail":
                    return new ChannelDescriptionUpdatedEventMessageDetail();
                case "#microsoft.graph.channelRenamedEventMessageDetail":
                    return new ChannelRenamedEventMessageDetail();
                case "#microsoft.graph.channelSetAsFavoriteByDefaultEventMessageDetail":
                    return new ChannelSetAsFavoriteByDefaultEventMessageDetail();
                case "#microsoft.graph.channelUnsetAsFavoriteByDefaultEventMessageDetail":
                    return new ChannelUnsetAsFavoriteByDefaultEventMessageDetail();
                case "#microsoft.graph.chatRenamedEventMessageDetail":
                    return new ChatRenamedEventMessageDetail();
                case "#microsoft.graph.conversationMemberRoleUpdatedEventMessageDetail":
                    return new ConversationMemberRoleUpdatedEventMessageDetail();
                case "#microsoft.graph.meetingPolicyUpdatedEventMessageDetail":
                    return new MeetingPolicyUpdatedEventMessageDetail();
                case "#microsoft.graph.membersAddedEventMessageDetail":
                    return new MembersAddedEventMessageDetail();
                case "#microsoft.graph.membersDeletedEventMessageDetail":
                    return new MembersDeletedEventMessageDetail();
                case "#microsoft.graph.membersJoinedEventMessageDetail":
                    return new MembersJoinedEventMessageDetail();
                case "#microsoft.graph.membersLeftEventMessageDetail":
                    return new MembersLeftEventMessageDetail();
                case "#microsoft.graph.messagePinnedEventMessageDetail":
                    return new MessagePinnedEventMessageDetail();
                case "#microsoft.graph.messageUnpinnedEventMessageDetail":
                    return new MessageUnpinnedEventMessageDetail();
                case "#microsoft.graph.tabUpdatedEventMessageDetail":
                    return new TabUpdatedEventMessageDetail();
                case "#microsoft.graph.teamArchivedEventMessageDetail":
                    return new TeamArchivedEventMessageDetail();
                case "#microsoft.graph.teamCreatedEventMessageDetail":
                    return new TeamCreatedEventMessageDetail();
                case "#microsoft.graph.teamDescriptionUpdatedEventMessageDetail":
                    return new TeamDescriptionUpdatedEventMessageDetail();
                case "#microsoft.graph.teamJoiningDisabledEventMessageDetail":
                    return new TeamJoiningDisabledEventMessageDetail();
                case "#microsoft.graph.teamJoiningEnabledEventMessageDetail":
                    return new TeamJoiningEnabledEventMessageDetail();
                case "#microsoft.graph.teamRenamedEventMessageDetail":
                    return new TeamRenamedEventMessageDetail();
                case "#microsoft.graph.teamsAppInstalledEventMessageDetail":
                    return new TeamsAppInstalledEventMessageDetail();
                case "#microsoft.graph.teamsAppRemovedEventMessageDetail":
                    return new TeamsAppRemovedEventMessageDetail();
                case "#microsoft.graph.teamsAppUpgradedEventMessageDetail":
                    return new TeamsAppUpgradedEventMessageDetail();
                case "#microsoft.graph.teamUnarchivedEventMessageDetail":
                    return new TeamUnarchivedEventMessageDetail();
            }
        }
    }
    return new EventMessageDetail();
}
