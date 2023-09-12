import { deserializeIntoIdentityProvider } from './deserializeIntoIdentityProvider';
import { type IdentityProvider } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIdentityProviderFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIdentityProvider;
}
