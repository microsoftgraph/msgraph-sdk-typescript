import { deserializeIntoTeamMembersNotificationRecipient } from './deserializeIntoTeamMembersNotificationRecipient';
import { type TeamMembersNotificationRecipient } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTeamMembersNotificationRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamMembersNotificationRecipient;
}
