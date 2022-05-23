import {TeamworkNotificationRecipientImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkNotificationRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamworkNotificationRecipientImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamworkNotificationRecipientImpl();
}
