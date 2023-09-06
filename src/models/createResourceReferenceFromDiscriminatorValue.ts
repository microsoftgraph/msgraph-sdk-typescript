import { deserializeIntoResourceReference } from './deserializeIntoResourceReference';
import { type ResourceReference } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createResourceReferenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoResourceReference;
}
