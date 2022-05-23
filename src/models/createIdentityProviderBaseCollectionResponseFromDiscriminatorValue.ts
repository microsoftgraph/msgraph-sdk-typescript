import {IdentityProviderBaseCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityProviderBaseCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityProviderBaseCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentityProviderBaseCollectionResponseImpl();
}
