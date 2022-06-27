import {AadUserNotificationRecipientImpl, TeamworkNotificationRecipientImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkNotificationRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamworkNotificationRecipientImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.aadUserNotificationRecipient":
                    return new AadUserNotificationRecipientImpl();
            }
        }
    }
    return new TeamworkNotificationRecipientImpl();
}
