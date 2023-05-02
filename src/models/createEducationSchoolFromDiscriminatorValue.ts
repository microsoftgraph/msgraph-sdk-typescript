import {deserializeIntoEducationSchool} from './deserializeIntoEducationSchool';
import {EducationSchool} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationSchoolFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationSchool;
}
