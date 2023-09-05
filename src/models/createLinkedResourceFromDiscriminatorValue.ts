import { deserializeIntoLinkedResource } from './deserializeIntoLinkedResource';
import { type LinkedResource } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLinkedResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLinkedResource;
}
