import {DocumentSetImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDocumentSetFromDiscriminatorValue(parseNode: ParseNode | undefined) : DocumentSetImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DocumentSetImpl();
}
