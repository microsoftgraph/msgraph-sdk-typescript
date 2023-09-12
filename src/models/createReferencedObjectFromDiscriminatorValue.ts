import { deserializeIntoReferencedObject } from './deserializeIntoReferencedObject';
import { type ReferencedObject } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createReferencedObjectFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoReferencedObject;
}
