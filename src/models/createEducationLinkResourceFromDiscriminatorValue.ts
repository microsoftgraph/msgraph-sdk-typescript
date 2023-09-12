import { deserializeIntoEducationLinkResource } from './deserializeIntoEducationLinkResource';
import { type EducationLinkResource } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEducationLinkResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEducationLinkResource;
}
