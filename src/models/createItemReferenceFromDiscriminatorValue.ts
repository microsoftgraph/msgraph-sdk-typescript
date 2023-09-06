import { deserializeIntoItemReference } from './deserializeIntoItemReference';
import { type ItemReference } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createItemReferenceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoItemReference;
}
