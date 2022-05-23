import {EducationTeacherImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationTeacherFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationTeacherImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationTeacherImpl();
}
