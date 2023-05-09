import {deserializeIntoEducationAssignmentPointsGradeType} from './deserializeIntoEducationAssignmentPointsGradeType';
import {EducationAssignmentPointsGradeType} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationAssignmentPointsGradeTypeFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationAssignmentPointsGradeType;
}
