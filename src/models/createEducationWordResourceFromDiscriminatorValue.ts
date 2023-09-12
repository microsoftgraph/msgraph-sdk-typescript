import { deserializeIntoEducationWordResource } from './deserializeIntoEducationWordResource';
import { type EducationWordResource } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationWordResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationWordResource;
}
