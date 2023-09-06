import { deserializeIntoEducationRoot } from './deserializeIntoEducationRoot';
import { type EducationRoot } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationRootFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationRoot;
}
