import {EducationAssignmentPointsGradeType} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationAssignmentPointsGradeTypeFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationAssignmentPointsGradeType {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationAssignmentPointsGradeType();
}
