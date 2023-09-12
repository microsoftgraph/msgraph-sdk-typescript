import { deserializeIntoEducationAssignmentPointsGrade } from './deserializeIntoEducationAssignmentPointsGrade';
import { type EducationAssignmentPointsGrade } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationAssignmentPointsGradeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationAssignmentPointsGrade;
}
