import { type ConversationMember } from './conversationMember';
import { createConversationMemberFromDiscriminatorValue } from './createConversationMemberFromDiscriminatorValue';
import { deserializeIntoTeamInfo } from './deserializeIntoTeamInfo';
import { serializeConversationMember } from './serializeConversationMember';
import { type SharedWithChannelTeamInfo } from './sharedWithChannelTeamInfo';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSharedWithChannelTeamInfo(sharedWithChannelTeamInfo: SharedWithChannelTeamInfo | undefined = {} as SharedWithChannelTeamInfo) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTeamInfo(sharedWithChannelTeamInfo),
        "allowedMembers": n => { sharedWithChannelTeamInfo.allowedMembers = n.getCollectionOfObjectValues<ConversationMember>(createConversationMemberFromDiscriminatorValue); },
        "isHostTeam": n => { sharedWithChannelTeamInfo.isHostTeam = n.getBooleanValue(); },
    }
}
