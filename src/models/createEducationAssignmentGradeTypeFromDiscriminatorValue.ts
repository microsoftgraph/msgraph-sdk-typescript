import {EducationAssignmentGradeTypeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationAssignmentGradeTypeFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationAssignmentGradeTypeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationAssignmentGradeTypeImpl();
}
