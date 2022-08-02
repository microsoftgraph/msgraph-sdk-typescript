import {AccessReviewInactiveUsersQueryScope, AccessReviewQueryScope, AccessReviewScope, PrincipalResourceMembershipsScope} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewScope {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.accessReviewInactiveUsersQueryScope":
                    return new AccessReviewInactiveUsersQueryScope();
                case "#microsoft.graph.accessReviewQueryScope":
                    return new AccessReviewQueryScope();
                case "#microsoft.graph.principalResourceMembershipsScope":
                    return new PrincipalResourceMembershipsScope();
            }
        }
    }
    return new AccessReviewScope();
}
