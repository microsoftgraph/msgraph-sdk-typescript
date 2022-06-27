import {AccessReviewInactiveUsersQueryScopeImpl, AccessReviewQueryScopeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewQueryScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewQueryScopeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.accessReviewInactiveUsersQueryScope":
                    return new AccessReviewInactiveUsersQueryScopeImpl();
            }
        }
    }
    return new AccessReviewQueryScopeImpl();
}
