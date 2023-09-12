import { deserializeIntoDocumentSetVersionItem } from './deserializeIntoDocumentSetVersionItem';
import { type DocumentSetVersionItem } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDocumentSetVersionItemFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDocumentSetVersionItem;
}
