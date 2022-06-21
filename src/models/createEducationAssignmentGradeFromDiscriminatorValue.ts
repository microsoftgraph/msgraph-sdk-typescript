import {EducationAssignmentGrade} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationAssignmentGradeFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationAssignmentGrade {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationAssignmentGrade();
}
