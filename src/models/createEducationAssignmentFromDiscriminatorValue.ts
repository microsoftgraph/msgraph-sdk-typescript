import { deserializeIntoEducationAssignment } from './deserializeIntoEducationAssignment';
import { type EducationAssignment } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationAssignment;
}
