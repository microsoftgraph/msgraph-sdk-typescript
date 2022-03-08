import {IdentityProviderBaseCollectionResponse} from './identityProviderBaseCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityProviderBaseCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityProviderBaseCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentityProviderBaseCollectionResponse();
}
