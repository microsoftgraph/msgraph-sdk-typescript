import { deserializeIntoDocumentSet } from './deserializeIntoDocumentSet';
import { type DocumentSet } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDocumentSetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDocumentSet;
}
