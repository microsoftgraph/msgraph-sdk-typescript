import {deserializeIntoAccessReviewInactiveUsersQueryScope} from './deserializeIntoAccessReviewInactiveUsersQueryScope';
import {deserializeIntoAccessReviewQueryScope} from './deserializeIntoAccessReviewQueryScope';
import {AccessReviewInactiveUsersQueryScope, AccessReviewQueryScope} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewQueryScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.accessReviewInactiveUsersQueryScope":
                    return deserializeIntoAccessReviewInactiveUsersQueryScope;
            }
        }
    }
    return deserializeIntoAccessReviewQueryScope;
}
