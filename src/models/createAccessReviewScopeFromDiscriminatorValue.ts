import {deserializeIntoAccessReviewInactiveUsersQueryScope} from './deserializeIntoAccessReviewInactiveUsersQueryScope';
import {deserializeIntoAccessReviewQueryScope} from './deserializeIntoAccessReviewQueryScope';
import {deserializeIntoAccessReviewScope} from './deserializeIntoAccessReviewScope';
import {deserializeIntoPrincipalResourceMembershipsScope} from './deserializeIntoPrincipalResourceMembershipsScope';
import {AccessReviewInactiveUsersQueryScope, AccessReviewQueryScope, AccessReviewScope, PrincipalResourceMembershipsScope} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.accessReviewInactiveUsersQueryScope":
                    return deserializeIntoAccessReviewInactiveUsersQueryScope;
                case "#microsoft.graph.accessReviewQueryScope":
                    return deserializeIntoAccessReviewQueryScope;
                case "#microsoft.graph.principalResourceMembershipsScope":
                    return deserializeIntoPrincipalResourceMembershipsScope;
            }
        }
    }
    return deserializeIntoAccessReviewScope;
}
