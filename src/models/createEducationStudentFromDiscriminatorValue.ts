import {EducationStudentImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationStudentFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationStudentImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationStudentImpl();
}
