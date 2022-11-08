import {UriClickSecurityStateCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUriClickSecurityStateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UriClickSecurityStateCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UriClickSecurityStateCollectionResponse();
}
