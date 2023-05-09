import {deserializeIntoEducationStudent} from './deserializeIntoEducationStudent';
import {EducationStudent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationStudentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationStudent;
}
