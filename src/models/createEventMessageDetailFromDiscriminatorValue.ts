import {deserializeIntoCallEndedEventMessageDetail} from './deserializeIntoCallEndedEventMessageDetail';
import {deserializeIntoCallRecordingEventMessageDetail} from './deserializeIntoCallRecordingEventMessageDetail';
import {deserializeIntoCallStartedEventMessageDetail} from './deserializeIntoCallStartedEventMessageDetail';
import {deserializeIntoCallTranscriptEventMessageDetail} from './deserializeIntoCallTranscriptEventMessageDetail';
import {deserializeIntoChannelAddedEventMessageDetail} from './deserializeIntoChannelAddedEventMessageDetail';
import {deserializeIntoChannelDeletedEventMessageDetail} from './deserializeIntoChannelDeletedEventMessageDetail';
import {deserializeIntoChannelDescriptionUpdatedEventMessageDetail} from './deserializeIntoChannelDescriptionUpdatedEventMessageDetail';
import {deserializeIntoChannelRenamedEventMessageDetail} from './deserializeIntoChannelRenamedEventMessageDetail';
import {deserializeIntoChannelSetAsFavoriteByDefaultEventMessageDetail} from './deserializeIntoChannelSetAsFavoriteByDefaultEventMessageDetail';
import {deserializeIntoChannelUnsetAsFavoriteByDefaultEventMessageDetail} from './deserializeIntoChannelUnsetAsFavoriteByDefaultEventMessageDetail';
import {deserializeIntoChatRenamedEventMessageDetail} from './deserializeIntoChatRenamedEventMessageDetail';
import {deserializeIntoConversationMemberRoleUpdatedEventMessageDetail} from './deserializeIntoConversationMemberRoleUpdatedEventMessageDetail';
import {deserializeIntoEventMessageDetail} from './deserializeIntoEventMessageDetail';
import {deserializeIntoMeetingPolicyUpdatedEventMessageDetail} from './deserializeIntoMeetingPolicyUpdatedEventMessageDetail';
import {deserializeIntoMembersAddedEventMessageDetail} from './deserializeIntoMembersAddedEventMessageDetail';
import {deserializeIntoMembersDeletedEventMessageDetail} from './deserializeIntoMembersDeletedEventMessageDetail';
import {deserializeIntoMembersJoinedEventMessageDetail} from './deserializeIntoMembersJoinedEventMessageDetail';
import {deserializeIntoMembersLeftEventMessageDetail} from './deserializeIntoMembersLeftEventMessageDetail';
import {deserializeIntoMessagePinnedEventMessageDetail} from './deserializeIntoMessagePinnedEventMessageDetail';
import {deserializeIntoMessageUnpinnedEventMessageDetail} from './deserializeIntoMessageUnpinnedEventMessageDetail';
import {deserializeIntoTabUpdatedEventMessageDetail} from './deserializeIntoTabUpdatedEventMessageDetail';
import {deserializeIntoTeamArchivedEventMessageDetail} from './deserializeIntoTeamArchivedEventMessageDetail';
import {deserializeIntoTeamCreatedEventMessageDetail} from './deserializeIntoTeamCreatedEventMessageDetail';
import {deserializeIntoTeamDescriptionUpdatedEventMessageDetail} from './deserializeIntoTeamDescriptionUpdatedEventMessageDetail';
import {deserializeIntoTeamJoiningDisabledEventMessageDetail} from './deserializeIntoTeamJoiningDisabledEventMessageDetail';
import {deserializeIntoTeamJoiningEnabledEventMessageDetail} from './deserializeIntoTeamJoiningEnabledEventMessageDetail';
import {deserializeIntoTeamRenamedEventMessageDetail} from './deserializeIntoTeamRenamedEventMessageDetail';
import {deserializeIntoTeamsAppInstalledEventMessageDetail} from './deserializeIntoTeamsAppInstalledEventMessageDetail';
import {deserializeIntoTeamsAppRemovedEventMessageDetail} from './deserializeIntoTeamsAppRemovedEventMessageDetail';
import {deserializeIntoTeamsAppUpgradedEventMessageDetail} from './deserializeIntoTeamsAppUpgradedEventMessageDetail';
import {deserializeIntoTeamUnarchivedEventMessageDetail} from './deserializeIntoTeamUnarchivedEventMessageDetail';
import {CallEndedEventMessageDetail, CallRecordingEventMessageDetail, CallStartedEventMessageDetail, CallTranscriptEventMessageDetail, ChannelAddedEventMessageDetail, ChannelDeletedEventMessageDetail, ChannelDescriptionUpdatedEventMessageDetail, ChannelRenamedEventMessageDetail, ChannelSetAsFavoriteByDefaultEventMessageDetail, ChannelUnsetAsFavoriteByDefaultEventMessageDetail, ChatRenamedEventMessageDetail, ConversationMemberRoleUpdatedEventMessageDetail, EventMessageDetail, MeetingPolicyUpdatedEventMessageDetail, MembersAddedEventMessageDetail, MembersDeletedEventMessageDetail, MembersJoinedEventMessageDetail, MembersLeftEventMessageDetail, MessagePinnedEventMessageDetail, MessageUnpinnedEventMessageDetail, TabUpdatedEventMessageDetail, TeamArchivedEventMessageDetail, TeamCreatedEventMessageDetail, TeamDescriptionUpdatedEventMessageDetail, TeamJoiningDisabledEventMessageDetail, TeamJoiningEnabledEventMessageDetail, TeamRenamedEventMessageDetail, TeamsAppInstalledEventMessageDetail, TeamsAppRemovedEventMessageDetail, TeamsAppUpgradedEventMessageDetail, TeamUnarchivedEventMessageDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEventMessageDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.callEndedEventMessageDetail":
                    return deserializeIntoCallEndedEventMessageDetail;
                case "#microsoft.graph.callRecordingEventMessageDetail":
                    return deserializeIntoCallRecordingEventMessageDetail;
                case "#microsoft.graph.callStartedEventMessageDetail":
                    return deserializeIntoCallStartedEventMessageDetail;
                case "#microsoft.graph.callTranscriptEventMessageDetail":
                    return deserializeIntoCallTranscriptEventMessageDetail;
                case "#microsoft.graph.channelAddedEventMessageDetail":
                    return deserializeIntoChannelAddedEventMessageDetail;
                case "#microsoft.graph.channelDeletedEventMessageDetail":
                    return deserializeIntoChannelDeletedEventMessageDetail;
                case "#microsoft.graph.channelDescriptionUpdatedEventMessageDetail":
                    return deserializeIntoChannelDescriptionUpdatedEventMessageDetail;
                case "#microsoft.graph.channelRenamedEventMessageDetail":
                    return deserializeIntoChannelRenamedEventMessageDetail;
                case "#microsoft.graph.channelSetAsFavoriteByDefaultEventMessageDetail":
                    return deserializeIntoChannelSetAsFavoriteByDefaultEventMessageDetail;
                case "#microsoft.graph.channelUnsetAsFavoriteByDefaultEventMessageDetail":
                    return deserializeIntoChannelUnsetAsFavoriteByDefaultEventMessageDetail;
                case "#microsoft.graph.chatRenamedEventMessageDetail":
                    return deserializeIntoChatRenamedEventMessageDetail;
                case "#microsoft.graph.conversationMemberRoleUpdatedEventMessageDetail":
                    return deserializeIntoConversationMemberRoleUpdatedEventMessageDetail;
                case "#microsoft.graph.meetingPolicyUpdatedEventMessageDetail":
                    return deserializeIntoMeetingPolicyUpdatedEventMessageDetail;
                case "#microsoft.graph.membersAddedEventMessageDetail":
                    return deserializeIntoMembersAddedEventMessageDetail;
                case "#microsoft.graph.membersDeletedEventMessageDetail":
                    return deserializeIntoMembersDeletedEventMessageDetail;
                case "#microsoft.graph.membersJoinedEventMessageDetail":
                    return deserializeIntoMembersJoinedEventMessageDetail;
                case "#microsoft.graph.membersLeftEventMessageDetail":
                    return deserializeIntoMembersLeftEventMessageDetail;
                case "#microsoft.graph.messagePinnedEventMessageDetail":
                    return deserializeIntoMessagePinnedEventMessageDetail;
                case "#microsoft.graph.messageUnpinnedEventMessageDetail":
                    return deserializeIntoMessageUnpinnedEventMessageDetail;
                case "#microsoft.graph.tabUpdatedEventMessageDetail":
                    return deserializeIntoTabUpdatedEventMessageDetail;
                case "#microsoft.graph.teamArchivedEventMessageDetail":
                    return deserializeIntoTeamArchivedEventMessageDetail;
                case "#microsoft.graph.teamCreatedEventMessageDetail":
                    return deserializeIntoTeamCreatedEventMessageDetail;
                case "#microsoft.graph.teamDescriptionUpdatedEventMessageDetail":
                    return deserializeIntoTeamDescriptionUpdatedEventMessageDetail;
                case "#microsoft.graph.teamJoiningDisabledEventMessageDetail":
                    return deserializeIntoTeamJoiningDisabledEventMessageDetail;
                case "#microsoft.graph.teamJoiningEnabledEventMessageDetail":
                    return deserializeIntoTeamJoiningEnabledEventMessageDetail;
                case "#microsoft.graph.teamRenamedEventMessageDetail":
                    return deserializeIntoTeamRenamedEventMessageDetail;
                case "#microsoft.graph.teamsAppInstalledEventMessageDetail":
                    return deserializeIntoTeamsAppInstalledEventMessageDetail;
                case "#microsoft.graph.teamsAppRemovedEventMessageDetail":
                    return deserializeIntoTeamsAppRemovedEventMessageDetail;
                case "#microsoft.graph.teamsAppUpgradedEventMessageDetail":
                    return deserializeIntoTeamsAppUpgradedEventMessageDetail;
                case "#microsoft.graph.teamUnarchivedEventMessageDetail":
                    return deserializeIntoTeamUnarchivedEventMessageDetail;
            }
        }
    }
    return deserializeIntoEventMessageDetail;
}
