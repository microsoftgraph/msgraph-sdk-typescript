import { deserializeIntoMobileAppAssignment } from './deserializeIntoMobileAppAssignment';
import { type MobileAppAssignment } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMobileAppAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMobileAppAssignment;
}
