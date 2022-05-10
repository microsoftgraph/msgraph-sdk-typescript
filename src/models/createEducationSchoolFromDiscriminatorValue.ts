import {EducationSchoolImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationSchoolFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationSchoolImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationSchoolImpl();
}
