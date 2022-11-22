import {AppleManagedIdentityProviderCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppleManagedIdentityProviderCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppleManagedIdentityProviderCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppleManagedIdentityProviderCollectionResponse();
}
