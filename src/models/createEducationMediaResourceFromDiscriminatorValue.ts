import { deserializeIntoEducationMediaResource } from './deserializeIntoEducationMediaResource';
import { type EducationMediaResource } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationMediaResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationMediaResource;
}
