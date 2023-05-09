import {deserializeIntoDocumentSet} from './deserializeIntoDocumentSet';
import {DocumentSet} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDocumentSetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDocumentSet;
}
