import {deserializeIntoBuiltInIdentityProvider} from './deserializeIntoBuiltInIdentityProvider';
import {BuiltInIdentityProvider} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBuiltInIdentityProviderFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBuiltInIdentityProvider;
}
