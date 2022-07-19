import {AccessReviewInactiveUsersQueryScope, AccessReviewQueryScope} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewQueryScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewQueryScope {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.accessReviewInactiveUsersQueryScope":
                    return new AccessReviewInactiveUsersQueryScope();
            }
        }
    }
    return new AccessReviewQueryScope();
}
