import {DocumentSetVersionItemCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDocumentSetVersionItemCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DocumentSetVersionItemCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DocumentSetVersionItemCollectionResponse();
}
