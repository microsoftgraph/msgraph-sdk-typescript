import {AadUserNotificationRecipient, TeamworkNotificationRecipient} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkNotificationRecipientFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamworkNotificationRecipient {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.aadUserNotificationRecipient":
                    return new AadUserNotificationRecipient();
            }
        }
    }
    return new TeamworkNotificationRecipient();
}
