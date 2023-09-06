import { deserializeIntoBuiltInIdentityProvider } from './deserializeIntoBuiltInIdentityProvider';
import { type BuiltInIdentityProvider } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBuiltInIdentityProviderFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBuiltInIdentityProvider;
}
