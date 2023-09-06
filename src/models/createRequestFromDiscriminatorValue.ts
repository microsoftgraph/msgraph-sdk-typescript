import { deserializeIntoRequest } from './deserializeIntoRequest';
import { deserializeIntoUnifiedRoleAssignmentScheduleRequest } from './deserializeIntoUnifiedRoleAssignmentScheduleRequest';
import { deserializeIntoUnifiedRoleEligibilityScheduleRequest } from './deserializeIntoUnifiedRoleEligibilityScheduleRequest';
import { deserializeIntoUserConsentRequest } from './deserializeIntoUserConsentRequest';
import { type Request, type UnifiedRoleAssignmentScheduleRequest, type UnifiedRoleEligibilityScheduleRequest, type UserConsentRequest } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRequestFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.unifiedRoleAssignmentScheduleRequest":
                    return deserializeIntoUnifiedRoleAssignmentScheduleRequest;
                case "#microsoft.graph.unifiedRoleEligibilityScheduleRequest":
                    return deserializeIntoUnifiedRoleEligibilityScheduleRequest;
                case "#microsoft.graph.userConsentRequest":
                    return deserializeIntoUserConsentRequest;
            }
        }
    }
    return deserializeIntoRequest;
}
