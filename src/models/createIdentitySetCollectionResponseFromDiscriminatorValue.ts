import {IdentitySetCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentitySetCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentitySetCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentitySetCollectionResponse();
}
