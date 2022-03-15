import {EducationTeacher} from './educationTeacher';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationTeacherFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationTeacher {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationTeacher();
}
