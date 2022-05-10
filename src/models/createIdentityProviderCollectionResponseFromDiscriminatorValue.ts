import {IdentityProviderCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityProviderCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityProviderCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentityProviderCollectionResponseImpl();
}
