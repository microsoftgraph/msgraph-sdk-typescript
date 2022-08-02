import {EducationAssignmentPointsGrade} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationAssignmentPointsGradeFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationAssignmentPointsGrade {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationAssignmentPointsGrade();
}
