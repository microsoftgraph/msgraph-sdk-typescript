import {ConversationMember} from './conversationMember';
import {createConversationMemberFromDiscriminatorValue} from './createConversationMemberFromDiscriminatorValue';
import {deserializeIntoTeamInfo} from './deserializeIntoTeamInfo';
import {serializeConversationMember} from './serializeConversationMember';
import {SharedWithChannelTeamInfo} from './sharedWithChannelTeamInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSharedWithChannelTeamInfo(sharedWithChannelTeamInfo: SharedWithChannelTeamInfo | undefined = {} as SharedWithChannelTeamInfo) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTeamInfo(sharedWithChannelTeamInfo),
        "allowedMembers": n => { sharedWithChannelTeamInfo.allowedMembers = n.getCollectionOfObjectValues<ConversationMember>(createConversationMemberFromDiscriminatorValue); },
        "isHostTeam": n => { sharedWithChannelTeamInfo.isHostTeam = n.getBooleanValue(); },
    }
}
