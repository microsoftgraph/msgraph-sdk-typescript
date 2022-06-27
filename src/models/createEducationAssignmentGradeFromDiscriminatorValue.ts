import {EducationAssignmentGradeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationAssignmentGradeFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationAssignmentGradeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationAssignmentGradeImpl();
}
