import { deserializeIntoEducationCourse } from './deserializeIntoEducationCourse';
import { type EducationCourse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationCourseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationCourse;
}
