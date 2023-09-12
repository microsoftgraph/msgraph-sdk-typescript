import { deserializeIntoEducationAssignmentPointsGradeType } from './deserializeIntoEducationAssignmentPointsGradeType';
import { type EducationAssignmentPointsGradeType } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationAssignmentPointsGradeTypeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationAssignmentPointsGradeType;
}
