import { deserializeIntoReferenceCreate } from './deserializeIntoReferenceCreate';
import { type ReferenceCreate } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createReferenceCreateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoReferenceCreate;
}
