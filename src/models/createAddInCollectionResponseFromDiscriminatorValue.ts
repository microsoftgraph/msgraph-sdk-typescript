import {AddInCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddInCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddInCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddInCollectionResponse();
}
