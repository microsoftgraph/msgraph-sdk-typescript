import { deserializeIntoDocumentSetContent } from './deserializeIntoDocumentSetContent';
import { type DocumentSetContent } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDocumentSetContentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDocumentSetContent;
}
