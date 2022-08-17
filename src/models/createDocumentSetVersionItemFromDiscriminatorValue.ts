import {DocumentSetVersionItem} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDocumentSetVersionItemFromDiscriminatorValue(parseNode: ParseNode | undefined) : DocumentSetVersionItem {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DocumentSetVersionItem();
}
