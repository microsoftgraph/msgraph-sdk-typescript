import {EdiscoverySearchCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoverySearchCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EdiscoverySearchCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EdiscoverySearchCollectionResponse();
}
