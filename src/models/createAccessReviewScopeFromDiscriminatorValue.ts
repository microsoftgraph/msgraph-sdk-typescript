import {AccessReviewQueryScopeImpl, AccessReviewScopeImpl, PrincipalResourceMembershipsScopeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewScopeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.accessReviewQueryScope":
                    return new AccessReviewQueryScopeImpl();
                case "#microsoft.graph.principalResourceMembershipsScope":
                    return new PrincipalResourceMembershipsScopeImpl();
            }
        }
    }
    return new AccessReviewScopeImpl();
}
