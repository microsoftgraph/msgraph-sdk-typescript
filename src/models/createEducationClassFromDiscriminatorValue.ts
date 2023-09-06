import { deserializeIntoEducationClass } from './deserializeIntoEducationClass';
import { type EducationClass } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationClassFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationClass;
}
