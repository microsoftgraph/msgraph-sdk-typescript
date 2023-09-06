import { deserializeIntoEducationSchool } from './deserializeIntoEducationSchool';
import { type EducationSchool } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationSchoolFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationSchool;
}
