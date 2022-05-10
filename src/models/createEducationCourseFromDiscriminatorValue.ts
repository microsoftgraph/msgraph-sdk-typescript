import {EducationCourseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationCourseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationCourseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationCourseImpl();
}
