import {OnenoteResourceCollectionResponse} from './onenoteResourceCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenoteResourceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenoteResourceCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnenoteResourceCollectionResponse();
}
