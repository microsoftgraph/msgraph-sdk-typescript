import { deserializeIntoTermsAndConditionsAssignment } from './deserializeIntoTermsAndConditionsAssignment';
import { type TermsAndConditionsAssignment } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTermsAndConditionsAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTermsAndConditionsAssignment;
}
