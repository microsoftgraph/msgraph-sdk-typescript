import {Request, UnifiedRoleAssignmentScheduleRequest, UnifiedRoleEligibilityScheduleRequest, UserConsentRequest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) : Request {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.unifiedRoleAssignmentScheduleRequest":
                    return new UnifiedRoleAssignmentScheduleRequest();
                case "#microsoft.graph.unifiedRoleEligibilityScheduleRequest":
                    return new UnifiedRoleEligibilityScheduleRequest();
                case "#microsoft.graph.userConsentRequest":
                    return new UserConsentRequest();
            }
        }
    }
    return new Request();
}
