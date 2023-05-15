import {deserializeIntoEducationClass} from './deserializeIntoEducationClass';
import {EducationClass} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationClassFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationClass;
}
