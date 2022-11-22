import {TeamMembersNotificationRecipient} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamMembersNotificationRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamMembersNotificationRecipient {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamMembersNotificationRecipient();
}
