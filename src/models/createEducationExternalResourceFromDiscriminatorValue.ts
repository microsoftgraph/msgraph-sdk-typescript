import { deserializeIntoEducationExternalResource } from './deserializeIntoEducationExternalResource';
import { type EducationExternalResource } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationExternalResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationExternalResource;
}
