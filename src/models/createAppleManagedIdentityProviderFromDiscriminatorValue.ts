import {AppleManagedIdentityProviderImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppleManagedIdentityProviderFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppleManagedIdentityProviderImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppleManagedIdentityProviderImpl();
}
