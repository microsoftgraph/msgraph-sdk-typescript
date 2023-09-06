import { deserializeIntoEducationTeacher } from './deserializeIntoEducationTeacher';
import { type EducationTeacher } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationTeacherFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationTeacher;
}
