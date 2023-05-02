import {deserializeIntoAppleManagedIdentityProvider} from './deserializeIntoAppleManagedIdentityProvider';
import {AppleManagedIdentityProvider} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppleManagedIdentityProviderFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAppleManagedIdentityProvider;
}
