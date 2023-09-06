import { deserializeIntoSensitivityLabelAssignment } from './deserializeIntoSensitivityLabelAssignment';
import { type SensitivityLabelAssignment } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSensitivityLabelAssignmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSensitivityLabelAssignment;
}
