import {deserializeIntoTeamMembersNotificationRecipient} from './deserializeIntoTeamMembersNotificationRecipient';
import {TeamMembersNotificationRecipient} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamMembersNotificationRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamMembersNotificationRecipient;
}
