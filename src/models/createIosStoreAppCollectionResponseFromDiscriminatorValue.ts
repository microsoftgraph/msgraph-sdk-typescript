import {IosStoreAppCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIosStoreAppCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IosStoreAppCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IosStoreAppCollectionResponse();
}
