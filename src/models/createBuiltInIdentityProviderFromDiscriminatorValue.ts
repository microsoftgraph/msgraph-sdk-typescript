import {BuiltInIdentityProviderImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBuiltInIdentityProviderFromDiscriminatorValue(parseNode: ParseNode | undefined) : BuiltInIdentityProviderImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BuiltInIdentityProviderImpl();
}
