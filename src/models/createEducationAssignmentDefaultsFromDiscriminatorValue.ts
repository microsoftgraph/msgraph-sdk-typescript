import { deserializeIntoEducationAssignmentDefaults } from './deserializeIntoEducationAssignmentDefaults';
import { type EducationAssignmentDefaults } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationAssignmentDefaultsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationAssignmentDefaults;
}
