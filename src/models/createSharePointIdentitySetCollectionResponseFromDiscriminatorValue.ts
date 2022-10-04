import {SharePointIdentitySetCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharePointIdentitySetCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SharePointIdentitySetCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SharePointIdentitySetCollectionResponse();
}
