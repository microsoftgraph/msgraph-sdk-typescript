import {IdentityProviderBaseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityProviderBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityProviderBaseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentityProviderBaseImpl();
}
