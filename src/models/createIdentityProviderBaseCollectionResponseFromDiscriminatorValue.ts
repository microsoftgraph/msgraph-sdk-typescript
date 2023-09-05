import { deserializeIntoIdentityProviderBaseCollectionResponse } from './deserializeIntoIdentityProviderBaseCollectionResponse';
import { type IdentityProviderBaseCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIdentityProviderBaseCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIdentityProviderBaseCollectionResponse;
}
