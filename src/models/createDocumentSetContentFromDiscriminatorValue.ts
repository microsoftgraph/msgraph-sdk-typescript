import {DocumentSetContentImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDocumentSetContentFromDiscriminatorValue(parseNode: ParseNode | undefined) : DocumentSetContentImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DocumentSetContentImpl();
}
