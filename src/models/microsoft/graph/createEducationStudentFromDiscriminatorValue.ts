import {EducationStudent} from './educationStudent';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationStudentFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationStudent {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationStudent();
}
