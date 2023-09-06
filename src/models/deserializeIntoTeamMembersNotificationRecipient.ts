import { deserializeIntoTeamworkNotificationRecipient } from './deserializeIntoTeamworkNotificationRecipient';
import { type TeamMembersNotificationRecipient } from './teamMembersNotificationRecipient';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTeamMembersNotificationRecipient(teamMembersNotificationRecipient: TeamMembersNotificationRecipient | undefined = {} as TeamMembersNotificationRecipient) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoTeamworkNotificationRecipient(teamMembersNotificationRecipient),
        "teamId": n => { teamMembersNotificationRecipient.teamId = n.getStringValue(); },
    }
}
