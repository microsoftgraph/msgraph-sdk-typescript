import {deserializeIntoEducationTeacher} from './deserializeIntoEducationTeacher';
import {EducationTeacher} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationTeacherFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationTeacher;
}
