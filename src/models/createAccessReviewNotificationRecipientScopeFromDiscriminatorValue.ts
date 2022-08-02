import {AccessReviewNotificationRecipientQueryScope, AccessReviewNotificationRecipientScope} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewNotificationRecipientScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewNotificationRecipientScope {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.accessReviewNotificationRecipientQueryScope":
                    return new AccessReviewNotificationRecipientQueryScope();
            }
        }
    }
    return new AccessReviewNotificationRecipientScope();
}
