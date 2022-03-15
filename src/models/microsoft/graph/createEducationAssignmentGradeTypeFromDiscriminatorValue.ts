import {EducationAssignmentGradeType} from './educationAssignmentGradeType';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationAssignmentGradeTypeFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationAssignmentGradeType {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationAssignmentGradeType();
}
