import {DocumentSetContentCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDocumentSetContentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DocumentSetContentCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DocumentSetContentCollectionResponse();
}
