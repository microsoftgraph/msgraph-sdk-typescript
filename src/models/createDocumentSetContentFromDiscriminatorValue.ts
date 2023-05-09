import {deserializeIntoDocumentSetContent} from './deserializeIntoDocumentSetContent';
import {DocumentSetContent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDocumentSetContentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDocumentSetContent;
}
