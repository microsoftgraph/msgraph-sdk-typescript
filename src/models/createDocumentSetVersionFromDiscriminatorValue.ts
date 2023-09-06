import { deserializeIntoDocumentSetVersion } from './deserializeIntoDocumentSetVersion';
import { type DocumentSetVersion } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDocumentSetVersionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDocumentSetVersion;
}
