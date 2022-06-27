import {CallEndedEventMessageDetailImpl, CallRecordingEventMessageDetailImpl, CallStartedEventMessageDetailImpl, CallTranscriptEventMessageDetailImpl, ChannelAddedEventMessageDetailImpl, ChannelDeletedEventMessageDetailImpl, ChannelDescriptionUpdatedEventMessageDetailImpl, ChannelRenamedEventMessageDetailImpl, ChannelSetAsFavoriteByDefaultEventMessageDetailImpl, ChannelUnsetAsFavoriteByDefaultEventMessageDetailImpl, ChatRenamedEventMessageDetailImpl, ConversationMemberRoleUpdatedEventMessageDetailImpl, EventMessageDetailImpl, MeetingPolicyUpdatedEventMessageDetailImpl, MembersAddedEventMessageDetailImpl, MembersDeletedEventMessageDetailImpl, MembersJoinedEventMessageDetailImpl, MembersLeftEventMessageDetailImpl, TabUpdatedEventMessageDetailImpl, TeamArchivedEventMessageDetailImpl, TeamCreatedEventMessageDetailImpl, TeamDescriptionUpdatedEventMessageDetailImpl, TeamJoiningDisabledEventMessageDetailImpl, TeamJoiningEnabledEventMessageDetailImpl, TeamRenamedEventMessageDetailImpl, TeamsAppInstalledEventMessageDetailImpl, TeamsAppRemovedEventMessageDetailImpl, TeamsAppUpgradedEventMessageDetailImpl, TeamUnarchivedEventMessageDetailImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : EventMessageDetailImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.callEndedEventMessageDetail":
                    return new CallEndedEventMessageDetailImpl();
                case "#microsoft.graph.callRecordingEventMessageDetail":
                    return new CallRecordingEventMessageDetailImpl();
                case "#microsoft.graph.callStartedEventMessageDetail":
                    return new CallStartedEventMessageDetailImpl();
                case "#microsoft.graph.callTranscriptEventMessageDetail":
                    return new CallTranscriptEventMessageDetailImpl();
                case "#microsoft.graph.channelAddedEventMessageDetail":
                    return new ChannelAddedEventMessageDetailImpl();
                case "#microsoft.graph.channelDeletedEventMessageDetail":
                    return new ChannelDeletedEventMessageDetailImpl();
                case "#microsoft.graph.channelDescriptionUpdatedEventMessageDetail":
                    return new ChannelDescriptionUpdatedEventMessageDetailImpl();
                case "#microsoft.graph.channelRenamedEventMessageDetail":
                    return new ChannelRenamedEventMessageDetailImpl();
                case "#microsoft.graph.channelSetAsFavoriteByDefaultEventMessageDetail":
                    return new ChannelSetAsFavoriteByDefaultEventMessageDetailImpl();
                case "#microsoft.graph.channelUnsetAsFavoriteByDefaultEventMessageDetail":
                    return new ChannelUnsetAsFavoriteByDefaultEventMessageDetailImpl();
                case "#microsoft.graph.chatRenamedEventMessageDetail":
                    return new ChatRenamedEventMessageDetailImpl();
                case "#microsoft.graph.conversationMemberRoleUpdatedEventMessageDetail":
                    return new ConversationMemberRoleUpdatedEventMessageDetailImpl();
                case "#microsoft.graph.meetingPolicyUpdatedEventMessageDetail":
                    return new MeetingPolicyUpdatedEventMessageDetailImpl();
                case "#microsoft.graph.membersAddedEventMessageDetail":
                    return new MembersAddedEventMessageDetailImpl();
                case "#microsoft.graph.membersDeletedEventMessageDetail":
                    return new MembersDeletedEventMessageDetailImpl();
                case "#microsoft.graph.membersJoinedEventMessageDetail":
                    return new MembersJoinedEventMessageDetailImpl();
                case "#microsoft.graph.membersLeftEventMessageDetail":
                    return new MembersLeftEventMessageDetailImpl();
                case "#microsoft.graph.tabUpdatedEventMessageDetail":
                    return new TabUpdatedEventMessageDetailImpl();
                case "#microsoft.graph.teamArchivedEventMessageDetail":
                    return new TeamArchivedEventMessageDetailImpl();
                case "#microsoft.graph.teamCreatedEventMessageDetail":
                    return new TeamCreatedEventMessageDetailImpl();
                case "#microsoft.graph.teamDescriptionUpdatedEventMessageDetail":
                    return new TeamDescriptionUpdatedEventMessageDetailImpl();
                case "#microsoft.graph.teamJoiningDisabledEventMessageDetail":
                    return new TeamJoiningDisabledEventMessageDetailImpl();
                case "#microsoft.graph.teamJoiningEnabledEventMessageDetail":
                    return new TeamJoiningEnabledEventMessageDetailImpl();
                case "#microsoft.graph.teamRenamedEventMessageDetail":
                    return new TeamRenamedEventMessageDetailImpl();
                case "#microsoft.graph.teamsAppInstalledEventMessageDetail":
                    return new TeamsAppInstalledEventMessageDetailImpl();
                case "#microsoft.graph.teamsAppRemovedEventMessageDetail":
                    return new TeamsAppRemovedEventMessageDetailImpl();
                case "#microsoft.graph.teamsAppUpgradedEventMessageDetail":
                    return new TeamsAppUpgradedEventMessageDetailImpl();
                case "#microsoft.graph.teamUnarchivedEventMessageDetail":
                    return new TeamUnarchivedEventMessageDetailImpl();
            }
        }
    }
    return new EventMessageDetailImpl();
}
