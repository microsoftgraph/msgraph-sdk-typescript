import { deserializeIntoOnenote } from './deserializeIntoOnenote';
import { type Onenote } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOnenoteFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnenote;
}
